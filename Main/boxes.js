async function fetchApi(url) {
  try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
    apiData = data.data;
    displayApiData(apiData);

    if (!apiData) {
      console.log("Api data not found!");
      return;
    }
   } catch(error){
    console.error("Error fetching the API:", error);
  }
}

function displayApiData(apiDataToDisplay) {
  
    const container = document.getElementById("api_container");
    container.innerHTML = "";
      apiDataToDisplay.forEach(object => {
        
        const img = document.createElement("img");
        img.src = object.image ? object.image : "/Images/Logo.svg";
        img.alt = object.name;

        const name = document.createElement("p");
        name.textContent = "Name: " + object.name;

        const location = document.createElement("p");
        location.textContent = "Location: " + object.location;

        const description = document.createElement("p");
        description.textContent = "Description: " + object.description;

        const drops = document.createElement("p");
        drops.textContent = "Drops: " + object.drops;

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
  const filtered = apiData.filter(object =>
    object.name.toLowerCase().includes(query)
  );

  displayApiData(filtered);
});

//gör så att man kommer tillbaka till Main websidan när man trycker på headern
const header = document.querySelector("header");
header.addEventListener("click", () => {
  window.location.href = "../main.html";
})
