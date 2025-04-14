const { Product, Category } = require("../models");

async function categorySeeder() {
  await Category.sync({ force: true });
  console.log("Se restablecieron las tablas de categoria");

  const newCategory = [
    {
      name: "Sofas and armchairs",
      slug: "sofas-and-armchairs",
    },
    {
      name: "Decoration",
      slug: "decoration",
    },
    {
      name: "Tables and desk",
      slug: "tables-and-desk",
    },
    {
      name: "Kitchen",
      slug: "kitchen",
    },
    {
      name: "Bedroom",
      slug: "bedroom",
    },
    {
      name: "Outdoor",
      slug: "outdoor",
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
