import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, topic, message } = req.body;

    if (!name || !email || !topic || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const contact = new Contact({ name, email, topic, message });
    await contact.save();

    res.status(201).json({ ok: true, message: 'Your message has been sent.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET - Get all contact submissions (for admin later)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;