const screens = document.querySelectorAll('.screen')
const colorsBtn = document.querySelectorAll('.choose-color-btn')
const startBtn = document.getElementById('start-btn')
const gameContainer = document.querySelector('.game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const msgStartEl = document.getElementById('msg-start')
const msgEndEl = document.getElementById('msg-end')

let seconds = 0
let score = 0
let selectedColor = ""
const colors = ['black', 'red', 'green', 'blue', 'purple']

startBtn.addEventListener('click', () => screens[0].classList.add('up'))

colorsBtn.forEach(colorBtn => {
    colorBtn.addEventListener('click', () => {
        const color = colorBtn.querySelector('p').textContent.toLowerCase()
        selectedColor = color
        screens[1].classList.add('up')
        setTimeout(createSquare, 1000)
        startGame()
    })
})

function startGame() {
    screens[2].style.backgroundColor = selectedColor
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s

    timeEl.innerHTML = `Time: ${m}:${s}`
    ++seconds
}

function createSquare() {
    const square = document.createElement('div')
    square.classList.add('square')
    const { x, y } = getRandomLocation()
    square.style.top = `${y}px`
    square.style.left = `${x}px`

    const selectedColorIdx = colors.indexOf(selectedColor)
    let randIdx = Math.floor(Math.random() * 4)
    while (randIdx === selectedColorIdx) {
        randIdx = Math.floor(Math.random() * 4)
    }
    square.style.backgroundColor = colors[randIdx]

    square.addEventListener('click', cleanSquare)

    gameContainer.appendChild(square)
}

function getRandomLocation() {
    const w = window.innerWidth
    const h = window.innerHeight
    const x = Math.random() * (w - 200) + 100
    const y = Math.random() * (h - 200) + 100
    return { x, y}
}

function cleanSquare() {
    increaseScore()
    this.classList.add('clean')
    setTimeout(() => this.remove(), 2000)
    addSquares()
}

function addSquares() {
    setTimeout(createSquare, 1000)
    setTimeout(createSquare, 1500)
}

function increaseScore() {
    ++score

    if (score > 14) {
        msgStartEl.classList.remove('visible')
        msgEndEl.classList.add('visible')
    }

    scoreEl.innerHTML = `Score: ${score}`
}