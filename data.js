/* =========================================================
   CHAK338 DATA
========================================================= */


/* =========================================================
   SVG ICON
========================================================= */

function svgIcon(emoji) {

    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
        >

            <defs>

                <radialGradient
                    id="bg"
                    cx="50%"
                    cy="40%"
                >

                    <stop
                        offset="0%"
                        stop-color="#343b45"
                    />

                    <stop
                        offset="100%"
                        stop-color="#090c10"
                    />

                </radialGradient>

            </defs>


            <rect
                width="200"
                height="200"
                rx="35"
                fill="url(#bg)"
            />


            <text
                x="100"
                y="125"
                text-anchor="middle"
                font-size="100"
            >
                ${emoji}
            </text>

        </svg>
    `;


    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );
}


/* =========================================================
   CASE ART
========================================================= */

function caseArt(
    title,
    emoji,
    accent
) {

    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 400"
        >

            <defs>

                <linearGradient
                    id="background"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >

                    <stop
                        offset="0%"
                        stop-color="#070a0e"
                    />

                    <stop
                        offset="100%"
                        stop-color="#141a21"
                    />

                </linearGradient>


                <linearGradient
                    id="box"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >

                    <stop
                        offset="0%"
                        stop-color="${accent}"
                    />

                    <stop
                        offset="100%"
                        stop-color="#07100b"
                    />

                </linearGradient>

            </defs>


            <rect
                width="600"
                height="400"
                rx="35"
                fill="url(#background)"
            />


            <circle
                cx="300"
                cy="185"
                r="135"
                fill="${accent}"
                opacity=".10"
            />


            <rect
                x="120"
                y="85"
                width="360"
                height="225"
                rx="25"
                fill="url(#box)"
                stroke="${accent}"
                stroke-width="4"
            />


            <rect
                x="145"
                y="110"
                width="310"
                height="175"
                rx="18"
                fill="#090d12"
                stroke="${accent}"
                stroke-width="2"
                opacity=".9"
            />


            <text
                x="300"
                y="215"
                text-anchor="middle"
                font-size="95"
            >
                ${emoji}
            </text>


            <text
                x="300"
                y="350"
                text-anchor="middle"
                fill="white"
                font-size="35"
                font-family="Arial"
                font-weight="900"
            >
                ${title}
            </text>

        </svg>
    `;


    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );
}


/* =========================================================
   CASES
========================================================= */

const CASES = [

    /* =====================================================
       CLASH OF CLANS
    ===================================================== */

    {
        id: "clash",

        name: "Clash of Clans",

        image:
            "clash-case.png",

        cooldown:
            5 * 60 * 60 * 1000,

        xp:
            100,

        items: [

            {
                id: "coc-1",
                name: "Варвар",
                price: 10,
                image: svgIcon("⚔️")
            },

            {
                id: "coc-2",
                name: "Лучница",
                price: 15,
                image: svgIcon("🏹")
            },

            {
                id: "coc-3",
                name: "Бомбер",
                price: 20,
                image: svgIcon("💣")
            },

            {
                id: "coc-4",
                name: "Хог Райдер",
                price: 25,
                image: svgIcon("🐗")
            },

            {
                id: "coc-5",
                name: "Маг",
                price: 50,
                image: svgIcon("🧙")
            },

            {
                id: "coc-6",
                name: "Дракон",
                price: 75,
                image: svgIcon("🐉")
            },

            {
                id: "coc-7",
                name: "Миньен летающий",
                price: 100,
                image: svgIcon("👾")
            },

            {
                id: "coc-8",
                name: "Ведьма",
                price: 200,
                image: svgIcon("🧙‍♀️")
            },

            {
                id: "coc-9",
                name: "Валькирия",
                price: 300,
                image: svgIcon("🪓")
            },

            {
                id: "coc-10",
                name: "ПЕККА",
                price: 400,
                image: svgIcon("🤖")
            },

            {
                id: "coc-11",
                name: "Электродракон",
                price: 500,
                image: svgIcon("⚡")
            },

            {
                id: "coc-12",
                name: "Голем",
                price: 600,
                image: svgIcon("🗿")
            },

            {
                id: "coc-13",
                name: "Горящий дракон",
                price: 750,
                image: svgIcon("🔥")
            },

            {
                id: "coc-14",
                name: "Королева лучниц",
                price: 1000,
                image: svgIcon("👸")
            }

        ]
    },


    /* =====================================================
       CS2
    ===================================================== */

    {
        id: "cs2",

        name: "CS2",

        image:
            "cs2-case.png",

        cooldown:
            12 * 60 * 60 * 1000,

        xp:
            150,

        items: [

            {
                id: "cs2-1",
                name: "Glock",
                price: 10,
                image: svgIcon("🔫")
            },

            {
                id: "cs2-2",
                name: "USP",
                price: 15,
                image: svgIcon("🔫")
            },

            {
                id: "cs2-3",
                name: "Desert Eagle",
                price: 20,
                image: svgIcon("🔫")
            },

            {
                id: "cs2-4",
                name: "MP5",
                price: 25,
                image: svgIcon("🔫")
            },

            {
                id: "cs2-5",
                name: "Galil",
                price: 50,
                image: svgIcon("🔫")
            },

            {
                id: "cs2-6",
                name: "SSG 08",
                price: 75,
                image: svgIcon("🎯")
            },

            {
                id: "cs2-7",
                name: "SG 553",
                price: 100,
                image: svgIcon("🔫")
            },

            {
                id: "cs2-8",
                name: "M4A4 без глушителя",
                price: 200,
                image: svgIcon("🔫")
            },

            {
                id: "cs2-9",
                name: "M4A1-S с глушителем",
                price: 250,
                image: svgIcon("🔫")
            },

            {
                id: "cs2-10",
                name: "AK-47 Вулкан",
                price: 500,
                image: svgIcon("🔥")
            },

            {
                id: "cs2-11",
                name: "Керамбит | Волны",
                price: 600,
                image: svgIcon("🔪")
            },

            {
                id: "cs2-12",
                name: "Нож-бабочка | Волны",
                price: 750,
                image: svgIcon("🔪")
            },

            {
                id: "cs2-13",
                name: "AWP Dragon Lore",
                price: 1000,
                image: svgIcon("🐉")
            }

        ]
    },


    /* =====================================================
       DOTA 2
    ===================================================== */

    {
        id: "dota2",

        name: "Dota 2",

        image:
            "dota-case.png",

        cooldown:
            24 * 60 * 60 * 1000,

        xp:
            250,

        items: [

            {
                id: "dota-1",
                name: "Tango",
                price: 10,
                image: svgIcon("🌿")
            },

            {
                id: "dota-2",
                name: "Flask",
                price: 15,
                image: svgIcon("🧪")
            },

            {
                id: "dota-3",
                name: "Ward",
                price: 20,
                image: svgIcon("👁️")
            },

            {
                id: "dota-4",
                name: "Smoke",
                price: 25,
                image: svgIcon("💨")
            },

            {
                id: "dota-5",
                name: "Bottle",
                price: 30,
                image: svgIcon("🍾")
            },

            {
                id: "dota-6",
                name: "Boots of Speed",
                price: 50,
                image: svgIcon("👢")
            },

            {
                id: "dota-7",
                name: "Voodoo Mask",
                price: 75,
                image: svgIcon("🎭")
            },

            {
                id: "dota-8",
                name: "Morbid Mask",
                price: 85,
                image: svgIcon("😈")
            },

            {
                id: "dota-9",
                name: "Gem",
                price: 100,
                image: svgIcon("💎")
            },

            {
                id: "dota-10",
                name: "Aghanim's Shard",
                price: 125,
                image: svgIcon("🔷")
            },

            {
                id: "dota-11",
                name: "Point Booster",
                price: 150,
                image: svgIcon("🔵")
            },

            {
                id: "dota-12",
                name: "Hyperstone",
                price: 200,
                image: svgIcon("💠")
            },

            {
                id: "dota-13",
                name: "Eaglesong",
                price: 250,
                image: svgIcon("🦅")
            },

            {
                id: "dota-14",
                name: "Sacred Relic",
                price: 300,
                image: svgIcon("✨")
            },

            {
                id: "dota-15",
                name: "Moon Shard",
                price: 400,
                image: svgIcon("🌙")
            },

            {
                id: "dota-16",
                name: "Parasma",
                price: 500,
                image: svgIcon("🟣")
            },

            {
                id: "dota-17",
                name: "Aghanim's Scepter",
                price: 600,
                image: svgIcon("💜")
            },

            {
                id: "dota-18",
                name: "Satanic",
                price: 750,
                image: svgIcon("😈")
            },

            {
                id: "dota-19",
                name: "Divine Rapier",
                price: 1000,
                image: svgIcon("⚔️")
            }

        ]
    },


    /* =====================================================
       HANTIKS
    ===================================================== */

    {
        id: "hantiks",

        name: "Hantiks",

        /*
            У Hantiks нет отдельного файла.
            Картинка генерируется прямо из JS.
        */

        image:
            caseArt(
                "HANTIKS",
                "🍔",
                "#22c55e"
            ),

        /*
            0 = БЕЗ ТАЙМЕРА
        */

        cooldown: 0,

        xp: 0,

        items: [

            {
                id: "hantiks-1",
                name: "Чипсы",
                price: 10,
                image: svgIcon("🍟")
            },

            {
                id: "hantiks-2",
                name: "Гамос",
                price: 15,
                image: svgIcon("🥩")
            },

            {
                id: "hantiks-3",
                name: "Вамос",
                price: 20,
                image: svgIcon("🌮")
            },

            {
                id: "hantiks-4",
                name: "Львівське 1715",
                price: 30,
                image: svgIcon("🍺")
            },

            {
                id: "hantiks-5",
                name: "Бургер",
                price: 50,
                image: svgIcon("🍔")
            },

            {
                id: "hantiks-6",
                name: "Хот-дог",
                price: 75,
                image: svgIcon("🌭")
            },

            {
                id: "hantiks-7",
                name: "Пицца",
                price: 100,
                image: svgIcon("🍕")
            },

            {
                id: "hantiks-8",
                name: "Шаурма",
                price: 150,
                image: svgIcon("🌯")
            },

            {
                id: "hantiks-9",
                name: "Суши",
                price: 200,
                image: svgIcon("🍣")
            },

            {
                id: "hantiks-10",
                name: "Толстый бомж",
                price: 300,
                image: svgIcon("🧔")
            },

            {
                id: "hantiks-11",
                name: "Толстьй Hanti",
                price: 500,
                image: svgIcon("👑")
            }

        ]
    }

];


/* =========================================================
   ALL ITEMS
========================================================= */

const ITEMS =
    CASES.flatMap(
        caseData =>
            caseData.items
    );


/* =========================================================
   GLOBAL EXPORT
========================================================= */

window.CASES =
    CASES;

window.ITEMS =
    ITEMS;
