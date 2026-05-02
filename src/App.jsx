import { Route, Routes } from 'react-router-dom';

import SiteLayout from './components/layout/SiteLayout.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Events from './pages/Events.jsx';
import Home from './pages/Home.jsx';
import LearnEnglish from './pages/LearnEnglish.jsx';
import Library from './pages/Library.jsx';
import Newsletter from './pages/Newsletter.jsx';
import OurWork from './pages/OurWork.jsx';
import Search from './pages/Search.jsx';
import StudyUK from './pages/StudyUK.jsx';
import TakeExam from './pages/TakeExam.jsx';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/learn-english" element={<LearnEnglish />} />
        <Route path="/take-exam" element={<TakeExam />} />
        <Route path="/study-uk" element={<StudyUK />} />
        <Route path="/events" element={<Events />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/library" element={<Library />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
