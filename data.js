// ============================================================
// CHAK338 GAMING HUB — DATA
// ============================================================

function svgIcon(emoji, bg = "#171b2b") {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stop-color="${bg}"/>
                <stop offset="100%" stop-color="#080a12"/>
            </linearGradient>
        </defs>

        <rect width="300" height="300" rx="42" fill="url(#g)"/>
        <circle cx="150" cy="150" r="105" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.08)" stroke-width="3"/>
        <text x="150" y="177"
              text-anchor="middle"
              font-size="100"
              font-family="Arial, sans-serif">${emoji}</text>
    </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}


// ============================================================
// CASES
// ============================================================

const CASES = [

    // --------------------------------------------------------
    // CLASH OF CLANS
    // --------------------------------------------------------

    {
        id: "clash",
        name: "Clash of Clans",
        image: "clash-case.png",
        cooldown: 5 * 60 * 60 * 1000,
        xp: 100,

        items: [
            { id: "clash_1", name: "Варвар", price: 10, image: svgIcon("⚔️", "#36200f") },
            { id: "clash_2", name: "Лучница", price: 15, image: svgIcon("🏹", "#32132e") },
            { id: "clash_3", name: "Бомбер", price: 20, image: svgIcon("💣", "#20252e") },
            { id: "clash_4", name: "Хог Райдер", price: 25, image: svgIcon("🐗", "#35200e") },
            { id: "clash_5", name: "Маг", price: 50, image: svgIcon("🧙", "#25184c") },
            { id: "clash_6", name: "Дракон", price: 75, image: svgIcon("🐉", "#431919") },
            { id: "clash_7", name: "Миньен летающий", price: 100, image: svgIcon("👿", "#171f43") },
            { id: "clash_8", name: "Ведьма", price: 200, image: svgIcon("🧟", "#302044") },
            { id: "clash_9", name: "Валькирия", price: 300, image: svgIcon("⚡", "#45230f") },
            { id: "clash_10", name: "ПЕККА", price: 400, image: svgIcon("🛡️", "#252a39") },
            { id: "clash_11", name: "Электродракон", price: 500, image: svgIcon("🐲", "#16384a") },
            { id: "clash_12", name: "Голем", price: 600, image: svgIcon("🪨", "#30271d") },
            { id: "clash_13", name: "Горящий дракон", price: 750, image: svgIcon("🔥", "#4b180d") },
            { id: "clash_14", name: "Королева лучниц", price: 1000, image: svgIcon("👑", "#3b2557") }
        ]
    },


    // --------------------------------------------------------
    // CS2
    // --------------------------------------------------------

    {
        id: "cs2",
        name: "CS2",
        image: "cs2-case.png",
        cooldown: 12 * 60 * 60 * 1000,
        xp: 150,

        items: [
            { id: "cs2_1", name: "Glock", price: 10, image: svgIcon("🔫", "#1c2430") },
            { id: "cs2_2", name: "USP", price: 15, image: svgIcon("🔫", "#202735") },
            { id: "cs2_3", name: "Desert Eagle", price: 20, image: svgIcon("🔫", "#332519") },
            { id: "cs2_4", name: "MP5", price: 25, image: svgIcon("🔫", "#252525") },
            { id: "cs2_5", name: "Galil", price: 50, image: svgIcon("🔫", "#263321") },
            { id: "cs2_6", name: "SSG 08", price: 75, image: svgIcon("🎯", "#1c3036") },
            { id: "cs2_7", name: "SG 553", price: 100, image: svgIcon("🔫", "#363019") },
            { id: "cs2_8", name: "M4A4 без глушителя", price: 200, image: svgIcon("🔫", "#242d39") },
            { id: "cs2_9", name: "M4A1-S с глушителем", price: 250, image: svgIcon("🔫", "#1e2631") },
            { id: "cs2_10", name: "AK-47 Вулкан", price: 500, image: svgIcon("🔥", "#321b24") },
            { id: "cs2_11", name: "Керамбит | Волны", price: 600, image: svgIcon("🔪", "#16384b") },
            { id: "cs2_12", name: "Нож-бабочка | Волны", price: 750, image: svgIcon("🗡️", "#193c48") },
            { id: "cs2_13", name: "AWP Dragon Lore", price: 1000, image: svgIcon("🐉", "#43301b") }
        ]
    },


    // --------------------------------------------------------
    // DOTA 2
    // --------------------------------------------------------

    {
        id: "dota",
        name: "Dota 2",
        image: "dota-case.png",
        cooldown: 24 * 60 * 60 * 1000,
        xp: 250,

        items: [
            { id: "dota_1", name: "Tango", price: 10, image: svgIcon("🌿", "#1b3420") },
            { id: "dota_2", name: "Flask", price: 15, image: svgIcon("🧪", "#17334a") },
            { id: "dota_3", name: "Ward", price: 20, image: svgIcon("👁️", "#37234b") },
            { id: "dota_4", name: "Smoke", price: 25, image: svgIcon("💨", "#303038") },
            { id: "dota_5", name: "Bottle", price: 30, image: svgIcon("🍾", "#183d3c") },
            { id: "dota_6", name: "Boots of Speed", price: 50, image: svgIcon("👢", "#352718") },
            { id: "dota_7", name: "Voodoo Mask", price: 75, image: svgIcon("🎭", "#3b1834") },
            { id: "dota_8", name: "Morbid Mask", price: 85, image: svgIcon("💀", "#391818") },
            { id: "dota_9", name: "Gem", price: 100, image: svgIcon("💎", "#173c50") },
            { id: "dota_10", name: "Aghanim's Shard", price: 125, image: svgIcon("🔷", "#283a5a") },
            { id: "dota_11", name: "Point Booster", price: 150, image: svgIcon("🔵", "#173a4c") },
            { id: "dota_12", name: "Hyperstone", price: 200, image: svgIcon("💠", "#42351a") },
            { id: "dota_13", name: "Eaglesong", price: 250, image: svgIcon("🦅", "#35213f") },
            { id: "dota_14", name: "Sacred Relic", price: 300, image: svgIcon("✨", "#47351b") },
            { id: "dota_15", name: "Moon Shard", price: 400, image: svgIcon("🌙", "#263859") },
            { id: "dota_16", name: "Parasma", price: 500, image: svgIcon("🔮", "#4a183c") },
            { id: "dota_17", name: "Aghanim's Scepter", price: 600, image: svgIcon("💎", "#34204b") },
            { id: "dota_18", name: "Satanic", price: 750, image: svgIcon("😈", "#471717") },
            { id: "dota_19", name: "Divine Rapier", price: 1000, image: svgIcon("⚔️", "#453617") }
        ]
    },


    // --------------------------------------------------------
    // HANTIKS
    // БЕЗ ТАЙМЕРА
    // --------------------------------------------------------

    {
        id: "hantiks",
        name: "Hantiks",
        image: null,
        cooldown: 0,
        xp: 0,
        noCooldown: true,

        items: [
            { id: "hantiks_1", name: "Чипсы", price: 10, image: svgIcon("🥔", "#3c2614") },
            { id: "hantiks_2", name: "Гамос", price: 15, image: svgIcon("😎", "#172b38") },
            { id: "hantiks_3", name: "Вамос", price: 20, image: svgIcon("🔥", "#43191b") },
            { id: "hantiks_4", name: "Львівське 1715", price: 30, image: svgIcon("🍺", "#4a2e12") },
            { id: "hantiks_5", name: "Бургер", price: 50, image: svgIcon("🍔", "#3d2613") },
            { id: "hantiks_6", name: "Хот дог", price: 75, image: svgIcon("🌭", "#3c2015") },
            { id: "hantiks_7", name: "Пицца", price: 100, image: svgIcon("🍕", "#412014") },
            { id: "hantiks_8", name: "Шаурма", price: 150, image: svgIcon("🌯", "#263517") },
            { id: "hantiks_9", name: "Суши", price: 200, image: svgIcon("🍣", "#182c39") },
            { id: "hantiks_10", name: "Толстый бомж", price: 300, image: svgIcon("🧔", "#31241c") },
            { id: "hantiks_11", name: "Толстый Hanti", price: 500, image: svgIcon("👑", "#3d234b") }
        ]
    }
];


// ============================================================
// INVENTORY
// ============================================================

function getInventory() {
    try {
        return JSON.parse(localStorage.getItem("chak338_inventory") || "[]");
    } catch {
        return [];
    }
}

function saveInventory(items) {
    localStorage.setItem(
        "chak338_inventory",
        JSON.stringify(items)
    );
}


// ============================================================
// XP
// ============================================================

function getXP() {
    return Number(localStorage.getItem("chak338_xp") || 0);
}

function addXP(amount) {
    const xp = getXP() + Number(amount || 0);
    localStorage.setItem("chak338_xp", String(xp));
    return xp;
}


// ============================================================
// CASE COOLDOWN
// ============================================================

function getCaseCooldown(caseId) {
    return Number(
        localStorage.getItem(`chak338_case_${caseId}`) || 0
    );
}

function setCaseCooldown(caseId, timestamp) {
    localStorage.setItem(
        `chak338_case_${caseId}`,
        String(timestamp)
    );
}


// ============================================================
// UNIQUE INVENTORY ID
// ============================================================

function makeInventoryItem(item, sourceCase) {
    return {
        ...item,

        inventoryId:
            Date.now().toString(36) +
            "_" +
            Math.random().toString(36).slice(2),

        sourceCase: sourceCase || null,
        receivedAt: Date.now()
    };
}


// ============================================================
// EXPORT
// ============================================================

window.CASES = CASES;
window.getInventory = getInventory;
window.saveInventory = saveInventory;
window.getXP = getXP;
window.addXP = addXP;
window.getCaseCooldown = getCaseCooldown;
window.setCaseCooldown = setCaseCooldown;
window.makeInventoryItem = makeInventoryItem;
