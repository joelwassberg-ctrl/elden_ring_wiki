const url = "https://eldenring.fanapis.com/api/incantations";

async function fetchIncantations() {
  try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
    incantations = data.data;
    displayIncantations(incantations);

    if (!incantations) {
      console.log("Incantations not found!");
      return;
    }
   } catch(error){
    console.error("Error fetching incantations:", error);
  }
}
fetchIncantations();

//fetchIncantations hämtar data for API. Sedan kör displayIncantations som visar datan i html. 
// searchInput är ansvarig för sökfunktionen.

function displayIncantations(incantationsToDisplay) {
  
    const container = document.getElementById("incantation_container");
    container.innerHTML = "";
      incantationsToDisplay.forEach(incantation => {
        
        const img = document.createElement("img");
        img.src = incantation.image ? incantation.image : "/images/Logo.svg";
        img.alt = incantation.name;

        const name = document.createElement("p");
        name.textContent = "Name: " + incantation.name;

        const location = document.createElement("p");
        location.textContent = "Location: " + incantation.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + incantation.description;

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
  const filtered = incantations.filter(incantation =>
    incantation.name.toLowerCase().includes(query)
  );

  displayIncantations(filtered);
});
