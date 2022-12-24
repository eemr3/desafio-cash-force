const { Order, User, Cnpj, Buyer, Provider } = require('../infra/models');

const findAllOrders = async () => {
  return await Order.findAll({
    include: [
      {
        model: User,
        as: 'users',
      },
      {
        model: Cnpj,
        as: 'cnpjs',
      },
      {
        model: Buyer,
        as: 'buyers',
      },
      {
        model: Provider,
        as: 'providers',
      },
    ],
  });
};

module.exports = {
  findAllOrders,
};
