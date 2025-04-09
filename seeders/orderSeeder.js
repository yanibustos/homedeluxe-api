const { User, Product, Order, OrderProduct } = require("../models");
const _ = require("lodash");

module.exports = async () => {
  await User.sync();
  await Product.sync();
  await Order.sync();
  await OrderProduct.sync();

  const users = await User.findAll();
  const products = await Product.findAll();

  const ordersToCreate = [];
  const orderProductToCreate = [];

  for (const user of users) {
    const numOrders = _.random(1, 3);

    for (let i = 0; i < numOrders; i++) {
      const selectedProducts = _.sampleSize(products, _.random(1, 5));

      let total = 0;
      const orderData = {
        userId: user.id,
        status: _.sample(["pending", "paid", "processing", "shipped", "canceled"]),
        shippingAdress: `Calle ${_.random(1, 1000)}`,
        paymentMethod: _.sample(["VISA", "MASTERCARD", "Mercado Pago", "PayPal", "AMEX"]),
      };

      const orderIndex = ordersToCreate.length;

      for (const product of selectedProducts) {
        const quantity = _.random(1, 3);
        total += product.price * quantity;

        orderProductToCreate.push({
          productId: product.id,
          quantity,
          _orderIndex: orderIndex,
        });
      }

      orderData.totalPrice = total;
      ordersToCreate.push(orderData);
    }
  }

  const createdOrders = await Order.bulkCreate(ordersToCreate, { returning: true });

  const finalOrderProducts = orderProductToCreate.map((op) => ({
    orderId: createdOrders[op._orderIndex].id,
    productId: op.productId,
    quantity: op.quantity,
  }));

  await OrderProduct.bulkCreate(finalOrderProducts);

  console.log(`Se crearon ${createdOrders.length} órdenes con productos asociados.`);
};
