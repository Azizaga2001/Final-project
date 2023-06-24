const user = document.getElementById('Username')
const password = document.getElementById('Password')
const SignupBtn = document.querySelector('#SignupBtn')
const allInputs = document.querySelectorAll('input')
const alertMes = document.querySelector('.alert')

function isFullInput() {
    return [...allInputs].every(input => input.value !== '')
}

$('input').on('input', function () {
    $('button').prop('disabled', !isFullInput());
})

$('#SignupBtn').click(function (e) {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('Users')) || [];

    users.push({
        user: user.value,
        password: password.value,
        computers: []
    });
    localStorage.setItem('Users', JSON.stringify(users));
    alertMes.style.display = 'block'
    setTimeout(() => {
        alertMes.style.display = 'none'
    }, 2000)

})

