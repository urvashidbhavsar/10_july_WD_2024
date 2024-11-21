// onclick
function checkValidate() {
    let user = document.getElementById("username")
    if (user.value == "") {
        document.getElementById("msg1").innerHTML = "Enter name"
        user.classList.add("error")
    }
    return false
}

// onchange / onkeyup = check pattern
function checkNamePtn() {
    let user = document.getElementById("username")
    let ptn = /^[a-zA-Z\s]*$/
    if (!ptn.test(user.value)) {
        document.getElementById("msg1").innerHTML = "Invalid name !!!!"
    } else if (user.value.length < 5) {
        document.getElementById("msg1").innerHTML = "Enter minimum 5 letters"
    } else {
        document.getElementById("msg1").innerHTML = null
    }
    return false
}

// for string case conversion
let uname = document.querySelectorAll(".upprchange")
uname.forEach(e => {
    e.addEventListener("input", () => {
        e.value = e.value.toUpperCase()
    })
});

// for input 
function checkptn() {
    let user = document.getElementById("username")
    user.value = user.value.replace(/[\d.@!#$%^&*]/, '')
}