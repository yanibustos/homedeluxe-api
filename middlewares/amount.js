
function calculateSummary(order) {
    let totalItems = 0;
    let totalPrice = 0;
  
    for (const product of order.Products) {
      const quantity = product.OrderProduct.quantity;
      totalItems += quantity;
      totalPrice += quantity * product.price;
    }
  
    return { totalItems, totalPrice };
  }


module.exports = { calculateSummary }

  
