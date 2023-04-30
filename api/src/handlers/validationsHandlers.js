const validateDni = (req, res, next) => {
  const { dni } = req.body;
  if (!dni) {
    res.status(400).json({ error: "No se a ingresado el dni" });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    res.status(400).json({ error: "No se a ingresado la password" });
  }
  next();
};

module.exports = {
  validateDni,
  validatePassword,
};
