const validateDni = (req, res, next) => {
  const { dni } = req.body;
  if (!dni) {
    res.status(400).json({ error: "Please insert DNI" });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    res.status(400).json({ error: "Please insert a password" });
  }
  next();
};

module.exports = {
  validateDni,
  validatePassword,
};
