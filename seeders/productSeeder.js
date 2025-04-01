const Product = require("../models/Product")



async function productSeeders() {
    await Product.sync({ force: true });
    console.log("Se restablecieron las tablas de roles");


    const newProduct = [
        {
            name: " ROM -Gray sofa with chaise longue ", description: "A comfortable changeover artist: the ROM corner sofa adapts individually to your living situation. The semi-modular design allows the corner to be positioned on the left or right. The included stool can be used as a sofa extension, additional seating, or as a shelf. It also offers space-saving storage options, for example, for blankets and pillows. Your new oasis of wellness offers a spacious seating area combined with high-quality foam padding for maximum sitting and lying comfort. The pleasantly soft covers guarantee many cozy moments. To give you personal design ideas, our sofa is available in a variety of colors.", category: "sofas and armchairs", price: "U$D700", stock: 18, featured: false, img: [
                "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20560/full/Home-Deluxe-Sofa-Rom-Grau-Ambiente-Rechts.jpg", "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20560/full/Home-Deluxe-Sofa-Rom-Grau-Freisteller-Rechts.jpg", "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20560/full/Home-Deluxe-Sofa-Rom-Grau-Details3.jpg", "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20560/full/Home-Deluxe-Sofa-Rom-Grau-Details5.jpg", "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20560/full/Home-Deluxe-Sofa-Rom-Grau-Details2.jpg"
            ]
        },
        {
            name: "VERONA - Modular sofa - 240 x 120 cm light gray", description: "The new VERONA sofa is perfect for cozy evenings and fits perfectly into any setting. You can combine the elements as you wish. Create a large or small sofa that suits your needs and add additional elements as your needs change. The high-quality foam padding offers a high level of seating comfort and adapts to your body, whether lying down or sitting. The cover is made of durable polyester fabric, which is especially soft and adds character to the room. Thanks to the deep, evenly shaped seats, VERONA is very comfortable even when lying down, making the modular sofa perfect for any environment, so you can easily enjoy a peaceful sleep in the spacious lounge and seating areas. It's also very practical: the elements can be quickly and easily relocated without tools. With crocodile hooks, you can rearrange the elements and change the look. Create the sofa of your dreams now. Our VERONA sofa makes it possible!", category: "sofas and armchairs", price: "U$D1119", stock: 6, featured: true, img: ["https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20411/full/49454-home-deluxe-sofa-verona-s-hellgrau-ambiente-01.jpg", "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20411/full/49454-home-deluxe-sofa-verona-s-hellgrau-freisteller-01.jpg", "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20411/full/49454-home-deluxe-sofa-verona-hellgrau-detail-01.jpg", "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20411/full/49454-home-deluxe-sofa-verona-s-hellgrau-freisteller-02.jpg", "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20411/full/49454-home-deluxe-sofa-verona-hellgrau-detail-02.jpg"


            ]
        },



    ]

    await Product.bulkCreate(newProduct);
    console.log("¡Las tablas de roles fueron creadas!");

}


module.exports = productSeeders;