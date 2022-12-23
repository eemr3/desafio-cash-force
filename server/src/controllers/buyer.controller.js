const BuyerController = require('../services/buyer.service');

const findAllBuyer = async (req, res) => {
  const buyers = await BuyerController.findAllBuyer();

  return res.status(200).json(buyers);
};

module.exports = {
  findAllBuyer,
};
