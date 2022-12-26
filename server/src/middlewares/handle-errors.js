const handleErrors = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  console.info(error);
  return res.status(500).json({ message: 'Internal server Error!' });
};

module.exports = {
  handleErrors,
};
