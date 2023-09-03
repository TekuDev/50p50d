const sliderContainer = document.querySelector('.slider-container')
const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')
const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')

const slidesLength = rightSlide.querySelectorAll('div').length


let activeSlideIndex = 0

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

downButton.addEventListener('click', () => changeSlide(-1))
upButton.addEventListener('click', () => changeSlide(1))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction > 0) {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction < 0) {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}