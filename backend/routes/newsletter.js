import express from 'express';
import Newsletter from '../models/Newsletter.js';

const router = express.Router();

// POST - Submit newsletter signup
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, interests, frequency } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }

    // Check if email already exists
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'This email is already subscribed.' });
    }

    const newsletter = new Newsletter({ firstName, lastName, email, interests, frequency });
    await newsletter.save();

    res.status(201).json({ ok: true, message: 'You have been subscribed successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET - Get all subscribers (for admin later)
router.get('/', async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;