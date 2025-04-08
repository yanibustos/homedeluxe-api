const Category = require("../models/Category")

const categoryController = {
    index: async (req, res) => {
        const categories = await Category.findAll();
        return res.json(categories);
    },

    show: async (req, res) => {
        try {
          const category = await Category.findByPk(req.params.id);
    
          if (category) {
            return res.status(200).json({ msg: "Category found successfully", category });
          } else {
            return res.status(400).json({ msg: "Category not found" });
          }
        } catch (error) {
          return res.status(500).json({ msg: error.message });
        }
      },


    create: async (req, res) => {
        try {
          const { name } = req.body;
          const exists = await Category.findOne({ where: { name } });
          if (exists) return res.status(400).json({ error: 'Category existing' });
    
          const newCategory = await Category.create({ name });
          res.status(201).json(newCategory);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
    



    edit: async (req, res) => {

        return res.render("editCategory", { Category });
    },


    update: async (req, res)  => {
        try {
          const category = await Category.findByPk(req.params.id);
          if (!category) return res.status(404).json({ error: 'Category not found' });
    
          const { name } = req.body;
          if (category.name === 'Uncategorized') {
            return res.status(400).json({ error: ' "Uncategorized" cant be edited' });
          }
    
          await category.update({ name });
          res.json(category);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
    

    delete: async (req, res) => {
        try {
            const category = await Category.findByPk(req.params.id);
            if (!category) return res.status(404).json({ error: 'Not Found' });
    
            await category.destroy(); // desde aqui trabaja el hook
            res.json({ message: 'Category was deleted and products migrated to "Uncategorized"' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    


};



module.exports = categoryController;