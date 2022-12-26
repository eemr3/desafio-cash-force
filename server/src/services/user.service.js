const { User } = require('../infra/models');

const findAllUsers = async () => {
  return await User.findAll();
};

module.exports = {
  findAllUsers,
};
