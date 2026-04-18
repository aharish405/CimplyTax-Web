import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    label: 'Income Tax',
    href: '/income-tax',
    icon: '📄',
    desc: 'ITR Filing, Tax Planning, TDS',
    sub: [
      { label: 'ITR Filing',    href: '/income-tax/itr-filing' },
      { label: 'Tax Planning',  href: '/income-tax/tax-planning' },
      { label: 'TDS Returns',   href: '/income-tax/tds-returns' },
    ],
  },
  {
    label: 'GST Services',
    href: '/gst',
    icon: '🏛️',
    desc: 'Registration, Filing, Advisory',
    sub: [
      { label: 'GST Registration', href: '/gst/registration' },
      { label: 'GST Filing',       href: '/gst/filing' },
      { label: 'GST Advisory',     href: '/gst/advisory' },
    ],
  },
  {
    label: 'Company Incorporation',
    href: '/company-incorporation',
    icon: '🏢',
    desc: 'Pvt Ltd, LLP, OPC, Partnership',
    sub: [
      { label: 'Private Limited',  href: '/company-incorporation/private-limited' },
      { label: 'LLP',              href: '/company-incorporation/llp' },
      { label: 'OPC',              href: '/company-incorporation/opc' },
      { label: 'Partnership Firm', href: '/company-incorporation/partnership' },
    ],
  },
  {
    label: 'Loans',
    href: '/loans',
    icon: '💰',
    desc: 'Personal, Home, Business, LAP',
    sub: [
      { label: 'Personal Loan',  href: '/loans/personal' },
      { label: 'Home Loan',      href: '/loans/home' },
      { label: 'Business Loan',  href: '/loans/business' },
      { label: 'Loan Against Property', href: '/loans/lap' },
    ],
  },
];

export default function Navbar() {
  const [scrolled,     setScrolled]   = useState(false);
  const [menuOpen,     setMenuOpen]   = useState(false);
  const [megaOpen,     setMegaOpen]   = useState(false);
  const [activeService, setActive]    = useState(null);
  const megaRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setMegaOpen(false); }, [location]);

  // Close mega-menu on outside click
  useEffect(() => {
    const handle = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-xl shadow-navy-950/20 border-b border-slate-800/80'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-16 lg:h-18" aria-label="Main navigation">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="CimplyTax Home">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-trust-500 to-navy-700 flex items-center justify-center shadow-lg shadow-trust-900/50">
              <span className="text-white font-bold text-base font-display">CT</span>
            </div>
            <span className="font-display font-bold text-lg text-white">
              Cimply<span className="text-trust-400">Tax</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1" ref={megaRef}>
            <NavLink to="/" end className={({ isActive }) =>
              `nav-link px-3 py-2 rounded-lg ${isActive ? 'text-white bg-slate-800' : ''}`
            }>Home</NavLink>

            {/* Services mega-menu trigger */}
            <button
              onClick={() => setMegaOpen(!megaOpen)}
              aria-haspopup="true"
              aria-expanded={megaOpen}
              className="nav-link px-3 py-2 rounded-lg flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-trust-500"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <NavLink to="/contact" className={({ isActive }) =>
              `nav-link px-3 py-2 rounded-lg ${isActive ? 'text-white bg-slate-800' : ''}`
            }>Contact</NavLink>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-slate-900/98 backdrop-blur-lg border-b border-slate-800 shadow-2xl shadow-navy-950/50"
                  role="menu"
                  aria-label="Services menu"
                >
                  <div className="container-xl py-8">
                    <div className="grid grid-cols-4 gap-6">
                      {services.map((svc) => (
                        <div
                          key={svc.label}
                          className="p-4 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer"
                          onMouseEnter={() => setActive(svc.label)}
                          onMouseLeave={() => setActive(null)}
                          role="menuitem"
                        >
                          <Link to={svc.href} className="block mb-3">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xl">{svc.icon}</span>
                              <span className="font-semibold text-white text-sm">{svc.label}</span>
                            </div>
                            <p className="text-slate-500 text-xs">{svc.desc}</p>
                          </Link>
                          <ul className="space-y-1">
                            {svc.sub.map((s) => (
                              <li key={s.label}>
                                <Link
                                  to={s.href}
                                  className="text-slate-400 hover:text-trust-300 text-xs flex items-center gap-1.5 py-0.5 transition-colors"
                                >
                                  <span className="w-1 h-1 rounded-full bg-trust-600 flex-shrink-0" />
                                  {s.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+918000000000"
              className="hidden sm:flex btn-primary py-2 px-4 text-xs"
              aria-label="Call CimplyTax now"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-slate-900/98 backdrop-blur-lg border-t border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <NavLink to="/" end className="block py-2 text-slate-300 hover:text-white font-medium">Home</NavLink>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-2">Services</p>
              {services.map((svc) => (
                <Link
                  key={svc.label}
                  to={svc.href}
                  className="flex items-center gap-3 py-2 text-slate-300 hover:text-white"
                >
                  <span>{svc.icon}</span>
                  <span className="font-medium text-sm">{svc.label}</span>
                </Link>
              ))}
              <NavLink to="/contact" className="block py-2 text-slate-300 hover:text-white font-medium">Contact</NavLink>
              <a
                href="tel:+918000000000"
                className="btn-primary w-full justify-center mt-2"
                aria-label="Call CimplyTax"
              >📞 Call Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
