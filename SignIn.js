var data = Math.random().toString(36).slice(2, 10)

function refreshCaptcha() {
    data = Math.random().toString(36).slice(2, 10)
    captcha()
}
function captcha() {
    let letters = ''
    data.split('').map((item) => letters = letters + `<div style='margin-right:10px; transform:rotate(${(Math.random() > 0.5 ? '' : '-') + Math.random() * 45}deg); transform:rotate(${(Math.random() > 0.5 ? '' : '-') + Math.random() * 45}deg);' >${item}</div>`)
    window.document.getElementById('preview').innerHTML = letters
}

function login() {
    let captcha = document.getElementById('captcha-form').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let isLoggedIn = localStorage.getItem(username)

    if (captcha === data) {
        if (isLoggedIn !== password) {
            alert("username or password are incorrect")
            captcha = ''
            password = ''
            username = ''
            refreshCaptcha()
        } else {
            alert("Login successful!")
            window.location.replace("./home.html");
        }
    } else {
        alert("Captcha didn't match!")
        captcha = ''
        password = ''
        username = ''
    }
}