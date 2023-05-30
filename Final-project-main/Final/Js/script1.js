const tbody = document.querySelector('tbody')
const addCompBtn = document.querySelector('#add_comp')
const compTable = document.querySelector('tr')

function  updateTable() {

const computers = JSON.parse(localStorage.getItem('computers'))

    computers.forEach(comp => {
        tbody.innerHTML += `<tr>
                                <td>${comp.id}</td>
                                <td>${comp.mark}</td>
                                <td>
                                    <img class="img" src="${comp.img}" alt="">
                                </td>
                                <td>${comp.price}</td>
                                <td>
                                    <button id='delete${comp.id}' class="btn btn-danger">Delete</button>
                                    <button id='Change${comp.id}' class="btn btn-primary" data-bs-toggle='modal' data-bs-target='#exampleModal1'>Change</button>
                                </td>
                            </tr>`
    });
}

updateTable()


let allInputs
function addComputer() {
    allInputs = document.querySelectorAll('.modal-body input')
    const newComputer = {
        id: computers.length != 0 ? +computers.at(-1).id + 1 : 1,
        mark: allInputs[0].value,
        img: allInputs[1].value,
        price: allInputs[2].value,
    }

    computers.push(newComputer)
    localStorage.setItem('computers', JSON.stringify(computers))
    updateTable()
    for (let input of allInputs) {
        input.value = ''
    }
}

function handleComputer(e) {
    if (e.target.innerText === 'Delete'){
        deleteComputer(e.target.id);
    } else if(e.target.innerText === 'Change'){
        changeComputer(e.target.id);
    }
}

function deleteComputer(id) {
    computers = computers.filter((comp) => comp.id != id);

    localStorage.setItem('computers', JSON.stringify(computers))
    updateTable()
}

function changeComputer(id) {
    let currentComp = computers.find((comp) => comp.id == parseInt(id))

    allInputs[0].value = currentComp.mark
    allInputs[1].value = currentComp.img
    allInputs[2].value = currentComp.price
}

addCompBtn.addEventListener('click', addComputer)
compTable.addEventListener('click', handleComputer)

updateTable()

