const Product = require("../models/Product");

async function productSeeders() {
  await Product.sync({ force: true });

  const newProduct = [
    {
      name: "VERONA S - Modular sofa  - 240 x 120 cm light gray",
      description:
        "The new VERONA S sofa is perfect for cozy evenings and fits perfectly into any setting. You can combine the elements as you wish. Create a large or small sofa that suits your needs and add additional elements as your needs change. The high-quality foam padding offers a high level of seating comfort and adapts to your body, whether lying down or sitting. The cover is made of durable polyester fabric, which is especially soft and adds character to the room. Thanks to the deep, evenly shaped seats, VERONA is very comfortable even when lying down, making the modular sofa perfect for any environment, so you can easily enjoy a peaceful sleep in the spacious lounge and seating areas. It's also very practical: the elements can be quickly and easily relocated without tools. With crocodile hooks, you can rearrange the elements and change the look. Create the sofa of your dreams now. Our VERONA sofa makes it possible!",
      info: "The Verona S sofa consists of two modules that can be combined. It's very easy to expand with additional modules.",
      category: "sofas and armchairs",
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
    },

    {
      name: "VERONA M - Modular sofa - 327 x 120 cm beige",
      description:
        "You can combine the elements as you wish. Create a large or small sofa that suits your needs and add additional elements as your needs change. The high-quality foam padding offers a high level of seating comfort and adapts to your body, whether lying down or sitting. The cover is made of durable polyester fabric, which is especially soft and adds character to the room. Thanks to the deep, evenly shaped seats, VERONA is very comfortable even when lying down, making the modular sofa perfect for any environment, so you can easily enjoy a peaceful sleep in the spacious lounge and seating areas. It's also very practical: the elements can be quickly and easily relocated without tools. With crocodile hooks, you can rearrange the elements and change the look.",
      info: "The new VERONA M sofa is perfect for cozy evenings and fits perfectly into any setting. Create the sofa of your dreams now. Our VERONA sofa makes it possible!",
      category: "sofas and armchairs",
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
    },

    {
      name: "VERONA L - Modular sofa - 327 x 207 cm anthracite",
      description:
        "You have the freedom to combine the individual elements as you wish. Design a spacious or compact sofa to suit your needs and add additional components as needed to meet changing demands. Easily combine this seating element with other modules, create a chaise longue, and position the armrests to best suit your living space. All sofa parts are also available individually, so you can arrange them in a variety of ways until you find the perfect combination. The high-quality foam padding ensures unparalleled seating comfort and adapts to your body in both lying and sitting positions. The cover is made of durable polyester fabric. Thanks to its generous, evenly shaped seats, VERONA offers excellent comfort even when lying down. This makes this modular sofa ideal for any room design. You can relax effortlessly in the spacious seating and lounge areas. Elements can be easily rearranged without the use of tools. With the help of practical crocodile clips, you can change the arrangement of elements in an instant and create a new look.",
      info: "The sofa presents itself aesthetically from all sides, so you can place it against a wall or in the center of the room. Create the individual sofa of your dreams now!",
      category: "sofas and armchairs",
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
    },

    {
      name: "VERONA XL - Modular sofa - 414 x 207 cm beige",
      description:
        "You can combine the elements as you wish. Create a large or small sofa that suits your needs and add additional elements as your needs change. The high-quality foam padding offers a high level of seating comfort and adapts to your body, whether lying down or sitting. The cover is made of durable polyester fabric, which is especially soft and adds character to the room. Thanks to the deep, evenly shaped seats, VERONA is very comfortable even when lying down, making the modular sofa perfect for any environment, so you can easily enjoy a peaceful sleep in the spacious lounge and seating areas. It's also very practical: the elements can be quickly and easily relocated without tools. With crocodile hooks, you can rearrange the elements and change the look.",
      info: "The new VERONA sofa is perfect for cozy evenings and fits perfectly into any setting. Create the sofa of your dreams now. Our VERONA sofa makes it possible!",
      category: "sofas and armchairs",
      price: 2039,
      currency: "USD",
      stock: 2,
      featured: true,
      image: [
        "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21559/full/51306-home-deluxe-modulares-sofa-verona-xxl-anthrazit-ambiente-02.jpg",
        "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21559/full/51306-home-deluxe-modulares-sofa-verona-xxl-anthrazit-ambiente-01.jpg",
        "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21559/full/xxx-home-deluxe-sofa-verona-xxl-anthrazit-detail-02.jpg",
        "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21559/full/xxx-home-deluxe-sofa-verona-xxl-anthrazit-detail05.jpg",
      ],
    },

    {
      name: "VERONA XXL - Modular sofa - 414 x 207 cm anthracite",
      description:
        "The new VERONA sofa offers the perfect setting for relaxed evenings and fits perfectly into any environment. Create the individual sofa of your dreams now!",
      info: "You have the freedom to combine the individual elements as you wish. Design a spacious or compact sofa to suit your needs and add additional components as needed to meet changing demands. Easily combine this seating element with other modules, create a chaise longue, and position the armrests to best suit your living space. All sofa parts are also available individually, so you can arrange them in a variety of ways until you find the perfect combination. The high-quality foam padding ensures unparalleled seating comfort and adapts to your body in both lying and sitting positions. The cover is made of durable polyester fabric. Thanks to its generous, evenly shaped seats, VERONA offers excellent comfort even when lying down. This makes this modular sofa ideal for any room design. You can relax effortlessly in the spacious seating and lounge areas. Elements can be easily rearranged without the use of tools. With the help of practical crocodile clips, you can change the arrangement of elements in an instant and create a new look.",
      category: "sofas and armchairs",
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
    },

    {
      name: " ROM -Gray sofa with chaise longue ",
      description:
        "A comfortable changeover artist: the ROM corner sofa adapts individually to your living situation. The semi-modular design allows the corner to be positioned on the left or right. The included stool can be used as a sofa extension, additional seating, or as a shelf. It also offers space-saving storage options, for example, for blankets and pillows. Your new oasis of wellness offers a spacious seating area combined with high-quality foam padding for maximum sitting and lying comfort. The pleasantly soft covers guarantee many cozy moments. To give you personal design ideas, our sofa is available in a variety of colors.",
      category: "sofas and armchairs",
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
    },

    {
      name: "CASARA - Beige woven sofa - 258 x 128 x 72 cm",
      description:
        "This elegant premium sofa in a sophisticated dark green hue combines a refined design with maximum seating and lying comfort, offering you a place to relax every day. Its wide and deep surface invites you to enjoy a pleasant rest, allowing you to fully enjoy every moment in your living room. Made with high-quality, durable materials, the CASARA sofa stands out not only for its soft padding but also for its sturdy construction, which ensures stability and durability even with intensive use. Its elegant appearance blends harmoniously with any decor, and thanks to its easy assembly, it's ready in an instant to add a special touch to your space. Invest in comfort and style: the CASARA sofa is the ideal companion for relaxing and stylish moments at home.",
      info: "Floating design with invisible legs. Maximum comfort for sitting and lying down.",
      category: "sofas and armchairs",
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
    },

    {
      name: "TORINO- Corner sofa - 344 x 178 cm beige right",
      description:
        "The sofa's wide seat not only offers enough space for sitting, but also for lying down and relaxing. The sofa's modern design fits perfectly into your interior and brings a contemporary elegance to your room. The harmonious color and design make it an eye-catcher. The sofa's stable substructure not only ensures long-term stability but also promotes consistent comfort throughout the seating area. The sofa's color scheme radiates warmth and serenity and creates a relaxing atmosphere in your living room. The 100% polyester fabric is comfortable and easy to care for. The foam padding provides support and comfort, while the metal base adds a modern touch and provides additional stability. Our L-shaped sofa, with its distinctive L shape, maximizes available space and creates an inviting atmosphere for entertaining, relaxing, and gatherings.",
      info: "Our L-shaped sofa version in an elegant beige color impresses with its exemplary comfort and attractive design.",
      category: "sofas and armchairs",
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
    },
  ];

  await Product.bulkCreate(newProduct);
  console.log("¡Las tablas de productos fueron creadas!");
}

module.exports = productSeeders;
