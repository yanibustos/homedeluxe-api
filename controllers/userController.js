const customQuery = require("../dbhandler")



const userController = {

    index: async (req, res) => {
        const users = await customQuery("SELECT * FROM users", []);
        return res.render("home", { users });
    },

    create: (req, res) => res.render("addUser"),

    store: async (req, res) => {
        const { firstname, lastname, email, password } = req.body
        await customQuery(
            `INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`,
            [firstname, lastname, email, password]);
        return res.redirect("/usuarios");
    },


};

module.exports = userController;


