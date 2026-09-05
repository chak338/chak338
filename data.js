/* =========================================================
   CHAK338 GAMING HUB — DATA
   ========================================================= */

function svgIcon(emoji, bg = '#171a2a') {
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
            <defs>
                <radialGradient id="g">
                    <stop offset="0%" stop-color="#252b44"/>
                    <stop offset="100%" stop-color="${bg}"/>
                </radialGradient>
            </defs>
            <rect width="256" height="256" rx="38" fill="url(#g)"/>
            <circle cx="128" cy="128" r="75" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" stroke-width="3"/>
            <text x="128" y="151"
                  text-anchor="middle"
                  font-size="78"
                  font-family="Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji">
                ${emoji}
            </text>
        </svg>
    `);
}

const CASES = [
    {
        id: 'clash',
        name: 'Clash of Clans',
        shortName: 'Clash of Clans',
        image: 'clash-case.png',
        cooldown: 5 * 60 * 60 * 1000,
        xp: 100,
        items: [
            { name: 'Варвар', price: 10, emoji: '🪓', rarity: 'common' },
            { name: 'Лучница', price: 15, emoji: '🏹', rarity: 'common' },
            { name: 'Бомбер', price: 20, emoji: '💣', rarity: 'common' },
            { name: 'Хог Райдер', price: 25, emoji: '🐗', rarity: 'common' },
            { name: 'Маг', price: 50, emoji: '🧙', rarity: 'rare' },
            { name: 'Дракон', price: 75, emoji: '🐉', rarity: 'rare' },
            { name: 'Миньен летающий', price: 100, emoji: '👾', rarity: 'rare' },
            { name: 'Ведьма', price: 200, emoji: '👿', rarity: 'epic' },
            { name: 'Валькирия', price: 300, emoji: '⚡', rarity: 'epic' },
            { name: 'ПЕККА', price: 400, emoji: '🛡️', rarity: 'epic' },
            { name: 'Электродракон', price: 500, emoji: '🐲', rarity: 'legendary' },
            { name: 'Голем', price: 600, emoji: '🪨', rarity: 'legendary' },
            { name: 'Горящий Дракон', price: 750, emoji: '🔥', rarity: 'legendary' },
            { name: 'Королева лучниц', price: 1000, emoji: '👑', rarity: 'mythic' }
        ]
    },

    {
        id: 'cs2',
        name: 'CS2',
        shortName: 'CS2',
        image: 'cs2-case.png',
        cooldown: 12 * 60 * 60 * 1000,
        xp: 150,
        items: [
            { name: 'Glock', price: 10, emoji: '🔫', rarity: 'common' },
            { name: 'USP', price: 15, emoji: '🔫', rarity: 'common' },
            { name: 'Desert Eagle', price: 20, emoji: '🔫', rarity: 'common' },
            { name: 'MP5', price: 25, emoji: '🔫', rarity: 'common' },
            { name: 'Galil', price: 50, emoji: '🔫', rarity: 'rare' },
            { name: 'SSG 08', price: 75, emoji: '🎯', rarity: 'rare' },
            { name: 'SG 553', price: 100, emoji: '🔫', rarity: 'rare' },
            { name: 'M4A4 без глушителя', price: 200, emoji: '🔫', rarity: 'epic' },
            { name: 'M4A1-S с глушителем', price: 250, emoji: '🔫', rarity: 'epic' },
            { name: 'AK-47 Вулкан', price: 500, emoji: '🔫', rarity: 'legendary' },
            { name: 'Керамбит | Волны', price: 600, emoji: '🔪', rarity: 'legendary' },
            { name: 'Нож-бабочка | Волны', price: 750, emoji: '🦋', rarity: 'legendary' },
            { name: 'AWP Dragon Lore', price: 1000, emoji: '🐉', rarity: 'mythic' }
        ]
    },

    {
        id: 'dota',
        name: 'Dota 2',
        shortName: 'Dota 2',
        image: 'dota-case.png',
        cooldown: 24 * 60 * 60 * 1000,
        xp: 250,
        items: [
            { name: 'Tango', price: 10, emoji: '🌿', rarity: 'common' },
            { name: 'Flask', price: 15, emoji: '🧪', rarity: 'common' },
            { name: 'Ward', price: 20, emoji: '👁️', rarity: 'common' },
            { name: 'Smoke', price: 25, emoji: '💨', rarity: 'common' },
            { name: 'Bottle', price: 30, emoji: '🍾', rarity: 'common' },
            { name: 'Boots of Speed', price: 50, emoji: '👢', rarity: 'rare' },
            { name: 'Voodoo Mask', price: 75, emoji: '🎭', rarity: 'rare' },
            { name: 'Morbid Mask', price: 85, emoji: '😈', rarity: 'rare' },
            { name: 'Gem', price: 100, emoji: '💎', rarity: 'rare' },
            { name: "Aghanim's Shard", price: 125, emoji: '🔷', rarity: 'epic' },
            { name: 'Point Booster', price: 150, emoji: '🔵', rarity: 'epic' },
            { name: 'Hyperstone', price: 200, emoji: '🟢', rarity: 'epic' },
            { name: 'Eaglesong', price: 250, emoji: '🪽', rarity: 'epic' },
            { name: 'Sacred Relic', price: 300, emoji: '☀️', rarity: 'epic' },
            { name: 'Moon Shard', price: 400, emoji: '🌙', rarity: 'legendary' },
            { name: 'Parasma', price: 500, emoji: '🧪', rarity: 'legendary' },
            { name: "Aghanim's Scepter", price: 600, emoji: '💠', rarity: 'legendary' },
            { name: 'Satanic', price: 750, emoji: '😈', rarity: 'legendary' },
            { name: 'Divine Rapier', price: 1000, emoji: '⚔️', rarity: 'mythic' }
        ]
    },

    {
        id: 'hantiks',
        name: 'Hantiks',
        shortName: 'Hantiks',
        image: null,
        cooldown: 0,
        xp: 0,
        noCooldown: true,
        items: [
            { name: 'Чипсы', price: 10, emoji: '🍟', rarity: 'common' },
            { name: 'Гамос', price: 15, emoji: '🥤', rarity: 'common' },
            { name: 'Вамос', price: 20, emoji: '🥤', rarity: 'common' },
            { name: 'Львівське 1715', price: 30, emoji: '🍺', rarity: 'common' },
            { name: 'Бургер', price: 50, emoji: '🍔', rarity: 'rare' },
            { name: 'Хот дог', price: 75, emoji: '🌭', rarity: 'rare' },
            { name: 'Пицца', price: 100, emoji: '🍕', rarity: 'rare' },
            { name: 'Шаурма', price: 150, emoji: '🌯', rarity: 'epic' },
            { name: 'Суши', price: 200, emoji: '🍣', rarity: 'epic' },
            { name: 'Толстый бомж', price: 300, emoji: '🧔', rarity: 'epic' },
            { name: 'Толстый Hanti', price: 500, emoji: '👑', rarity: 'legendary' }
        ]
    }
];

/* Создаём картинки предметов */
for (const box of CASES) {
    for (const item of box.items) {
        item.image = svgIcon(item.emoji);
        item.caseId = box.id;
    }
}

/* ВАЖНО: глобальный список для upgrader/inventory */
const ITEMS = CASES.flatMap(c => c.items);

window.CASES = CASES;
window.ITEMS = ITEMS;
window.svgIcon = svgIcon;
