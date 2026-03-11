const url = "https://eldenring.fanapis.com/api/sorceries";

let sorceries = [];

async function fetchSorceries() {
  try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
    sorceries = data.data;
    displaySorceries(sorceries);

    if (!sorceries) {
      console.log("Sorceries not found!");
      return;
    }
   } catch(error){
    console.error("Error fetching sorceries:", error);
  }
}
fetchSorceries();

//fetchSorceries hämtar data for API. Sedan kör displaySorceries som visar datan i html. 
// searchInput är ansvarig för sökfunktionen.

function displaySorceries(sorceriesToDisplay) {
  
    const container = document.getElementById("sorcery_container");
    container.innerHTML = "";
      sorceriesToDisplay.forEach(sorcery => {
        const img = document.createElement("img");
        img.src = sorcery.image;
        img.alt = sorcery.name;

        const name = document.createElement("p");
        name.textContent = "Name: " +sorcery.name;

        const location = document.createElement("p");
        location.textContent = "Location: " + sorcery.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + sorcery.description;

        const makeDiv = document.createElement("div");
        container.appendChild(makeDiv);
        makeDiv.appendChild(img);
        makeDiv.appendChild(name);
        makeDiv.appendChild(location);
        makeDiv.appendChild(description);
});
}
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  // filtrera vapnen som matchar sökningen
  const filtered = bosses.filter(boss =>
    boss.name.toLowerCase().includes(query)
  );

  displayBosses(filtered);
});
