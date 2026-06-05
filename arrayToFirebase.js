let users = [];

async function onloadFunction() {
    let userResponse = await getAllUser("/name/firstNameArray");
    let userKayArray = Object.keys(userResponse);
    let userEntriesArray = Object.entries(userResponse);
    console.log(userResponse);
    console.log(userKayArray);
    console.log(userEntriesArray);
    
    for (let index = 0; index < userKayArray.length; index++){
        users.push(
            {
                id : userKayArray[index],
                user : userResponse[userKayArray[index]]
            }
        )
    }
    
    await addEditSingleUser(users[2].id, {name: "Köksal"});
    console.log(users);
    
    //putData("/fullName", {0: "Kadir Kahraman", 1: "Melek Cosgun", 2: "Mihrima Nur Kahraman", 3: "Sertan Cosgun"});
    //putData("/fullName/44", {"name": "Kevin"});
    
}

async function loadData(path="") {
    let response = await fetch(REMOTESTORAGE_URL + path + ".json");
    return responseToJson = await response.json();
}

async function deleteData(path="") {
    let response = await fetch(REMOTESTORAGE_URL + path + ".json", {
        method: "DELETE",
    });
    return responseToJson = await response.json();
}

async function putData(path="", data={}) {
    let response =  await fetch(REMOTESTORAGE_URL + path + ".json", {
        method: "PUT",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}

async function addEditSingleUser(id=22, user={name: 'Kevin'}) {
    putData(`namen/${id}`, user);
}

async function getAllUser(path) {
    let response = await fetch(REMOTESTORAGE_URL + path + ".json");
    return responseToJson = await response.json();
}