import express from 'express';
import Newsletter from '../models/Newsletter.js';
import { requireAdmin } from '../middleware/requireAdmin.js';

const router = express.Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedFrequencies = new Set(['weekly', 'monthly', 'occasionally']);

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

router.post('/', async (req, res) => {
  try {
    const frequency = allowedFrequencies.has(req.body.frequency) ? req.body.frequency : 'monthly';
    const interests = Array.isArray(req.body.interests)
      ? req.body.interests.map(clean).filter(Boolean)
      : [];
    const payload = {
      firstName: clean(req.body.firstName),
      lastName: clean(req.body.lastName),
      email: clean(req.body.email).toLowerCase(),
      interests,
      frequency,
    };

    if (!payload.firstName || !payload.lastName || !payload.email) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }

    if (!emailPattern.test(payload.email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    const existing = await Newsletter.findOne({ email: payload.email });
    if (existing) {
      return res.status(400).json({ message: 'This email is already subscribed.' });
    }

    const newsletter = new Newsletter(payload);
    await newsletter.save();

    return res.status(201).json({ ok: true, message: 'You have been subscribed successfully.' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'This email is already subscribed.' });
    }

    console.error(err);
    return res.status(500).json({ message: 'Unable to save your subscription right now.' });
  }
});

router.get('/', requireAdmin, async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    return res.json(subscribers);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Unable to load newsletter subscribers.' });
  }
});

export default router;
