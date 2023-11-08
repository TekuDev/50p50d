const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(toggleSelected) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === toggleSelected) {
            fast.checked = false
        } else if (cheap === toggleSelected) {
            good.checked = false
        } else {  // fast === toggleSelected
            cheap.checked = false
        }
    }
}