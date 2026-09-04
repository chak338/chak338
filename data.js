/* =========================================================
   CHAK338 — ЕДИНЫЙ КАТАЛОГ ПРЕДМЕТОВ
   =========================================================

   Здесь ты можешь самостоятельно менять:

   name   = название
   image  = путь к картинке
   rarity = редкость
   price  = стоимость
   type   = тип предмета
   caseId = в каком кейсе выпадает

   ========================================================= */

const RARITIES = {
    common: {
        name: "Обычный",
        short: "COMMON",
        price: 10
    },

    uncommon: {
        name: "Необычный",
        short: "UNCOMMON",
        price: 25
    },

    rare: {
        name: "Редкий",
        short: "RARE",
        price: 75
    },

    epic: {
        name: "Эпический",
        short: "EPIC",
        price: 200
    },

    legendary: {
        name: "Легендарный",
        short: "LEGENDARY",
        price: 750
    },

    mythic: {
        name: "Мифический",
        short: "MYTHIC",
        price: 2500
    }
};


/* =========================================================
   КЕЙСЫ
   ========================================================= */

const CASES = [
    {
        id: "uhilyant",
        name: "UHILYANT",
        description: "Персонажи",
        color: "blue",
        image: "assets/cases/uhilyant.png",

        cooldown: 5 * 60 * 60 * 1000,

        xp: 100
    },

    {
        id: "kitaen",
        name: "KITAEN",
        description: "Одежда",
        color: "purple",
        image: "assets/cases/kitaen.png",

        cooldown: 12 * 60 * 60 * 1000,

        xp: 150
    },

    {
        id: "chak",
        name: "CHAK",
        description: "Оружие и экипировка",
        color: "red",
        image: "assets/cases/chak.png",

        cooldown: 24 * 60 * 60 * 1000,

        xp: 200
    }
];


/* =========================================================
   ПРЕДМЕТЫ
   =========================================================

   ВАЖНО:

   image:
   сюда указываешь свою картинку.

   Например:

   image: "assets/items/my_character.png"

   price:
   цена предмета.

   caseId:
   кейс, из которого он выпадает.

   chance:
   шанс выпадения.

   ========================================================= */

const ITEMS = [

    /* =====================================================
       UHILYANT — ПЕРСОНАЖИ
       ===================================================== */

    {
        id: "rookie",
        name: "Rookie",
        image: "assets/items/rookie.png",
        rarity: "common",
        price: 10,
        type: "character",
        caseId: "uhilyant",
        chance: 55
    },

    {
        id: "masky",
        name: "Masky",
        image: "assets/items/masky.png",
        rarity: "common",
        price: 10,
        type: "character",
        caseId: "uhilyant",
        chance: 0
    },

    {
        id: "cyber",
        name: "Cyber",
        image: "assets/items/cyber.png",
        rarity: "uncommon",
        price: 25,
        type: "character",
        caseId: "uhilyant",
        chance: 25
    },

    {
        id: "shadow",
        name: "Shadow",
        image: "assets/items/shadow.png",
        rarity: "rare",
        price: 75,
        type: "character",
        caseId: "uhilyant",
        chance: 12
    },

    {
        id: "glitch",
        name: "Glitch",
        image: "assets/items/glitch.png",
        rarity: "epic",
        price: 200,
        type: "character",
        caseId: "uhilyant",
        chance: 6
    },

    {
        id: "uhilyant_character",
        name: "UHILYANT",
        image: "assets/items/uhilyant_character.png",
        rarity: "legendary",
        price: 750,
        type: "character",
        caseId: "uhilyant",
        chance: 1.8
    },

    {
        id: "338_outfit",
        name: "338",
        image: "assets/items/338.png",
        rarity: "mythic",
        price: 2500,
        type: "character",
        caseId: "uhilyant",
        chance: 0.2
    },


    /* =====================================================
       KITAEN — ОДЕЖДА
       ===================================================== */

    {
        id: "basic_tshirt",
        name: "Basic T-Shirt",
        image: "assets/items/basic_tshirt.png",
        rarity: "common",
        price: 10,
        type: "clothing",
        caseId: "kitaen",
        chance: 55
    },

    {
        id: "chak_hoodie",
        name: "CHAK Hoodie",
        image: "assets/items/chak_hoodie.png",
        rarity: "uncommon",
        price: 25,
        type: "clothing",
        caseId: "kitaen",
        chance: 25
    },

    {
        id: "neon_jacket",
        name: "Neon Jacket",
        image: "assets/items/neon_jacket.png",
        rarity: "rare",
        price: 75,
        type: "clothing",
        caseId: "kitaen",
        chance: 12
    },

    {
        id: "dark_mask",
        name: "Dark Outfit",
        image: "assets/items/dark_outfit.png",
        rarity: "epic",
        price: 200,
        type: "clothing",
        caseId: "kitaen",
        chance: 6
    },

    {
        id: "golden_crown",
        name: "Golden Outfit",
        image: "assets/items/golden_outfit.png",
        rarity: "legendary",
        price: 750,
        type: "clothing",
        caseId: "kitaen",
        chance: 1.8
    },

    {
        id: "mythic_outfit",
        name: "338 Outfit",
        image: "assets/items/338_outfit.png",
        rarity: "mythic",
        price: 2500,
        type: "clothing",
        caseId: "kitaen",
        chance: 0.2
    },


    /* =====================================================
       CHAK — ОРУЖИЕ
       ===================================================== */

    {
        id: "wooden_sword",
        name: "Wooden Sword",
        image: "assets/items/wooden_sword.png",
        rarity: "common",
        price: 10,
        type: "weapon",
        caseId: "chak",
        chance: 55
    },

    {
        id: "iron_shield",
        name: "Iron Shield",
        image: "assets/items/iron_shield.png",
        rarity: "uncommon",
        price: 25,
        type: "shield",
        caseId: "chak",
        chance: 25
    },

    {
        id: "neon_blade",
        name: "Neon Blade",
        image: "assets/items/neon_blade.png",
        rarity: "rare",
        price: 75,
        type: "weapon",
        caseId: "chak",
        chance: 12
    },

    {
        id: "shadow_katana",
        name: "Shadow Katana",
        image: "assets/items/shadow_katana.png",
        rarity: "epic",
        price: 200,
        type: "weapon",
        caseId: "chak",
        chance: 6
    },

    {
        id: "chak_hammer",
        name: "CHAK Hammer",
        image: "assets/items/chak_hammer.png",
        rarity: "legendary",
        price: 750,
        type: "weapon",
        caseId: "chak",
        chance: 1.8
    },

    {
        id: "338_destroyer",
        name: "338 Destroyer",
        image: "assets/items/338_destroyer.png",
        rarity: "mythic",
        price: 2500,
        type: "weapon",
        caseId: "chak",
        chance: 0.2
    }
];


/* =========================================================
   ФУНКЦИИ
   ========================================================= */

function getRarity(rarity) {
    return RARITIES[rarity] || RARITIES.common;
}


function getCase(caseId) {
    return CASES.find(item => item.id === caseId);
}


function getItem(itemId) {
    return ITEMS.find(item => item.id === itemId);
}


function getCaseItems(caseId) {
    return ITEMS.filter(item => item.caseId === caseId);
}


function formatPrice(price) {
    return Number(price).toLocaleString("ru-RU");
}


function createInventoryItem(item) {
    return {
        uid:
            Date.now().toString(36) +
            Math.random().toString(36).substring(2, 10),

        itemId: item.id,

        name: item.name,

        image: item.image,

        rarity: item.rarity,

        rarityName: getRarity(item.rarity).name,

        price: item.price,

        type: item.type,

        caseId: item.caseId,

        date: new Date().toISOString()
    };
}


/* =========================================================
   INVENTORY
   ========================================================= */

function getInventory() {
    try {
        const data = localStorage.getItem("chak338_inventory");

        if (!data) {
            return [];
        }

        const inventory = JSON.parse(data);

        if (!Array.isArray(inventory)) {
            return [];
        }

        return inventory;

    } catch (error) {
        console.error("Inventory error:", error);

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

    inventory.push(createInventoryItem(item));

    saveInventory(inventory);

    return inventory;
}


function removeInventoryItems(uids) {
    const inventory = getInventory();

    const result = inventory.filter(
        item => !uids.includes(item.uid)
    );

    saveInventory(result);

    return result;
}


/* =========================================================
   XP
   ========================================================= */

function getXP() {
    return Number(localStorage.getItem("chak338_xp") || 0);
}


function addXP(amount) {
    const current = getXP();

    const newXP = current + amount;

    localStorage.setItem(
        "chak338_xp",
        String(newXP)
    );

    return newXP;
}


/* =========================================================
   КУЛДАУНЫ
   ========================================================= */

function getCooldownKey(caseId) {
    return "chak338_case_" + caseId;
}


function getCaseLastOpen(caseId) {
    return Number(
        localStorage.getItem(
            getCooldownKey(caseId)
        ) || 0
    );
}


function getCaseRemaining(caseId) {

    const caseData = getCase(caseId);

    if (!caseData) {
        return 0;
    }

    const lastOpen = getCaseLastOpen(caseId);

    const finish =
        lastOpen +
        caseData.cooldown;

    return Math.max(
        0,
        finish - Date.now()
    );
}


function canOpenCase(caseId) {
    return getCaseRemaining(caseId) <= 0;
}


function setCaseOpened(caseId) {

    localStorage.setItem(
        getCooldownKey(caseId),
        String(Date.now())
    );
}


/* =========================================================
   ВЫБОР ПРЕДМЕТА
   ========================================================= */

function randomCaseItem(caseId) {

    const items = getCaseItems(caseId);

    if (!items.length) {
        return null;
    }

    /*
       Используем реальные веса.

       chance 55
       chance 25
       chance 12
       chance 6
       chance 1.8
       chance 0.2
    */

    const total = items.reduce(
        (sum, item) =>
            sum + Number(item.chance || 0),
        0
    );

    let random = Math.random() * total;

    for (const item of items) {

        random -= Number(item.chance || 0);

        if (random <= 0) {
            return item;
        }
    }

    return items[items.length - 1];
}
