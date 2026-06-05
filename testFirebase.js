function onloadFunc() {
    // nach pfad "name"
    loadData("/name");
    // kompleter json
    loadData("");
    //postData("/name", {"lastName": "Cosgun"});
    //postData("/name", {"city": "München"});
    //postData("/name/type", {"firstName": "Melek"});
    //deleteData("/-human");
    deleteData("/-Ou9-zdCEeFb4A1oF4CD");
    putData("/name/type", {"country": "Türkei"});
    putData("/name/firstNameArray", {0: "Kadir Kahraman", 1: "Melek", 2: "Mihrima", 3: "Sertan"});
}

// data download
async function loadData(path="") {
    let response =  await fetch(FIREBASE_URL + path + ".json");
    let responseToJson = await response.json();
    console.log(responseToJson);
}

// data updated a one line database
async function postData(path="", data={}) {
    let response =  await fetch(FIREBASE_URL + path + ".json", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}

// data deleted
async function deleteData(path="") {
    let response =  await fetch(FIREBASE_URL + path + ".json", {
        method: "DELETE",
    });
    return responseToJson = await response.json();
}

// data updates or overwrites a complet path from server
async function putData(path="", data={}) {
    let response =  await fetch(FIREBASE_URL + path + ".json", {
        method: "PUT",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}