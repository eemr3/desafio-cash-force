const ProviderService = require('../services/provider.service');

const findPrivderById = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const provide = await ProviderService.findPrivderById(id);

  return res.status(200).json(provide);
};

module.exports = {
  findPrivderById,
};
