let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
    count++
    countEl.textContent = count
}
function reset() {
    count = 0
    countEl.textContent = count
}