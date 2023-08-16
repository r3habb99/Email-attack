const Template = require('../models/template');

exports.getAllTemplates = async (req, res) => {
    try {
      const template = await Template.find();
      res.json(template);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

exports.createTemplate = async (req, res) => {
  try {
    const { name, content } = req.body;

    const newTemplate = new Template({ name, content });
    await newTemplate.save();
    res.status(201).json(newTemplate);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTemplate = async (req, res) => {
    try {
      const { name, content } = req.body;
  
      const updatedTemplate = await Template.findByIdAndUpdate(
        req.params.id,
        { name, content },
        { new: true }
      );
  
      if (!updatedTemplate) {
        return res.status(404).json({ error: 'Template not found' });
      }
  
      res.json(updatedTemplate);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

exports.deleteTemplate = async (req, res) => {
    try {
      const deletedTemplate = await Template.findByIdAndDelete(req.params.id);
  
      if (!deletedTemplate) {
        return res.status(404).json({ error: 'Template not found' });
      }
  
      res.json({ message: 'Template deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
