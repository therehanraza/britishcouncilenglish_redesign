import {
  defaultBlogPosts,
  defaultEvents,
  defaultHomeContent,
  defaultLibraryResources,
  defaultSiteChrome,
} from '../data/defaultContent.js';
import BlogPost from '../models/BlogPost.js';
import Event from '../models/Event.js';
import HomeContent from '../models/HomeContent.js';
import LibraryResource from '../models/LibraryResource.js';
import SiteChrome from '../models/SiteChrome.js';

async function seedIfEmpty(Model, defaults, label) {
  const count = await Model.estimatedDocumentCount();

  if (count > 0) {
    return;
  }

  await Model.insertMany(defaults);
  console.log(`${label} seeded.`);
}

export async function ensureDefaultContent() {
  await Promise.all([
    HomeContent.updateOne(
      { key: 'main' },
      { $setOnInsert: { key: 'main', ...defaultHomeContent } },
      { upsert: true }
    ),
    SiteChrome.updateOne(
      { key: 'main' },
      { $setOnInsert: { key: 'main', ...defaultSiteChrome } },
      { upsert: true }
    ),
    seedIfEmpty(Event, defaultEvents, 'Events'),
    seedIfEmpty(LibraryResource, defaultLibraryResources, 'Library resources'),
    seedIfEmpty(BlogPost, defaultBlogPosts, 'Blog posts'),
  ]);
}
