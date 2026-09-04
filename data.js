/* ============================================================
   CHAK338 DATABASE
   ============================================================

   ВСЕ ПРЕДМЕТЫ САЙТА ХРАНЯТСЯ ЗДЕСЬ.

   Чтобы добавить предмет:

   1. Загрузи картинку в:
      assets/items/

   2. Добавь объект ниже.

   ============================================================ */


/* ============================================================
   РЕДКОСТИ
   ============================================================ */

const RARITIES = {

    common: {
        name: "Обычный",
        color: "#aeb7c8"
    },

    uncommon: {
        name: "Необычный",
        color: "#62d98b"
    },

    rare: {
        name: "Редкий",
        color: "#55a8ff"
    },

    epic: {
        name: "Эпический",
        color: "#b87cff"
    },

    legendary: {
        name: "Легендарный",
        color: "#ffb84d"
    },

    mythic: {
        name: "Мифический",
        color: "#ff4c72"
    }

};


/* ============================================================
   КЕЙСЫ
   ============================================================ */

const CASES = [

    {
        id: "uhilyant",

        name: "UHILYANT",

        description: "Уникальные персонажи",

        image: "assets/cases/uhilyant.png",

        color: "blue",

        cooldown:
            5 * 60 * 60 * 1000,

        xp: 100
    },


    {
        id: "kitaen",

        name: "KITAEN",

        description: "Уникальная одежда",

        image: "assets/cases/kitaen.png",

        color: "purple",

        cooldown:
            12 * 60 * 60 * 1000,

        xp: 150
    },


    {
        id: "chak",

        name: "CHAK",

        description: "Оружие и экипировка",

        image: "assets/cases/chak.png",

        color: "red",

        cooldown:
            24 * 60 * 60 * 1000,

        xp: 200
    },


    /* ========================================================
       НОВЫЙ КЕЙС ВИННИТСА
       ======================================================== */

    {
        id: "vinnitsa",

        name: "VINNITSA",

        description: "Только Dota 2",

        image: "assets/cases/vinnitsa.png",

        color: "dota",

        cooldown:
            24 * 60 * 60 * 1000,

        xp: 250
    }

];


/* ============================================================
   ПРЕДМЕТЫ
   ============================================================

   price = цена предмета В CHAK338

   chance = шанс выпадения

   caseId = из какого кейса выпадает

   ============================================================ */


const ITEMS = [

    /* ========================================================
       UHILYANT
       ПЕРСОНАЖИ
       ======================================================== */

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

        image:
            "assets/items/uhilyant_character.png",

        rarity: "legendary",

        price: 750,

        type: "character",

        caseId: "uhilyant",

        chance: 1.8
    },


    {
        id: "338_character",

        name: "338",

        image:
            "assets/items/338_character.png",

        rarity: "mythic",

        price: 2500,

        type: "character",

        caseId: "uhilyant",

        chance: 0.2
    },


    /* ========================================================
       KITAEN
       ОДЕЖДА
       ======================================================== */

    {
        id: "basic_tshirt",

        name: "Basic T-Shirt",

        image:
            "assets/items/basic_tshirt.png",

        rarity: "common",

        price: 10,

        type: "clothing",

        caseId: "kitaen",

        chance: 55
    },


    {
        id: "chak_hoodie",

        name: "CHAK Hoodie",

        image:
            "assets/items/chak_hoodie.png",

        rarity: "uncommon",

        price: 25,

        type: "clothing",

        caseId: "kitaen",

        chance: 25
    },


    {
        id: "neon_jacket",

        name: "Neon Jacket",

        image:
            "assets/items/neon_jacket.png",

        rarity: "rare",

        price: 75,

        type: "clothing",

        caseId: "kitaen",

        chance: 12
    },


    {
        id: "dark_outfit",

        name: "Dark Outfit",

        image:
            "assets/items/dark_outfit.png",

        rarity: "epic",

        price: 200,

        type: "clothing",

        caseId: "kitaen",

        chance: 6
    },


    {
        id: "golden_outfit",

        name: "Golden Outfit",

        image:
            "assets/items/golden_outfit.png",

        rarity: "legendary",

        price: 750,

        type: "clothing",

        caseId: "kitaen",

        chance: 1.8
    },


    {
        id: "338_outfit",

        name: "338 Outfit",

        image:
            "assets/items/338_outfit.png",

        rarity: "mythic",

        price: 2500,

        type: "clothing",

        caseId: "kitaen",

        chance: 0.2
    },


    /* ========================================================
       CHAK
       ОРУЖИЕ
       ======================================================== */

    {
        id: "wooden_sword",

        name: "Wooden Sword",

        image:
            "assets/items/wooden_sword.png",

        rarity: "common",

        price: 10,

        type: "weapon",

        caseId: "chak",

        chance: 55
    },


    {
        id: "iron_shield",

        name: "Iron Shield",

        image:
            "assets/items/iron_shield.png",

        rarity: "uncommon",

        price: 25,

        type: "shield",

        caseId: "chak",

        chance: 25
    },


    {
        id: "neon_blade",

        name: "Neon Blade",

        image:
            "assets/items/neon_blade.png",

        rarity: "rare",

        price: 75,

        type: "weapon",

        caseId: "chak",

        chance: 12
    },


    {
        id: "shadow_katana",

        name: "Shadow Katana",

        image:
            "assets/items/shadow_katana.png",

        rarity: "epic",

        price: 200,

        type: "weapon",

        caseId: "chak",

        chance: 6
    },


    {
        id: "chak_hammer",

        name: "CHAK Hammer",

        image:
            "assets/items/chak_hammer.png",

        rarity: "legendary",

        price: 750,

        type: "weapon",

        caseId: "chak",

        chance: 1.8
    },


    {
        id: "338_destroyer",

        name: "338 Destroyer",

        image:
            "assets/items/338_destroyer.png",

        rarity: "mythic",

        price: 2500,

        type: "weapon",

        caseId: "chak",

        chance: 0.2
    },


    /* ========================================================
       VINNITSA
       DOTA 2
       ========================================================

       Здесь ТОЛЬКО DOTA.

       Цены уже наши CHAK338.

       Tango       = 10
       Branch      = 25
       Blink       = 75
       Black King  = 200
       Aghanim     = 750
       Divine Rapier=2500

       ======================================================== */


    {
        id: "dota_tango",

        name: "Tango",

        image:
            "assets/items/dota/tango.png",

        rarity: "common",

        price: 10,

        type: "dota",

        caseId: "vinnitsa",

        chance: 55
    },


    {
        id: "dota_branches",

        name: "Iron Branch",

        image:
            "assets/items/dota/branches.png",

        rarity: "uncommon",

        price: 25,

        type: "dota",

        caseId: "vinnitsa",

        chance: 25
    },


    {
        id: "dota_blink",

        name: "Blink Dagger",

        image:
            "assets/items/dota/blink.png",

        rarity: "rare",

        price: 75,

        type: "dota",

        caseId: "vinnitsa",

        chance: 12
    },


    {
        id: "dota_bkb",

        name: "Black King Bar",

        image:
            "assets/items/dota/bkb.png",

        rarity: "epic",

        price: 200,

        type: "dota",

        caseId: "vinnitsa",

        chance: 6
    },


    {
        id: "dota_aghanim",

        name: "Aghanim's Scepter",

        image:
            "assets/items/dota/aghanim.png",

        rarity: "legendary",

        price: 750,

        type: "dota",

        caseId: "vinnitsa",

        chance: 1.8
    },


    {
        id: "dota_rapier",

        name: "Divine Rapier",

        image:
            "assets/items/dota/rapier.png",

        rarity: "mythic",

        price: 2500,

        type: "dota",

        caseId: "vinnitsa",

        chance: 0.2
    }

];


/* ============================================================
   HELPER FUNCTIONS
   ============================================================ */


function getRarity(rarity) {

    return (
        RARITIES[rarity] ||
        RARITIES.common
    );

}


function getCase(caseId) {

    return CASES.find(
        item => item.id === caseId
    );

}


function getItem(itemId) {

    return ITEMS.find(
        item => item.id === itemId
    );

}


function getCaseItems(caseId) {

    return ITEMS.filter(
        item => item.caseId === caseId
    );

}


function formatPrice(price) {

    return Number(price)
        .toLocaleString("ru-RU");

}


/* ============================================================
   INVENTORY
   ============================================================ */


function getInventory() {

    try {

        const data =
            localStorage.getItem(
                "chak338_inventory"
            );

        if (!data) {
            return [];
        }

        const parsed =
            JSON.parse(data);

        return Array.isArray(parsed)
            ? parsed
            : [];

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

    const inventory =
        getInventory();


    inventory.push({

        uid:
            Date.now().toString(36) +
            Math.random()
                .toString(36)
                .substring(2,10),

        itemId:
            item.id,

        name:
            item.name,

        image:
            item.image,

        rarity:
            item.rarity,

        rarityName:
            getRarity(item.rarity).name,

        price:
            item.price,

        type:
            item.type,

        caseId:
            item.caseId,

        date:
            new Date().toISOString()

    });


    saveInventory(
        inventory
    );

}


function removeInventoryItems(uids) {

    const inventory =
        getInventory();


    const result =
        inventory.filter(
            item =>
                !uids.includes(
                    item.uid
                )
        );


    saveInventory(
        result
    );

}


function getXP() {

    return Number(
        localStorage.getItem(
            "chak338_xp"
        ) || 0
    );

}


function addXP(amount) {

    const xp =
        getXP() + amount;


    localStorage.setItem(
        "chak338_xp",
        String(xp)
    );


    return xp;

}


/* ============================================================
   COOLDOWNS
   ============================================================ */


function getCooldownKey(caseId) {

    return (
        "chak338_cooldown_" +
        caseId
    );

}


function getRemaining(caseId) {

    const caseData =
        getCase(caseId);


    if (!caseData) {
        return 0;
    }


    const last =
        Number(
            localStorage.getItem(
                getCooldownKey(caseId)
            ) || 0
        );


    return Math.max(
        0,
        last +
        caseData.cooldown -
        Date.now()
    );

}


function canOpenCase(caseId) {

    return (
        getRemaining(caseId) <= 0
    );

}


function setCaseOpened(caseId) {

    localStorage.setItem(

        getCooldownKey(caseId),

        String(Date.now())

    );

}


/* ============================================================
   РАНДОМНЫЙ ПРЕДМЕТ
   ============================================================ */


function randomCaseItem(caseId) {

    const items =
        getCaseItems(caseId);


    const total =
        items.reduce(

            (sum, item) =>
                sum +
                Number(
                    item.chance || 0
                ),

            0

        );


    let random =
        Math.random() *
        total;


    for (const item of items) {

        random -=
            Number(
                item.chance || 0
            );


        if (random <= 0) {

            return item;

        }

    }


    return items[
        items.length - 1
    ];

}
