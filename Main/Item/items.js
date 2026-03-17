const url = "https://eldenring.fanapis.com/api/items";

async function fetchItems() {
  try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
    items = data.data;
    displayItems(items);

    if (!items) {
      console.log("Items not found!");
      return;
    }
   } catch(error){
    console.error("Error fetching items:", error);
  }
}
fetchItems();

//fetchItems hämtar data for API. Sedan kör displayItems som visar datan i html. 
// searchInput är ansvarig för sökfunktionen.

function displayItems(itemsToDisplay) {
  
    const container = document.getElementById("item_container");
    container.innerHTML = "";
      itemsToDisplay.forEach(item => {
        
        const img = document.createElement("img");
        img.src = item.image ? item.image : "/images/Logo.svg";
        img.alt = item.name;

        const name = document.createElement("p");
        name.textContent = "Name: " +item.name;

        const location = document.createElement("p");
        location.textContent = "Location: " + item.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + item.description;

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
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query)
  );

  displayItems(filtered);
});
