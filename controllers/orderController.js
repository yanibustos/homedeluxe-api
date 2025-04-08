
const { json, Op } = require("sequelize");
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const { create } = require("lodash");
const calculateSummary = require("../middlewares/amount")



const orderController = {

    index: async (req, res) => {     // muestra todas las ordenes y solo debe ser visible desde dashboard
        try {

            // limitar cantidad de ordenes por pagina o scroll infinito

            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;

            const { from, to, productId } = req.query;

            // filtrar por usuario

            let where = { userId };

            // filtrar por fecha

            if (from || to) {
                where.createdAt = {};
                if (from) where.createdAt[Op.gte] = new Date(from);
                if (to) where.createdAt[Op.lte] = new Date(to);
            }

            // filtrar por producto, eststus o categoria

            let productFilter = {};
            if (productId) {
                productFilter = {
                    model: Product,
                    where: { id: productId },
                    through: { attributes: ['status', 'category'] },
                };
            } else {
                productFilter = {
                    model: Product,
                    through: { attributes: ['status', 'category'] },
                };
            }

            const { count, rows } = await Order.findAndCountAll({
                where,
                include: [productFilter],
                order: [['createdAt', 'DESC']],
                limit,
                offset
            });

            res.status(200).json({
                total: count,
                page,
                pages: Math.ceil(count / limit),
                orders: rows,
            });
        } catch (error) {
            console.error('Error fetching orders:', error);
            res.status(500).json({ message: 'Error fetching orders' });
        }
    },


    getOrdersbyUserid: async (req, res) => {   // muestra todas las ordenes de un usuario logueado desde su perfil con el boton view order
        try {

            const userId = req.user.id;
            const orders = await Order.findAll({
                where: { userId },
                include: [
                    {
                        model: Product,
                        through: { attributes: ['id', 'name', 'price', 'quantity', 'status'] },
                    }
                ],
                order: [['createdAt', 'DESC']],
            });

            res.status(200).json(orders);
        } catch (error) {
            console.error('Error fetching orders:', error);
            res.status(500).json({ message: 'Error fetching orders' });
        }
    },


    show: async (req, res) => {    // muestra una orden por su id desde dashboard
        try {
            const { id } = req.params;
            const order = await Order.findByPk(id, {
                include: [
                    {
                        model: Product,
                        through: { attributes: ['id', 'name', 'price', 'quantity', 'status'] },
                    }
                ],
                order: [['createdAt', 'DESC']],
            });

            if (!order) return res.status(404).json({ message: 'Order Not Found' });

            const summary = calculateSummary(order);

            res.status(200).json({
                ...order.toJSON(),
                summary
            });
        } catch (error) {
            console.error('Error fetching order:', error);
            res.status(500).json({ message: 'Error fetching order' });
        }
    },


    showOrder: async (req, res) => {     // muestra una orden por el id de su usuario y se usa en el checkout
        try {
            const { id } = req.params;
            const userId = req.user.id;


            const order = await Order.findOne({
                where: { id, userId },
                include: [
                    {
                        model: Product,
                        through: { attributes: ['id', 'name', 'price', 'quantity', 'status'] },
                    }
                ],
                order: [['createdAt', 'DESC']],
            });

            if (!order) return res.status(404).json({ message: 'Order Not Found' });

            const summary = calculateSummary(order);

            res.status(200).json({
                ...order.toJSON(),
                summary
            });
        } catch (error) {
            console.error('Error fetching order:', error);
            res.status(500).json({ message: 'Error fetching order' });
        }
    },



    create: async (req, res) => {

        try {
            const userId = req.user.id;
            const { products, status } = req.body;


            if (!products || !products.length) {
                return res.status(400).json({ message: 'Your cart is empty' });
            }

            const productIds = products.map(p => p.id);
            const foundProducts = await Product.findAll({ where: { id: productIds } });

            if (foundProducts.length !== productIds.length) {
                return res.status(400).json({ message: "One or more of the products in your cart are out of stock" })
            }

            const order = await Order.create({ userId, status: status || 'pending' });
            for (const item of products) {
                await order.addProduct(item.id, { through: { quantity: item.quantity || 1 } });
            }

            const fullOrder = await Order.findByPk(order.id, {
                include: [{ model: Product, through: { attributes: ['id', 'name', 'quantity', 'price'] } }]
            });

            const summary = calculateSummary(fullOrder);

            res.status(201).json({
                ...fullOrder.toJSON(),
                summary
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error during proccess, order failure' });
        }
    },





    edit: async (req, res) => {     // hacer la llamada para editar una orden desde el dashboard
        if (typeof req.body == undefined || req.params.id == null) {
            res.json({
                status: 'error',
                message: 'something went wrong! check your sent data',
            });
        } else {
            res.json({
                id: parseInt(req.params.id),
                userId: req.body.userId,
                date: req.body.date,
                products: req.body.products,
            });
        }
    },


    update: async (req, res) => {  // actualizar una orden desde el dashboard
        try {
            const { id } = req.params;

            const { products } = req.body;

            const order = await Order.findByPk(id);
            if (!order) return res.status(404).json({ message: 'Orden not found' });

            if (products) {
                await order.setProducts(products);
            }

            const updatedOrder = await Order.findByPk(id, {
                include: [{ model: Product, through: { attributes: ['id', 'name', 'price', 'quantity', 'status'] } }]
            });

            const summary = calculateSummary(updatedOrder);

            res.status(200).json({
                ...updatedOrder.toJSON(),
                summary
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating order' });
        }

    },

    updateByUser: async (req, res) => {  // actualizar una orden desde el perfil de usuario
        try {
            const { id } = req.params;
            const userId = req.user.id;
            const { products, status } = req.body;

            const order = await Order.findOne({
                where: { id, userId },
                include: [{ model: Product }]
            });
            if (!order) return res.status(404).json({ message: 'Orden not found' });

            if (status) {     // cambia de status al pagar o cancelar el pedido
                order.status = status;
                await order.save();
            }

            if (products && products.length) {
                const productIds = products.map(p => p.id);
                const foundProducts = await Product.findAll({ where: { id: productIds } });

                if (foundProducts.length !== products.length) {
                    return res.status(400).json({ message: 'one or more of your products is out of stock' });
                }


                for (const item of products) {
                    const existing = await order.hasProduct(item.id);

                    if (item.quantity <= 0) {   // si elimina el producto de la orden

                        if (existing) {
                            await order.removeProduct(item.id);
                        }
                    } else {
                        if (existing) {   // agrega o quita unidades de un mismo producto

                            await order.addProduct(item.id, {
                                through: { quantity: item.quantity }
                            });
                        } else {

                            await order.addProduct(item.id, {  // mete nuevos porductos al carrito
                                through: { quantity: item.quantity }
                            });
                        }
                    }
                }
            }

            const updatedOrder = await Order.findByPk(order.id, {
                include: [{
                    model: Product,
                    through: { attributes: ['quantity'] }
                }]
            });

            const summary = calculateSummary(updatedOrder);

            res.status(200).json({
                ...updatedOrder.toJSON(),
                summary
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating order' });
        }

    },

    destroy: async (req, res) => {  // destruir una orden desde el dashboard
        try {
            const { id } = req.params;


            const order = await Order.findByPk(id);
            if (!order) return res.status(404).json({ message: 'order id should be provided' });

            await order.destroy();
            res.status(200).json({ message: 'Order destroyed correctly' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error during destruction' });
        }
    },

    destroyByUser: async (req, res) => {   // destruir una imagen desde el usuario
        try {
            const { id } = req.params;
            const userId = req.user.id;

            const order = await Order.findOne({ where: id, userId });
            if (!order) return res.status(404).json({ message: 'order id should be provided' });

            await order.destroy();
            res.status(200).json({ message: 'Order destroyed correctly' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error during destruction' });
        }
    },


};


module.exports = orderController;