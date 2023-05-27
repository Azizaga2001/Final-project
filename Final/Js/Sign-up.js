const user = document.getElementById('Username').value
const password = document.getElementById('Password').value
const SignupBtn = document.querySelector('#SignupBtn')
const allInputs = document.querySelectorAll('input')

function isFullInput() {
    return [...allInputs].every(input => input.value !== '')
}

$('input').on('input', function () {
    $('button').prop('disabled', !isFullInput());
})

$('#SignupBtn').click(function () {
    const users = JSON.parse(localStorage.getItem('Users')) || [];

    users.push({
        user: user,
        password: password
    });
    localStorage.setItem('Users', JSON.stringify(users));
})

