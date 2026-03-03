const url = "https://eldenring.fanapis.com/api/incantations";

async function fetchIncantations() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const incantation = data.data;

        if (!incantation) {
          console.log("Incantation not found!");
          return;
        }
    
        const container = document.getElementById("incantation_container");
        container.innerHTML = "";

        incantation.forEach(incantation => {
            const img = document.createElement("img");
            img.src = incantation.image
            img.alt = incantation.name

            const name = document.createElement("p")
            name.textContent = incantation.name

            container.appendChild(img)
            container.appendChild(name)
        } )

    } catch(error){
        console.error("Error fetching incantations:", error);
    }
}
fetchIncantations();