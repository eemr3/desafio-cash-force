const UserController = require('../services/user.service');

const findAllUsers = async (req, res) => {
  const users = await UserController.findAllUsers();
  return res.status(200).json(users);
};

module.exports = {
  findAllUsers,
};
