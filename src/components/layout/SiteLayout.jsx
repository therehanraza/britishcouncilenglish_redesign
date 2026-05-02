import { Outlet } from 'react-router-dom';

import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

function SiteLayout() {
  return (
    <div className="site-shell">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SiteLayout;
