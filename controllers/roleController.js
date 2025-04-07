const Role = require("../models/Role");


const roleController = {

    index: async (req, res) => {
        const roles = await User.findAll()
        return res.json({ roles });
    },

    show: async (req, res) => {
        const role = await Role.findByOne(req.params)
        return res.json({ role });
    },


    create: (req, res) => res.render("addUser"),

    store: async (req, res) => {
        const { name, value } = req.body;
        const role = await Role.create({ name, value })

        return res.json({ role })
    },



    edit: async (req, res) => {
        const { name, value } = req.body;
        const { id } = req.params;
        const role = await Role.findOne(id, name, value);
        return res.render("editRole", { role });
    },


    update: async (req, res) => {
        const { name, value } = req.body;
                const role = await User.update(name, value);

        return res.json("/:id", { role });

    },

    destroy: async (req, res) => {
        const { id } = req.params;
        await Role.destroy(id)
        return res.redirect("/")
    }


};

module.exports = roleController;


