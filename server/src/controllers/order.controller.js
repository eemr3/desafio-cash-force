const OrderController = require('../services/order.service');

const findAllOrder = async (req, res) => {
  const orders = await OrderController.findAllOrders();

  return res.status(200).json(orders);
};

module.exports = {
  findAllOrder,
};
