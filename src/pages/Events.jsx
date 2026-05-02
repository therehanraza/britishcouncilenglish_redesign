import EventCard from '../components/ui/EventCard.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import SidebarCard from '../components/ui/SidebarCard.jsx';
import { events, images } from '../data/siteContent.js';

function Events() {
  return (
    <main className="page two-column-page">
      <div className="content-column">
        <PageHero
          eyebrow="Events"
          title="Events"
          copy="Discover library activities, cultural programmes, education events, summer camps, and reading challenges across India."
          image={images.event}
          imageAlt="People attending an event"
          actions={[
            { label: 'Browse events', to: '#event-list' },
            { label: 'Join newsletter', to: '/newsletter', variant: 'secondary' },
          ]}
        />

        <section className="section-block" id="event-list">
          <SectionTitle
            title="Upcoming and featured events"
            copy="Event information is arranged with dates, locations, and categories visible at a glance."
          />
          <div className="event-list">
            {events.map((event) => (
              <EventCard event={event} key={event.title} />
            ))}
          </div>
        </section>
      </div>

      <aside className="sidebar-column" aria-label="Event highlights">
        <SidebarCard title="Contact us" text="Need help with event registration or venue details?" image={images.contact} />
        <SidebarCard title="Summer camp 2026" text="Confidence-building creative learning for young learners." image={images.summerCamp} />
        <SidebarCard title="India/UK Together, a Season of Culture" text="Cultural programmes that connect people and ideas." image={images.arts} />
      </aside>
    </main>
  );
}

export default Events;
