import InfoList from '../components/ui/InfoList.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import SidebarCard from '../components/ui/SidebarCard.jsx';
import { images, studyItems } from '../data/siteContent.js';

function StudyUK() {
  return (
    <main className="page two-column-page">
      <div className="content-column">
        <PageHero
          eyebrow="Study abroad guidance"
          title="Study in the UK"
          copy="Explore UK courses, scholarships, student life, education agents, alumni stories, and practical planning resources."
          image={images.university}
          imageAlt="Students on a university campus"
          actions={[
            { label: 'Explore pathways', to: '#study-sections' },
            { label: 'View events', to: '/events', variant: 'secondary' },
          ]}
        />

        <section className="copy-panel">
          <h2>The UK is a world leader in education</h2>
          <p>
            The UK offers globally recognised qualifications across engineering,
            science, arts, business, law, finance, and many other fields. Students
            can combine subjects, shape their study path, and build international
            experience.
          </p>
        </section>

        <section className="section-block" id="study-sections">
          <SectionTitle title="In this section" copy="Popular study topics are grouped into a clear student journey." />
          <InfoList items={studyItems} />
        </section>
      </div>

      <aside className="sidebar-column" aria-label="Study UK highlights">
        <SidebarCard
          title="Apply for a GREAT scholarship to a UK university"
          text="Find scholarships that can support your study plans."
          image={images.scholarship}
        />
        <SidebarCard
          title="Take your IELTS preparation to the next level"
          text="Explore preparation options for study and migration goals."
          image={images.studentsLibrary}
        />
        <SidebarCard
          title="Unlock your path to academic excellence"
          text="Use guides and events to plan your UK study journey."
        />
      </aside>
    </main>
  );
}

export default StudyUK;
