const url = "https://eldenring.fanapis.com/api/talismans"

async function fetchTalismans() {
  try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
    talismans = data.data;
    displayTalismans(talismans);

    if (!talismans) {
      console.log("Talismans not found!");
      return;
    }
   } catch(error){
    console.error("Error fetching talismans:", error);
  }
}
fetchTalismans();

//fetchTalismans hämtar data for API. Sedan kör displayTalismans som visar datan i html. 
// searchInput är ansvarig för sökfunktionen.

function displayTalismans(talismansToDisplay) {
  
    const container = document.getElementById("talisman_container");
    container.innerHTML = "";
      talismansToDisplay.forEach(talisman => {
        
        const img = document.createElement("img");
        img.src = talisman.image ? talisman.image : "/images/Logo.svg";
        img.alt = talisman.name;

        const name = document.createElement("p");
        name.textContent = "Name: " + talisman.name;

        const location = document.createElement("p");
        location.textContent = "Location: " + talisman.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + talisman.description;

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
  const filtered = talismans.filter(talisman =>
    talisman.name.toLowerCase().includes(query)
  );

  displayTalismans(filtered);
});
