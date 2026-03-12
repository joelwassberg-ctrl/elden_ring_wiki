const url = "https://eldenring.fanapis.com/api/npcs";
let npcs = []
async function fetchNpcs() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        npcs = data.data
        displayNpcs(npcs);

    } catch(error) {
        console.error("An ERROR occured", error)
    }
}
fetchNpcs();

function displayNpcs(npcsToDisplay) {
    const container = document.getElementById("npc_container");
    container.innerHTML = "";
    npcsToDisplay.forEach(npc => {
        const img = document.createElement("img");
        img.src = npc.image;
        img.alt = npc.name;

        const name = document.createElement("p");
        name.textContent = "Name: " + npc.name;

        const location = document.createElement("p");
        location.textContent = "Location: " + npc.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + npc.description;

        const makeDiv = document.createElement("div");
        container.appendChild(makeDiv);
        makeDiv.appendChild(img);
        makeDiv.appendChild(name);
        makeDiv.appendChild(location);
        makeDiv.appendChild(description);
    })
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = npcs.filter(npc =>
        npc.name.toLowerCase().includes(query)
    );
    displayNpcs(filtered);
})