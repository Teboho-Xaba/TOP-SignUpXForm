const password = form.pswd.value
const confirmPassword = form.same-pswd.value

function checkPassword (form) {
    if (!password != confirmPassword ) {
    alert("Passwords do not match")
    return false
    } 
    else{
        alert("Passwords Match")
        return true
    }
}