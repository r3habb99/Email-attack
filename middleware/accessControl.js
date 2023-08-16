// middleware/accessControl.js

const accessControl = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      next();
    };
  };
  
  module.exports = accessControl;
  