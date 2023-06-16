const tagsList = document.getElementById('tags')
const textarea = document.getElementById('textarea')


function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsList.innerHTML = ''

    tags.forEach(tag => {
        const newTag = document.createElement('span')
        newTag.classList.add('tag')
        newTag.innerHTML = tag
        tagsList.appendChild(newTag)
    })

}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
            textarea.disabled = false
            textarea.focus()
        }, 100)
    }, times * 100)
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}


textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        e.target.disabled = true
        randomSelect()
        e.target.value = e.target.value.replace("\n", "")
    }
})