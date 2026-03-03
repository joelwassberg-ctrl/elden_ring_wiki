const url = "https://eldenring.fanapis.com/api/weapons";

async function fetchWeapons() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const weapon = data.data;

        if (!weapon) {
          console.log("Weapon not found!");
          return;
        }
        const container = document.getElementById("weapon_container");
        container.innerHTML = "";

        weapon.forEach(weapon => {
            const img = document.createElement("img");
            img.src = weapon.image;
            img.alt = weapon.name;

            const name = document.createElement("p");
            name.textContent = weapon.name;

            container.appendChild(img);
            container.appendChild(name);
        });
    }
        catch(error){
        console.error("Error fetching weapons:", error);
        }
}
fetchWeapons();