const UsernameInput = document.querySelector('#Username')
const PasswordInput = document.querySelector('#Password')
const allInputs = document.querySelectorAll('input')

let users = JSON.parse(localStorage.getItem('Users'))

if(!users){
    users = [
       {
        user: "u1",
        password: "p1",
        computers: [
            {
                id: 1,
                img: "",
                mark: "Acer",
                memory: "12",
                memorytip: "12",
                oc: "Windows",
                price: "100",
                processororcpu: "12",
                ram: "12",
                videocard: "123",
                videocardgb: "123",
            },
            {
                id: 2,
                img: "",
                mark: "Acer",
                memory: "12",
                memorytip: "12",
                oc: "Windows",
                price: "100",
                processororcpu: "12",
                ram: "12",
                videocard: "123",
                videocardgb: "123",
            },
            {
                id: 3,
                img: "",
                mark: "Dell",
                memory: "12",
                memorytip: "12",
                oc: "Windows",
                price: "100",
                processororcpu: "12",
                ram: "12",
                videocard: "123",
                videocardgb: "123",
            },
            {
                id: 4,
                img: "",
                mark: "HP",
                memory: "12",
                memorytip: "12",
                oc: "Windows",
                price: "100",
                processororcpu: "12",
                ram: "12",
                videocard: "123",
                videocardgb: "123",
            },
            {
                id: 5,
                img: "",
                mark: "Lenovo",
                memory: "12",
                memorytip: "12",
                oc: "Windows",
                price: "100",
                processororcpu: "12",
                ram: "12",
                videocard: "123",
                videocardgb: "123",
            },
        ],
    },
    ];
    localStorage.setItem("Users", JSON.stringify(users))
}

function isFullInput() {
    return [...allInputs].every(input => input.value !== '')
}

$('input').on('input', function () {
    $('button').prop('disabled', !isFullInput());
})

$('button').click(function (e) {
    e.preventDefault();
    const userIsEnabled = users.some(item => item.user === allInputs[0].value && item.password == allInputs[1].value);

    if(userIsEnabled) {
        localStorage.setItem('currentUser', allInputs[0].value); 
        location.href = '../Html/index.html'
    }
})

