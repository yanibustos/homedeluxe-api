const { Order, User, Product, OrderProduct } = require("../models");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: User,
            attributes: { exclude: ["password", "createdAt", "updatedAt"] },
          },
          {
            model: Product,
            as: "products",
            attributes: ["id", "name", "price"],
            through: {
              attributes: ["quantity"],
            },
          },
        ],
      });

      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  show: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
          {
            model: Product,
            as: "products",
            attributes: ["id", "name", "price"],
            through: {
              attributes: ["quantity"],
            },
          },
        ],
      });

      if (!order) {
        return res.status(404).json({ msg: "Order not found" });
      }

      return res.status(200).json({ order });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  create: async (req, res) => {},

  store: async (req, res) => {
    try {
      const { userId, products, shippingAdress, paymentMethod } = req.body;

      if (!userId || !products || products.length === 0) {
        return res.status(400).json({ msg: "Invalid data" });
      }

      let totalPrice = 0;

      for (const item of products) {
        const product = await Product.findByPk(item.productId);

        if (!product) {
          return res.status(404).json({ msg: `Product ${item.productId} not found` });
        }
        totalPrice += parseFloat(product.price) * item.quantity;
      }

      const order = await Order.create({
        userId,
        totalPrice,
        shippingAdress,
        paymentMethod,
      });

      for (const item of products) {
        await OrderProduct.create({
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
        });
      }

      return res.status(201).json({ order });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateStatus: async (req, res) => {
    try {
      const { status } = req.body;
      const { id } = req.params;

      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ msg: "Order not found" });
      }

      order.status = status;
      await order.save();

      return res.status(200).json({ msg: "Order status updated", order });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  edit: async (req, res) => {},

  update: async (req, res) => {},

  destroy: async (req, res) => {},
};

module.exports = orderController;
