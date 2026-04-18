import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import SEO from '../components/SEO';
import TrustBar from '../components/TrustBar';
import LeadForm from '../components/LeadForm';

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

function FadeLeft({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ── Service cards data ── */
const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 2.5 2 2.5-2 3.5 2z" />
      </svg>
    ),
    iconBg: 'bg-brand-50 text-brand-600',
    title: 'Income Tax',
    tag: 'Most Popular',
    tagStyle: 'badge-blue',
    desc: 'Expert ITR filing for salaried, freelance, and business taxpayers. Maximize refunds with CA-verified claims.',
    features: ['ITR-1 to ITR-7', 'Capital gains filing', 'TDS reconciliation'],
    href: '/income-tax',
    cta: 'File Your ITR',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    iconBg: 'bg-teal-50 text-teal-600',
    title: 'GST Services',
    tag: 'Compliance',
    tagStyle: 'badge-teal',
    desc: 'End-to-end GST registration, monthly/quarterly filing, and strategic input credit advisory.',
    features: ['GSTR-1, 3B & 9', 'Input credit optimization', 'E-Invoicing setup'],
    href: '/gst',
    cta: 'Explore GST',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: 'bg-violet-50 text-violet-600',
    title: 'Company Registration',
    tag: 'Fast Track',
    tagStyle: 'badge-amber',
    desc: 'Incorporate your company in 7 days with complete DSC, DIN, MoA & AoA documentation.',
    features: ['Pvt Ltd / LLP / OPC', 'DSC & DIN included', 'PAN & TAN registration'],
    href: '/company-incorporation',
    cta: 'Register Now',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: 'bg-emerald-50 text-emerald-600',
    title: 'Loan Advisory',
    tag: 'Best Rates',
    tagStyle: 'badge-teal',
    desc: 'Compare 50+ lenders for Personal, Home, Business, and Loan Against Property with minimal documentation.',
    features: ['Rates from 8.5% p.a.', 'Quick 48hr approval', 'Zero prepayment penalty options'],
    href: '/loans',
    cta: 'Check Eligibility',
  },
];

/* ── Why us ── */
const whyUs = [
  { icon: '⚡', title: 'Same-Day Processing',  desc: 'Most services completed within 24 hours — no waiting, no bureaucracy.' },
  { icon: '🔒', title: 'Bank-Grade Security',   desc: '256-bit encryption. Your documents are never sold or shared.' },
  { icon: '👨‍💼', title: 'CA-Led Every Step',    desc: 'Every filing is reviewed and signed by a registered Chartered Accountant.' },
  { icon: '💬', title: '24/7 WhatsApp Support', desc: 'Reach our tax experts any time via WhatsApp, phone, or email.' },
  { icon: '💯', title: 'Error-Free Guarantee',  desc: "We pay your penalty if any mistake is made — that's our guarantee." },
  { icon: '🏅', title: 'Registered eRI',         desc: 'Authorized e-Return Intermediary by the Income Tax Department of India.' },
];

/* ── Testimonials ── */
const testimonials = [
  { name: 'Priya Sharma',  role: 'Freelance Consultant, Mumbai',    avatar: 'PS', color: 'bg-brand-100 text-brand-700',   rating: 5, quote: 'CimplyTax filed my ITR with complex capital gains overnight. The CA explained every deduction clearly — I saved ₹40,000 in taxes!' },
  { name: 'Rajesh Patel',  role: 'Director, TechTrade Pvt Ltd',     avatar: 'RP', color: 'bg-teal-100 text-teal-700',     rating: 5, quote: 'Our private limited company was incorporated in just 6 days. The entire process was transparent and completely hassle-free.' },
  { name: 'Anita Nair',    role: 'E-commerce Seller, Pune',          avatar: 'AN', color: 'bg-violet-100 text-violet-700', rating: 5, quote: 'GST filing every month used to be a nightmare. CimplyTax handles everything — I just focus on running my business now.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'CimplyTax',
  description: "India's trusted CA-led platform for Income Tax, GST, Company Incorporation, and Loan services.",
  url: 'https://www.cimplytax.com',
  telephone: '+91-8000000000',
  address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
  priceRange: '₹₹',
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="Tax, GST & Company Registration"
        description="CimplyTax — India's most trusted CA-led platform for ITR Filing, GST Services, Company Incorporation and Loan Advisory. 10,000+ clients. Free Consultation."
        canonical="/"
        schema={schema}
      />

      {/* ═══════════════════════════════════
          HERO — White bg, large h1, image right
      ═══════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden" aria-label="Hero">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />
        {/* Gradient orb */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-brand-50 rounded-full blur-3xl opacity-70 pointer-events-none" />

        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[88vh] py-16 lg:py-0">

            {/* Left: copy */}
            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <span className="eyebrow">🇮🇳 Registered eRI · Trusted Since 2015</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.04] tracking-tight mb-6 text-balance"
              >
                Your Trusted Partner for{' '}
                <span className="gradient-brand">Tax, GST &amp; Company</span> Registration
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body-lg mb-8 max-w-lg"
              >
                Expert CA-led services for ITR filing, GST compliance, business formation, and loan advisory.
                Serving <strong className="text-slate-900 font-semibold">10,000+ clients</strong> across India since 2015.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link to="/income-tax" className="btn-primary" aria-label="File income tax return">
                  File Your ITR Now →
                </Link>
                <a href="tel:+918000000000" className="btn-outline" aria-label="Call for free consultation">
                  📞 Free Consultation
                </a>
              </motion.div>

              {/* Micro-trust pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap gap-2.5"
              >
                {[
                  { icon: '✅', text: 'No Hidden Charges' },
                  { icon: '⚡', text: '24hr Turnaround' },
                  { icon: '🎓', text: 'CA-Reviewed Filing' },
                  { icon: '🔒', text: 'Secure & Confidential' },
                ].map((t) => (
                  <span key={t.text} className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full font-medium">
                    {t.icon} {t.text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: AI image + floating lead form */}
            <FadeLeft delay={0.15} className="relative hidden lg:block">
              {/* Main hero image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 32px 80px -12px rgb(37 99 235 / 0.18), 0 8px 32px -4px rgb(0 0 0 / 0.1)' }}>
                <img
                  src="/images/hero-professionals.png"
                  alt="CimplyTax professionals in a modern Mumbai office"
                  className="w-full h-[420px] object-cover object-top"
                  width={620}
                  height={420}
                />
                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 flex items-center gap-4"
                style={{ boxShadow: '0 8px 32px -4px rgb(0 0 0 / 0.12)' }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-2xl flex-shrink-0">✅</div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xl">10,000+</p>
                  <p className="text-slate-500 text-xs">Happy clients served</p>
                </div>
              </motion.div>

              {/* Floating rating card */}
              <motion.div
                initial={{ opacity: 0, y: -16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
                style={{ boxShadow: '0 8px 32px -4px rgb(0 0 0 / 0.12)' }}
              >
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-900 font-bold text-sm">4.9/5 Rating</p>
                <p className="text-slate-400 text-xs">Google Reviews</p>
              </motion.div>
            </FadeLeft>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════ */}
      <TrustBar />

      {/* ═══════════════════════════════════
          SERVICES GRID
      ═══════════════════════════════════ */}
      <section className="section-pad bg-slate-50" aria-labelledby="services-heading">
        <div className="container-xl">
          <FadeUp className="section-header-center">
            <span className="eyebrow">Our Services</span>
            <h2 id="services-heading" className="h-section mb-4 text-balance">
              Everything Your Business Needs,{' '}
              <span className="gradient-brand">Under One Roof</span>
            </h2>
            <p className="body-lg text-center">
              From tax compliance to company formation — our CA experts handle every financial
              service your business needs to thrive.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.08}>
                <div className="card p-7 flex flex-col h-full group">
                  {/* Icon + tag */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`feature-icon ${svc.iconBg}`}>{svc.icon}</div>
                    <span className={svc.tagStyle}>{svc.tag}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">{svc.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <svg className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link to={svc.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 group-hover:gap-2 transition-all"
                    aria-label={`Learn more about ${svc.title}`}>
                    {svc.cta} →
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          ZIG-ZAG 1: Tax advisory (zig)
      ═══════════════════════════════════ */}
      <section className="section-pad bg-white" aria-label="Income tax advisory section">
        <div className="container-xl">
          <div className="zigzag-section lg:gap-20">
            {/* Left: content */}
            <FadeUp>
              <span className="eyebrow">Income Tax</span>
              <h2 className="h-section mb-5">
                Expert CA Filing,{' '}
                <span className="gradient-brand">Maximum Refund</span>
              </h2>
              <p className="body-lg mb-8">
                Our Chartered Accountants review every deduction to ensure you pay only what's legally due —
                nothing more. From salaried professionals to startup founders, we handle every tax scenario.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { icon: '📋', title: 'All ITR types supported', desc: 'ITR-1 through ITR-7 including F&O, capital gains, foreign income' },
                  { icon: '💰', title: 'Maximum refund guaranteed', desc: 'CA-verified deduction claims under Sections 80C, 80D, 24(b) & more' },
                  { icon: '🛡️', title: 'Notice protection included', desc: 'Free support for all IT department queries post-filing' },
                ].map((f) => (
                  <li key={f.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-lg flex-shrink-0">{f.icon}</div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{f.title}</p>
                      <p className="text-slate-500 text-sm">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link to="/income-tax" className="btn-primary" aria-label="Start ITR filing">Start Filing Now →</Link>
                <Link to="/income-tax" className="btn-outline">View Plans</Link>
              </div>
            </FadeUp>

            {/* Right: AI image */}
            <FadeLeft delay={0.1}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 24px 64px -8px rgb(0 0 0 / 0.12)' }}>
                  <img
                    src="/images/tax-advisor.png"
                    alt="CimplyTax Chartered Accountant consulting a client on income tax filing"
                    className="w-full h-[460px] object-cover"
                    width={600}
                    height={460}
                    loading="lazy"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">CA</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">CA-Reviewed Filing</p>
                    <p className="text-slate-500 text-xs">Every return signed by a CA</p>
                  </div>
                </div>
              </div>
            </FadeLeft>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          ZIG-ZAG 2: Loans (zag — image left)
      ═══════════════════════════════════ */}
      <section className="section-pad bg-slate-50" aria-label="Loan advisory section">
        <div className="container-xl">
          <div className="zigzag-section lg:gap-20">
            {/* Left: AI image */}
            <FadeUp>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 24px 64px -8px rgb(0 0 0 / 0.12)' }}>
                  <img
                    src="/images/loans-family.png"
                    alt="Happy Indian family celebrating home loan approval in front of their new apartment"
                    className="w-full h-[460px] object-cover"
                    width={600}
                    height={460}
                    loading="lazy"
                  />
                </div>
                {/* Floating rate badge */}
                <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                  <p className="text-xs text-slate-500 mb-0.5">Home Loan Rates from</p>
                  <p className="text-2xl font-extrabold text-brand-600">8.5% p.a.</p>
                </div>
              </div>
            </FadeUp>

            {/* Right: content */}
            <FadeLeft delay={0.1}>
              <span className="eyebrow">Loan Advisory</span>
              <h2 className="h-section mb-5">
                Your Dream,{' '}
                <span className="gradient-brand">Our Best Deal</span>
              </h2>
              <p className="body-lg mb-8">
                We compare 50+ banks and NBFCs to get you the best interest rates with minimal paperwork
                and fastest disbursal — whether it's your dream home or growing your business.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { label: 'Personal Loan', rate: '10.5%+', href: '/loans/personal' },
                  { label: 'Home Loan',     rate: '8.5%+',  href: '/loans/home' },
                  { label: 'Business Loan', rate: '12%+',   href: '/loans/business' },
                  { label: 'Loan Against Property', rate: '9%+', href: '/loans/lap' },
                ].map((l) => (
                  <Link key={l.label} to={l.href}
                    className="card-flat p-4 hover:border-brand-200 transition-colors cursor-pointer group"
                    aria-label={`${l.label} from ${l.rate}`}>
                    <p className="font-bold text-brand-600 text-lg mb-0.5">{l.rate}</p>
                    <p className="text-slate-600 text-xs font-medium group-hover:text-brand-700 transition-colors">{l.label}</p>
                  </Link>
                ))}
              </div>
              <Link to="/loans" className="btn-primary" aria-label="Check loan eligibility">
                Check Your Eligibility →
              </Link>
            </FadeLeft>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          WHY US — 6-grid with icons
      ═══════════════════════════════════ */}
      <section className="section-pad bg-white" aria-labelledby="why-heading">
        <div className="container-xl">
          <FadeUp className="section-header-center">
            <span className="eyebrow">Why CimplyTax</span>
            <h2 id="why-heading" className="h-section mb-4">The CimplyTax Advantage</h2>
            <p className="body-lg text-center">
              We combine technology with human expertise to deliver financial services that are fast, accurate, and genuinely affordable.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-flat p-7 flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-2xl flex-shrink-0" aria-hidden="true">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════ */}
      <section className="section-pad bg-brand-600" aria-labelledby="testimonials-heading">
        <div className="container-xl">
          <FadeUp className="section-header-center">
            <p className="eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
              What Our Clients Say
            </p>
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              10,000+ Happy Clients &amp; Counting
            </h2>
            <p className="text-brand-200 text-lg text-center">
              Real stories from real people who trusted CimplyTax with their finances.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-white/90 text-sm leading-relaxed flex-1 mb-6 italic">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 pt-5 border-t border-white/20">
                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-brand-200 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          LEAD FORM SECTION — zig-zag with image
      ═══════════════════════════════════ */}
      <section className="section-pad bg-white" aria-label="Free consultation form">
        <div className="container-xl">
          <div className="zigzag-section lg:gap-16">
            {/* Left: form */}
            <FadeUp>
              <LeadForm title="Get Your Free CA Consultation Today" />
            </FadeUp>

            {/* Right: content + image */}
            <FadeLeft delay={0.1}>
              <img
                src="/images/service-tablet.png"
                alt="Financial expert reviewing investment portfolio on a tablet"
                className="w-full h-64 object-cover rounded-3xl mb-8 shadow-lg"
                loading="lazy"
              />
              <span className="eyebrow">Trusted by Thousands</span>
              <h2 className="h-section mb-5 mt-3">File Before the ITR Deadline</h2>
              <p className="body-lg mb-8">
                Don't risk a ₹5,000 late penalty. Our experts ensure your return is filed accurately and on time with maximum legitimate refund.
              </p>
              <ul className="space-y-3">
                {[
                  'Free initial tax assessment',
                  'CA-reviewed and signed filing',
                  'Maximum refund guarantee',
                  'Post-filing income tax notice support',
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-slate-700 text-sm">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </FadeLeft>
          </div>
        </div>
      </section>
    </>
  );
}
