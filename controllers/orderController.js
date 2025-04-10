const { Order, User, Product } = require("../models");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: User,
            attributes: { exclude: ["password", "createdAt", "updatedAt"] },
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
      const { userId, items, shippingAddress, paymentMethod } = req.body;

      if (!userId || !items || items.length === 0) {
        return res.status(400).json({ msg: "Invalid data" });
      }

      const order = await Order.create({
        userId,
        items,
        shippingAddress,
        paymentMethod,
      });

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
