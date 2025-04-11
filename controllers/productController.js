const formidable = require("formidable");
const Product = require("../models/Product");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const fs = require("fs");

const productController = {
  index: async (req, res) => {
    const products = await Product.findAll();
    return res.json(products);
  },

  show: async (req, res) => {
    try {
      const { id } = req.params;

      if (isNaN(id)) {
        const product = await Product.findOne({ where: { slug: id } });

        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ msg: "Product found successfully", product });
      }

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      return res.status(200).json({ msg: "Product found successfully", product });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  showByFeatured: async (req, res) => {
    try {
      const products = await Product.findAll({ where: { featured: true } });

      if (products && products.length > 0) {
        return res.status(200).json({ msg: "Products were found successfully", products });
      } else {
        return res.status(404).json({ msg: "No featured products found" });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  create: (req, res) => {
    //TODO: FIx or delete
    // res.render()
  },

  store: async (req, res) => {
    try {
      const form = formidable({
        multiples: true,
        keepExtensions: true,
      });

      form.parse(req, async (error, fields, files) => {
        if (error) throw new Error("Something went wrong.");

        const { name, description, category, price, stock, currency, featured } = fields;
        const images = [];

        if (files.image && Array.isArray(files.image)) {
          for (const file of files.image) {
            const imageSize = file.size;
            if (imageSize) {
              images.push(file.newFilename);

              const { data, error: uploadError } = await supabase.storage
                .from("avatars")
                .upload(file.newFilename, fs.createReadStream(file.filepath), {
                  cacheControl: "3600",
                  upsert: false,
                  contentType: file.mimetype,
                  duplex: "half",
                });

              if (uploadError) {
                return res.status(500).json({ msg: "Image upload failed", error: uploadError });
              }
            }
          }
        } else if (files.image) {
          const imageSize = files.image.size;
          if (imageSize) {
            images.push(files.image.newFilename);

            const { data, error: uploadError } = await supabase.storage
              .from("avatars")
              .upload(files.image.newFilename, fs.createReadStream(files.image.filepath), {
                cacheControl: "3600",
                upsert: false,
                contentType: files.image.mimetype,
                duplex: "half",
              });

            if (uploadError) {
              return res.status(500).json({ msg: "Image upload failed", error: uploadError });
            }
          }
        }

        const product = await Product.create({
          name,
          description,
          category,
          price,
          stock,
          currency,
          featured,
          image: images,
        });

        if (product) {
          return res.status(201).json({ msg: "Product created successfully", product });
        } else {
          return res.status(500).json({ msg: "Product creation failed" });
        }
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  edit: async (req, res) => {
    //TODO: Fix code or delete
    // const { tittle, description, category, price, stock, currency } = req.body;
    // const { id } = req.params;
    // const product = await Product.findOne(
    //   id,
    //   tittle,
    //   description,
    //   category,
    //   price,
    //   stock,
    //   currency,
    // );
    // return res.render({ product });
  },

  update: async (req, res) => {
    try {
      const form = formidable({
        multiples: true,
        keepExtensions: true,
      });

      form.parse(req, async (error, fields, files) => {
        if (error) throw new Error("Something went wrong.");

        const { name, description, category, price, stock, currency, featured } = fields;
        const productId = req.params.id;

        const existingProduct = await Product.findOne({ where: { id: productId } });
        if (!existingProduct) {
          return res.status(404).json({ msg: "Product not found" });
        }

        let image = existingProduct.image;

        if (files.image && files.image.size) {
          image = files.image.newFilename;

          const { data, error } = await supabase.storage
            .from("avatars")
            .upload(files.image.newFilename, fs.createReadStream(files.image.filepath), {
              cacheControl: "3600",
              upsert: false,
              contentType: files.image.mimetype,
              duplex: "half",
            });

          if (error) {
            return res.status(500).json({ msg: "Image upload failed", error });
          }
        }

        const product = await Product.update(
          {
            name,
            description,
            category,
            price,
            stock,
            currency,
            featured,
            image,
          },
          {
            where: { id: productId },
          },
        );

        if (product) {
          return res.status(201).json({ msg: "Product updated successfully", product });
        } else {
          return res.status(500).json({ msg: "Failed to update product" });
        }
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await Product.destroy({ where: { id } });
      return res.status(200).json({ msg: "Product deleted successfully" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = productController;
