const btn = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'One Fail',
    'Two Fails',
    'Three Fails',
    'Four Fails',
    'Alert! 5 errors detected'
]

const types = ['info', 'success', 'error']

btn.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMsg()

    toasts.appendChild(notif)

    setTimeout(() =>  {
        notif.remove()
    }, 2500)
}

function getRandomMsg() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}