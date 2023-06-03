const currentUsers = localStorage.getItem('currentUser')

$('.current_users').text(function (i, prevText) {
    return prevText + currentUsers
})

if (currentUsers) {
    $('.log-in-btn').css('display', 'none');
} else {
    $('.log-in-btn').css('display', 'block');
}

$('#exitAccount').click(function () {
    $('.current_users').text(function (i, prevText) {
        return 'Имя пользователя: '
    })
})

if (currentUsers) {
    $('.compcreate').css('display', 'block');
} else {
    $('.compcreate').css('display', 'none');
}