const background = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', (e) => {
    const value = e.target.value
    const len = value.length

    const hasLowercase = /[a-z]/.test(value)
    const hasUppercase = /[A-Z]/.test(value)
    const hasNumbers = /[\d]/.test(value)
    const hasSymbols = /[!@#$%^&*(){}[\]=<>/,.:;\-_]/.test(value)

    const multiplayer = hasLowercase + hasUppercase + hasNumbers + hasSymbols

    const blurValue = 50 - (len * multiplayer)

    background.style.filter = `blur(${blurValue >= 0 ? blurValue : 0}px)`
})
