// Objects
const canvas = document.getElementById('canvas')
const decreaseBtn = document.getElementById('decrease')
const increaseBtn = document.getElementById('increase')
const sizeLabel = document.getElementById('size')
const colorSelector = document.getElementById('colorSelector')
const clearBtn = document.getElementById('clear')

// Variables
const ctx = canvas.getContext('2d')

let size = 10
let color = 'black'
let x
let y
let isPressed = false

// Functions
function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}


// Event Listeners
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    drawCircle(x, y)
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

decreaseBtn.addEventListener('click', () => {
    size - 5 >= 5 ? size -= 5 : size = 5
    sizeLabel.innerText = size
})

increaseBtn.addEventListener('click', () => {
    size + 5 <= 50 ? size += 5 : size = 50
    sizeLabel.innerText = size
})

colorSelector.addEventListener('input', (e) => color = e.target.value)

clearBtn.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height)) 

