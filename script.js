let count = 0
function increment() {
    count += 1
    document.getElementById("student-cnt").innerHTML = count
}

function decrement() {
    count--
    document.getElementById("student-cnt").innerHTML = count
}

function save() {
    let previewsCounts = " - " + count 
    document.getElementById("save").innerText += previewsCounts
    console.log(count)
}
