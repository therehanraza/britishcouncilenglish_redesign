import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { getSiteChrome } from '../../services/api.js';
import TopLoadingBar from '../ui/TopLoadingBar.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

function SiteLayout() {
  const [siteChrome, setSiteChrome] = useState({
    navLinks: [],
    utilityLinks: [],
    footer: null,
  });

  useEffect(() => {
    getSiteChrome()
      .then((data) => setSiteChrome(data))
      .catch(() => {
        setSiteChrome({
          navLinks: [],
          utilityLinks: [],
          footer: null,
        });
      });
  }, []);

  return (
    <div className="site-shell">
      <TopLoadingBar />
      <Navbar navLinks={siteChrome.navLinks} utilityLinks={siteChrome.utilityLinks} />
      <Outlet />
      <Footer footer={siteChrome.footer} />
    </div>
  );
}

export default SiteLayout;
