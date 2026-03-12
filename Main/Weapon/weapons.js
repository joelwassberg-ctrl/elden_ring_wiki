const url = "https://eldenring.fanapis.com/api/weapons";

async function fetchWeapons() {
  try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
    weapons = data.data;
    displayWeapons(weapons);

    if (!weapons) {
      console.log("Weapons not found!");
      return;
    }
   } catch(error){
    console.error("Error fetching weapons:", error);
  }
}
fetchWeapons();

//fetchWeapons hämtar data for API. Sedan kör displayWeapons som visar datan i html. 
// searchInput är ansvarig för sökfunktionen.
function displayWeapons(weaponsToDisplay) {
  
    const container = document.getElementById("weapon_container");
    container.innerHTML = "";
      weaponsToDisplay.forEach(weapon => {
        
        const img = document.createElement("img");
        img.src = weapon.image ? weapon.image : "/images/Logo.svg";
        img.alt = weapon.name;

        const name = document.createElement("p");
        name.textContent = "Name: " + weapon.name;

        const location = document.createElement("p");
        location.textContent = "Location: " + weapon.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + weapon.description;

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
  const filtered = weapons.filter(weapon =>
    weapon.name.toLowerCase().includes(query)
  );

  displayWeapons(filtered);
});
