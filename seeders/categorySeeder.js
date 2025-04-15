const { Product, Category } = require("../models");

async function categorySeeder() {
  await Category.sync({ force: true });
  console.log("Se restablecieron las tablas de categoria");

  const newCategory = [
    {
      name: "Sofas and armchairs",
      slug: "sofas-and-armchairs",
      image:
        "https://f.fcdn.app/imgs/86391f/www.viasono.com.uy/viasuy/4804/webp/catalogo/B204071264_204070087_1/460x460/sofa-modular-urban-beige-3-cuerpos.jpg",
    },
    {
      name: "Decoration",
      slug: "decoration",
      image:
        "https://f.fcdn.app/imgs/f5b0cb/www.viasono.com.uy/viasuy/832b/webp/catalogo/B704011973_704010036_1/460x460/espejo-malon-marron-rectangular.jpg",
    },
    {
      name: "Tables and desk",
      slug: "tables-and-desk",
      image:
        "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21897/full/51858-home-deluxe-essgruppe-aventura-120x120-light-oak-amara-beige-ambiente-01.jpg",
    },
    {
      name: "Kitchen",
      slug: "kitchen",
      image:
        "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25145/full/60534-home-deluxe-siebtraegermaschine-exquisite-ambiente-01.jpg",
    },
    {
      name: "Bedroom",
      slug: "bedroom",
      image:
        "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/21656/full/51475-51476-home-deluxe-familienbett-nube-schubladen-200x270-schwarz-ambiente-01-NEU.jpg",
    },
    {
      name: "Outdoor",
      slug: "outdoor",
      image:
        "https://f.fcdn.app/imgs/5885fb/www.viasono.com.uy/viasuy/6b36/webp/catalogo/B206021753_206020033_1/460x460/silla-de-exterior-shadow-gris.jpg",
    },
    {
      name: "Kids",
      slug: "kids",
      image:
        "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/20779/full/20779-home-deluxe-Kinderbett-Sternenland-mit-Schubladen-90x200-Weiss-Ambiente01.jpg",
    },
    {
      name: "Office",
      slug: "office",
      image:
        "https://cdn02.plentymarkets.com/emoguafh21bo/item/images/25862/full/61787-61788-home-deluxe-schreibtisch-elmo-weiss-holz-ohne-ambiente-01.jpg",
    },
    {
      name: "Dining",
      slug: "dining",
      image:
        "https://f.fcdn.app/imgs/89d63a/www.viasono.com.uy/viasuy/e710/webp/catalogo/B205011969_205011863_1/460x460/mesa-de-comedor-pampa-marron-rectangular.jpg",
    },
    {
      name: "Uncategorized",
      slug: "uncategorized",
    },
  ];

  await Category.bulkCreate(newCategory);
  console.log("¡Las tablas de categorias fueron creadas!");
}

module.exports = categorySeeder;
