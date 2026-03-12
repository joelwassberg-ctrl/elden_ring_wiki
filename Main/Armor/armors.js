const url = "https://eldenring.fanapis.com/api/armors";

async function fetchArmors() {
  try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
    armors = data.data;
    displayArmors(armors);

    if (!armors) {
      console.log("Armors not found!");
      return;
    }
   } catch(error){
    console.error("Error fetching armors:", error);
  }
}
fetchArmors();

//fetchArmors hämtar data for API. Sedan kör displayArmors som visar datan i html. 
// searchInput är ansvarig för sökfunktionen.

function displayArmors(armorsToDisplay) {
  
    const container = document.getElementById("armor_container");
    container.innerHTML = "";
      armorsToDisplay.forEach(armor => {
        
        const img = document.createElement("img");
        img.src = armor.image ? armor.image : "/images/Logo.svg";
        img.alt = armor.name;

        const name = document.createElement("p");
        name.textContent = "Name: " +armor.name;

        const location = document.createElement("p");
        location.textContent = "Location: " + armor.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + armor.description;

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
  const filtered = armors.filter(armor =>
    armor.name.toLowerCase().includes(query)
  );

  displayArmors(filtered);
});
