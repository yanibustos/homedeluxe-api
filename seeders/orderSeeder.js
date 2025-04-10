const { User, Order, Product } = require("../models");
const _ = require("lodash");

module.exports = async () => {
  await User.sync();
  await Order.sync();

  const users = await User.findAll();
  const products = await Product.findAll();

  if (!products.length) {
    console.error(
      "No hay productos en la base de datos. Tienes que correr el seeder de productos primero.",
    );
    return;
  }

  const ordersToCreate = [];

  for (const user of users) {
    const numOrders = _.random(1, 3);

    for (let i = 0; i < numOrders; i++) {
      const numItems = _.random(1, 5);
      const selectedProducts = _.sampleSize(products, numItems);

      const items = selectedProducts.map((product) => {
        const plainProduct = product.get({ plain: true });

        delete plainProduct.createdAt;
        delete plainProduct.updatedAt;
        delete plainProduct.stock;

        return {
          ...plainProduct,
          quantity: _.random(1, 3),
        };
      });

      const orderData = {
        userId: user.id,
        items,
        status: _.sample(["pending", "paid", "processing", "shipped", "canceled"]),
        shippingAddress: `Calle ${_.random(1, 1000)}`,
        paymentMethod: _.sample(["VISA", "MASTERCARD", "Mercado Pago", "PayPal", "AMEX"]),
      };

      ordersToCreate.push(orderData);
    }
  }

  const createdOrders = await Order.bulkCreate(ordersToCreate, { returning: true });

  console.log(`Se crearon ${createdOrders.length} órdenes con productos asociados.`);
};
