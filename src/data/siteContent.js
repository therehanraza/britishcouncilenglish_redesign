export const images = {
  summerCamp:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
  studentsLibrary:
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80',
  adultLearning:
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80',
  onlineLearning:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
  kidsCourse:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80',
  examHall:
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80',
  interview:
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
  university:
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80',
  scholarship:
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80',
  event:
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80',
  reading:
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80',
  arts:
    'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=80',
  skills:
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
  school:
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80',
  contact:
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
  newsletter:
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
  blog:
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80',
  report:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
};

export const heroSlides = [
  {
    title: 'Summer camp 2026 #SummerOfConfidence',
    text: 'Build confidence this summer! Two exciting pathways, one unforgettable learning experience. For ages 6–17.',
    image: images.summerCamp,
    cta: 'Learn more',
    to: '/events',
  },
  {
    title: 'STUDY UK Creative Connections 2026',
    text: 'British Council in India is delighted to present the third edition of Study UK Creative Connections from 22 June to 31 July 2026 at the British Council, Delhi.',
    image: images.arts,
    cta: 'Click here to know more',
    to: '/study-uk',
  },
  {
    title: 'Get ready for success with this special discount for online English classes.',
    text: 'Supercharge your English skills with a discount on our online English course.',
    image: images.adultLearning,
    cta: 'Get your discount now',
    to: '/learn-english',
  },
  {
    title: 'Learn English Here',
    text: 'With over 90 years of teaching expertise, the British Council provides an interactive and engaging learning environment designed to build confidence in real-world English. Enrol today!',
    image: images.onlineLearning,
    cta: 'Book a consultation',
    to: '/learn-english',
  },
  {
    title: 'Become a member of our Library today',
    text: 'Unlimited learning opportunities with British Council Library.',
    image: images.studentsLibrary,
    cta: 'Sign up',
    to: '/library',
    isSignup: true,
  },
];

export const homePromos = [
  {
    title: 'Five Films For Freedom coming this March',
    text: 'Celebrate global LGBTQIA+ stories through a free online film programme.',
    image: images.event,
    to: '/events',
  },
  {
    title: 'Apply for a GREAT Scholarship',
    text: 'Explore scholarship options and make your UK study plans more achievable.',
    image: images.scholarship,
    to: '/study-uk',
  },
  {
    title: 'Women in STEM Scholarships',
    text: 'Find funding opportunities for women pursuing science, technology, engineering, and maths.',
    image: images.university,
    to: '/study-uk',
  },
  {
    title: 'Guide for students aspiring to study in the UK',
    text: 'Get practical guidance on courses, applications, living costs, and student life.',
    image: images.studentsLibrary,
    to: '/study-uk',
  },
  {
    title: 'South Asia TeachingEnglish Online Conference 2025',
    text: 'Professional development sessions for teachers across the region.',
    image: images.school,
    to: '/events',
  },
  {
    title: 'Corporate English Solutions',
    text: 'Training options for organisations that want stronger workplace communication.',
    image: images.skills,
    to: '/learn-english',
  },
];

export const pathways = [
  {
    title: 'Learn English',
    text: 'Courses for adults, children, professionals, teachers, and online learners.',
    image: images.adultLearning,
    to: '/learn-english',
  },
  {
    title: 'Take an exam',
    text: 'English tests, school exams, university exams, and professional qualifications.',
    image: images.examHall,
    to: '/take-exam',
  },
  {
    title: 'Study in the UK',
    text: 'Scholarships, courses, education agents, student guides, and alumni opportunities.',
    image: images.university,
    to: '/study-uk',
  },
  {
    title: 'Library',
    text: 'Digital resources, physical libraries, reading lists, and cultural workshops.',
    image: images.reading,
    to: '/library',
  },
];

export const learnCourses = [
  {
    title: 'English courses for adults',
    text: 'Build confidence for work, study, travel, and daily communication with expert-led classes.',
    image: images.adultLearning,
  },
  {
    title: 'English courses for kids and teens',
    text: 'Help young learners practise communication, creativity, and life skills in English.',
    image: images.kidsCourse,
  },
  {
    title: 'Learn English online',
    text: 'Study with flexible online lessons, guided practice, and expert support.',
    image: images.onlineLearning,
  },
  {
    title: 'Corporate English Solutions',
    text: 'Training and assessment support for businesses, government teams, and institutions.',
    image: images.skills,
  },
  {
    title: 'Professional English for Sectors',
    text: 'Customised English solutions for higher education, schools, NGOs, and workplaces.',
    image: images.interview,
  },
  {
    title: 'Teaching courses and qualifications',
    text: 'Professional development for teachers who want practical, classroom-ready skills.',
    image: images.school,
  },
];

export const examItems = [
  {
    title: 'Why take an exam with the British Council?',
    text: 'International qualifications can support study, work, and career plans with trusted administration.',
    image: images.examHall,
  },
  {
    title: 'Learn English, Assess Proficiency Pathway',
    text: 'A practical language pathway designed for higher education institutions and students.',
    image: images.interview,
  },
  {
    title: 'English Assessment for schools',
    text: 'Age-appropriate assessments that help schools understand learner progress.',
    image: images.kidsCourse,
  },
  {
    title: 'Aptis - Forward thinking English test',
    text: 'A flexible English test for organisations that need efficient language assessment.',
    image: images.onlineLearning,
  },
  {
    title: 'Cambridge Assessment',
    text: 'A range of exams including recognised qualification and assessment options.',
    image: images.adultLearning,
  },
  {
    title: 'Professional exams',
    text: 'Exam administration support for professional boards in medicine, finance, marketing, and more.',
    image: images.examHall,
  },
  {
    title: 'University exams',
    text: 'Secure exam support for students taking UK university assessments in India.',
    image: images.university,
  },
  {
    title: 'Prepare for IELTS with the British Council',
    text: 'Preparation options for one of the most recognised English language tests for study and work.',
    image: images.studentsLibrary,
  },
  {
    title: 'EnglishScore',
    text: 'A mobile English test for quick insight into language levels across teams and learners.',
    image: images.onlineLearning,
  },
];

export const studyItems = [
  {
    title: 'Study UK Create to Connect Competition',
    text: 'A chance for students to show creativity, critical thinking, and problem-solving through short videos.',
    image: images.event,
  },
  {
    title: 'Alumni Awards 2026',
    text: 'Celebrating the achievements of UK alumni and their impact in India.',
    image: images.university,
  },
  {
    title: 'Courses in the UK',
    text: 'Explore universities, course choices, and academic pathways across the UK.',
    image: images.studentsLibrary,
  },
  {
    title: 'Education Agents',
    text: 'Understand how agents can support applications, visas, accommodation, and travel planning.',
    image: images.interview,
  },
  {
    title: 'MOOCs on FutureLearn',
    text: 'Discover online courses from UK institutions and cultural organisations.',
    image: images.onlineLearning,
  },
  {
    title: 'Scholarships and funding',
    text: 'Find funding options that match your academic goals and study plans.',
    image: images.scholarship,
  },
  {
    title: 'Why study in the UK?',
    text: 'Learn why the UK remains a popular destination for international students.',
    image: images.university,
  },
];

export const events = [
  {
    title: 'Fun-filled Saturdays at the British Council Library',
    category: 'Library',
    date: 'Wednesday, 1 April 2026 - Thursday, 30 April 2026',
    location: 'British Council Kolkata',
    text: 'Adventure-filled Saturdays designed for children, with activities that encourage reading and creativity.',
    image: images.kidsCourse,
  },
  {
    title: 'Dive into culture for free every Friday',
    category: 'Library',
    date: 'Wednesday, 1 April 2026 - Friday, 1 May 2026',
    location: 'British Council Delhi and Kolkata',
    text: 'A free weekly programme for fans of film, literature, poetry, and cultural conversations.',
    image: images.event,
  },
  {
    title: 'South-South Learning Symposium',
    category: 'Education',
    date: 'Thursday, 7 May 2026',
    location: 'British Council Delhi',
    text: 'A symposium focused on foundational learning and multilingual education.',
    image: images.school,
  },
  {
    title: 'Summer camp 2026 #SummerOfConfidence',
    category: 'Young learners',
    date: 'Monday, 18 May 2026 - Friday, 22 May 2026',
    location: 'British Council Kolkata',
    text: 'Confidence-building learning pathways for children through creative activities.',
    image: images.summerCamp,
  },
  {
    title: 'The Reading Quest: the ultimate book lover challenge',
    category: 'Library',
    date: 'Monday, 25 May 2026 - Saturday, 20 June 2026',
    location: 'British Council Kolkata',
    text: 'A curated reading challenge for adults who want to read more and think deeper.',
    image: images.reading,
  },
  {
    title: 'Reading Challenge 2026: Discover Your Story',
    category: 'Library',
    date: 'Saturday, 30 May 2026 - Sunday, 28 June 2026',
    location: 'British Council Delhi',
    text: 'A reading challenge for children to discover stories and build imagination.',
    image: images.studentsLibrary,
  },
];

export const workAreas = [
  {
    title: 'Our work in the Arts',
    text: 'Connecting India and the UK through creative collaboration, cultural exchange, and innovation.',
    image: images.arts,
  },
  {
    title: 'Our work in skills',
    text: 'Supporting high quality skills training for young people across India and the UK.',
    image: images.skills,
  },
  {
    title: 'Our work with schools',
    text: 'Working with public and private schools through projects, courses, resources, and digital platforms.',
    image: images.school,
  },
  {
    title: 'Our work in higher education',
    text: 'Enabling internationalisation, collaboration, scholarships, student mobility, and alumni engagement.',
    image: images.university,
  },
  {
    title: 'Our work in English teaching and learning',
    text: 'Helping partners improve the quality of English teaching, learning, and assessment.',
    image: images.adultLearning,
  },
];

export const libraryResources = [
  {
    title: 'Digital Library',
    text: 'Access e-books, audiobooks, films, newspapers, magazines, journals, and self-paced learning modules.',
    image: images.onlineLearning,
  },
  {
    title: 'Physical Library',
    text: 'Visit vibrant library spaces in Delhi, Chennai, and Kolkata for curated collections and events.',
    image: images.studentsLibrary,
  },
  {
    title: 'Discover more',
    text: 'Explore recommended books, films, and learning resources from the library collection.',
    image: images.reading,
  },
  {
    title: 'Upcoming workshops',
    text: 'Attend workshops, film screenings, book clubs, and author discussions.',
    image: images.event,
  },
];

export const blogPosts = [
  {
    title: 'How English practice supports confidence at work',
    category: 'Learn English',
    text: 'Small habits and guided practice can make professional communication feel clearer and more natural.',
    image: images.adultLearning,
  },
  {
    title: 'What to prepare before applying to study in the UK',
    category: 'Study UK',
    text: 'A practical checklist for course research, documents, funding, and application timelines.',
    image: images.university,
  },
  {
    title: 'Why library communities matter for young readers',
    category: 'Library',
    text: 'Reading challenges, clubs, and workshops can help children build curiosity and imagination.',
    image: images.reading,
  },
  {
    title: 'Making the most of cultural events',
    category: 'Events',
    text: 'How exhibitions, film programmes, and talks create space for conversation and connection.',
    image: images.arts,
  },
  {
    title: 'Understanding English assessment options',
    category: 'Exams',
    text: 'A simple guide to choosing between exams, school assessments, and workplace language tests.',
    image: images.examHall,
  },
  {
    title: 'Teaching ideas for more active classrooms',
    category: 'Professional development',
    text: 'Classroom techniques that help learners practise, collaborate, and build confidence.',
    image: images.school,
  },
];

export const contactCards = [
  {
    title: 'Course enquiries',
    text: 'Get support for English courses, online learning, and registration questions.',
    detail: 'Mon-Sat, 9.00 a.m. to 6.00 p.m.',
  },
  {
    title: 'Exam support',
    text: 'Ask about exam registration, preparation, test-day information, and certificates.',
    detail: 'Support available on working days',
  },
  {
    title: 'Library membership',
    text: 'Learn about digital access, physical libraries, resources, and workshops.',
    detail: 'Delhi, Chennai, and Kolkata',
  },
  {
    title: 'Partnerships',
    text: 'Connect with teams working across education, arts, skills, and English programmes.',
    detail: 'India-wide collaboration',
  },
];

export const newsletterOptions = [
  'English courses and learning tips',
  'Exams and assessment updates',
  'Study in the UK opportunities',
  'Library events and resources',
  'Arts, culture, and events',
  'Professional development',
];

export const searchIndex = [
  ...pathways.map((item) => ({ ...item, type: 'Main section' })),
  ...learnCourses.map((item) => ({ ...item, type: 'Course' })),
  ...examItems.map((item) => ({ ...item, type: 'Exam' })),
  ...studyItems.map((item) => ({ ...item, type: 'Study UK' })),
  ...events.map((item) => ({ ...item, type: 'Event' })),
  ...workAreas.map((item) => ({ ...item, type: 'Programme' })),
  ...libraryResources.map((item) => ({ ...item, type: 'Library' })),
  ...blogPosts.map((item) => ({ ...item, type: 'Blog' })),
];