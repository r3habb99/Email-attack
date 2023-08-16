const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/email-attack-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




// Controllers
const attackRoutes = require('./routes/attack')
const templateRoutes = require('./routes/template');
const authRoutes = require('./routes/user')

// Routes for Users
app.use('/api', authRoutes)
// Routes for email attacks
app.use('/api', attackRoutes);
// Routes for email templates
app.use('/api', templateRoutes);

// Server port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
