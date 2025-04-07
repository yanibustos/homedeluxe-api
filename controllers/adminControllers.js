const Role = require("../models/Role");
const Admin = require("../models/Admin")


const adminController = {

    index: async (req, res) => {
        const admins = await Admin.findAll()
        return res.json({ admins });
    },

    show: async (req, res) => {
        const admin = await Admin.findByPk(req.params.id, { include: Role})
        return res.json({ admin });
    },


    create: (req, res) => res.render("addAdmin"),

    store: async (req, res) => {
        const { firstname, lastname, email, password } = req.body;
        const admin = await Admin.create({ id, firstname, lastname, email, password })

        return res.json({ admin })
    },



    edit: async (req, res) => {
        const { firstname, lastname, email } = req.body;
        const { id } = req.params;
        const admin = await Admin.findOne(id, firstname, lastname, email);
        return res.render("editAdmin", { admin });
    },


    update: async (req, res) => {
        const { firstname, lastname, email, password } = req.body;
        const { avatar } = req.params.avatar
        const admin = await Admin.update(avatar, firstname, lastname, email);

        return res.json("/:id", { admin });

    },

    destroy: async (req, res) => {
        const { id } = req.params;
        await Admin.destroy(id)
        return res.redirect("/")
    }


};

module.exports = adminController;


