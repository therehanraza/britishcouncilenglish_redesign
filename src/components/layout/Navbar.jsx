import { ChevronDown, Menu, Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { navLinks, utilityLinks } from '../../data/navLinks.js';
import BrandLogo from './BrandLogo.jsx';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="site-header" ref={navRef}>
      <div className="site-header__top">
        <div className="site-header__inner site-header__top-inner">
          <BrandLogo />
          <button
            className="menu-toggle"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((c) => !c)}
          >
            {isMenuOpen
              ? <X size={24} strokeWidth={2.4} aria-hidden="true" />
              : <Menu size={24} strokeWidth={2.4} aria-hidden="true" />}
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </div>
      </div>

      <nav
        className={isMenuOpen ? 'primary-nav is-open' : 'primary-nav'}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <div className="site-header__inner primary-nav__inner">

          {navLinks.map((link) => (
            <div
              key={link.path}
              className="primary-nav__item"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              {link.dropdown ? (
                /* NavLink for click-to-navigate + chevron button for mobile toggle */
                <div className="primary-nav__link-group">
                  <NavLink
                    className={({ isActive }) =>
                      activeDropdown === link.label
                        ? 'primary-nav__link primary-nav__link--has-dropdown is-open'
                        : isActive
                        ? 'primary-nav__link primary-nav__link--has-dropdown is-active'
                        : 'primary-nav__link primary-nav__link--has-dropdown'
                    }
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                  <button
                    type="button"
                    className="primary-nav__chevron-btn"
                    aria-expanded={mobileExpanded === link.label}
                    onClick={() =>
                      setMobileExpanded((p) => (p === link.label ? null : link.label))
                    }
                  >
                    <ChevronDown
                      size={13}
                      strokeWidth={2.8}
                      aria-hidden="true"
                      className={mobileExpanded === link.label ? 'primary-nav__chevron is-open' : 'primary-nav__chevron'}
                    />
                  </button>
                </div>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'primary-nav__link is-active' : 'primary-nav__link'
                  }
                  end={link.path === '/'}
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              )}

              {/* Mobile accordion */}
              {link.dropdown && isMenuOpen && mobileExpanded === link.label && (
                <div className="mobile-dropdown">
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.path}
                      className={({ isActive }) =>
                        isActive ? 'mobile-dropdown__link is-active' : 'mobile-dropdown__link'
                      }
                      to={item.path}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          {utilityLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'primary-nav__link is-active' : 'primary-nav__link'
              }
              key={link.path}
              to={link.path}
            >
              {link.label === 'Search' ? (
                <><span>{link.label}</span><Search size={16} strokeWidth={2.4} aria-hidden="true" /></>
              ) : link.label}
            </NavLink>
          ))}

          <div className="primary-nav__mobile-utilities">
            {utilityLinks.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'mobile-utility-link is-active' : 'mobile-utility-link'
                }
                key={link.path}
                to={link.path}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* MEGA MENU — outside inner container, inside nav, spans full width */}
        {navLinks.map((link) =>
          link.dropdown && activeDropdown === link.label ? (
            <div
              key={link.label}
              className="mega-menu"
              role="dialog"
              aria-label={`${link.label} menu`}
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="mega-menu__inner">
                <div className="mega-menu__panel">
                  <p className="mega-menu__eyebrow">{link.label}</p>
                  <h2 className="mega-menu__title">Explore</h2>
                  <p className="mega-menu__desc">
                    {link.description || 'Choose a section to get started.'}
                  </p>
                </div>
                <ul className="mega-menu__grid">
                  {link.dropdown.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? 'mega-menu__card is-active' : 'mega-menu__card'
                        }
                        to={item.path}
                      >
                        <span className="mega-menu__card-label">{item.label}</span>
                        <ChevronDown
                          size={14}
                          strokeWidth={2.6}
                          aria-hidden="true"
                          className="mega-menu__card-arrow"
                        />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null
        )}
      </nav>
    </header>
  );
}

export default Navbar;