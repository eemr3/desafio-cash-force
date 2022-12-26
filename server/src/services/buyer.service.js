const { Buyer } = require('../infra/models');

const findAllBuyer = async () => {
  return await Buyer.findAll();
};

module.exports = {
  findAllBuyer,
};
