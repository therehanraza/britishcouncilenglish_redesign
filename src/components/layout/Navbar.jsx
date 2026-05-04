import { ChevronDown, Home, Menu, Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { getSearchResults } from '../../services/api.js';
import BrandLogo from './BrandLogo.jsx';

function Navbar({ navLinks = [], utilityLinks = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navRef = useRef(null);
  const searchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const hasDropdown = (link) => (link.dropdown?.length || 0) > 0;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsMenuOpen(false);
      setActiveDropdown(null);
      setMobileExpanded(null);
      setIsSearchOpen(false);
      setSearchQuery('');
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.search]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 100);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsSearchOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const clean = searchQuery.trim();

    if (!clean) {
      const resetTimer = window.setTimeout(() => {
        setSearchResults([]);
        setIsSearching(false);
      }, 0);

      return () => window.clearTimeout(resetTimer);
    }

    const timer = window.setTimeout(() => {
      setIsSearching(true);
      getSearchResults(clean)
        .then((data) => {
          setSearchResults(data.slice(0, 6));
          setIsSearching(false);
        })
        .catch(() => {
          setSearchResults([]);
          setIsSearching(false);
        });
    }, 220);

    return () => window.clearTimeout(timer);
  }, [searchQuery]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  }

  return (
    <>
      <header className="site-header" ref={navRef}>
        <div className="site-header__top">
          <div className="site-header__inner site-header__top-inner">
            <BrandLogo />

            {/* MOBILE ONLY: Home + Search + Hamburger */}
            <div className="mobile-top-actions">
              <NavLink to="/" end className="mobile-top-btn" aria-label="Home">
                <Home size={20} strokeWidth={2.2} />
              </NavLink>
              <button
                className="mobile-top-btn"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={2.2} />
              </button>
              <button
                className="mobile-top-btn"
                type="button"
                aria-controls="primary-navigation"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((c) => !c)}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen
                  ? <X size={24} strokeWidth={2.4} aria-hidden="true" />
                  : <Menu size={24} strokeWidth={2.4} aria-hidden="true" />}
                <span className="sr-only">Toggle navigation menu</span>
              </button>
            </div>

            {/* DESKTOP ONLY: just the hamburger */}
            <button
              className="menu-toggle menu-toggle--desktop-only"
              type="button"
              aria-controls="primary-navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((c) => !c)}
              aria-label="Toggle navigation menu"
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
                onMouseEnter={() => hasDropdown(link) && setActiveDropdown(link.label)}
                onMouseLeave={() => hasDropdown(link) && setActiveDropdown(null)}
              >
                {hasDropdown(link) ? (
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
                        className={
                          mobileExpanded === link.label
                            ? 'primary-nav__chevron is-open'
                            : 'primary-nav__chevron'
                        }
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

                {hasDropdown(link) && isMenuOpen && mobileExpanded === link.label && (
                  <div className="mobile-dropdown">
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? 'mobile-dropdown__link is-active'
                            : 'mobile-dropdown__link'
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

            {/* DESKTOP ONLY: utility links + search in nav bar */}
            <div className="primary-nav__desktop-utilities">
              {utilityLinks.map((link) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'primary-nav__link is-active' : 'primary-nav__link'
                  }
                  key={link.path}
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                className="primary-nav__link primary-nav__search-btn"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
              >
                <span>Search</span>
                <Search size={16} strokeWidth={2.4} aria-hidden="true" />
              </button>
            </div>

            {/* MOBILE ONLY: utility links once at bottom of hamburger menu — no duplicates */}
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
        </nav>

        {/* Mega menu — desktop hover dropdowns */}
        {navLinks.map((link) =>
          hasDropdown(link) && activeDropdown === link.label ? (
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
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay" role="dialog" aria-label="Search">
          <div className="search-overlay__backdrop" onClick={() => setIsSearchOpen(false)} />
          <div className="search-overlay__box">
            <form className="search-overlay__form" onSubmit={handleSearchSubmit}>
              <Search size={22} className="search-overlay__icon" aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="search"
                className="search-overlay__input"
                placeholder="Search courses, exams, events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                className="search-overlay__close"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={22} strokeWidth={2.4} />
              </button>
            </form>

            {isSearching && (
              <p className="search-overlay__empty">Searching...</p>
            )}

            {!isSearching && searchResults.length > 0 && (
              <ul className="search-overlay__results">
                {searchResults.map((item) => (
                  <li key={`${item.type}-${item.title}`}>
                    <NavLink
                      to={item.to || '/search'}
                      className="search-overlay__result"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <span className="search-overlay__result-type">{item.type}</span>
                      <span className="search-overlay__result-title">{item.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}

            {searchQuery && !isSearching && searchResults.length === 0 && (
              <p className="search-overlay__empty">No results found for "{searchQuery}"</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
