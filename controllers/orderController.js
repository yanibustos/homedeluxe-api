
const Order = require("../models/Order");
const Product = require("../models/Product")


const orderController = {

    index: async (req, res) => {
        try {
            const orders = await Order.findAll({
                include: [
                    {
                        model: Product,
                        through: { attributes: ['id', 'name', 'price', 'createdAt'] },
                        order: [['createdAt', 'DESC']]
                    }
                ]
            });

            res.status(200).json(orders);
        } catch (error) {
            console.error('Error fetching orders:', error);
            res.status(500).json({ message: 'Error fetching orders' });
        }
    },


    show: async (req, res) => {
        try {
            const order = await Order.findbyPk({
                include: [
                    {
                        model: Product,
                        through: { attributes: ['id', 'name', 'price', 'createdAt'] },
                        order: [['createdAt', 'DESC']]
                    }
                ]
            });

            res.status(200).json(order);
        } catch (error) {
            console.error('Error fetching orders:', error);
            res.status(500).json({ message: 'Error fetching orders' });
        }
    },
    

    getOrdersbyUserid: async (req, res) => {
        const userId = req.params.userid;
        const order = await Order.findbyOne({ userId })
            .select('-_id -products._id')
            .then((orders) => {
                res.json(orders);
            })
            .catch((err) => console.log(err));

        return res.json({ order })
    },



    create: (req, res) => res.render("addOrder"),

    store: async (req, res) => {
        if (typeof req.body == undefined) {
            res.json({
                status: 'error',
                message: 'data is undefined',
            });
        } else {  
             
                 let cartCount = 0;
             Order.find().countDocuments(function (err, count) {
               OrderCount = count
               })
    
                 .then(() => {
            const order = {
                id: req.params,
                userId: req.body.userId,
                date: req.body.date,
                products: req.body.products,
            };
             
             order.save()
               .then(order => res.json(order))
               .catch(err => console.log(err))
    
            res.json(order);
             })
    
            res.json({...req.body,id:Order.find().count()+1})
        }
    
    },



    edit: async (req, res) => {
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


    update: async (req, res) => {


    },

    destroy: async (req, res) => {
        if (req.params.id == null) {
            res.json({
                status: 'error',
                message: 'order id should be provided',
            });
        } else {
            Order.findOne({ id: req.params.id })
                .select('-_id -products._id')
                .then((order) => {
                    res.json(order);
                })
                .catch((err) => console.log(err));
        }
        return res.redirect("/")
    }


};

module.exports = orderController;


