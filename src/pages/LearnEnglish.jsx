import InfoList from '../components/ui/InfoList.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import SidebarCard from '../components/ui/SidebarCard.jsx';
import { images, learnCourses } from '../data/siteContent.js';

function LearnEnglish() {
  return (
    <main className="page two-column-page">
      <div className="content-column">
        <PageHero
          eyebrow="Learn English"
          title="Learn English with the world's English experts"
          copy="Choose online classes, in-person courses, young learner programmes, workplace training, and teacher development options."
          image={images.adultLearning}
          imageAlt="Adults learning English together"
          actions={[
            { label: 'Explore courses', to: '#courses' },
            { label: 'Contact us', to: '/contact', variant: 'secondary' },
          ]}
        />

        <section className="section-block" id="courses">
          <SectionTitle
            title="Explore our courses"
            copy="Courses are organized by learner type so students can find the right path faster."
          />
          <InfoList items={learnCourses} />
        </section>
      </div>

      <aside className="sidebar-column" aria-label="Learn English highlights">
        <SidebarCard
          title="Teaching courses and qualifications"
          text="Professional development for English teachers and education teams."
          image={images.school}
        />
        <SidebarCard
          title="Equality, diversity and inclusion in English teaching"
          text="Resources and programmes that support inclusive learning spaces."
          image={images.kidsCourse}
        />
        <SidebarCard
          title="Live chat for English courses"
          text="Get help choosing a course or understanding registration."
          detail="Mon-Sat, 9.00 a.m. to 6.00 p.m."
        />
      </aside>
    </main>
  );
}

export default LearnEnglish;
