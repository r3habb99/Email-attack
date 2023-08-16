// controllers/authController.js

const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, 'your-secret-key', (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = decodedToken;
    next();
  });
};
