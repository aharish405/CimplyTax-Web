import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    label: 'Income Tax',
    href: '/income-tax',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 2.5 2 2.5-2 3.5 2z" />
      </svg>
    ),
    color: 'text-brand-600 bg-brand-50',
    desc: 'ITR Filing, Tax Planning, TDS',
    sub: [
      { label: 'ITR Filing',   href: '/income-tax/itr-filing' },
      { label: 'Tax Planning', href: '/income-tax/tax-planning' },
      { label: 'TDS Returns',  href: '/income-tax/tds-returns' },
    ],
  },
  {
    label: 'GST Services',
    href: '/gst',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'text-teal-600 bg-teal-50',
    desc: 'Registration, Filing, Advisory',
    sub: [
      { label: 'GST Registration', href: '/gst/registration' },
      { label: 'GST Filing',       href: '/gst/filing' },
      { label: 'GST Advisory',     href: '/gst/advisory' },
    ],
  },
  {
    label: 'Company Registration',
    href: '/company-incorporation',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'text-violet-600 bg-violet-50',
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
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'text-emerald-600 bg-emerald-50',
    desc: 'Personal, Home, Business, LAP',
    sub: [
      { label: 'Personal Loan',        href: '/loans/personal' },
      { label: 'Home Loan',            href: '/loans/home' },
      { label: 'Business Loan',        href: '/loans/business' },
      { label: 'Loan Against Property',href: '/loans/lap' },
    ],
  },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [megaOpen,  setMegaOpen]  = useState(false);
  const megaRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); setMegaOpen(false); }, [location]);

  useEffect(() => {
    const fn = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm'
          : 'bg-white'
        }`}
      role="banner"
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-[68px]" aria-label="Main navigation">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group" aria-label="CimplyTax Home">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow transition-shadow">
              <img
                src="/images/logo.png"
                alt="CimplyTax logo"
                className="w-7 h-7 object-contain"
                draggable={false}
              />
            </div>
            <span className="font-extrabold text-[17px] text-slate-900 tracking-tight">
              Cimply<span className="text-brand-600">Tax</span>
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-1" ref={megaRef}>
            <NavLink to="/" end className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }>
              Home
            </NavLink>

            {/* Services trigger */}
            <button
              onClick={() => setMegaOpen(!megaOpen)}
              aria-haspopup="true"
              aria-expanded={megaOpen}
              className={`nav-link flex items-center gap-1 focus:outline-none ${megaOpen ? 'nav-link-active' : ''}`}
            >
              Services
              <motion.svg
                animate={{ rotate: megaOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-4 text-slate-400"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            <NavLink to="/contact" className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }>
              Contact
            </NavLink>

            {/* ── Mega-menu ── */}
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-white border-b border-slate-100 shadow-xl"
                  style={{ boxShadow: '0 20px 60px -12px rgb(0 0 0 / 0.12)' }}
                  role="menu"
                  aria-label="Services mega-menu"
                >
                  <div className="container-xl px-6 py-8">
                    <div className="grid grid-cols-4 gap-4">
                      {services.map((svc) => (
                        <div key={svc.label} role="menuitem">
                          <Link to={svc.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group mb-3">
                            <div className={`feature-icon ${svc.color} flex-shrink-0`}>
                              {svc.icon}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 text-sm group-hover:text-brand-700 transition-colors">{svc.label}</p>
                              <p className="text-slate-500 text-xs mt-0.5">{svc.desc}</p>
                            </div>
                          </Link>
                          <ul className="pl-3 space-y-0.5 border-l-2 border-slate-100 ml-3">
                            {svc.sub.map((s) => (
                              <li key={s.label}>
                                <Link to={s.href} className="text-slate-500 hover:text-brand-600 text-xs py-1.5 flex items-center gap-1.5 transition-colors">
                                  <span className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                                  {s.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* Bottom CTA strip */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                      <p className="text-sm text-slate-500">
                        Not sure where to start?
                        <a href="tel:+918000000000" className="text-brand-600 font-semibold ml-1.5 hover:underline">Call a CA today →</a>
                      </p>
                      <span className="badge-blue">Free Consultation Available</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+918000000000"
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
              aria-label="Call CimplyTax"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91-80000-00000
            </a>
            <Link to="/contact" className="btn-primary text-xs px-5 py-2.5 hidden sm:inline-flex" aria-label="Get free consultation">
              Get Free Consultation
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              <motion.div animate={menuOpen ? 'open' : 'closed'}>
                {menuOpen
                  ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                }
              </motion.div>
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-6 space-y-1">
              <NavLink to="/" end className="block px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors">Home</NavLink>
              <div className="pt-2 pb-1">
                <p className="px-3 text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">Services</p>
                {services.map((svc) => (
                  <Link key={svc.label} to={svc.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-brand-50 transition-colors">
                    <div className={`w-8 h-8 rounded-md ${svc.color} flex items-center justify-center text-sm`}>{svc.icon}</div>
                    <span className="text-slate-700 font-medium text-sm">{svc.label}</span>
                  </Link>
                ))}
              </div>
              <NavLink to="/contact" className="block px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors">Contact</NavLink>
              <div className="pt-3">
                <Link to="/contact" className="btn-cta w-full justify-center" aria-label="Get free consultation">
                  Get Free Consultation →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
