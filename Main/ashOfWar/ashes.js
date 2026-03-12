const url = "https://eldenring.fanapis.com/api/ashes";


async function fetchAshes() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        ashes = data.data;
        displayAshes(ashes);
    } catch(error) {
        console.error("An ERROR occured", error);
    }
}
fetchAshes();

function displayAshes(ashesToDisplay) {
    const container = document.getElementById("ash_container");
    container.innerHTML = "";
    ashesToDisplay.forEach(ash => {
        const img = document.createElement("img");
        img.src = ash.image ? ash.image : "/images/Logo.svg";
        img.alt = ash.name;

        const name = document.createElement("p");
        name.textContent = "Name: " + ash.name;

        const description = document.createElement("p");
        description.textContent = "Description: " + ash.description;

        const makeDiv = document.createElement("div");
        container.appendChild(makeDiv);
        makeDiv.appendChild(img);
        makeDiv.appendChild(name);
        makeDiv.appendChild(description);
    })
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    
    const filtered = ashes.filter(ash =>
        ash.name.toLowerCase().includes(query)
    );
    displayAshes(filtered)
});
