/* CHAK338 Gaming Hub — единый каталог предметов */

const RARITIES = {
  common: {
    name: 'Обычная',
    color: '#94a3b8'
  },
  uncommon: {
    name: 'Необычная',
    color: '#22c55e'
  },
  rare: {
    name: 'Редкая',
    color: '#38bdf8'
  },
  epic: {
    name: 'Эпическая',
    color: '#a855f7'
  },
  legendary: {
    name: 'Легендарная',
    color: '#f59e0b'
  },
  mythic: {
    name: 'Мифическая',
    color: '#ef4444'
  }
};


const CASES = [

  {
    id: 'clash',
    name: 'CLASH OF CLANS',
    short: 'CLASH',
    subtitle: 'CLASH OF CLANS',
    color: '#f59e0b',
    cooldownHours: 5,
    xp: 100,
    description: 'Персонажи Clash of Clans — от варвара до королевы лучниц.',
    image: 'assets/cases/clash-case.png'
  },

  {
    id: 'cs2',
    name: 'CS2',
    short: 'CS2',
    subtitle: 'COUNTER-STRIKE 2',
    color: '#38bdf8',
    cooldownHours: 12,
    xp: 150,
    description: 'Оружие, ножи и легендарные скины.',
    image: 'assets/cases/cs2-case.png'
  },

  {
    id: 'dota2',
    name: 'DOTA 2',
    short: 'DOTA',
    subtitle: 'DOTA 2',
    color: '#ef4444',
    cooldownHours: 24,
    xp: 250,
    description: 'Артефакты, расходники и дорогие предметы Dota 2.',
    image: 'assets/cases/dota-case.png'
  }

];


/* -------------------------------------------------------
   Встроенные SVG-картинки предметов.
   Поэтому предметы не будут показывать битую картинку.
------------------------------------------------------- */

function svgIcon(label, emoji, color) {

  const safe = String(label)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360">

    <defs>

      <radialGradient id="bg">
        <stop stop-color="${color}" stop-opacity=".28"/>
        <stop offset="1"
              stop-color="#07070b"
              stop-opacity="0"/>
      </radialGradient>

      <linearGradient id="shine" x1="0" x2="1">
        <stop stop-color="${color}" stop-opacity=".9"/>
        <stop offset="1"
              stop-color="#fff"
              stop-opacity=".15"/>
      </linearGradient>

    </defs>

    <rect
      width="500"
      height="360"
      rx="34"
      fill="#09090f"
    />

    <rect
      x="12"
      y="12"
      width="476"
      height="336"
      rx="28"
      fill="url(#bg)"
      stroke="${color}"
      stroke-opacity=".28"
    />

    <circle
      cx="250"
      cy="150"
      r="86"
      fill="#11111b"
      stroke="${color}"
      stroke-opacity=".35"
      stroke-width="3"
    />

    <circle
      cx="250"
      cy="150"
      r="68"
      fill="${color}"
      opacity=".09"
    />

    <text
      x="250"
      y="178"
      text-anchor="middle"
      font-size="92"
    >${emoji}</text>

    <rect
      x="60"
      y="264"
      width="380"
      height="3"
      rx="2"
      fill="url(#shine)"
      opacity=".5"
    />

    <text
      x="250"
      y="310"
      text-anchor="middle"
      fill="#fff"
      font-family="Arial,sans-serif"
      font-size="26"
      font-weight="900"
    >${safe}</text>

  </svg>`;

  return 'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(svg);
}


/* -------------------------------------------------------
   ПРЕДМЕТЫ
------------------------------------------------------- */

const rawItems = [

  /* =========================
     CLASH OF CLANS
  ========================= */

  [
    'clash_barbarian',
    'clash',
    'Варвар',
    '🪓',
    10,
    'common'
  ],

  [
    'clash_archer',
    'clash',
    'Лучница',
    '🏹',
    15,
    'common'
  ],

  [
    'clash_bomber',
    'clash',
    'Бомбер',
    '💣',
    20,
    'common'
  ],

  [
    'clash_hog',
    'clash',
    'Хог Райдер',
    '🐗',
    25,
    'common'
  ],

  [
    'clash_wizard',
    'clash',
    'Маг',
    '🧙',
    50,
    'uncommon'
  ],

  [
    'clash_dragon',
    'clash',
    'Дракон',
    '🐉',
    75,
    'uncommon'
  ],

  [
    'clash_minion',
    'clash',
    'Миньен летающий',
    '👾',
    100,
    'rare'
  ],

  [
    'clash_witch',
    'clash',
    'Ведьма',
    '🧟',
    200,
    'epic'
  ],

  [
    'clash_valk',
    'clash',
    'Валькирия',
    '⚔️',
    300,
    'epic'
  ],

  [
    'clash_peka',
    'clash',
    'ПЕККА',
    '🤖',
    400,
    'legendary'
  ],

  [
    'clash_electro',
    'clash',
    'Электродракон',
    '⚡',
    500,
    'legendary'
  ],

  [
    'clash_golem',
    'clash',
    'Голем',
    '🪨',
    600,
    'legendary'
  ],

  [
    'clash_inferno',
    'clash',
    'Горящий дракон',
    '🔥',
    750,
    'legendary'
  ],

  [
    'clash_queen',
    'clash',
    'Королева лучниц',
    '👸',
    1000,
    'mythic'
  ],


  /* =========================
     CS2
  ========================= */

  [
    'cs2_glock',
    'cs2',
    'Glock-18',
    '🔫',
    10,
    'common'
  ],

  [
    'cs2_usp',
    'cs2',
    'USP-S',
    '🔫',
    15,
    'common'
  ],

  [
    'cs2_deagle',
    'cs2',
    'Desert Eagle',
    '🔫',
    20,
    'common'
  ],

  [
    'cs2_mp5',
    'cs2',
    'MP5',
    '🔫',
    25,
    'common'
  ],

  [
    'cs2_galil',
    'cs2',
    'Galil',
    '🔫',
    50,
    'uncommon'
  ],

  [
    'cs2_ssg',
    'cs2',
    'SSG 08',
    '🎯',
    75,
    'uncommon'
  ],

  [
    'cs2_sg',
    'cs2',
    'SG 553',
    '🔫',
    100,
    'rare'
  ],

  [
    'cs2_m4a4',
    'cs2',
    'M4A4 без глушителя',
    '🔫',
    200,
    'epic'
  ],

  [
    'cs2_m4a1s',
    'cs2',
    'M4A1-S с глушителем',
    '🔫',
    250,
    'epic'
  ],

  [
    'cs2_vulcan',
    'cs2',
    'AK-47 Вулкан',
    '🔫',
    500,
    'legendary'
  ],

  [
    'cs2_karambit',
    'cs2',
    'Керамбит | Волны',
    '🗡️',
    600,
    'legendary'
  ],

  [
    'cs2_butterfly',
    'cs2',
    'Нож-бабочка | Волны',
    '🔪',
    750,
    'legendary'
  ],

  [
    'cs2_dragon',
    'cs2',
    'AWP | Dragon Lore',
    '🎯',
    1000,
    'mythic'
  ],


  /* =========================
     DOTA 2
  ========================= */

  [
    'dota_tango',
    'dota2',
    'Tango',
    '🌿',
    10,
    'common'
  ],

  [
    'dota_flask',
    'dota2',
    'Flask',
    '🧪',
    15,
    'common'
  ],

  [
    'dota_ward',
    'dota2',
    'Ward',
    '👁️',
    20,
    'common'
  ],

  [
    'dota_smoke',
    'dota2',
    'Smoke',
    '💨',
    25,
    'common'
  ],

  [
    'dota_bottle',
    'dota2',
    'Bottle',
    '🧴',
    30,
    'common'
  ],

  [
    'dota_boots',
    'dota2',
    'Boots of Speed',
    '🥾',
    50,
    'uncommon'
  ],

  [
    'dota_voodoo',
    'dota2',
    'Voodoo Mask',
    '🎭',
    75,
    'uncommon'
  ],

  [
    'dota_morbid',
    'dota2',
    'Morbid Mask',
    '💀',
    85,
    'rare'
  ],

  [
    'dota_gem',
    'dota2',
    'Gem',
    '💎',
    100,
    'rare'
  ],

  [
    'dota_shard',
    'dota2',
    "Aghanim's Shard",
    '🔷',
    125,
    'rare'
  ],

  [
    'dota_point',
    'dota2',
    'Point Booster',
    '🔵',
    150,
    'rare'
  ],

  [
    'dota_hyper',
    'dota2',
    'Hyperstone',
    '🟢',
    200,
    'epic'
  ],

  [
    'dota_eaglesong',
    'dota2',
    'Eaglesong',
    '🪽',
    250,
    'epic'
  ],

  [
    'dota_relic',
    'dota2',
    'Sacred Relic',
    '🟠',
    300,
    'epic'
  ],

  [
    'dota_moon',
    'dota2',
    'Moon Shard',
    '🌙',
    400,
    'legendary'
  ],

  [
    'dota_parasma',
    'dota2',
    'Parasma',
    '⚔️',
    500,
    'legendary'
  ],

  [
    'dota_aghanim',
    'dota2',
    "Aghanim's Scepter",
    '🔷',
    600,
    'legendary'
  ],

  [
    'dota_satanic',
    'dota2',
    'Satanic',
    '🩸',
    750,
    'legendary'
  ],

  [
    'dota_rapier',
    'dota2',
    'Divine Rapier',
    '⚔️',
    1000,
    'mythic'
  ]

];


/* -------------------------------------------------------
   Создание объектов
------------------------------------------------------- */

const ITEMS = rawItems.map((x) => {

  const [
    id,
    caseId,
    name,
    emoji,
    price,
    rarity
  ] = x;

  const color = RARITIES[rarity].color;

  /*
    Чем дороже предмет,
    тем меньше его вес при выпадении.
  */

  const chance =
    100 / Math.pow(price / 10, 0.82);

  return {

    id,
    caseId,
    name,
    emoji,
    price,
    rarity,
    chance,
    type: caseId,

    image: svgIcon(
      name,
      emoji,
      color
    )

  };

});


/* -------------------------------------------------------
   HELPERS
------------------------------------------------------- */

function getCase(id) {

  return CASES.find(
    c => c.id === id
  );

}


function getItem(id) {

  return ITEMS.find(
    i => i.id === id
  );

}


function getCaseItems(caseId) {

  return ITEMS.filter(
    i => i.caseId === caseId
  );

}


function formatPrice(value) {

  return `${Number(value || 0).toLocaleString('ru-RU')} монет`;

}


/* -------------------------------------------------------
   INVENTORY
------------------------------------------------------- */

function getInventory() {

  try {

    return JSON.parse(
      localStorage.getItem(
        'chak338_inventory'
      ) || '[]'
    );

  } catch {

    return [];

  }

}


function saveInventory(items) {

  localStorage.setItem(
    'chak338_inventory',
    JSON.stringify(items)
  );

}


function addInventoryItem(item) {

  const inventory =
    getInventory();

  inventory.push({

    ...item,

    uid:
      item.id +
      '_' +
      Date.now() +
      '_' +
      Math.random()
        .toString(36)
        .slice(2, 8),

    droppedAt:
      Date.now()

  });

  saveInventory(inventory);

}


function removeInventoryItems(uids) {

  const set =
    new Set(uids);

  saveInventory(

    getInventory().filter(
      item => !set.has(item.uid)
    )

  );

}


/* -------------------------------------------------------
   XP
------------------------------------------------------- */

function getXP() {

  return Number(
    localStorage.getItem(
      'chak338_xp'
    ) || 0
  );

}


function addXP(value) {

  const xp =
    getXP() +
    Number(value || 0);

  localStorage.setItem(
    'chak338_xp',
    String(xp)
  );

  return xp;

}


function getLevel() {

  return Math.floor(
    getXP() / 1000
  ) + 1;

}


/* -------------------------------------------------------
   COOLDOWN
------------------------------------------------------- */

function cooldownKey(caseId) {

  return `chak338_case_${caseId}`;

}


function getRemaining(caseId) {

  const c =
    getCase(caseId);

  const last =
    Number(
      localStorage.getItem(
        cooldownKey(caseId)
      ) || 0
    );

  if (!last) {
    return 0;
  }

  return Math.max(
    0,
    c.cooldownHours * 3600000 -
    (Date.now() - last)
  );

}


function getNextOpenTime(caseId) {

  const c =
    getCase(caseId);

  const last =
    Number(
      localStorage.getItem(
        cooldownKey(caseId)
      ) || 0
    );

  if (!last) {
    return new Date();
  }

  return new Date(
    last +
    c.cooldownHours * 3600000
  );

}


function canOpenCase(caseId) {

  return getRemaining(caseId) <= 0;

}


function setCaseOpened(caseId) {

  localStorage.setItem(
    cooldownKey(caseId),
    String(Date.now())
  );

}


/* -------------------------------------------------------
   СЛУЧАЙНЫЙ ПРЕДМЕТ
------------------------------------------------------- */

function randomCaseItem(caseId) {

  const items =
    getCaseItems(caseId);

  const total =
    items.reduce(
      (sum, item) =>
        sum + item.chance,
      0
    );

  let roll =
    Math.random() * total;

  for (const item of items) {

    roll -= item.chance;

    if (roll <= 0) {
      return item;
    }

  }

  return items[
    items.length - 1
  ];

}
