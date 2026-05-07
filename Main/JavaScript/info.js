const params = new URLSearchParams(window.location.search);

const type = params.get("type");
const id = params.get("id");
console.log("TYPE: " + type)
header = document.getElementById("header")
title = document.getElementById("title")

header.textContent = `Elden Ring ${type}`
title.textContent = `${type} page`

let api = ""
if (type === "incantation"){
    api = "https://eldenring.fanapis.com/api/incantations"
}
if (type === "boss"){
    api = "https://eldenring.fanapis.com/api/bosses"
}
if (type === "sorcery"){
    api = "https://eldenring.fanapis.com/api/sorceries"
}
if (type === "talisman"){
    api = "https://eldenring.fanapis.com/api/talismans"
}
if (type === "weapon"){
    api = "https://eldenring.fanapis.com/api/weapons"
}
if (type === "armor"){
    api = "https://eldenring.fanapis.com/api/armors"
}
if (type === "ash"){
    api = "https://eldenring.fanapis.com/api/ashes"
}
if (type === "item"){
    api = "https://eldenring.fanapis.com/api/items"
}
if (type === "npc"){
    api = "https://eldenring.fanapis.com/api/npcs"
}
if (type === "location"){
    api = "https://eldenring.fanapis.com/api/locations"
}
if (type === "creatures"){
    api = "https://eldenring.fanapis.com/api/creatures"
}
if (type === "spirits"){
    api = "https://eldenring.fanapis.com/api/spirits"
}
if (type === "classes"){
    api = "https://eldenring.fanapis.com/api/classes"
}
fetchApi(api);