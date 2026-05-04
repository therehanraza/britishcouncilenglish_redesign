import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Page from './models/page.js';

dotenv.config();

const pages = [
  {
    slug: 'learn-english',
    title: 'Learn English with the world\'s English experts',
    eyebrow: 'Learn English',
    copy: 'Choose online classes, in-person courses, young learner programmes, workplace training, and teacher development options.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Adults learning English together',
    actions: [
      { label: 'Explore courses', to: '#courses' },
      { label: 'Contact us', to: '/contact', variant: 'secondary' },
    ],
    sections: [
      {
        type: 'info-list',
        title: 'Explore our courses',
        copy: 'Courses are organized by learner type so students can find the right path faster.',
        items: [
          { title: 'English courses for adults', text: 'Build confidence for work, study, travel, and daily communication with expert-led classes.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80' },
          { title: 'English courses for kids and teens', text: 'Help young learners practise communication, creativity, and life skills in English.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Learn English online', text: 'Study with flexible online lessons, guided practice, and expert support.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Corporate English Solutions', text: 'Training and assessment support for businesses, government teams, and institutions.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Professional English for Sectors', text: 'Customised English solutions for higher education, schools, NGOs, and workplaces.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Teaching courses and qualifications', text: 'Professional development for teachers who want practical, classroom-ready skills.', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80' },
        ],
      },
    ],
    sidebar: [
      { title: 'Teaching courses and qualifications', text: 'Professional development for English teachers and education teams.', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Equality, diversity and inclusion in English teaching', text: 'Resources and programmes that support inclusive learning spaces.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Live chat for English courses', text: 'Get help choosing a course or understanding registration.', detail: 'Mon-Sat, 9.00 a.m. to 6.00 p.m.' },
    ],
  },
  {
    slug: 'take-exam',
    title: 'Find the right exam for your goals',
    eyebrow: 'Take an exam',
    copy: 'From IELTS to professional qualifications, we offer trusted exam administration across India.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Students taking an exam',
    actions: [
      { label: 'Explore exams', to: '#exams' },
      { label: 'Contact us', to: '/contact', variant: 'secondary' },
    ],
    sections: [
      {
        type: 'info-list',
        title: 'Exams we offer',
        copy: 'Choose the exam that matches your study, work, or professional goals.',
        items: [
          { title: 'Why take an exam with the British Council?', text: 'International qualifications can support study, work, and career plans with trusted administration.', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Learn English, Assess Proficiency Pathway', text: 'A practical language pathway designed for higher education institutions and students.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80' },
          { title: 'English Assessment for schools', text: 'Age-appropriate assessments that help schools understand learner progress.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Aptis - Forward thinking English test', text: 'A flexible English test for organisations that need efficient language assessment.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Cambridge Assessment', text: 'A range of exams including recognised qualification and assessment options.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Professional exams', text: 'Exam administration support for professional boards in medicine, finance, marketing, and more.', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80' },
          { title: 'University exams', text: 'Secure exam support for students taking UK university assessments in India.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Prepare for IELTS with the British Council', text: 'Preparation options for one of the most recognised English language tests for study and work.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80' },
          { title: 'EnglishScore', text: 'A mobile English test for quick insight into language levels across teams and learners.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80' },
        ],
      },
    ],
    sidebar: [
      { title: 'IELTS preparation', text: 'Get ready for IELTS with expert guidance and practice materials.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Exam support', text: 'Ask about exam registration, preparation, and certificates.', detail: 'Support available on working days' },
    ],
  },
  {
    slug: 'study-uk',
    title: 'Study in the UK',
    eyebrow: 'Study in the UK',
    copy: 'Explore scholarships, courses, education agents, student guides, and alumni opportunities.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'University campus in the UK',
    actions: [
      { label: 'Explore options', to: '#options' },
      { label: 'Contact us', to: '/contact', variant: 'secondary' },
    ],
    sections: [
      {
        type: 'info-list',
        title: 'Study UK options',
        copy: 'Everything you need to plan your UK study journey.',
        items: [
          { title: 'Study UK Create to Connect Competition', text: 'A chance for students to show creativity, critical thinking, and problem-solving through short videos.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Alumni Awards 2026', text: 'Celebrating the achievements of UK alumni and their impact in India.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Courses in the UK', text: 'Explore universities, course choices, and academic pathways across the UK.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Education Agents', text: 'Understand how agents can support applications, visas, accommodation, and travel planning.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80' },
          { title: 'MOOCs on FutureLearn', text: 'Discover online courses from UK institutions and cultural organisations.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Scholarships and funding', text: 'Find funding options that match your academic goals and study plans.', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Why study in the UK?', text: 'Learn why the UK remains a popular destination for international students.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80' },
        ],
      },
    ],
    sidebar: [
      { title: 'Scholarships and funding', text: 'Find funding options that match your academic goals.', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Why study in the UK?', text: 'Learn why the UK remains a popular destination for international students.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80' },
    ],
  },
  {
    slug: 'our-work',
    title: 'Creating opportunities through education, culture, and skills',
    eyebrow: 'Our work in India',
    copy: 'Our work helps young people develop skills, gain international experience, and build stronger understanding between cultures.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'People learning together online',
    actions: [
      { label: 'Explore programmes', to: '#programmes' },
      { label: 'Partner with us', to: '/contact', variant: 'secondary' },
    ],
    sections: [
      {
        type: 'info-list',
        title: 'In this section',
        copy: 'Programme areas across education, arts, English, skills, and partnerships.',
        items: [
          { title: 'Our work in the Arts', text: 'Connecting India and the UK through creative collaboration, cultural exchange, and innovation.', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Our work in skills', text: 'Supporting high quality skills training for young people across India and the UK.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Our work with schools', text: 'Working with public and private schools through projects, courses, resources, and digital platforms.', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Our work in higher education', text: 'Enabling internationalisation, collaboration, scholarships, student mobility, and alumni engagement.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80' },
          { title: 'Our work in English teaching and learning', text: 'Helping partners improve the quality of English teaching, learning, and assessment.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80' },
        ],
      },
    ],
    sidebar: [
      { title: 'English teaching and learning', text: 'Support for quality English education and assessment.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Higher education', text: 'International collaboration, grants, policy, scholarships, and mobility.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80' },
      { title: 'Skills and schools', text: 'Projects that support young people and school communities.', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80' },
    ],
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected.');

    await Page.deleteMany({});
    console.log('Cleared existing pages.');

    await Page.insertMany(pages);
    console.log('Pages seeded successfully.');

    await mongoose.disconnect();
    console.log('Done.');
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
}

seed();