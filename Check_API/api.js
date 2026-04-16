const incantation = "https://eldenring.fanapis.com/api/incantations";
const boss = "https://eldenring.fanapis.com/api/bosses";
const sorcery = "https://eldenring.fanapis.com/api/sorceries";
const talisman = "https://eldenring.fanapis.com/api/talismans";
const weapon = "https://eldenring.fanapis.com/api/weapons";
const armor = "https://eldenring.fanapis.com/api/armors";
const ash = "https://eldenring.fanapis.com/api/ashes";
const item = "https://eldenring.fanapis.com/api/items";
const npc = "https://eldenring.fanapis.com/api/npcs";
const location = "https://eldenring.fanapis.com/api/locations";
const creature = "https://eldenring.fanapis.com/api/creatures";

// Här kan jag enkelt byta ut url för att see informationen i logen utan att störa min andra kod.

async function fetchIncantations() {
        const response = await fetch(sorcery);
        const data = await response.json();
        console.log(data);
        let bosses = data.data;
        for (boss of bosses) {
                if (boss.drops) {
            console.log(boss.drops);
                }
        }
}
fetchIncantations();