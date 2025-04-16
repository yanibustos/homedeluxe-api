const User = require("../models/User");
const Admin = require("../models/Admin");

const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const fs = require("fs");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ["password"] },
      });
      return res.status(200).json({ msg: "Users retrieved successfully", users });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  show: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: { exclude: ["password"] },
      });
      if (user) {
        return res.status(200).json({ msg: "User found successfully", user });
      } else {
        return res.status(400).json({ msg: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  create: (req, res) => res.render("addUser"),

  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;

      const isEmailRegisteredInUser = await User.findOne({ where: { email } });
      const isEmailRegisteredInAdmin = await Admin.findOne({ where: { email } });

      if (isEmailRegisteredInUser || isEmailRegisteredInAdmin) {
        return res.status(400).json({ msg: "Email is already registered" });
      }

      const hashedPassword = await User.hashedPassword(password);

      const user = await User.create({ firstname, lastname, email, password: hashedPassword });

      return res.status(201).json({ msg: "User created successfully", user });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ msg: error.message });
    }
  },

  edit: async (req, res) => {
    const { firstname, lastname, email } = req.body;
    const { id } = req.params;
    const user = await User.findOne(id, firstname, lastname, email);
    return res.render("editUser", { user });
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
        const { firstname, lastname, email, password, phone, address, country, state, city, zip } =
          fields;
        const user = await User.findByPk(id);

        if (!user) {
          return res.status(404).json({ message: "User not found." });
        }

        let avatar = user.avatar;

        if (files.avatar && files.avatar.size > 0) {
          avatar = files.avatar.newFilename;
        }

        const phoneValue = fields.phone?.trim() || null;
        const addressValue = fields.address?.trim() || null;
        const countryValue = fields.country?.trim() || null;
        const stateValue = fields.state?.trim() || null;
        const zipValue = fields.zip?.trim() || null;
        const cityValue = fields.city?.trim() || null;
        const hashedPassword = password ? await User.hashedPassword(password) : user.password;

        const updatedUser = await user.update({
          firstname,
          lastname,
          email,
          password: hashedPassword,
          avatar,
          phone: phoneValue,
          address: addressValue,
          country: countryValue,
          state: stateValue,
          city: cityValue,
          zip: zipValue,
        });

        if (updatedUser) {
          await supabase.storage.from("avatars").remove([user.avatar]);
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
        return res.json(updatedUser);
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (user) {
        await User.destroy({
          where: {
            id,
          },
        });
        return res.status(200).json({ msg: "User deleted successfully" });
      } else {
        return res.status(404).json({ msg: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = userController;
