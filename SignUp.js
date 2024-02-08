function signUp () {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    localStorage.setItem(username,password)
    window.location.replace('./signIn.html')
}