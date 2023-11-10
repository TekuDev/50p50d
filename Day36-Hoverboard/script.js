const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#fff', '#3498db', '#e67e22', '#2ecc71', '#1dfaf1', '#ffd14f', '#ebcdfc']
const SQUARES = 500

for(let i = 0; i < SQUARES; ++i) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => rmColor(square))

    container.appendChild(square)
}

function setColor(elem) {
    const color = colors[Math.floor(Math.random() * colors.length)]

    elem.style.background = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function rmColor(elem) {
    elem.style.background = '#1d1d1d'
    elem.style.boxShadow = `0 0 2px #000`
}