/* =========================================================
   CHAK338 GAMING HUB — DATA
   ========================================================= */

const CASES = [
    {
        id: "clash",
        name: "Clash of Clans",
        short: "CLASH",
        description: "Персонажи и легендарные юниты Clash of Clans.",
        cooldown: 5 * 60 * 60 * 1000,
        xp: 100,
        accent: "violet",
        icon: "⚔️",
        items: [
            { id: "coc-1", name: "Варвар", price: 10, icon: "🪓", rarity: "common" },
            { id: "coc-2", name: "Лучница", price: 15, icon: "🏹", rarity: "common" },
            { id: "coc-3", name: "Бомбер", price: 20, icon: "💣", rarity: "common" },
            { id: "coc-4", name: "Хог Райдер", price: 25, icon: "🐗", rarity: "uncommon" },
            { id: "coc-5", name: "Маг", price: 50, icon: "🧙", rarity: "uncommon" },
            { id: "coc-6", name: "Дракон", price: 75, icon: "🐉", rarity: "rare" },
            { id: "coc-7", name: "Миньен летающий", price: 100, icon: "👾", rarity: "rare" },
            { id: "coc-8", name: "Ведьма", price: 200, icon: "🧟‍♀️", rarity: "epic" },
            { id: "coc-9", name: "Валькирия", price: 300, icon: "⚡", rarity: "epic" },
            { id: "coc-10", name: "ПЕККА", price: 400, icon: "🤖", rarity: "epic" },
            { id: "coc-11", name: "Электродракон", price: 500, icon: "🐲", rarity: "legendary" },
            { id: "coc-12", name: "Голем", price: 600, icon: "🗿", rarity: "legendary" },
            { id: "coc-13", name: "Горящий дракон", price: 750, icon: "🔥", rarity: "mythic" },
            { id: "coc-14", name: "Королева лучниц", price: 1000, icon: "👑", rarity: "mythic" }
        ]
    },

    {
        id: "cs2",
        name: "CS2",
        short: "CS2",
        description: "Оружие и редкие предметы в стиле Counter-Strike.",
        cooldown: 12 * 60 * 60 * 1000,
        xp: 150,
        accent: "cyan",
        icon: "🔫",
        items: [
            { id: "cs-1", name: "Glock", price: 10, icon: "🔫", rarity: "common" },
            { id: "cs-2", name: "USP", price: 15, icon: "🔫", rarity: "common" },
            { id: "cs-3", name: "Desert Eagle", price: 20, icon: "🔫", rarity: "common" },
            { id: "cs-4", name: "MP5", price: 25, icon: "🔫", rarity: "uncommon" },
            { id: "cs-5", name: "Galil", price: 50, icon: "🔫", rarity: "uncommon" },
            { id: "cs-6", name: "SSG 08", price: 75, icon: "🎯", rarity: "rare" },
            { id: "cs-7", name: "SG 553", price: 100, icon: "🔫", rarity: "rare" },
            { id: "cs-8", name: "M4A4 без глушителя", price: 200, icon: "🔫", rarity: "epic" },
            { id: "cs-9", name: "M4A1-S с глушителем", price: 250, icon: "🔫", rarity: "epic" },
            { id: "cs-10", name: "AK-47 Вулкан", price: 500, icon: "🔫", rarity: "legendary" },
            { id: "cs-11", name: "Керамбит | Волны", price: 600, icon: "🔪", rarity: "legendary" },
            { id: "cs-12", name: "Нож-бабочка | Волны", price: 750, icon: "🦋", rarity: "mythic" },
            { id: "cs-13", name: "AWP Dragon Lore", price: 1000, icon: "🐉", rarity: "mythic" }
        ]
    },

    {
        id: "dota",
        name: "Dota 2",
        short: "DOTA",
        description: "Артефакты, предметы и легендарный Divine Rapier.",
        cooldown: 24 * 60 * 60 * 1000,
        xp: 250,
        accent: "red",
        icon: "🛡️",
        items: [
            { id: "dota-1", name: "Tango", price: 10, icon: "🌿", rarity: "common" },
            { id: "dota-2", name: "Flask", price: 15, icon: "🧪", rarity: "common" },
            { id: "dota-3", name: "Ward", price: 20, icon: "👁️", rarity: "common" },
            { id: "dota-4", name: "Smoke", price: 25, icon: "💨", rarity: "common" },
            { id: "dota-5", name: "Bottle", price: 30, icon: "🍾", rarity: "uncommon" },
            { id: "dota-6", name: "Boots of Speed", price: 50, icon: "👟", rarity: "uncommon" },
            { id: "dota-7", name: "Voodoo Mask", price: 75, icon: "🎭", rarity: "rare" },
            { id: "dota-8", name: "Morbid Mask", price: 85, icon: "😈", rarity: "rare" },
            { id: "dota-9", name: "Gem", price: 100, icon: "💎", rarity: "rare" },
            { id: "dota-10", name: "Aghanim's Shard", price: 125, icon: "🔷", rarity: "epic" },
            { id: "dota-11", name: "Point Booster", price: 150, icon: "🔵", rarity: "epic" },
            { id: "dota-12", name: "Hyperstone", price: 200, icon: "⚡", rarity: "epic" },
            { id: "dota-13", name: "Eaglesong", price: 250, icon: "🦅", rarity: "epic" },
            { id: "dota-14", name: "Sacred Relic", price: 300, icon: "✨", rarity: "legendary" },
            { id: "dota-15", name: "Moon Shard", price: 400, icon: "🌙", rarity: "legendary" },
            { id: "dota-16", name: "Parasma", price: 500, icon: "🟣", rarity: "legendary" },
            { id: "dota-17", name: "Aghanim's Scepter", price: 600, icon: "💠", rarity: "legendary" },
            { id: "dota-18", name: "Satanic", price: 750, icon: "😈", rarity: "mythic" },
            { id: "dota-19", name: "Divine Rapier", price: 1000, icon: "⚔️", rarity: "mythic" }
        ]
    },

    {
        id: "hantiks",
        name: "Hantiks",
        short: "HANTIKS",
        description: "Мемный кейс Hantiks. Здесь может выпасть всё.",
        cooldown: 0,
        xp: 0,
        accent: "green",
        icon: "😎",
        noCooldown: true,
        items: [
            { id: "hantiks-1", name: "Чипсы", price: 10, icon: "🍟", rarity: "common" },
            { id: "hantiks-2", name: "Гамос", price: 15, icon: "😎", rarity: "common" },
            { id: "hantiks-3", name: "Вамос", price: 20, icon: "🔥", rarity: "common" },
            { id: "hantiks-4", name: "Львівське 1715", price: 30, icon: "🍺", rarity: "uncommon" },
            { id: "hantiks-5", name: "Бургер", price: 50, icon: "🍔", rarity: "uncommon" },
            { id: "hantiks-6", name: "Хот дог", price: 75, icon: "🌭", rarity: "rare" },
            { id: "hantiks-7", name: "Пицца", price: 100, icon: "🍕", rarity: "rare" },
            { id: "hantiks-8", name: "Шаурма", price: 150, icon: "🌯", rarity: "epic" },
            { id: "hantiks-9", name: "Суши", price: 200, icon: "🍣", rarity: "epic" },
            { id: "hantiks-10", name: "Толстый бомж", price: 300, icon: "🧔", rarity: "legendary" },
            { id: "hantiks-11", name: "Толстый Hanti", price: 500, icon: "👑", rarity: "mythic" }
        ]
    }
];

/* ---------------------------------------------------------
   Общие функции
   --------------------------------------------------------- */

function getCases() {
    return CASES;
}

function getCaseById(id) {
    return CASES.find(c => c.id === id);
}

function getAllItems() {
    return CASES.flatMap(c => c.items);
}

function getItemById(id) {
    return getAllItems().find(item => item.id === id);
}

function getInventory() {
    try {
        const value = localStorage.getItem("chak338_inventory");
        return value ? JSON.parse(value) : [];
    } catch {
        return [];
    }
}

function saveInventory(items) {
    localStorage.setItem("chak338_inventory", JSON.stringify(items));
}

function getXP() {
    return Number(localStorage.getItem("chak338_xp") || 0);
}

function saveXP(xp) {
    localStorage.setItem("chak338_xp", String(xp));
}

function addXP(amount) {
    const xp = getXP() + Number(amount || 0);
    saveXP(xp);
    return xp;
}

function createInventoryItem(item, sourceCase) {
    return {
        uid: "inv_" + Date.now() + "_" + Math.random().toString(36).slice(2),
        id: item.id,
        name: item.name,
        price: Number(item.price),
        icon: item.icon,
        rarity: item.rarity,
        sourceCase: sourceCase || "",
        createdAt: Date.now()
    };
}

function formatPrice(value) {
    return Number(value).toLocaleString("ru-RU") + " монет";
}

function formatTime(ms) {
    if (ms <= 0) return "ГОТОВО";

    let total = Math.floor(ms / 1000);

    const hours = Math.floor(total / 3600);
    total %= 3600;

    const minutes = Math.floor(total / 60);
    const seconds = total % 60;

    return (
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0")
    );
}
