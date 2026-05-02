import ButtonLink from '../components/ui/ButtonLink.jsx';
import FeatureCard from '../components/ui/FeatureCard.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import SidebarCard from '../components/ui/SidebarCard.jsx';
import { images, libraryResources } from '../data/siteContent.js';

function Library() {
  return (
    <main className="page two-column-page">
      <div className="content-column">
        <PageHero
          eyebrow="Library"
          title="Books, browsing and beyond"
          copy="Get access to digital resources, physical library spaces, curated recommendations, workshops, screenings, and reading communities."
          image={images.studentsLibrary}
          imageAlt="Person reading in a library"
          actions={[
            { label: 'Digital Library', to: '#membership' },
            { label: 'Physical Library', to: '#membership', variant: 'secondary' },
          ]}
        />

        <section className="copy-panel" id="membership">
          <h2>Easy access to learning and entertainment - anytime, anywhere</h2>
          <p>
            Use the Digital Library for e-books, audiobooks, films, music,
            comics, journals, newspapers, magazines, and learning modules. Visit
            physical libraries in Delhi, Chennai, and Kolkata for collections,
            community events, and workshops.
          </p>
          <div className="quick-links">
            <ButtonLink to="/contact">Digital Library</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Physical Library
            </ButtonLink>
          </div>
        </section>

        <section className="section-block">
          <SectionTitle title="Library services" copy="Membership options and library activities are grouped into clear cards." />
          <div className="feature-grid feature-grid--two">
            {libraryResources.map((item) => (
              <FeatureCard item={item} key={item.title} />
            ))}
          </div>
        </section>
      </div>

      <aside className="sidebar-column" aria-label="Library highlights">
        <SidebarCard title="Discover more" text="Recommendations from books to films and much more." image={images.reading} />
        <SidebarCard title="Upcoming workshops" text="Skills-based workshops, film screenings, book clubs, and author discussions." image={images.event} />
        <SidebarCard title="Guide to access the British Council Digital Library" text="A simple guide for getting started with digital membership." image={images.onlineLearning} />
      </aside>
    </main>
  );
}

export default Library;
