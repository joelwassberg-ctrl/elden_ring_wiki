const url = "https://eldenring.fanapis.com/api/talismans"

async function fetchTalismans() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        const talisman = data.data;
        
        if(!talisman) {
            console.log("boss not found!")
            return;
        }
    
        const container = document.getElementById("talisman_container")
        container.innerHTML = "";

        talisman.forEach(talisman => {
            const img = document.createElement("img")
            img.src = talisman.image
            img.alt = talisman.name
            
            const name = document.createElement("p")
            name.textContent = talisman.name

            container.appendChild(img)
            container.appendChild(name)
        })

    } catch(error) {
        console.log("error fetching bosses", error)
    }
}
fetchTalismans();