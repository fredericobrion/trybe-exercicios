const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

const validateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;
  if (!regexData.test(createdAt)) {
    return res
      .status(400)
      .json({ message: 'O campo createdAt deve ter o formato dd/mm/aaaa' });
  }
  next();
};

module.exports = validateCreatedAt;
