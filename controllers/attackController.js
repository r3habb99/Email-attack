const Attack = require('../models/attack');

exports.createAttack = async (req, res) => {
  try {
    const { sender, subject, content, isPhishing } = req.body;
    const newAttack = new Attack({ sender, subject, content, isPhishing });
    await newAttack.save();
    res.status(201).json(newAttack);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllAttacks = async (req, res) => {
  try {
    const attacks = await Attack.find();
    res.json(attacks);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateAttack = async (req, res) => {
    try {
      const { sender, subject, content, isPhishing } = req.body;
  
      const updatedAttack = await Attack.findByIdAndUpdate(
        req.params.id,
        { sender, subject, content, isPhishing },
        { new: true }
      );
  
      if (!updatedAttack) {
        return res.status(404).json({ error: 'Attack not found' });
      }
  
      res.json(updatedAttack);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.deleteAttack = async (req, res) => {
    try {
      const deletedAttack = await Attack.findByIdAndDelete(req.params.id);
  
      if (!deletedAttack) {
        return res.status(404).json({ error: 'Attack not found' });
      }
  
      res.json({ message: 'Attack deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
