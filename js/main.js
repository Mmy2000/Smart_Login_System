var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")
var signinEmail = document.getElementById("signinEmail")
var signinPassword = document.getElementById("signinPassword")
var arrUser ;

var pathparts = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}
console.log(baseURL);

// to say welcome in home page
var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}


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
    if (isEmpty() == false) {
        document.getElementById('test').innerHTML = '<span class="text-danger m-3">All fields is required</span>'
        return false
    }
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
        arrUser.push(users)
        localStorage.setItem('users', JSON.stringify(arrUser))
        document.getElementById('test').innerHTML = '<span class="text-success m-3">Success</span>'
        console.log(arrUser);
    }
}

function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}
function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('test2').innerHTML = '<span class="text-danger m-3">All fields is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (let i = 0; i < arrUser.length; i++) {
        if (arrUser[i].email.toLowerCase() == email.toLowerCase() && arrUser[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', arrUser[i].name)
            if (baseURL == '/') {
                location.replace('https://' + location.hostname + '/home.html')

            } else {
                location.replace(baseURL + '/home.html')

            }
        }else{
            document.getElementById('test2').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
        
    }
}