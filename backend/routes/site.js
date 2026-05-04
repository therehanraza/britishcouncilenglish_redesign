import express from 'express';
import SiteChrome from '../models/SiteChrome.js';

const router = express.Router();

function sortByOrder(items = []) {
  return [...items].sort((a, b) => (a.order || 0) - (b.order || 0));
}

function normalizeLinks(items = []) {
  return sortByOrder(items).map((item) => ({
    label: item.label,
    path: item.path,
    description: item.description,
  }));
}

function normalizeNavLinks(items = []) {
  return sortByOrder(items).map((item) => ({
    label: item.label,
    path: item.path,
    description: item.description,
    dropdown: normalizeLinks(item.dropdown),
  }));
}

function normalizeFooter(footer = {}) {
  return {
    title: footer.title,
    copy: footer.copy,
    contactItems: sortByOrder(footer.contactItems),
    sections: sortByOrder(footer.sections).map((section) => ({
      title: section.title,
      links: normalizeLinks(section.links),
    })),
    copyright: footer.copyright,
    socialLinks: sortByOrder(footer.socialLinks),
  };
}

router.get('/chrome', async (req, res) => {
  try {
    const siteChrome = await SiteChrome.findOne({ key: 'main' }).lean();

    if (!siteChrome) {
      return res.status(404).json({ message: 'Site chrome not found.' });
    }

    return res.json({
      navLinks: normalizeNavLinks(siteChrome.navLinks),
      utilityLinks: normalizeLinks(siteChrome.utilityLinks),
      footer: normalizeFooter(siteChrome.footer),
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
