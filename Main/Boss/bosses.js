const url = "https://eldenring.fanapis.com/api/bosses";

async function fetchIncantations() {
  try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
    bosses = data.data;
    displayBosses(bosses);

    if (!bosses) {
      console.log("Bosses not found!");
      return;
    }
   } catch(error){
    console.error("Error fetching bosses:", error);
  }
}
fetchIncantations();

//fetchBosses hämtar data for API. Sedan kör displayBosses som visar datan i html. 
// searchInput är ansvarig för sökfunktionen.

function displayBosses(bossesToDisplay) {
  
    const container = document.getElementById("boss_container");
    container.innerHTML = "";
      bossesToDisplay.forEach(boss => {
        
        const img = document.createElement("img");
        img.src = boss.image ? boss.image : "/images/Logo.svg";
        img.alt = boss.name;

        const name = document.createElement("p");
        name.textContent = "Name: " +boss.name;

        const location = document.createElement("p");
        location.textContent = "Location: " + boss.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + boss.description;

        const drops = document.createElement("p");
        drops.textContent = "Drops: " + boss.drops;

        const makeDiv = document.createElement("div");
        container.appendChild(makeDiv);
        makeDiv.appendChild(img);
        makeDiv.appendChild(name);
        makeDiv.appendChild(location);
        makeDiv.appendChild(description);
        makeDiv.appendChild(drops);
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
