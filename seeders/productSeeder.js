const Product = require("../models/Product");

async function productSeeders() {
    await Product.sync({ force: true });
    console.log("Se restablecieron las tablas de roles");

    const newProduct = [

        {
            name: "VERONA S - Modular sofa  - 240 x 120 cm light gray",
            description:
                "The new VERONA S sofa is perfect for cozy evenings and fits perfectly into any setting. You can combine the elements as you wish. Create a large or small sofa that suits your needs and add additional elements as your needs change. The high-quality foam padding offers a high level of seating comfort and adapts to your body, whether lying down or sitting. The cover is made of durable polyester fabric, which is especially soft and adds character to the room. Thanks to the deep, evenly shaped seats, VERONA is very comfortable even when lying down, making the modular sofa perfect for any environment, so you can easily enjoy a peaceful sleep in the spacious lounge and seating areas. It's also very practical: the elements can be quickly and easily relocated without tools. With crocodile hooks, you can rearrange the elements and change the look. Create the sofa of your dreams now. Our VERONA sofa makes it possible!",
            info: "The Verona S sofa consists of two modules that can be combined. It's very easy to expand with additional modules.",
            category: "Sofas and armchairs",
            price: 1119,
            currency: "USD",
            stock: 6,
            featured: true,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20411/full/49454-home-deluxe-sofa-verona-s-hellgrau-ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20411/full/49454-home-deluxe-sofa-verona-hellgrau-detail-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20411/full/49454-home-deluxe-sofa-verona-s-hellgrau-freisteller-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20411/full/49454-home-deluxe-sofa-verona-hellgrau-detail-02.jpg",
            ],
            slug: "verona-s-modular-sofa-240x120cm-light-gray",
        },

        {
            name: "VERONA M - Modular sofa - 327 x 120 cm beige",
            description:
                "You can combine the elements as you wish. Create a large or small sofa that suits your needs and add additional elements as your needs change. The high-quality foam padding offers a high level of seating comfort and adapts to your body, whether lying down or sitting. The cover is made of durable polyester fabric, which is especially soft and adds character to the room. Thanks to the deep, evenly shaped seats, VERONA is very comfortable even when lying down, making the modular sofa perfect for any environment, so you can easily enjoy a peaceful sleep in the spacious lounge and seating areas. It's also very practical: the elements can be quickly and easily relocated without tools. With crocodile hooks, you can rearrange the elements and change the look.",
            info: "The new VERONA M sofa is perfect for cozy evenings and fits perfectly into any setting. Create the sofa of your dreams now. Our VERONA sofa makes it possible!",
            category: "Sofas and armchairs",
            price: 1409,
            currency: "USD",
            stock: 12,
            featured: true,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20500/full/49450-homr-deluxe-modulares-sofa-verona-m-beige-ambiente-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20500/full/49450-homr-deluxe-modulares-sofa-verona-m-beige-ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20500/full/xxx-home-deluxe-sofa-verona-xxl-beige-detail-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20500/full/xxx-home-deluxe-sofa-verona-xxl-beige-detail-01.jpg",
            ],
            slug: "verona-m-sofa-modular-327x120-beige",
        },

        {
            name: "VERONA L - Modular sofa - 327 x 207 cm anthracite",
            description:
                "You have the freedom to combine the individual elements as you wish. Design a spacious or compact sofa to suit your needs and add additional components as needed to meet changing demands. Easily combine this seating element with other modules, create a chaise longue, and position the armrests to best suit your living space. All sofa parts are also available individually, so you can arrange them in a variety of ways until you find the perfect combination. The high-quality foam padding ensures unparalleled seating comfort and adapts to your body in both lying and sitting positions. The cover is made of durable polyester fabric. Thanks to its generous, evenly shaped seats, VERONA offers excellent comfort even when lying down. This makes this modular sofa ideal for any room design. You can relax effortlessly in the spacious seating and lounge areas. Elements can be easily rearranged without the use of tools. With the help of practical crocodile clips, you can change the arrangement of elements in an instant and create a new look.",
            info: "The sofa presents itself aesthetically from all sides, so you can place it against a wall or in the center of the room. Create the individual sofa of your dreams now!",
            category: "Sofas and armchairs",
            price: 1409,
            currency: "USD",
            stock: 12,
            featured: true,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21557/full/51304-home-deluxe-modlares-sofa-verona-ambiente-02-1.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21557/full/51304-home-deluxe-modlares-sofa-verona-ambiente-01-1.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21557/full/xxx-home-deluxe-sofa-verona-xxl-anthrazit-detail-02-1.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21557/full/51304-home-deluxe-modlares-sofa-verona-freisteller-02-1.jpg",

            ],
            slug: "verona-l-modular-sofa-327-x-207-cm-anthracite",
        },

        {
            name: "VERONA XL - Modular sofa - 414 x 207 cm beige",
            description:
                "You can combine the elements as you wish. Create a large or small sofa that suits your needs and add additional elements as your needs change. The high-quality foam padding offers a high level of seating comfort and adapts to your body, whether lying down or sitting. The cover is made of durable polyester fabric, which is especially soft and adds character to the room. Thanks to the deep, evenly shaped seats, VERONA is very comfortable even when lying down, making the modular sofa perfect for any environment, so you can easily enjoy a peaceful sleep in the spacious lounge and seating areas. It's also very practical: the elements can be quickly and easily relocated without tools. With crocodile hooks, you can rearrange the elements and change the look.",
            info: "The new VERONA sofa is perfect for cozy evenings and fits perfectly into any setting. Create the sofa of your dreams now. Our VERONA sofa makes it possible!",
            category: "Sofas and armchairs",
            price: 1819,
            currency: "USD",
            stock: 0,
            featured: true,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20502/full/49452-home-deluxe-sofa-verona-xl-beige-ambiente-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20502/full/49452-home-deluxe-sofa-verona-xl-beige-ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20502/full/49452-home-deluxe-sofa-verona-xl-beige-freisteller-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20502/full/xxx-home-deluxe-sofa-verona-xxl-beige-detail-02.jpg",
            ],
            slug: "verona-xl-modular-sofa-414-x-207-cm-beige",
        },



        {
            name: "VERONA XXL - Modular sofa - 414 x 207 cm anthracite",
            description:
                "The new VERONA sofa offers the perfect setting for relaxed evenings and fits perfectly into any environment. Create the individual sofa of your dreams now!",
            info: "You have the freedom to combine the individual elements as you wish. Design a spacious or compact sofa to suit your needs and add additional components as needed to meet changing demands. Easily combine this seating element with other modules, create a chaise longue, and position the armrests to best suit your living space. All sofa parts are also available individually, so you can arrange them in a variety of ways until you find the perfect combination. The high-quality foam padding ensures unparalleled seating comfort and adapts to your body in both lying and sitting positions. The cover is made of durable polyester fabric. Thanks to its generous, evenly shaped seats, VERONA offers excellent comfort even when lying down. This makes this modular sofa ideal for any room design. You can relax effortlessly in the spacious seating and lounge areas. Elements can be easily rearranged without the use of tools. With the help of practical crocodile clips, you can change the arrangement of elements in an instant and create a new look.",
            category: "Sofas and armchairs",
            price: 2039,
            currency: "USD",
            stock: 15,
            featured: true,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21559/full/51306-home-deluxe-modulares-sofa-verona-xxl-anthrazit-ambiente-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21559/full/51306-home-deluxe-modulares-sofa-verona-xxl-anthrazit-ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21559/full/xxx-home-deluxe-sofa-verona-xxl-anthrazit-detail-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21559/full/xxx-home-deluxe-sofa-verona-xxl-anthrazit-detail05.jpg",
            ],
            slug: "verona-xxl-modular-sofa-414-x-207-cm-anthracite",
        },


        {
            name: "ROM -Gray sofa with chaise longue",
            description:
                "A comfortable changeover artist: the ROM corner sofa adapts individually to your living situation. The semi-modular design allows the corner to be positioned on the left or right. The included stool can be used as a sofa extension, additional seating, or as a shelf. It also offers space-saving storage options, for example, for blankets and pillows. Your new oasis of wellness offers a spacious seating area combined with high-quality foam padding for maximum sitting and lying comfort. The pleasantly soft covers guarantee many cozy moments. To give you personal design ideas, our sofa is available in a variety of colors.",
            category: "Sofas and armchairs",
            price: 700,
            currency: "USD",
            stock: 18,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20560/full/Home-Deluxe-Sofa-Rom-Grau-Ambiente-Rechts.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20560/full/Home-Deluxe-Sofa-Rom-Grau-Freisteller-Rechts.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20560/full/Home-Deluxe-Sofa-Rom-Grau-Details3.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20560/full/Home-Deluxe-Sofa-Rom-Grau-Details2.jpg",
            ],
            slug: "rom-gray-sofa-with-chaise-longue",
        },

        {
            name: "CASARA - Beige woven sofa - 258 x 128 x 72 cm",
            description:
                "This elegant premium sofa in a sophisticated dark green hue combines a refined design with maximum seating and lying comfort, offering you a place to relax every day. Its wide and deep surface invites you to enjoy a pleasant rest, allowing you to fully enjoy every moment in your living room. Made with high-quality, durable materials, the CASARA sofa stands out not only for its soft padding but also for its sturdy construction, which ensures stability and durability even with intensive use. Its elegant appearance blends harmoniously with any decor, and thanks to its easy assembly, it's ready in an instant to add a special touch to your space. Invest in comfort and style: the CASARA sofa is the ideal companion for relaxing and stylish moments at home.",
            info: "Floating design with invisible legs. Maximum comfort for sitting and lying down.",
            category: "Sofas and armchairs",
            price: 2049,
            currency: "USD",
            stock: 5,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25129/full/60495-home-deluxe-sofa-casara-beige-ambiente-01-1.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25129/full/60495-home-deluxe-sofa-casara-beige-freisteller-01-1.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25129/full/60495-home-deluxe-sofa-casara-beige-ambiente-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25129/full/60495-home-deluxe-sofa-casara-beige-ambiente-04.jpg",
            ],
            slug: "casara-beige-woven-sofa-258-x-128-x-72-cm",
        },

        {
            name: "TORINO - Corner sofa - 344 x 178 cm beige right",
            description:
                "The sofa's wide seat not only offers enough space for sitting, but also for lying down and relaxing. The sofa's modern design fits perfectly into your interior and brings a contemporary elegance to your room. The harmonious color and design make it an eye-catcher. The sofa's stable substructure not only ensures long-term stability but also promotes consistent comfort throughout the seating area. The sofa's color scheme radiates warmth and serenity and creates a relaxing atmosphere in your living room. The 100% polyester fabric is comfortable and easy to care for. The foam padding provides support and comfort, while the metal base adds a modern touch and provides additional stability. Our L-shaped sofa, with its distinctive L shape, maximizes available space and creates an inviting atmosphere for entertaining, relaxing, and gatherings.",
            info: "Our L-shaped sofa version in an elegant beige color impresses with its exemplary comfort and attractive design.",
            category: "Sofas and armchairs",
            price: 1249,
            currency: "USD",
            stock: 15,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21393/full/50999-home-deluxe-ecksofa-TORINO-rechts-Ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21393/full/21393-home-deluxe-sofa-Torino-rechts-Freisteller02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21393/full/50999-home-deluxe-ecksofa-torino-rechts-detail-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21393/full/50999-home-deluxe-ecksofa-torino-rechts-detail-08.jpg",
            ],
            slug: "torino-corner-sofa-344-x-178-cm-beige-right",
        },

        {
            name: "CHILL - Relaxation armchair with stool - beige",
            description: "The padding is made of high-quality cold foam that adapts to the shape of your body. This means maximum comfort. The elegance of this recliner makes it a focal point in any room, whether in the living room or in the reading corner. A matching stool is available with our chair. A perfect duo for your legs, so they too can experience ultimate relaxation. Combine the chair and stool, sit back, and enjoy the feeling of pure serenity.",
            info: "Our CHILL Relaxation Chair with Stool is the epitome of relaxation and style! The cover made of velvet fabric, 100% polyester, not only gives CHILL an extra portion of style, but is also soft to the touch.",
            category: "Sofas and armchairs",
            price: 819,
            currency: "USD",
            stock: 10,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/22217/full/57230-home-deluxe-relaxsessel-hocker-chill-anthrazit-ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/22217/full/57230-home-deluxe-relaxsessel-hocker-chill-anthrazit-freisteller-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/22217/full/57230-home-deluxe-relaxsessel-hocker-chill-anthrazit-detail-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/22217/full/57230-home-deluxe-relaxsessel-hocker-chill-anthrazit-masszeichnung.jpg", ,
            ],
            slug: "chill-relaxation-armchair-with-stool-beige",
        },

        {
            name: "IRIMA - Side table - set of 3 beige marble",
            description: "Made of durable MDF with an elegant marble look, this table fits perfectly into any room thanks to its easy-to-match colors. Its generous tabletop is ideal for decorative items such as flower pots, making it not only functional but also aesthetically pleasing. The IRIMA side table is extremely easy to assemble and maintain, making it a practical and user-friendly piece of furniture. Special attention is paid to the adjustable foot caps, which are not only an elegant detail but also ensure floor protection. Whether placed on a carpet or other surface, small unevenness can be leveled out and the floor protected from unsightly scratches. The versatility of the IRIMA side table extends to different rooms, whether in the living room, bedroom, or hallway.",
            info: "The IRIMA side table is presented as an attractive piece of furniture with an extraordinary, timeless design and high-quality materials.",
            category: "Decoration",
            price: 199,
            currency: "USD",
            stock: 10,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/23731/full/51544-home-deluxe-beistellstisch-irima-marmor-beige-ambiente-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/23731/full/51544-home-deluxe-beistellstisch-irima-marmor-beige-freisteller-01-1.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/23731/full/51544-home-deluxe-beistellstisch-irima-marmor-beige-freisteller-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/23731/full/51544-home-deluxe-beistellstisch-irima-marmor-beige-masszeichnung.jpg",
                ,
            ],
            slug: "irima-side-table-set-of-3-beige-marble",
        },

        {
            name: "EMMI - Round LED mirror - 80 cm",
            description: "The illuminated touch dimmer is easy to find not only during the day but also at night. Immerse yourself in a world of possibilities by choosing from three colors and different brightness levels. Enjoy clear vision and say goodbye to annoying fogging thanks to the anti-fog system.",
            info: "Experience a captivating touch for your bathroom with the charming EMMI LED mirror. Border white or black",
            category: "Decoration",
            price: 149,
            currency: "USD",
            stock: 27,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20853/full/49909-home-deluxe-led-spiegel-emmi-80cm-ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/24411/full/59123-home-deluxe-led-spiegel-DUBI-60cm-ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20853/full/49909-home-deluxe-led-spiegel-emmi-80cm-freisteller-01-1.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20853/full/LED-Spiegel-Licht-ErklaerungNEU.jpg"

            ],
            slug: "emmi-round-led-mirror-80-cm",
        },

        {
            name: "LUMINOS - Pendant lamp - black/gold",
            description: "The combination of black and gold in the design gives your interior a sophisticated touch. Experience glare-free light that softly illuminates your surroundings. The sturdy construction of our ceiling light ensures its longevity. The metal frame guarantees stability and conveys a sense of quality. Simple assembly allows you to easily install the pendant light in just a few steps. Enjoy instant, instant light.",
            info: "Our pendant light, made of high-quality metal, is a blend of timeless elegance and practical functionality that will bring life to your room.",
            category: "Decoration",
            price: 39,
            currency: "USD",
            stock: 1,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21517/full/20815-3Deckenlampe-Ambiente.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21517/full/Luminos-Freisteller-1.png",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21517/full/51201-home-deluxe-pendelleuchte-luminos-zeichnung-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21517/full/20815-3Deckenlampe-Ambiente.jpg",
            ],
            slug: "luminos-pendant-lamp-blackgold",
        },

        {
            name: "ADVENTURE - Extendable round dining table with star base - 120 x 120 cm Light Oak",
            description: "Our dining table, made from high-quality medium-density fiberboard (MDF), perfectly combines style and functionality. The table features a sturdy star-shaped base that not only looks modern but also provides a secure base for all occasions, from cozy dinner parties to larger gatherings. The sturdy construction ensures durability, while the floor-protecting properties protect your floor. The easy-care surface makes cleaning a breeze, giving you more time for the essentials. With our dining chairs, your dining experience will be even more comfortable. The chairs are not only an aesthetic highlight but also offer excellent seating comfort. The ergonomic shape and high-quality upholstery make them the ideal companion for long meals and social gatherings. You can choose from different colors and shapes. We make it possible for you to customize your dining room to your liking.",
            info: "Adventure Round table in oak board. Available in various colors. Incl. star-shaped base. Chairs available in various colors and models, 100% polyester. Elegant design",
            category: "Dining",
            price: 909,
            currency: "USD",
            stock: 5,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21897/full/51858-home-deluxe-essgruppe-aventura-120x120-light-oak-amara-beige-ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21897/full/51858-home-deluxe-esstisch-aventura-120x120-light-oak-ambiente-03.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21897/full/51858-home-deluxe-esstisch-aventura-120x120-light-oak-masszeichnung-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21897/full/51858-home-deluxe-essgruppe-aventura-120x120-light-oak-amara-schwarz-ambiente-02.jpg",


            ],
            slug: "adventure-extendable-round-dining-table-with-star-base-120-x-120-cm-light-oak",
        },

        {
            name: "ELMO - Height-adjustable desk with PC stand, white/wood - 160 x 80 cm",
            description: "With its individual height adjustment from 75 to 125 cm, the desk adapts to your working style, whether sitting or standing. Thanks to the powerful motor, you can adjust the height of your desk quickly and quietly. The memory function saves your preferred positions so you can work immediately at the right height at any time. The sturdy carbon steel frame provides stability and is durable enough to accommodate multiple monitors and accessories. The modern white design with a white frame makes the desk the perfect companion for your home or office. A practical PC stand is also included in the scope of delivery, making your workplace even more efficient.",
            info: "The ELMO height-adjustable desk offers everything you need for a flexible and healthy workplace. Get the ELMO height-adjustable desk and benefit from an ergonomic workstation that fully adapts to your targeted needs. Buy now and feel the difference in your daily work!",
            category: "Office",
            price: 169,
            currency: "USD",
            stock: 4,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25862/full/61787-61788-home-deluxe-schreibtisch-elmo-weiss-holz-ohne-ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25862/full/61787-61788-home-deluxe-schreibtisch-elmo-weiss-holz-ohne-freisteller-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25862/full/61787-61788-home-deluxe-schreibtisch-elmo-weiss-holz-ohne-freisteller-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25862/full/61787-61788-home-deluxe-schreibtisch-elmo-weiss-holz-ohne-freisteller-03.jpg",

            ],
            slug: "elmo-height-adjustable-desk-with-pc-stand-whitewood-160-x-80-cm",
        },

        {
            name: "CLOUD - Family bed - 270 x 200 cm, Black",
            description: "The NUBE LED Family Bed combines comfort and modern design in an exclusive bed that meets the highest standards of style and functionality. With its extra-large, softly padded backrest and ambient LED lighting, conveniently controlled via remote control, it transforms any bedroom into a stylish and inviting retreat. The bed not only offers space for the whole family but is also practical: two integrated drawers provide additional space for bedding and other accessories. Please note that to fully utilize the drawers, a side clearance of up to 58 cm is required. Thanks to its stable construction, the bed is extremely durable and easy to assemble. All necessary accessories are discreetly stored in the backrest, and the easy-care surface ensures effortless cleaning. Treat yourself and your family to a unique sleeping experience and optimize your space with the NUBE LED Family Bed: the perfect combination of design, functionality, and comfort.",
            info: "Cloud LED Family Bed - Luxury and comfort for the whole family. Get this exceptional bed now and enjoy a bedroom that impresses in every way! ",
            category: "Bedroom",
            price: 699,
            currency: "USD",
            stock: 15,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21656/full/51475-51476-home-deluxe-familienbett-nube-schubladen-200x270-schwarz-ambiente-01-NEU.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21656/full/51475-51476-home-deluxe-familienbett-nube-schubladen-200x270-schwarz-ambiente-02-NEU.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21656/full/51475-51476-home-deluxe-familienbett-nube-schubladen-200x270-schwarz-ambiente-03-NEU.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21656/full/51475-51476-home-deluxe-familienbett-nube-schubladen-200x270-schwarz-detail-01-NEU_1.jpg",
            ],
            slug: "cloud-family-bed-270-x-200-cm-black",
        },

        {
            name: "STERNENLAND - Crib with drawers - 90 x 200 cm white",
            description: "Sweet dreams in starry night: This house-shaped children's bed stimulates the imagination while providing a cozy homey feeling. The STERNENLAND children's bed fits into any boy's or girl's room. The sturdy pine bed frame is durable and features a rollover protection. A suitable stand for a Toniebox invites you to enjoy a cozy radio ritual. Two spacious drawers offer space for toys or bedding.",
            info: "Sweet dreams in starry night: This house-shaped children's bed stimulates the imagination while providing a cozy homey feeling. ",
            category: "Kids",
            price: 309,
            currency: "USD",
            stock: 1,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20779/full/20779-home-deluxe-Kinderbett-Sternenland-mit-Schubladen-90x200-Weiss-Ambiente01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20779/full/20779-home-deluxe-Kinderbett-Sternenland-mit-Schubladen-90x200-Weiss-Ambiente01-01-1.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20779/full/20779-home-deluxe-Kinderbett-Sternenland-mit-Schubladen-90x200-Weiss-Ambiente03.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20779/full/20779-home-deluxe-Kinderbett-Sternenland-mit-Schubladen-90x200-Weiss-Detail01.jpg",
            ],
            slug: "",
        },

        {
            name: "EXQUISITE - Espresso Machine with Portafilter - Matte Black",
            description: "Enjoy a barista experience in the comfort of your home. With the EXQUISITE Espresso Machine, savor freshly brewed espresso in less than 25 seconds. Equipped with a Thermoblock heating system and a 15-bar ULKA pump, this device delivers the pressure needed for an intense espresso. Its removable 0.8-liter water tank facilitates quick and hassle-free preparation. The steam nozzle creates creamy milk foam for Latte Macchiato and Cappuccino. It also features safety features such as overheating and overpressure protection, ensuring safe and reliable use. Thanks to its four suction cups, the machine remains stable on any surface, preventing slipping. The removable drip tray and cup holder make cleaning and organizing easier.",
            info: "Treat yourself to the perfect espresso and turn every cup into a luxurious moment. Get the EXQUISITE Espresso Machine now and become a barista in your own home!",
            category: "Kitchen",
            price: 99,
            currency: "USD",
            stock: 30,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25145/full/60534-home-deluxe-siebtraegermaschine-exquisite-ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25145/full/60534-home-deluxe-siebtraegermaschine-exquisite-ambiente-02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25145/full/60534-home-deluxe-siebtraegermaschine-exquisite-ambiente-03.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25145/full/60534-home-deluxe-siebtraegermaschine-exquisite-ambiente-04.jpg",
            ],
            slug: "exquisite-espresso-machine-with-portafilter-matte-black",
        },

        {
            name: "REST - 3-Seater Porch Swing - 115 x 198 cm Beige",
            description: "Treat yourself to pure relaxation with our DESCANSO porch swing and turn your garden, balcony, or terrace into the perfect retreat. The spacious swing bench offers comfortable seating for up to three people and transforms any outdoor area into an oasis of well-being. Let yourself be gently rocked and enjoy relaxing hours outdoors. DESCANSO impresses with its high-quality workmanship and durable materials. The powder-coated frame is corrosion-resistant, while the sturdy polyester roof offers reliable protection from the sun and light rain. The adjustable canopy remains stable even in windy conditions, and the integrated cup holders and soft 8 cm padding ensure maximum comfort. UV-resistant sun protection completes the set and makes long sessions comfortable.",
            info: "Transform your outdoor area into a cozy oasis of well-being with the DESCANSO porch swing. Get your relaxation piece now and enjoy the combination of style, comfort, and functionality!",
            category: "Oudoor",
            price: 629,
            currency: "USD",
            stock: 2,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/18191/full/35685-Home-Deluxe-Hollywoodschaukel-Descanso-Beige-Ambiente01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/18191/full/Deascanso-beige-E4L.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/18191/full/18191-Hollywoodschaukel-Descanso-Beige-01_1.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/18191/full/18191-Hollywoodschaukel-Descanso-Beige-04.jpg",

            ],
            slug: "REST - 3-Seater Porch Swing - 115 x 198 cm Beige",
        },

        {
            name: "LAHTI DELUXE L - Outdoor barrel sauna - 195 x 220 cm for 4 people",
            description: "The heart of the traditional outdoor barrel sauna is the powerful 8 kW heater. The barrel sauna fits perfectly into any outdoor area thanks to its size and appearance. It requires little space and is therefore the ideal solution even for small gardens. Thanks to its special shape, the barrel sauna offers nothing but advantages. Air and heat can circulate optimally, ensuring optimal temperature and humidity distribution, as well as a constant indoor climate for maximum, relaxing sauna enjoyment. We've thought of everything to ensure an unforgettable sauna experience. You will receive perfectly coordinated accessories for your LAHTI barrel sauna. The infusion bucket with plastic insert and the infusion ladle allow you to conveniently infuse. To monitor your sauna climate and your sauna session, the scope of delivery includes a thermometer and an hourglass.",
            info: "Are you looking for a modern way to enjoy a classic sauna in your outdoor area? Then the LAHTI DELUXE - L barrel sauna is the perfect choice for you! With its unique design, it will be an eye-catcher in your outdoor oasis.",
            category: "Outdoor",
            price: 2939,
            currency: "USD",
            stock: 1,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20005/full/20005-1000x1000-Home-Deluxe-Outdoorsauna-LAHTI-Deluxe-XL-Ambiente02.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20005/full/Lathi-l-DELUXE-1650x1650-Web-1.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20005/full/L-DELUXE-7.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20005/full/Lahti-Detail-6.jpg",

            ],
            slug: "lahti-deluxe-l-outdoor-barrel-sauna-195-x-220-cm-for-4-people",
        },

        {
            name: "FRANK - Fire pit and wood shed - Made in Germany",
            description: "This fire pit, MADE IN GERMANY, is a multifunctional decorative element for your outdoor area. Enjoy the crackling flames of an open fire and prepare delicious breadsticks on the coals. It can be flexibly installed anywhere in the garden or outdoor area; the split top and bottom construction allows for easy placement. Thanks to the lack of a drainage hole, there are no unsightly water stains on the surface.",
            info: "FRANK is a must-have for any garden lover and not only offers an attractive design but also enough space for firewood.",
            category: "Outdoor",
            price: 199,
            currency: "USD",
            stock: 6,
            featured: false,
            image: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/18183/full/18183-Home-Deluxe-Feuerschale-FRANK-Ambiente-01.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/18183/full/Feuerschale-Frank-45grad-freigestellt2.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/18183/full/Frank-bearbeitetA.jpg",
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/18183/full/Feuerschale-FRANK-Ambiente-final.jpg",

            ],
            slug: "frank-fire-pit-and-wood-shed-made-in-germany",
        },



    ];



    await Product.bulkCreate(newProduct);
    console.log("¡Las tablas de productos fueron creadas!");

}

module.exports = productSeeders;
