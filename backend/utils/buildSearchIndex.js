import BlogPost from '../models/BlogPost.js';
import Event from '../models/Event.js';
import HomeContent from '../models/HomeContent.js';
import LibraryResource from '../models/LibraryResource.js';
import Page from '../models/page.js';

function normalizeItem(item) {
  return {
    title: item.title,
    text: item.text || item.copy || '',
    type: item.type,
    image: item.image,
    to: item.to,
  };
}

function matchesQuery(item, query) {
  if (!query) {
    return true;
  }

  return `${item.title} ${item.text} ${item.type || ''}`.toLowerCase().includes(query);
}

export async function buildSearchIndex(query = '') {
  const cleanQuery = query.trim().toLowerCase();
  const [home, pages, events, libraryResources, blogPosts] = await Promise.all([
    HomeContent.findOne({ key: 'main' }).lean(),
    Page.find().lean(),
    Event.find().sort({ order: 1 }).lean(),
    LibraryResource.find().sort({ order: 1 }).lean(),
    BlogPost.find().sort({ order: 1 }).lean(),
  ]);

  const records = [];

  if (home) {
    records.push(
      ...home.pathways.map((item) => normalizeItem({ ...item, type: 'Main section' })),
      ...home.homePromos.map((item) => normalizeItem({ ...item, type: 'Featured update' }))
    );
  }

  pages.forEach((page) => {
    records.push(normalizeItem({
      title: page.title,
      text: page.copy,
      type: page.eyebrow || 'Page',
      image: page.image,
      to: `/${page.slug}`,
    }));

    page.sections?.forEach((section) => {
      section.items?.forEach((item) => {
        records.push(normalizeItem({
          ...item,
          type: section.title || page.eyebrow || 'Content',
          to: item.to || `/${page.slug}`,
        }));
      });
    });
  });

  events.forEach((event) => {
    records.push(normalizeItem({
      ...event,
      type: event.category || 'Event',
      to: '/events',
    }));
  });

  libraryResources.forEach((resource) => {
    records.push(normalizeItem({
      ...resource,
      type: 'Library',
      to: resource.to || '/library',
    }));
  });

  blogPosts.forEach((post) => {
    records.push(normalizeItem({
      ...post,
      type: post.category || 'Blog',
      to: post.to || '/blog',
    }));
  });

  return records
    .filter((item) => item.title && matchesQuery(item, cleanQuery))
    .slice(0, cleanQuery ? 24 : 12);
}
