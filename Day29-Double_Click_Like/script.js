const image = document.querySelector('.loveMe')
const timesCount = document.getElementById('times')

let clickTime = 0
let timesClicked = 0

image.addEventListener('click', (e) => {
    const currTime = new Date().getTime()

    if (clickTime === 0) {

        clickTime = currTime

    } else if (currTime - clickTime < 800) { // Double click
        
        createLike(e)
        clickTime = 0

    } else {
        
        clickTime = currTime

    }
})

const createLike = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    
    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.left = `${xInside}px`
    heart.style.top = `${yInside}px`

    image.appendChild(heart)

    timesCount.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}