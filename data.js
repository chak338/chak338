/* =========================================================
   CHAK338 GAMING HUB — DATA
   ========================================================= */

function svgIcon(symbol, title = '', bg = '#171a27', accent = '#8b5cf6') {
    const safeTitle = String(title).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
        <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="${bg}"/>
                <stop offset="100%" stop-color="#080a12"/>
            </linearGradient>
            <filter id="shadow">
                <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000" flood-opacity=".55"/>
            </filter>
        </defs>

        <rect width="512" height="512" rx="60" fill="url(#g)"/>

        <circle cx="256" cy="230" r="145"
                fill="${accent}"
                opacity=".12"/>

        <circle cx="256" cy="230" r="118"
                fill="#0b0e18"
                stroke="${accent}"
                stroke-width="4"
                opacity=".95"/>

        <text x="256" y="275"
              text-anchor="middle"
              font-size="125"
              font-family="Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif"
              filter="url(#shadow)">${symbol}</text>

        <rect x="45" y="390" width="422" height="70" rx="22"
              fill="#0a0c14"
              stroke="${accent}"
              stroke-opacity=".35"/>

        <text x="256" y="435"
              text-anchor="middle"
              fill="#ffffff"
              font-size="25"
              font-family="Arial, sans-serif"
              font-weight="700">${safeTitle}</text>
    </svg>`;

    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}


/* =========================================================
   CASES
   ========================================================= */

const CASES = [

    /* ================= CLASH OF CLANS ================= */

    {
        id: 'clash',
        name: 'Clash of Clans',
        subtitle: 'CLASH CASE',
        image: 'clash-case.png',
        cooldown: 5 * 60 * 60 * 1000,
        xp: 100,
        color: '#f59e0b',

        items: [
            {
                id: 'coc-barbarian',
                name: 'Варвар',
                price: 10,
                rarity: 'Обычный',
                image: svgIcon('⚔️', 'Варвар', '#27160b', '#f59e0b')
            },
            {
                id: 'coc-archer',
                name: 'Лучница',
                price: 15,
                rarity: 'Обычный',
                image: svgIcon('🏹', 'Лучница', '#241029', '#ec4899')
            },
            {
                id: 'coc-bomber',
                name: 'Бомбер',
                price: 20,
                rarity: 'Обычный',
                image: svgIcon('💣', 'Бомбер', '#101827', '#60a5fa')
            },
            {
                id: 'coc-hog',
                name: 'Хог Райдер',
                price: 25,
                rarity: 'Обычный',
                image: svgIcon('🐗', 'Хог Райдер', '#24150b', '#f97316')
            },
            {
                id: 'coc-wizard',
                name: 'Маг',
                price: 50,
                rarity: 'Редкий',
                image: svgIcon('🧙', 'Маг', '#17113b', '#8b5cf6')
            },
            {
                id: 'coc-dragon',
                name: 'Дракон',
                price: 75,
                rarity: 'Редкий',
                image: svgIcon('🐉', 'Дракон', '#300d12', '#ef4444')
            },
            {
                id: 'coc-minion',
                name: 'Миньен летающий',
                price: 100,
                rarity: 'Редкий',
                image: svgIcon('👿', 'Миньен', '#171329', '#a855f7')
            },
            {
                id: 'coc-witch',
                name: 'Ведьма',
                price: 200,
                rarity: 'Эпический',
                image: svgIcon('🧙‍♀️', 'Ведьма', '#171329', '#c084fc')
            },
            {
                id: 'coc-valkyrie',
                name: 'Валькирия',
                price: 300,
                rarity: 'Эпический',
                image: svgIcon('🪓', 'Валькирия', '#28110e', '#fb7185')
            },
            {
                id: 'coc-pekka',
                name: 'ПЕККА',
                price: 400,
                rarity: 'Легендарный',
                image: svgIcon('🛡️', 'ПЕККА', '#111827', '#38bdf8')
            },
            {
                id: 'coc-edragon',
                name: 'Электродракон',
                price: 500,
                rarity: 'Легендарный',
                image: svgIcon('⚡', 'Электродракон', '#071b2c', '#22d3ee')
            },
            {
                id: 'coc-golem',
                name: 'Голем',
                price: 600,
                rarity: 'Легендарный',
                image: svgIcon('🗿', 'Голем', '#1c1710', '#a78b5a')
            },
            {
                id: 'coc-fire-dragon',
                name: 'Горящий дракон',
                price: 750,
                rarity: 'Мифический',
                image: svgIcon('🔥', 'Горящий дракон', '#2c0d05', '#f97316')
            },
            {
                id: 'coc-queen',
                name: 'Королева лучниц',
                price: 1000,
                rarity: 'Мифический',
                image: svgIcon('👑', 'Королева лучниц', '#21152c', '#f472b6')
            }
        ]
    },


    /* ================= CS2 ================= */

    {
        id: 'cs2',
        name: 'CS2',
        subtitle: 'CS2 CASE',
        image: 'cs2-case.png',
        cooldown: 12 * 60 * 60 * 1000,
        xp: 150,
        color: '#3b82f6',

        items: [
            {
                id: 'cs-glock',
                name: 'Glock',
                price: 10,
                rarity: 'Обычный',
                image: svgIcon('🔫', 'Glock', '#10151f', '#60a5fa')
            },
            {
                id: 'cs-usp',
                name: 'USP',
                price: 15,
                rarity: 'Обычный',
                image: svgIcon('🔫', 'USP', '#10151f', '#94a3b8')
            },
            {
                id: 'cs-deagle',
                name: 'Desert Eagle',
                price: 20,
                rarity: 'Обычный',
                image: svgIcon('🔫', 'Desert Eagle', '#20140c', '#f59e0b')
            },
            {
                id: 'cs-mp5',
                name: 'MP5',
                price: 25,
                rarity: 'Обычный',
                image: svgIcon('🔫', 'MP5', '#111827', '#64748b')
            },
            {
                id: 'cs-galil',
                name: 'Galil',
                price: 50,
                rarity: 'Редкий',
                image: svgIcon('🔫', 'Galil', '#101b15', '#4ade80')
            },
            {
                id: 'cs-ssg08',
                name: 'SSG 08',
                price: 75,
                rarity: 'Редкий',
                image: svgIcon('🎯', 'SSG 08', '#111827', '#60a5fa')
            },
            {
                id: 'cs-sg553',
                name: 'SG 553',
                price: 100,
                rarity: 'Редкий',
                image: svgIcon('🔫', 'SG 553', '#171717', '#facc15')
            },
            {
                id: 'cs-m4a4',
                name: 'M4A4 без глушителя',
                price: 200,
                rarity: 'Эпический',
                image: svgIcon('🔫', 'M4A4', '#101827', '#38bdf8')
            },
            {
                id: 'cs-m4a1s',
                name: 'M4A1-S с глушителем',
                price: 250,
                rarity: 'Эпический',
                image: svgIcon('🔫', 'M4A1-S', '#0f172a', '#818cf8')
            },
            {
                id: 'cs-ak-vulcan',
                name: 'AK-47 Вулкан',
                price: 500,
                rarity: 'Легендарный',
                image: svgIcon('🔫', 'AK-47 Вулкан', '#07152b', '#3b82f6')
            },
            {
                id: 'cs-karambit',
                name: 'Керамбит | Волны',
                price: 600,
                rarity: 'Легендарный',
                image: svgIcon('🔪', 'Керамбит | Волны', '#10182a', '#22d3ee')
            },
            {
                id: 'cs-butterfly',
                name: 'Нож-бабочка | Волны',
                price: 750,
                rarity: 'Мифический',
                image: svgIcon('🦋', 'Нож-бабочка', '#10162b', '#a78bfa')
            },
            {
                id: 'cs-dragon-lore',
                name: 'AWP Dragon Lore',
                price: 1000,
                rarity: 'Мифический',
                image: svgIcon('🐉', 'AWP Dragon Lore', '#2b1807', '#f59e0b')
            }
        ]
    },


    /* ================= DOTA 2 ================= */

    {
        id: 'dota',
        name: 'Dota 2',
        subtitle: 'DOTA CASE',
        image: 'dota-case.png',
        cooldown: 24 * 60 * 60 * 1000,
        xp: 250,
        color: '#ef4444',

        items: [
            {
                id: 'dota-tango',
                name: 'Tango',
                price: 10,
                rarity: 'Обычный',
                image: svgIcon('🌿', 'Tango', '#102016', '#4ade80')
            },
            {
                id: 'dota-flask',
                name: 'Flask',
                price: 15,
                rarity: 'Обычный',
                image: svgIcon('🧪', 'Flask', '#10202a', '#22d3ee')
            },
            {
                id: 'dota-ward',
                name: 'Ward',
                price: 20,
                rarity: 'Обычный',
                image: svgIcon('👁️', 'Ward', '#21142b', '#c084fc')
            },
            {
                id: 'dota-smoke',
                name: 'Smoke',
                price: 25,
                rarity: 'Обычный',
                image: svgIcon('💨', 'Smoke', '#17202a', '#94a3b8')
            },
            {
                id: 'dota-bottle',
                name: 'Bottle',
                price: 30,
                rarity: 'Обычный',
                image: svgIcon('🍾', 'Bottle', '#0c2022', '#2dd4bf')
            },
            {
                id: 'dota-boots',
                name: 'Boots of Speed',
                price: 50,
                rarity: 'Редкий',
                image: svgIcon('👟', 'Boots of Speed', '#21170d', '#f59e0b')
            },
            {
                id: 'dota-voodoo',
                name: 'Voodoo Mask',
                price: 75,
                rarity: 'Редкий',
                image: svgIcon('🎭', 'Voodoo Mask', '#24112a', '#d946ef')
            },
            {
                id: 'dota-morbid',
                name: 'Morbid Mask',
                price: 85,
                rarity: 'Редкий',
                image: svgIcon('😈', 'Morbid Mask', '#2a0f16', '#f43f5e')
            },
            {
                id: 'dota-gem',
                name: 'Gem',
                price: 100,
                rarity: 'Редкий',
                image: svgIcon('💎', 'Gem', '#071e2b', '#38bdf8')
            },
            {
                id: 'dota-shard',
                name: "Aghanim's Shard",
                price: 125,
                rarity: 'Эпический',
                image: svgIcon('💠', "Aghanim's Shard", '#1c1230', '#a78bfa')
            },
            {
                id: 'dota-point',
                name: 'Point Booster',
                price: 150,
                rarity: 'Эпический',
                image: svgIcon('🔷', 'Point Booster', '#0b1d2d', '#60a5fa')
            },
            {
                id: 'dota-hyperstone',
                name: 'Hyperstone',
                price: 200,
                rarity: 'Эпический',
                image: svgIcon('💠', 'Hyperstone', '#261707', '#fbbf24')
            },
            {
                id: 'dota-eaglesong',
                name: 'Eaglesong',
                price: 250,
                rarity: 'Эпический',
                image: svgIcon('🦅', 'Eaglesong', '#211329', '#c084fc')
            },
            {
                id: 'dota-sacred',
                name: 'Sacred Relic',
                price: 300,
                rarity: 'Легендарный',
                image: svgIcon('✨', 'Sacred Relic', '#261d09', '#facc15')
            },
            {
                id: 'dota-moon',
                name: 'Moon Shard',
                price: 400,
                rarity: 'Легендарный',
                image: svgIcon('🌙', 'Moon Shard', '#0d1730', '#818cf8')
            },
            {
                id: 'dota-parasma',
                name: 'Parasma',
                price: 500,
                rarity: 'Легендарный',
                image: svgIcon('🩸', 'Parasma', '#2a0b12', '#fb7185')
            },
            {
                id: 'dota-aghanim',
                name: "Aghanim's Scepter",
                price: 600,
                rarity: 'Легендарный',
                image: svgIcon('🔮', "Aghanim's Scepter", '#1d1130', '#a855f7')
            },
            {
                id: 'dota-satanic',
                name: 'Satanic',
                price: 750,
                rarity: 'Мифический',
                image: svgIcon('😈', 'Satanic', '#2b0b10', '#ef4444')
            },
            {
                id: 'dota-rapier',
                name: 'Divine Rapier',
                price: 1000,
                rarity: 'Мифический',
                image: svgIcon('⚔️', 'Divine Rapier', '#211d0a', '#fde047')
            }
        ]
    },


    /* ================= HANTIKS ================= */

    {
        id: 'hantiks',
        name: 'Hantiks',
        subtitle: 'HANTIKS CASE',

        /*
         * Hantiks специально НЕ использует картинку,
         * чтобы не ломать старые 3 кейса.
         */
        image: null,

        cooldown: 0,
        xp: 0,
        noCooldown: true,
        color: '#ec4899',

        items: [
            {
                id: 'hantiks-chips',
                name: 'Чипсы',
                price: 10,
                rarity: 'Обычный',
                image: svgIcon('🍟', 'Чипсы', '#291907', '#f59e0b')
            },
            {
                id: 'hantiks-gamos',
                name: 'Гамос',
                price: 15,
                rarity: 'Обычный',
                image: svgIcon('🥤', 'Гамос', '#111c29', '#38bdf8')
            },
            {
                id: 'hantiks-vamos',
                name: 'Вамос',
                price: 20,
                rarity: 'Обычный',
                image: svgIcon('🍹', 'Вамос', '#172311', '#84cc16')
            },
            {
                id: 'hantiks-lvivske',
                name: 'Львівське 1715',
                price: 30,
                rarity: 'Обычный',
                image: svgIcon('🍺', 'Львівське 1715', '#291708', '#f59e0b')
            },
            {
                id: 'hantiks-burger',
                name: 'Бургер',
                price: 50,
                rarity: 'Редкий',
                image: svgIcon('🍔', 'Бургер', '#291208', '#fb923c')
            },
            {
                id: 'hantiks-hotdog',
                name: 'Хот дог',
                price: 75,
                rarity: 'Редкий',
                image: svgIcon('🌭', 'Хот дог', '#25100c', '#f87171')
            },
            {
                id: 'hantiks-pizza',
                name: 'Пицца',
                price: 100,
                rarity: 'Редкий',
                image: svgIcon('🍕', 'Пицца', '#291008', '#f97316')
            },
            {
                id: 'hantiks-shawarma',
                name: 'Шаурма',
                price: 150,
                rarity: 'Эпический',
                image: svgIcon('🌯', 'Шаурма', '#1d1709', '#facc15')
            },
            {
                id: 'hantiks-sushi',
                name: 'Суши',
                price: 200,
                rarity: 'Эпический',
                image: svgIcon('🍣', 'Суши', '#101c29', '#60a5fa')
            },
            {
                id: 'hantiks-fat-homeless',
                name: 'Толстый бомж',
                price: 300,
                rarity: 'Легендарный',
                image: svgIcon('🧔', 'Толстый бомж', '#21150f', '#f59e0b')
            },
            {
                id: 'hantiks-fat-hanti',
                name: 'Толстый Hanti',
                price: 500,
                rarity: 'Мифический',
                image: svgIcon('👑', 'Толстый Hanti', '#251029', '#ec4899')
            }
        ]
    }
];


/* =========================================================
   ALL ITEMS
   ========================================================= */

const ITEMS = CASES.flatMap(c => c.items);

window.CASES = CASES;
window.ITEMS = ITEMS;


/* =========================================================
   HELPERS
   ========================================================= */

function getItemById(id) {
    return ITEMS.find(item => item.id === id) || null;
}

function getCaseById(id) {
    return CASES.find(c => c.id === id) || null;
}

function getInventory() {
    try {
        const raw = localStorage.getItem('chak338_inventory');
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveInventory(inventory) {
    localStorage.setItem(
        'chak338_inventory',
        JSON.stringify(inventory)
    );
}

function getXP() {
    return Number(localStorage.getItem('chak338_xp') || 0);
}

function addXP(amount) {
    const xp = getXP() + Number(amount || 0);
    localStorage.setItem('chak338_xp', String(xp));
    return xp;
}

function formatCoins(value) {
    return Number(value || 0).toLocaleString('ru-RU');
}

function formatCooldown(ms) {
    let seconds = Math.max(0, Math.floor(ms / 1000));

    const h = Math.floor(seconds / 3600);
    seconds %= 3600;

    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    return [
        String(h).padStart(2, '0'),
        String(m).padStart(2, '0'),
        String(s).padStart(2, '0')
    ].join(':');
}

function createInventoryItem(item) {
    return {
        uid:
            typeof crypto !== 'undefined' && crypto.randomUUID
                ? crypto.randomUUID()
                : `${Date.now()}_${Math.random().toString(36).slice(2)}`,

        id: item.id,
        name: item.name,
        price: item.price,
        rarity: item.rarity,
        image: item.image
    };
}


/* =========================================================
   FIX OLD INVENTORY ITEMS
   ========================================================= */

function normalizeInventory() {
    const inventory = getInventory();

    let changed = false;

    const normalized = inventory.map((oldItem, index) => {

        let source = null;

        if (oldItem.id) {
            source = getItemById(oldItem.id);
        }

        if (!source && oldItem.name) {
            source = ITEMS.find(
                item => item.name === oldItem.name
            );
        }

        const result = {
            ...oldItem
        };

        if (!result.uid) {
            result.uid = `old_${index}_${Date.now()}_${Math.random()
                .toString(36)
                .slice(2)};

            changed = true;
        }

        if (source) {

            if (!result.image || String(result.image).includes('undefined')) {
                result.image = source.image;
                changed = true;
            }

            if (!result.id) {
                result.id = source.id;
                changed = true;
            }

            if (!result.rarity) {
                result.rarity = source.rarity;
                changed = true;
            }
        }

        return result;
    });

    if (changed) {
        saveInventory(normalized);
    }

    return normalized;
}

window.getItemById = getItemById;
window.getCaseById = getCaseById;
window.getInventory = getInventory;
window.saveInventory = saveInventory;
window.getXP = getXP;
window.addXP = addXP;
window.formatCoins = formatCoins;
window.formatCooldown = formatCooldown;
window.createInventoryItem = createInventoryItem;
window.normalizeInventory = normalizeInventory;
