var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")
var arrUser ;

if (localStorage.getItem("users")) {
    arrUser = JSON.parse(localStorage.getItem("users"));
} else {
    arrUser = [];
}

function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

function isEmailExist() {
    for (var i = 0; i < arrUser.length; i++) {
        if (arrUser[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

function register() {
    var users = {
        'fName':signupName.value,
        'email':signupEmail.value,
        'password':signupPassword.value,
    }
    if (arrUser.length == 0) {
        arrUser.push(users);
        localStorage.setItem("users", JSON.stringify(arrUser))
        document.getElementById('test').innerHTML = '<span class="text-success m-3">Success</span>'
        console.log(arrUser);
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('test').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    }else {
        arrUser.push(signUp)
        localStorage.setItem('users', JSON.stringify(arrUser))
        document.getElementById('test').innerHTML = '<span class="text-success m-3">Success</span>'
        console.log(arrUser);
    }
}
