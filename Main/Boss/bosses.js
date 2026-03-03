const url = "https://eldenring.fanapis.com/api/bosses";
let bosses = [];

async function fetchBosses() {
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
fetchBosses();

function displayBosses(bossesToDisplay) {
  
    const container = document.getElementById("boss_container");
    container.innerHTML = "";
      bossesToDisplay.forEach(boss => {
        const img = document.createElement("img");
        img.src = boss.image;
        img.alt = boss.name;

        const name = document.createElement("p");
        name.textContent = boss.name;

        container.appendChild(img);
        container.appendChild(name);
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