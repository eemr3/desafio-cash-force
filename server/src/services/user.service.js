const { User } = require('../infra/models');

const findAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  findAllUsers,
};
