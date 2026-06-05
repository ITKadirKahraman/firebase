let elf = [];

async function loadFuncEleven() {
    //putDataEleven("/startelf/torwart", {"torwart": "Altay Bayindir"})
    //putDataEleven("/startelf/abwehr", {"linksaußen": "Ozan Kabak", "mittelinks": "Merih Demiral", "mitterechts": "Çağlar Söyüncü", "rechts": "Zeki Çelik"});
    //putDataEleven("/startelf/mittelfeld", {"links": "Hakan Çalhanoğlu", "mittelinks": "Kaan Ayhan", "mitterechts": "Arda Güler", "rechts": "Can Uzun"});
    putDataEleven("/startelf/stürmer", {"links": "Kerem Aktürkoğlu", "rechts": "Yunus Akgün"})
    deleteDataEleven("/name")
}

async function loadDataEleven(path) {
    
}

async function putDataEleven(path="", data={}) {
    let response = await fetch(STARTELF_URL + path + ".json", {
        method: "PUT",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });
    return responseToJson = await response.json();
}

async function getAllUserEleven(path="") {
    let response = await fetch(STARTELF_URL, path + ".json");
    return responseToJson = await response.json();
}

async function addEditGoalkeeper(id=1, user="Altay Bayindir"){
    putData(`startelf/torwart/${id}`, user);
}

async function addEditDefens(id=2, user="Caglar Söyüncü") {
    putData(`startelf/abwehr/${id}`, user);
}

async function addEditMidfield(id=6, user="Hakan Calhanoğlu") {
    putData(`startelf/midfield/${id}`, user);
}

async function addEditForward(id=11, user="Can Uzun") {
    putData(`startelf/forward/${id}`, user);
}

async function deleteDataEleven(path="") {
    let response = await fetch(STARTELF_URL + path + ".json", {
        method: "DELETE",
    });
    return responseToJson = await response.json();
}