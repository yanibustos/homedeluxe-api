const Admin = require("../models/Admin");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const fs = require("fs");

const adminController = {
  index: async (req, res) => {
    try {
      const admins = await Admin.findAll({
        attributes: { exclude: ["password"] },
      });
      return res.status(200).json({ msg: "Admin users retrieved successfully", admins });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  show: async (req, res) => {
    try {
      const admin = await Admin.findByPk(req.params.id, {
        attributes: { exclude: ["password"] },
      });
      if (admin) {
        return res.status(200).json({ msg: "Admin user found successfully", admin });
      } else {
        return res.status(400).json({ msg: "Admin user not found" });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  create: (req, res) => {
    // res.render("addAdmin")
  },

  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;

      const isEmailRegisteredInUser = await User.findOne({ where: { email } });
      const isEmailRegisteredInAdmin = await Admin.findOne({ where: { email } });

      if (isEmailRegisteredInUser || isEmailRegisteredInAdmin) {
        return res.status(400).json({ msg: "Email is already registered" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const admin = await Admin.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });

      return res.status(201).json({ msg: "Admin created successfully", admin });
    } catch (error) {
      console.error("Error creating admin:", error);
      res.status(500).json({ msg: error.message });
    }
  },

  edit: async (req, res) => {
    // const { firstname, lastname, email } = req.body;
    // const { id } = req.params;
    // const admin = await Admin.findOne(id, firstname, lastname, email);
    // return res.render("editAdmin", { admin });
  },

  update: async (req, res) => {
    try {
      const form = formidable({
        multiples: true,
        keepExtensions: true,
      });

      form.parse(req, async (error, fields, files) => {
        if (error) throw new Error("Something went wrong.");

        const { id } = req.params;
        const { firstname, lastname, email, password } = fields;
        const admin = await Admin.findByPk(id);

        if (!admin) {
          return res.status(404).json({ message: "Admin user not found." });
        }

        let avatar = admin.avatar;

        if (files.avatar && files.avatar.size > 0) {
          avatar = files.avatar.newFilename;
        }

        const hashedPassword = password ? await Admin.hashedPassword(password) : admin.password;

        const updatedAdmin = await admin.update({
          firstname,
          lastname,
          email,
          password: hashedPassword,
          avatar,
        });

        if (updatedAdmin) {
          await supabase.storage.from("avatars").remove([admin.avatar]);
          if (files.avatar && files.avatar.size > 0) {
            const { data, error } = await supabase.storage
              .from("avatars")
              .upload(files.avatar.newFilename, fs.createReadStream(files.avatar.filepath), {
                cacheControl: "3600",
                upsert: false,
                contentType: files.avatar.mimetype,
                duplex: "half",
              });

            if (error) {
              return res
                .status(500)
                .json({ message: "Error uploading avatar", error: error.message });
            }
          }
        }
        return res.json(updatedAdmin);
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);

      if (!admin) {
        return res.status(404).json({ msg: "Admin not found" });
      }

      await admin.destroy();
      return res.status(200).json({ msg: "Admin user deleted successfully" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = adminController;
