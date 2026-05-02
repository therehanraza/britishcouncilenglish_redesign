import InfoList from '../components/ui/InfoList.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import SidebarCard from '../components/ui/SidebarCard.jsx';
import { examItems, images } from '../data/siteContent.js';

function TakeExam() {
  return (
    <main className="page two-column-page">
      <div className="content-column">
        <PageHero
          eyebrow="Tests and qualifications"
          title="Take an exam"
          copy="Find English tests, school and business qualifications, professional exams, university exams, and preparation support."
          image={images.examHall}
          imageAlt="Students taking an exam"
          actions={[
            { label: 'View exam options', to: '#exam-options' },
            { label: 'Ask for support', to: '/contact', variant: 'secondary' },
          ]}
        />

        <section className="section-block" id="exam-options">
          <SectionTitle
            title="Exam services and preparation"
            copy="Each option is presented as a clear summary so learners and organisations can compare quickly."
          />
          <InfoList items={examItems} />
        </section>
      </div>

      <aside className="sidebar-column" aria-label="Exam support">
        <SidebarCard title="Contact us" text="Need help with exam registration or support?" image={images.contact} />
        <SidebarCard
          title="WhatsApp exam support"
          text="Ask about exams offered from Monday to Friday, 9.00 a.m. to 6.00 p.m."
          image={images.onlineLearning}
        />
        <SidebarCard title="EnglishScore" text="A mobile English test for fast language-level insight." image={images.onlineLearning} />
      </aside>
    </main>
  );
}

export default TakeExam;
