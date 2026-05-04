import { Outlet } from 'react-router-dom';

import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import TopLoadingBar from '../ui/TopLoadingBar.jsx';

function SiteLayout() {
  return (
    <div className="site-shell">
      <TopLoadingBar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SiteLayout;
