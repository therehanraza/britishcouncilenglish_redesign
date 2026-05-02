import { Search as SearchIcon } from 'lucide-react';
import { useMemo, useState } from 'react';

import FeatureCard from '../components/ui/FeatureCard.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { images, searchIndex } from '../data/siteContent.js';

function Search() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) {
      return searchIndex.slice(0, 9);
    }

    return searchIndex.filter((item) => {
      const searchable = `${item.title} ${item.text} ${item.type || ''}`.toLowerCase();
      return searchable.includes(cleanQuery);
    });
  }, [query]);

  return (
    <main className="page">
      <PageHero
        eyebrow="Search"
        title="Find courses, exams, events, and services"
        copy="Search across the site to quickly locate sections, learning options, support pages, and articles."
        image={images.onlineLearning}
        imageAlt="Person searching on a laptop"
      />

      <section className="section-block">
        <div className="search-panel">
          <SearchIcon size={22} aria-hidden="true" />
          <label className="sr-only" htmlFor="site-search">
            Search this site
          </label>
          <input
            id="site-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by course, exam, library, study, event..."
          />
        </div>
      </section>

      <section className="section-block">
        <SectionTitle title={query ? `Results for "${query}"` : 'Popular results'} copy={`${results.length} result${results.length === 1 ? '' : 's'} found`} />
        <div className="feature-grid">
          {results.map((item) => (
            <FeatureCard item={item} key={`${item.type}-${item.title}`} compact />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Search;
