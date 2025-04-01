const Product = require("../models/Product")


const productController = {

    index: async (req, res) => {
        const products = await Product.findAll()
        return res.json({ products });
    },

    show: async (req, res) => {
        const product = await Product.findByPk(req.params.id)
        return res.json({ product });
    },


    create: (req, res) => res.render(),

    store: async (req, res) => {
        const { tittle, description, category, price, stock} = req.body;
        const product = await Product.create({ id, tittle, description, category, price, stock })

        return res.json({ product })
    },



    edit: async (req, res) => {
        const { tittle, description, category, price, stock } = req.body;
        const { id } = req.params;
        const product = await Product.findOne(id, tittle, description, category, price, stock);
        return res.render( { product });
    },


    update: async (req, res) => {
        const { tittle, description, category, price, stock } = req.body;
        const product = await Product.update(tittle, description, category, price, stock);

        return res.json("/:id", { product });

    },

    destroy: async (req, res) => {
        const { id } = req.params;
        await Product.destroy(id)
        return res.redirect("/")
    }


};

module.exports = productController;


