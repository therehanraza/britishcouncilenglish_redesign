import express from 'express';
import Contact from '../models/Contact.js';
import { requireAdmin } from '../middleware/requireAdmin.js';

const router = express.Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

router.post('/', async (req, res) => {
  try {
    const payload = {
      name: clean(req.body.name),
      email: clean(req.body.email).toLowerCase(),
      topic: clean(req.body.topic),
      message: clean(req.body.message),
    };

    if (!payload.name || !payload.email || !payload.topic || !payload.message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (!emailPattern.test(payload.email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    if (payload.message.length < 10) {
      return res.status(400).json({ message: 'Message must be at least 10 characters.' });
    }

    const contact = new Contact(payload);
    await contact.save();

    return res.status(201).json({ ok: true, message: 'Your message has been sent.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Unable to send your message right now.' });
  }
});

router.get('/', requireAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.json(contacts);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Unable to load contact submissions.' });
  }
});

export default router;
