const Category = require("../models/Category");

async function productSeeders() {
    await Product.sync({ force: true });
    console.log("Se restablecieron las tablas de roles");
  
      const newCategory = [
              
          {
              name: "Sofa and armchairs",
           
          },
  
          {
              name: "Decoration",
             
          },
  
          {
              name: "Tables and desk",
           
          },
      
               
          {
              name: "Kitchen furniture ",
             
          },
  
  
          {
              name: "Bedroom",
             
          },
  
          {
              name: "Outdoors",
              
          },

          {
            name: "Uncategorized",
          
        }
      ];
  
      
  
      await Category.bulkCreate(newCategory);
      console.log("¡Las tablas de categorias fueron creadas!");
  
  }
  
  module.exports = categorySeeder;
  