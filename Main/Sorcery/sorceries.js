const url = "https://eldenring.fanapis.com/api/sorceries";

async function fetchSorceries() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const sorcery = data.data;

        if (!sorcery) {
          console.log("Sorcery not found!");
          return;
        }

        const container = document.getElementById("sorcery_container");
        container.innerHTML = "";

        sorcery.forEach(sorcery => {
            const img = document.createElement("img");
            img.src = sorcery.image;
            img.alt = sorcery.name;

            const name = document.createElement("p");
            name.textContent = sorcery.name;

            container.appendChild(img);
            container.appendChild(name);
        });
    } catch(error) {
        console.error("Error fetching sorceries:", error);
    }
}
fetchSorceries();