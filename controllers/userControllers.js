const Role = require("../models/Role");
const User = require("../models/User");

const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const fs = require("fs");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json({ msg: "Users retrieved successfully", users });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  show: async (req, res) => {
    const user = await User.findByPk(req.params.id, { include: Role });
    return res.json({ user });
  },

  create: (req, res) => res.render("addUser"),

  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      const isEmailRegistered = await User.findOne({ where: { email } });

      if (isEmailRegistered) {
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

      form.parse(req, async (error, mapValueFieldNames, files) => {
        if (err) throw new Error("Something went wrong.");

        const { id } = req.params;
        const { firstname, lastname, email, password } = fields;
        const user = await User.findByPk(id);
        let avatar = user.avatar;

        if (files.avatar && files.avatar.size > 0) {
          avatar = files.avatar.newFilename;
        }

        const hashedPassword = password ? await user.hashedPassword(password) : user.password;

        const updatedUser = await User.findByIdAndUpdate(
          id,
          { firstname, lastname, username, email, password: hashedPassword, description, avatar },
          { new: true, runValidators: true },
        );

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
        } else {
          return res.status(404).json({ message: "User not found." });
        }
        return res.json(updatedUser);
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    await User.destroy(id);
    return res.redirect("/");
  },
};

module.exports = userController;
