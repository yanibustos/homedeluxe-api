const { Category } = require("../models");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll();

      return res.status(200).json({ msg: "Categories retrieved successfully", categories });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
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

  create: (req, res) => {},

  store: async (req, res) => {
    try {
      const { name } = req.body;

      const existingCategory = await Category.findOne({ where: { name } });
      if (existingCategory) {
        return res.status(400).json({ msg: "Category name already exists" });
      }

      const category = await Category.create({ name });

      return res.status(201).json({ msg: "Category created successfully", category });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  edit: async (req, res) => {},

  update: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      const { name } = req.body;

      if (category.name === "Uncategorized") {
        return res.status(400).json({ error: '"Uncategorized" can\'t be edited' });
      }

      const existingCategory = await Category.findOne({
        where: { name },
      });

      if (existingCategory && existingCategory.id !== category.id) {
        return res.status(400).json({ error: "Category name must be unique" });
      }

      await category.update({ name });
      res.status(200).json({ msg: "Category updated successfully", category });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ msg: "Category not found" });
      }

      await category.destroy();

      return res.status(200).json({ msg: "Category deleted successfully" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = categoryController;
