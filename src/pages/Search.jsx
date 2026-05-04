import { Search as SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import FeatureCard from '../components/ui/FeatureCard.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { images } from '../data/siteContent.js';
import { getSearchResults } from '../services/api.js';

function Search() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setQuery(initialQuery);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [initialQuery]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(true);
      setError(null);

      getSearchResults(query)
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 250);

    return () => window.clearTimeout(timer);
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
        {loading && <p className="content-status">Searching...</p>}
        {error && <p className="content-status content-status--error">{error}</p>}
        {!loading && !error && (
          <div className="feature-grid">
            {results.map((item) => (
              <FeatureCard item={item} key={`${item.type}-${item.title}`} compact />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Search;
