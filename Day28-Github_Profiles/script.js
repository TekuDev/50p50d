const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(userName) {
    try {
        const { data } = await axios(APIURL + userName)

        createUserCard(data)
        getRepos(userName)

    } catch(err) {
        if (err.response.status == 404) {
            createErrorCard('User not found')
        }
    }
}

async function getRepos(userName) {
    try {
        const { data } = await axios(APIURL + userName + '/repos?sort=created')

        addReposToCard(data)

    } catch(err) {
        if (err.response.status == 404) {
            createErrorCard('Error fetching repos')
        }
    }
}

function createErrorCard(errMessage) {
    const cardHTML = `
        <div class="card">
            <h1>${errMessage}</h1>
        </div>
    `
}

function createUserCard(userData) {
    const cardHTML = `
    <div class="card">
        <div>
        <img src="${userData.avatar_url}" alt="${userData.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${userData.name}</h2>
            <p>${userData.bio}</p>
            
            <ul>
                <li>${userData.followers} <strong>Followers</strong></li>
                <li>${userData.following} <strong>Following</strong></li>
                <li>${userData.public_repos} <strong>Repos</strong></li>
            </ul>
            
            <div id="repos"></div>
        </div>
    </div>
    `
    
    main.innerHTML = cardHTML
}

function addReposToCard(reposData) {
    const reposEl = document.getElementById('repos')

    reposData.slice(0, 10).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const userName = search.value

    if (userName) {
        getUser(userName)

        search.value = ''
    }
})