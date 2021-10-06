let count = 0
let incrimentEL = document.getElementById("Count")
let decrimentEL = document.getElementById("Count")
let SaveEL = document.getElementById("save")
function increment() {
    count += 1
    incrimentEL.textContent = count
}

function decrement() {
    count -= 1
    decrimentEL.textContent = count
}

function save() {
    let previewsCounts = " ( " +  count + " ) " 
    SaveEL.textContent += previewsCounts
    incrimentEL.textContent = 0
    count = 0 
}
