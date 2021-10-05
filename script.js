let count = 0
function increment() {
    count = count + 1
    document.getElementById("student-cnt").innerHTML = count
}

function decrement() {
    count = count - 1
    document.getElementById("student-cnt").innerHTML = count
}

function save() {
    console.log(count)
}
