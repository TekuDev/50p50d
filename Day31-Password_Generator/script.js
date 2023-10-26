const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('passLength')
const lowercaseEl = document.getElementById('passLowercase')
const uppercaseEl = document.getElementById('passUppercase')
const numbersEl = document.getElementById('passNumbers')
const symbolsEl = document.getElementById('passSymbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove
    alert('Password copied to the clipboard')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLowercase = lowercaseEl.checked
    const hasUppercase = uppercaseEl.checked
    const hasNumbers = numbersEl.checked
    const hasSymbols = symbolsEl.checked

    resultEl.innerText = generatePassword(length, hasLowercase, hasUppercase, hasNumbers, hasSymbols)
})

function generatePassword(len, hasLower, hasUpper, hasNumbers, hasSymbols) {
    let generatedPassword = ''
    const typesCount = hasLower + hasUpper + hasNumbers + hasSymbols
    const typesArr = [{lower: hasLower}, {upper: hasUpper}, {number: hasNumbers}, {symbol: hasSymbols}].filter(item => Object.values(item)[0])
    
    if (typesCount === 0) return ''

    for (let i = 0; i < len; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    return generatedPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.:;-_'
    return symbols[Math.floor(Math.random() * symbols.length)]
}