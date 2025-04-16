const formidable = require("formidable");
const { Category, Product } = require("../models");
const { sequelize } = require("../setup");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const fs = require("fs");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll({
        attributes: [
          "id",
          "name",
          "image",
          "slug",
          [sequelize.fn("COUNT", sequelize.col("products.id")), "productCount"],
        ],
        include: [
          {
            model: Product,
            attributes: [],
          },
        ],
        group: ["category.id"],
        order: [["id", "ASC"]],
      });

      return res.status(200).json({ categories });
    } catch (error) {
      return res.status(500).json({ msg: error });
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
      const form = formidable({
        multiples: false,
        keepExtensions: true,
      });

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ msg: "Something went wrong while parsing form data." });
        }

        const { name } = fields;

        if (!name) {
          return res.status(400).json({ msg: "Category name is required." });
        }

        const existingCategory = await Category.findOne({ where: { name } });
        if (existingCategory) {
          return res.status(400).json({ msg: "Category name already exists." });
        }

        let image = "";

        if (files.image && files.image.size > 0) {
          image = files.image.newFilename;

          const { data, error } = await supabase.storage
            .from("avatars")
            .upload(image, fs.createReadStream(files.image.filepath), {
              cacheControl: "3600",
              upsert: false,
              contentType: files.image.mimetype,
              duplex: "half",
            });

          if (error) {
            console.error(error);
            return res.status(500).json({ msg: "Failed to upload image." });
          }
        }

        const category = await Category.create({ name, image });

        return res.status(201).json({ category });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: error.message });
    }
  },

  edit: async (req, res) => {},

  update: async (req, res) => {
    try {
      const form = formidable({
        multiples: false,
        keepExtensions: true,
      });

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Something went wrong while parsing form data." });
        }

        const { name } = fields;

        const category = await Category.findByPk(req.params.id);
        if (!category) {
          return res.status(404).json({ error: "Category not found" });
        }

        if (category.name === "Uncategorized") {
          return res.status(400).json({ error: '"Uncategorized" can\'t be edited' });
        }

        if (name) {
          const existingCategory = await Category.findOne({
            where: { name },
          });

          if (existingCategory && existingCategory.id !== category.id) {
            return res.status(400).json({ error: "Category name must be unique" });
          }

          category.name = name;
        }

        if (files.image && files.image.size > 0) {
          const image = files.image.newFilename;

          const { data, error } = await supabase.storage
            .from("avatars")
            .upload(image, fs.createReadStream(files.image.filepath), {
              cacheControl: "3600",
              upsert: false,
              contentType: files.image.mimetype,
              duplex: "half",
            });

          if (error) {
            console.error(error);
            return res.status(500).json({ error: "Failed to upload image." });
          }

          category.image = image;
        }

        await category.save();

        return res.status(200).json({ msg: "Category updated successfully", category });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
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
