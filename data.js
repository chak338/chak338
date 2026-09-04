/* =========================================================
   CHAK338 GAMING HUB
   Центральная база данных
========================================================= */

const RARITIES = {
    common: {
        name: "Обычная",
        color: "#64748b",
        price: 10
    },

    uncommon: {
        name: "Необычная",
        color: "#22c55e",
        price: 25
    },

    rare: {
        name: "Редкая",
        color: "#38bdf8",
        price: 75
    },

    epic: {
        name: "Эпическая",
        color: "#a855f7",
        price: 200
    },

    legendary: {
        name: "Легендарная",
        color: "#f59e0b",
        price: 750
    },

    mythic: {
        name: "Мифическая",
        color: "#ef4444",
        price: 2500
    }
};


/* =========================================================
   CASES
========================================================= */

const CASES = [

    {
        id: "lviv",
        name: "LVIV",
        title: "Lviv Case",
        subtitle: "Персонажи",
        description:
            "Персонажи, маски и образы из мира CHAK338.",

        color: "#38bdf8",

        image: "assets/cases/lviv.png",

        cooldown: 5 * 60 * 60 * 1000,

        xp: 100
    },

    {
        id: "kiyiv",
        name: "KIYIV",
        title: "Kiyiv Case",
        subtitle: "Одежда",

        description:
            "Одежда, худи, маски и редкие образы CHAK338.",

        color: "#a855f7",

        image: "assets/cases/kiyiv.png",

        cooldown: 12 * 60 * 60 * 1000,

        xp: 150
    },

    {
        id: "vinnitsa",
        name: "VINNYTSIA",
        title: "Vinnytsia Case",
        subtitle: "Dota 2",

        description:
            "Кейс полностью посвящён предметам Dota 2.",

        color: "#ef4444",

        image: "assets/cases/vinnitsa.png",

        cooldown: 24 * 60 * 60 * 1000,

        xp: 250
    }

];


/* =========================================================
   ITEMS
========================================================= */

const ITEMS = [

    /* =====================================================
       LVIV
    ===================================================== */

    {
        id: "lviv_rookie",
        name: "Rookie",
        image: "assets/items/rookie.png",

        rarity: "common",
        price: 10,

        type: "character",
        caseId: "lviv",

        chance: 35
    },

    {
        id: "lviv_masky",
        name: "Masky",
        image: "assets/items/masky.png",

        rarity: "uncommon",
        price: 25,

        type: "character",
        caseId: "lviv",

        chance: 25
    },

    {
        id: "lviv_cyber",
        name: "Cyber",
        image: "assets/items/cyber.png",

        rarity: "rare",
        price: 75,

        type: "character",
        caseId: "lviv",

        chance: 18
    },

    {
        id: "lviv_shadow",
        name: "Shadow",
        image: "assets/items/shadow.png",

        rarity: "epic",
        price: 200,

        type: "character",
        caseId: "lviv",

        chance: 12
    },

    {
        id: "lviv_glitch",
        name: "Glitch",
        image: "assets/items/glitch.png",

        rarity: "legendary",
        price: 750,

        type: "character",
        caseId: "lviv",

        chance: 7
    },

    {
        id: "lviv_uhilyant",
        name: "UHILYANT",
        image: "assets/items/uhilyant.png",

        rarity: "mythic",
        price: 2500,

        type: "character",
        caseId: "lviv",

        chance: 3
    },


    /* =====================================================
       KIYIV
    ===================================================== */

    {
        id: "kiyiv_tshirt",
        name: "Basic T-Shirt",
        image: "assets/items/tshirt.png",

        rarity: "common",
        price: 10,

        type: "clothing",
        caseId: "kiyiv",

        chance: 35
    },

    {
        id: "kiyiv_hoodie",
        name: "CHAK Hoodie",
        image: "assets/items/hoodie.png",

        rarity: "uncommon",
        price: 25,

        type: "clothing",
        caseId: "kiyiv",

        chance: 25
    },

    {
        id: "kiyiv_neon",
        name: "Neon Jacket",
        image: "assets/items/neon-jacket.png",

        rarity: "rare",
        price: 75,

        type: "clothing",
        caseId: "kiyiv",

        chance: 18
    },

    {
        id: "kiyiv_mask",
        name: "Dark Mask",
        image: "assets/items/dark-mask.png",

        rarity: "epic",
        price: 200,

        type: "clothing",
        caseId: "kiyiv",

        chance: 12
    },

    {
        id: "kiyiv_crown",
        name: "Golden Crown",
        image: "assets/items/crown.png",

        rarity: "legendary",
        price: 750,

        type: "clothing",
        caseId: "kiyiv",

        chance: 7
    },

    {
        id: "kiyiv_338",
        name: "338 Outfit",
        image: "assets/items/338-outfit.png",

        rarity: "mythic",
        price: 2500,

        type: "clothing",
        caseId: "kiyiv",

        chance: 3
    },


    /* =====================================================
       VINNYTSIA — DOTA 2
    ===================================================== */

    {
        id: "dota_tango",

        name: "Tango",

        image: "assets/items/dota/tango.png",

        rarity: "common",

        price: 10,

        type: "dota",

        caseId: "vinnitsa",

        chance: 55
    },

    {
        id: "dota_branches",

        name: "Iron Branch",

        image: "assets/items/dota/branches.png",

        rarity: "uncommon",

        price: 25,

        type: "dota",

        caseId: "vinnitsa",

        chance: 25
    },

    {
        id: "dota_blink",

        name: "Blink Dagger",

        image: "assets/items/dota/blink.png",

        rarity: "rare",

        price: 75,

        type: "dota",

        caseId: "vinnitsa",

        chance: 12
    },

    {
        id: "dota_bkb",

        name: "Black King Bar",

        image: "assets/items/dota/bkb.png",

        rarity: "epic",

        price: 200,

        type: "dota",

        caseId: "vinnitsa",

        chance: 6
    },

    {
        id: "dota_aghanim",

        name: "Aghanim's Scepter",

        image: "assets/items/dota/aghanim.png",

        rarity: "legendary",

        price: 750,

        type: "dota",

        caseId: "vinnitsa",

        chance: 1.8
    },

    {
        id: "dota_rapier",

        name: "Divine Rapier",

        image: "assets/items/dota/rapier.png",

        rarity: "mythic",

        price: 2500,

        type: "dota",

        caseId: "vinnitsa",

        chance: 0.2
    }

];


/* =========================================================
   HELPERS
========================================================= */

function getRarity(id) {
    return RARITIES[id] || RARITIES.common;
}


function getCase(id) {
    return CASES.find(c => c.id === id);
}


function getItem(id) {
    return ITEMS.find(item => item.id === id);
}


function getCaseItems(caseId) {
    return ITEMS.filter(item => item.caseId === caseId);
}


function formatPrice(price) {
    return `${price} коп.`;
}


/* =========================================================
   INVENTORY
========================================================= */

function getInventory() {

    try {

        return JSON.parse(
            localStorage.getItem("chak338_inventory")
        ) || [];

    } catch {

        return [];

    }

}


function saveInventory(inventory) {

    localStorage.setItem(
        "chak338_inventory",
        JSON.stringify(inventory)
    );

}


function addInventoryItem(item) {

    const inventory = getInventory();

    inventory.push({
        ...item,
        obtainedAt: Date.now()
    });

    saveInventory(inventory);

}


function removeInventoryItems(indexes) {

    let inventory = getInventory();

    const sorted = [...indexes]
        .sort((a, b) => b - a);

    sorted.forEach(index => {

        inventory.splice(index, 1);

    });

    saveInventory(inventory);

}


/* =========================================================
   XP
========================================================= */

function getXP() {

    return Number(
        localStorage.getItem("chak338_xp")
    ) || 0;

}


function addXP(amount) {

    const xp = getXP() + amount;

    localStorage.setItem(
        "chak338_xp",
        xp
    );

    return xp;

}


function getLevel() {

    return Math.floor(getXP() / 1000) + 1;

}


/* =========================================================
   COOLDOWN
========================================================= */

function getCooldownKey(caseId) {

    return `chak338_case_${caseId}`;

}


function getRemaining(caseId) {

    const last =
        Number(
            localStorage.getItem(
                getCooldownKey(caseId)
            )
        ) || 0;

    const current = Date.now();

    const target =
        last + getCase(caseId).cooldown;

    return Math.max(
        0,
        target - current
    );

}


function canOpenCase(caseId) {

    return getRemaining(caseId) <= 0;

}


function setCaseOpened(caseId) {

    localStorage.setItem(
        getCooldownKey(caseId),
        Date.now()
    );

}


/* =========================================================
   RANDOM DROP
========================================================= */

function randomCaseItem(caseId) {

    const items =
        getCaseItems(caseId);

    const total =
        items.reduce(
            (sum, item) =>
                sum + item.chance,
            0
        );

    let random =
        Math.random() * total;

    for (const item of items) {

        random -= item.chance;

        if (random <= 0) {

            return item;

        }

    }

    return items[items.length - 1];

}


/* =========================================================
   TIME
========================================================= */

function formatRemaining(ms) {

    if (ms <= 0) {
        return "ГОТОВО";
    }

    const totalSeconds =
        Math.floor(ms / 1000);

    const hours =
        Math.floor(totalSeconds / 3600);

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const seconds =
        totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}
