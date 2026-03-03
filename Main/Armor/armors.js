const url = "https://eldenring.fanapis.com/api/armors";

async function fetchArmors() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const armor = data.data;

        if (!armor) {
          console.log("Armor not found!");
          return;
        }

        const container = document.getElementById("armor_container");
        container.innerHTML = "";

        armor.forEach(armor => {
            const img = document.createElement("img");
            img.src = armor.image;
            img.alt = armor.name;

            const name = document.createElement("p");
            name.textContent = armor.name;

            container.appendChild(img);
            container.appendChild(name);
        });
    } catch(error) {
        console.error("Error fetching armors:", error);
    }
}
fetchArmors();