const ProviderService = require('../services/provider.service');

const findProviderById = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const provide = await ProviderService.findProviderById(id);

  return res.status(200).json(provide);
};

module.exports = {
  findProviderById,
};
