// controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // If user doesn't exist or password is incorrect
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, 'your-secret-key', {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
