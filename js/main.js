var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")
var arrUser ;

if (localStorage.getItem("users")) {
    arrUser = JSON.parse(localStorage.getItem("users"));
} else {
    arrUser = [];
}

function register() {
    var users = {
        'fName':signupName.value,
        'email':signupEmail.value,
        'password':signupPassword.value,
    }
    arrUser.push(users);
    localStorage.setItem("users", JSON.stringify(arrUser))
    console.log(arrUser);
    clear();
}
function clear() {
    signupName.value = ""
    signupEmail.value = ""
    signupPassword.value = ""
}