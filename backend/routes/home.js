import express from 'express';
import HomeContent from '../models/HomeContent.js';

const router = express.Router();

function sortCards(cards = []) {
  return [...cards].sort((a, b) => (a.order || 0) - (b.order || 0));
}

router.get('/', async (req, res) => {
  try {
    const home = await HomeContent.findOne({ key: 'main' }).lean();

    if (!home) {
      return res.status(404).json({ message: 'Home content not found.' });
    }

    return res.json({
      heroSlides: sortCards(home.heroSlides),
      pathways: sortCards(home.pathways),
      homePromos: sortCards(home.homePromos),
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
