const Role = require("../models/Role");
const User = require("../models/User")


const userController = {

    index: async (req, res) => {
        const users = await User.findAll()
        return res.json({ users });
    },

    show: async (req, res) => {
        const user = await User.findByPk(req.params.id, { include: Role})
        return res.json({ user });
    },


    create: (req, res) => res.render("addUser"),

    store: async (req, res) => {
        const { firstname, lastname, email, password } = req.body;
        const user = await User.create({ id, firstname, lastname, email, password })

        return res.json({ user })
    },



    edit: async (req, res) => {
        const { firstname, lastname, email } = req.body;
        const { id } = req.params;
        const user = await User.findOne(id, firstname, lastname, email);
        return res.render("editUser", { user });
    },


    update: async (req, res) => {
        const { firstname, lastname, email, password } = req.body;
        const { avatar } = req.params.avatar
        const user = await User.update(avatar, firstname, lastname, email);

        return res.json("/:id", { user });

    },

    destroy: async (req, res) => {
        const { id } = req.params;
        await User.destroy(id)
        return res.redirect("/")
    }


};

module.exports = userController;


