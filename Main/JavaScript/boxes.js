//gör så att man kommer tillbaka till Main websidan när man trycker på headern
document.addEventListener("DOMContentLoaded", () => {
const header_thispage = document.querySelector("header");
header_thispage.addEventListener("click", () => {
  window.location.href = "/Main/main.html";
});
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

});
async function fetchApi(url) {
  try{
const response = await fetch(url);
const data = await response.json();
const loading = document.getElementById("loading");
console.log(data);
//Det råkar finnas visa saker som finns 2 gånger i API:et, skaparen av API:ets fel om något displays 2 gånger
    apiData = data.data;
    if (!apiData) {
      console.log("Api data not found in the response. Check the API response structure. Or the API information is not found. Check the API url.");
      return;
    }
    displayApiData(apiData);

   } catch(error){
    console.error("Error fetching the API:", error);
  } finally {
    loading.style.display = "none";
  }
}

function displayApiData(apiDataToDisplay) {
  
    const container = document.getElementById("api_container");
    container.innerHTML = "";
      apiDataToDisplay.forEach(object => {
        
        const img = document.createElement("img");
        img.src = object.image ? object.image : "/Images/Logo.svg";
        img.alt = object.name;
        //ger images lazy loading
        img.loading = "lazy";

        const name = document.createElement("h1");
        name.textContent = object.name;

        const makeDiv = document.createElement("div");
        container.appendChild(makeDiv);
        makeDiv.appendChild(img);
        makeDiv.appendChild(name);

        console.log(object);
        let attributes = ["location", "description", "drops", "cost", "slots", "affinity", "effect","effects", "weight",
          "category", "role", "type", "region", "fpCost"
        ];
        for (each in attributes) {
          if (object.hasOwnProperty(attributes[each])) {
            const attributeValue = document.createElement("p");
            attributeValue.classList.add("individual_p");
            attributeValue.textContent = attributes[each] + ": " + object[attributes[each]];
            makeDiv.appendChild(attributeValue);
          }
        }
    makeDiv.addEventListener("click", (event) => {
    const info = makeDiv.querySelector("p");
    makeDiv.querySelectorAll("p").forEach(p => {
      p.classList.toggle("individual_p");
    })
});
});
}