/* =========================================================
   CHAK338 DATA
   ========================================================= */

const RARITIES = {
  COMMON: {
    name: "COMMON",
    ru: "Обычный",
    price: 10,
    color: "#64748b"
  },
  UNCOMMON: {
    name: "UNCOMMON",
    ru: "Необычный",
    price: 25,
    color: "#22c55e"
  },
  RARE: {
    name: "RARE",
    ru: "Редкий",
    price: 75,
    color: "#38bdf8"
  },
  EPIC: {
    name: "EPIC",
    ru: "Эпический",
    price: 200,
    color: "#a855f7"
  },
  LEGENDARY: {
    name: "LEGENDARY",
    ru: "Легендарный",
    price: 750,
    color: "#f59e0b"
  },
  MYTHIC: {
    name: "MYTHIC",
    ru: "Мифический",
    price: 2500,
    color: "#ef4444"
  }
};


/* =========================================================
   CASES
   ========================================================= */

const CASES = {

  lviv: {
    id: "lviv",
    name: "LVIV",
    subtitle: "ПЕРСОНАЖИ",
    type: "Персонажи",
    color: "#38bdf8",
    cooldown: 5 * 60 * 60 * 1000,
    cooldownText: "5 часов",
    xp: 100,
    image: "assets/cases/lviv.png",

    items: [
      {
        id: "rookie",
        name: "Rookie",
        rarity: "COMMON",
        chance: 35,
        image: "assets/items/rookie.png"
      },
      {
        id: "masky",
        name: "Masky",
        rarity: "UNCOMMON",
        chance: 25,
        image: "assets/items/masky.png"
      },
      {
        id: "cyber",
        name: "Cyber",
        rarity: "RARE",
        chance: 18,
        image: "assets/items/cyber.png"
      },
      {
        id: "shadow",
        name: "Shadow",
        rarity: "EPIC",
        chance: 12,
        image: "assets/items/shadow.png"
      },
      {
        id: "glitch",
        name: "Glitch",
        rarity: "LEGENDARY",
        chance: 7,
        image: "assets/items/glitch.png"
      },
      {
        id: "uhilyant",
        name: "UHILYANT",
        rarity: "MYTHIC",
        chance: 3,
        image: "assets/items/uhilyant.png"
      }
    ]
  },


  kiyiv: {
    id: "kiyiv",
    name: "KIYIV",
    subtitle: "ОДЕЖДА",
    type: "Одежда",
    color: "#a855f7",
    cooldown: 12 * 60 * 60 * 1000,
    cooldownText: "12 часов",
    xp: 150,
    image: "assets/cases/kiyiv.png",

    items: [
      {
        id: "tshirt",
        name: "Basic T-Shirt",
        rarity: "COMMON",
        chance: 35,
        image: "assets/items/tshirt.png"
      },
      {
        id: "hoodie",
        name: "CHAK Hoodie",
        rarity: "UNCOMMON",
        chance: 25,
        image: "assets/items/hoodie.png"
      },
      {
        id: "neon-jacket",
        name: "Neon Jacket",
        rarity: "RARE",
        chance: 18,
        image: "assets/items/neon-jacket.png"
      },
      {
        id: "dark-mask",
        name: "Dark Mask",
        rarity: "EPIC",
        chance: 12,
        image: "assets/items/dark-mask.png"
      },
      {
        id: "crown",
        name: "Golden Crown",
        rarity: "LEGENDARY",
        chance: 7,
        image: "assets/items/crown.png"
      },
      {
        id: "338-outfit",
        name: "338 Outfit",
        rarity: "MYTHIC",
        chance: 3,
        image: "assets/items/338-outfit.png"
      }
    ]
  },


  vinnitsa: {
    id: "vinnitsa",
    name: "VINNYTSIA",
    subtitle: "DOTA 2",
    type: "Dota 2",
    color: "#ef4444",
    cooldown: 24 * 60 * 60 * 1000,
    cooldownText: "24 часа",
    xp: 250,
    image: "assets/cases/vinnitsa.png",

    items: [
      {
        id: "tango",
        name: "Tango",
        rarity: "COMMON",
        chance: 55,
        image: "assets/items/dota/tango.png"
      },
      {
        id: "iron-branch",
        name: "Iron Branch",
        rarity: "UNCOMMON",
        chance: 25,
        image: "assets/items/dota/branches.png"
      },
      {
        id: "blink",
        name: "Blink Dagger",
        rarity: "RARE",
        chance: 12,
        image: "assets/items/dota/blink.png"
      },
      {
        id: "bkb",
        name: "Black King Bar",
        rarity: "EPIC",
        chance: 6,
        image: "assets/items/dota/bkb.png"
      },
      {
        id: "aghanim",
        name: "Aghanim's Scepter",
        rarity: "LEGENDARY",
        chance: 1.8,
        image: "assets/items/dota/aghanim.png"
      },
      {
        id: "rapier",
        name: "Divine Rapier",
        rarity: "MYTHIC",
        chance: 0.2,
        image: "assets/items/dota/rapier.png"
      }
    ]
  }

};


/* =========================================================
   HELPERS
   ========================================================= */

function getCase(id) {
  return CASES[id];
}

function getAllItems() {
  const result = [];

  Object.values(CASES).forEach(c => {
    c.items.forEach(item => {
      result.push({
        ...item,
        caseId: c.id,
        caseName: c.name,
        type: c.type,
        price: RARITIES[item.rarity].price,
        rarityName: RARITIES[item.rarity].ru
      });
    });
  });

  return result;
}

function getItem(caseId, itemId) {
  const c = CASES[caseId];
  if (!c) return null;

  const item = c.items.find(x => x.id === itemId);
  if (!item) return null;

  return {
    ...item,
    caseId: c.id,
    caseName: c.name,
    type: c.type,
    price: RARITIES[item.rarity].price,
    rarityName: RARITIES[item.rarity].ru
  };
}

function getRarity(rarity) {
  return RARITIES[rarity] || RARITIES.COMMON;
}


/* =========================================================
   STORAGE
   ========================================================= */

function getInventory() {
  try {
    return JSON.parse(
      localStorage.getItem("chak338_inventory") || "[]"
    );
  } catch (e) {
    return [];
  }
}

function saveInventory(items) {
  localStorage.setItem(
    "chak338_inventory",
    JSON.stringify(items)
  );
}

function addInventoryItem(item) {
  const inventory = getInventory();

  inventory.unshift({
    uid:
      Date.now() +
      "-" +
      Math.random().toString(16).slice(2),

    id: item.id,
    caseId: item.caseId,
    caseName: item.caseName,
    name: item.name,
    rarity: item.rarity,
    rarityName: item.rarityName,
    price: item.price,
    image: item.image,
    type: item.type,
    date: new Date().toISOString()
  });

  saveInventory(inventory);
}


/* =========================================================
   XP
   ========================================================= */

function getXP() {
  return Number(
    localStorage.getItem("chak338_xp") || 0
  );
}

function getLevel() {
  return Number(
    localStorage.getItem("chak338_level") || 1
  );
}

function addXP(amount) {
  let xp = getXP();
  let level = getLevel();

  xp += amount;

  while (xp >= 1000) {
    xp -= 1000;
    level++;
  }

  localStorage.setItem("chak338_xp", String(xp));
  localStorage.setItem("chak338_level", String(level));

  return {
    xp,
    level
  };
}


/* =========================================================
   CASE COOLDOWN
   ========================================================= */

function getCooldownKey(caseId) {
  return "chak338_case_" + caseId;
}

function getCaseCooldown(caseId) {
  return Number(
    localStorage.getItem(getCooldownKey(caseId)) || 0
  );
}

function isCaseReady(caseId) {
  return Date.now() >= getCaseCooldown(caseId);
}

function setCaseCooldown(caseId) {
  const c = getCase(caseId);

  if (!c) return;

  localStorage.setItem(
    getCooldownKey(caseId),
    String(Date.now() + c.cooldown)
  );
}

function getRemainingCooldown(caseId) {
  return Math.max(
    0,
    getCaseCooldown(caseId) - Date.now()
  );
}


/* =========================================================
   RANDOM DROP
   ========================================================= */

function randomDrop(caseId) {
  const c = getCase(caseId);

  if (!c) return null;

  let random = Math.random() * 100;

  for (const item of c.items) {
    random -= item.chance;

    if (random <= 0) {
      return getItem(caseId, item.id);
    }
  }

  return getItem(
    caseId,
    c.items[c.items.length - 1].id
  );
}


/* =========================================================
   FORMAT
   ========================================================= */

function formatMoney(value) {
  return Number(value).toLocaleString("ru-RU") + " ₴";
}

function formatTime(ms) {
  if (ms <= 0) return "ГОТОВО";

  const totalSeconds = Math.ceil(ms / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );
  const seconds = totalSeconds % 60;

  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
}
