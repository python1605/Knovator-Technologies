const jwt = require('jsonwebtoken');
const userService = require('../services/user/user.service');

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer', '').trim();
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
        const user = await userService.getAdmin(decoded._id);
        req.user = user;
      }
      next();
    } else {
      return res.send({ error: 'Token verification failed.' });
    }
  } catch (error) {
    return res.status(401).send({ error: 'Token verification failed.' });
  }
};

module.exports = { authenticate };
