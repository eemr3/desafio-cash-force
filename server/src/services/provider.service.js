const { Provider, Cnpj } = require('../infra/models');

const findPrivderById = async (id) => {
  const provider = await Provider.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Cnpj,
        as: 'cnpjs',
      },
    ],
  });

  if (!provider) {
    throw new Error('Provider not found');
  }

  return provider;
};

module.exports = {
  findPrivderById,
};
