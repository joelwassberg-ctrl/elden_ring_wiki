//gör så att man kommer tillbaka till Main websidan när man trycker på headern
const header_thispage = document.querySelector("header");
header_thispage.addEventListener("click", () => {
  window.location.href = "/Main/main.html";
});

async function fetchApi(url) {
  try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
    apiData = data.data;
    if (!apiData) {
      console.log("Api data not found!");
      return;
    }
    displayApiData(apiData);

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
        img.loading = "lazy";

        const makeDiv = document.createElement("div");
        container.appendChild(makeDiv);
        makeDiv.appendChild(img);

        console.log(object);
        let attributes = ["name", "location", "description", "drops", "cost", "slots", "affinity", "effect","effects", "weight",
          "category", "role", "type"
        ];
        for (each in attributes) {
          if (object.hasOwnProperty(attributes[each])) {
            const attributeValue = document.createElement("p");
            attributeValue.textContent = attributes[each] + ": " + object[attributes[each]];
            makeDiv.appendChild(attributeValue);
          }
        }
});
}
const searchInput = document.getElementById("search");

if (searchInput !== null) {
  searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  // filtrera vapnen som matchar sökningen
  const filtered = apiData.filter(object =>
    object.name.toLowerCase().includes(query)
  );

  displayApiData(filtered);
});
}

