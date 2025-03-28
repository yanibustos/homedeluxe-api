const customQuery = require("../dbhandler")



const productController = {

    index: async (req, res) => {
        const products = await customQuery("SELECT * FROM products", []);
        return res.render("product", { products });
    },

    create: (req, res) => res.render("addProduct"),

    store: async (req, res) => {
        const { name, description, price, quantity, categorie } = req.body
        await customQuery(
            `INSERT INTO products (name, description, price, quantity, categorie ) VALUES (?, ?, ?, ?, ?)`,
            [name, description, price, quantity, categorie ]);
        return res.redirect("/products");
    },


};

module.exports = productController;