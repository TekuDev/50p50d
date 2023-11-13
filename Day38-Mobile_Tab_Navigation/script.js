const images = document.querySelectorAll('.content')
const buttons = document.querySelectorAll('nav ul li')

buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () =>  {
        hideAll(idx)

        btn.classList.add('active')
        images[idx].classList.add('show')
    })
})

function hideAll() {
    images.forEach(img => img.classList.remove('show'))
    buttons.forEach(btn => btn.classList.remove('active'))
}