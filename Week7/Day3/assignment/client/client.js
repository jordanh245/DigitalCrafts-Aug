
// CREATE
const submitButton = document.querySelector(".submitButton")
const createTodos = async () => {
    const url = "http://localhost:3018/createTodo"
    const choreName = document.querySelector(".inputTask").value;
    
    const data = {
        choreName,
    };
   

    const createData = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
    })
}
submitButton.addEventListener("click", () => createTodos())  

// READ
const mainContainer = document.querySelector('.mainContainer')
const viewButton = document.querySelector('.viewButton')
const readTodos = async () => {
    const url = "http://localhost:3018/getChores"
    const todoList = await fetch (url, {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
             },
    });
    console.log(todoList)
    
    const viewTask = document.querySelector('.choreInfo')
    viewTask.innerHTML= "";
    const json = await todoList.json();
    for(chore of json){
        const choreList = chore.choreName
        const id = chore.id;
        const idNumb = document.createElement('p');
        const itemName = document.createElement('p');
        idNumb.innerHTML = id;
        itemName.innerHTML = choreList;
       viewTask.append(itemName, idNumb)
    }

}
viewButton.addEventListener("click", () => readTodos())


// UPDATE


const updateButton = document.querySelector('.updateButton')
const updateChores = async () => {
    const choreId  = document.querySelector('.idNumber').value
    const url = `http://localhost:3018/updateChores/${choreId}`
    
    const choreUpdate  = document.querySelector('.updateName').value

    const data = {
        choreName: choreUpdate
    }

    const createData = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
    })    
}
updateButton.addEventListener("click", () => updateChores())


const deleteButton = document.querySelector('.deleteButton')
const deleteChore = async () => {
    const choreIdNumber = document.querySelector(".choreId").value
    const url = `http://localhost:3018/deleteChores/${choreIdNumber}`

    const destoryData = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
         },
        
    })        
}

deleteButton.addEventListener("click", () => deleteChore())
