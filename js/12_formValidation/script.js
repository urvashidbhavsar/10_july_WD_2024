// onclick
function checkValidate() {
    let user = document.getElementById("username")
    let email = document.getElementById("email")
    let upload = document.getElementById("file")
    if (user.value == "") {
        document.getElementById("msg1").innerHTML = "Enter name"
        user.classList.add("error")
    }
    if (email.value == "") {
        document.getElementById("msg2").innerHTML = "Enter Email"
        email.classList.add("error");
    }
    if(upload.value == ""){
        document.getElementById("msg9").innerHTML = "Select file"
    }
    return false
}
function checkvalidation() {
    let m = document.getElementById("male");
    let f = document.getElementById("female");
    let c1 = document.getElementById("c1"), c2 = document.getElementById("c2"),
        c3 = document.getElementById("c3");
    let select = document.getElementById("cityselect");
    if (m.checked == false && f.checked == false) {
        document.getElementById("msg6").innerHTML = "Select Gender"
    } else if (c1.checked == false && c2.checked == false && c3.checked == false) {
        document.getElementById("msg7").innerHTML = "Select Value!!!"
    } else if (select.value == "-1") {
        document.getElementById("msg8").innerHTML = "Select City!!!"
    } else {
        document.getElementById("msg6").innerHTML = null
        document.getElementById("msg7").innerHTML = null
        document.getElementById("msg8").innerHTML = null
    }
    return false
}


// onchange / onkeyup = check pattern
function checkNamePtn() {
    let user = document.getElementById("username")
    let ptn = /^[a-zA-Z\s]*$/
    if (!ptn.test(user.value)) {
        document.getElementById("msg1").innerHTML = "Invalid name !!!!"
        user.classList.add("error")
    } else if (user.value.length < 5) {
        document.getElementById("msg1").innerHTML = "Enter minimum 5 letters"
        user.classList.add("error")
    } else {
        document.getElementById("msg1").innerHTML = null
        user.classList.remove("error")
    }
    return false
}
// email
function checkEmail() {
    let mail = document.getElementById("email")
    // let ptn = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let ptn = /^[a-zA-Z0-9\.]*@[a-zA-Z]*(\.[a-z]{2,3})+$/
    if (!ptn.test(mail.value)) {
        document.getElementById("msg2").innerHTML = "Enter proper Email"
        mail.classList.add("error")
    } else {
        document.getElementById("msg2").innerHTML = null
        mail.classList.remove("error")
    }
}
// number
function checknumber() {
    let num = document.getElementById("number")
    let ptn = /^[0-9]*$/, start = /^[6-9]/
    if (!ptn.test(num.value) || !start.test(num.value)) {
        document.getElementById("msg3").innerHTML = "Invalid number"
        num.classList.add("error")
    } else if (num.value.length < 10 && num.value.length > 10) {
        document.getElementById("msg3").innerHTML = "Enter 10 digit"
        num.classList.add("error")
    } else {
        document.getElementById("msg3").innerHTML = null
        num.classList.remove("error")
    }
}
// password
function checkpassword() {
    let pass = document.getElementById("pass")
    let ptn = /^[A-Z]+[A-Za-z0-9]+[\.$@#&]+[A-Za-z0-9]+$/
    if (ptn.test(pass.value)) {
        document.getElementById("msg4").innerHTML = null
        pass.classList.remove("error")
    } else {
        document.getElementById("msg4").innerHTML = "password has one uppercase, lowercase, special letters($ @ # & .) and digits."
        pass.classList.add("error")
    }
}
// confirm
function recheck() {
    let cpass = document.getElementById("cpass")
    let pass = document.getElementById("pass")
    if (cpass.value != pass.value) {
        document.getElementById("msg5").innerHTML = "Password and confirm password does not match!!!"
    } else {
        document.getElementById("msg5").innerHTML = null
    }
}
// show password
function show() {
    let cpass = document.getElementById("cpass")
    let pass = document.getElementById("pass")
    if (pass.type == "password" && cpass.type == "password") {
        pass.type = "text"
        cpass.type = "text"
    } else {
        pass.type = "password"
        cpass.type = "password"
    }
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