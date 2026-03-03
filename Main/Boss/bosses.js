const url = "https://eldenring.fanapis.com/api/bosses";

async function fetchBosses() {
    try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
    const boss = data.data;

    if (!boss) {
      console.log("Boss not found!");
      return;
    }

    const container = document.getElementById("boss_container");
    container.innerHTML = "";
    
    boss.forEach(boss => {
        const img = document.createElement("img");
        img.src = boss.image;
        img.alt = boss.name;

        const name = document.createElement("p");
        name.textContent = boss.name;

        container.appendChild(img);
        container.appendChild(name);
    });
   } catch(error){
    console.error("Error fetching bosses:", error);
  }
}
fetchBosses();