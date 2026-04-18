import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import SEO from '../components/SEO';
import TrustBar from '../components/TrustBar';
import LeadForm from '../components/LeadForm';

/* ── Fade-in-up animation wrapper ── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Service cards ── */
const services = [
  {
    icon: '📋',
    title: 'Income Tax',
    desc: 'Expert ITR filing, tax planning & advisory for individuals, HUFs & businesses. Maximize your refunds legally.',
    href: '/income-tax',
    badge: 'Most Popular',
    features: ['ITR-1 to ITR-7', 'Capital Gains', 'TDS Returns'],
    gradient: 'from-blue-600/20 to-trust-700/10',
    border: 'hover:border-blue-600/40',
  },
  {
    icon: '🏛️',
    title: 'GST Services',
    desc: 'End-to-end GST registration, monthly/quarterly filing, and strategic advisory for all business types.',
    href: '/gst',
    badge: 'Compliance',
    features: ['GSTR-1, 3B, 9', 'GST Audit', 'E-Invoicing'],
    gradient: 'from-indigo-600/20 to-navy-700/10',
    border: 'hover:border-indigo-600/40',
  },
  {
    icon: '🏢',
    title: 'Company Incorporation',
    desc: 'Register your business the right way. From Pvt Ltd to LLP — complete documentation handled for you.',
    href: '/company-incorporation',
    badge: 'Fast Track',
    features: ['Pvt Ltd / LLP / OPC', 'DSC & DIN', 'PAN & TAN'],
    gradient: 'from-violet-600/20 to-purple-700/10',
    border: 'hover:border-violet-600/40',
  },
  {
    icon: '💰',
    title: 'Loan Services',
    desc: 'Get the best loan deals — Personal, Home, Business, or LAP — with minimal documentation & quick disbursement.',
    href: '/loans',
    badge: 'Quick Approval',
    features: ['Personal & Home', 'Business Loans', 'Loan Against Property'],
    gradient: 'from-emerald-600/20 to-teal-700/10',
    border: 'hover:border-emerald-600/40',
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Freelance Consultant, Mumbai',
    quote: 'CimplyTax filed my ITR with capital gains in under 24 hours. The CA explained every deduction clearly — saved ₹40,000!',
    rating: 5,
    avatar: 'PS',
  },
  {
    name: 'Rajesh Patel',
    role: 'Director, TechTrade Pvt Ltd',
    quote: 'Incorporated our company within 7 days. The entire process was transparent and hassle-free. Highly recommend!',
    rating: 5,
    avatar: 'RP',
  },
  {
    name: 'Anita Nair',
    role: 'E-commerce Seller, Pune',
    quote: 'GST filing every month used to stress me out. CimplyTax handles it all — I just run my business now.',
    rating: 5,
    avatar: 'AN',
  },
];

/* ── Why Us features ── */
const whyUs = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'Same-day processing for most services. No waiting, no bureaucracy.',
  },
  {
    icon: '🔒',
    title: 'Bank-Grade Security',
    desc: 'Your financial data is encrypted and never shared with third parties.',
  },
  {
    icon: '👨‍💼',
    title: 'CA-Led Advice',
    desc: 'Every filing is reviewed by a registered Chartered Accountant.',
  },
  {
    icon: '📱',
    title: '24/7 WhatsApp Support',
    desc: 'Reach our experts anytime via WhatsApp, phone, or email.',
  },
  {
    icon: '💯',
    title: 'Guaranteed Accuracy',
    desc: "We pay the penalty if any error is made — that's our promise.",
  },
  {
    icon: '🏅',
    title: 'Registered eRI',
    desc: 'Authorized e-Return Intermediary by the Income Tax Department.',
  },
];

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'CimplyTax',
  description: 'India\'s trusted CA-led platform for Income Tax, GST, Company Incorporation, and Loan services.',
  url: 'https://www.cimplytax.com',
  telephone: '+91-8000000000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  priceRange: '₹₹',
  knowsAbout: ['Income Tax', 'GST', 'Company Incorporation', 'Loans'],
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="Tax, GST & Company Registration Services"
        description="CimplyTax — India's most trusted CA-led platform for ITR Filing, GST Services, Company Incorporation, and Loan Advisory. 10,000+ clients served. Free Consultation."
        canonical="/"
        schema={schemaOrg}
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-trust-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-600/15 rounded-full blur-3xl" />

        <div className="relative container-xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5"
              >
                <span className="badge-trust">🇮🇳 Registered eRI · Trusted since 2015</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight text-balance mb-6"
              >
                Your Trusted Partner for{' '}
                <span className="gradient-text">Tax, GST, &amp; Company Incorporation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl"
              >
                Expert CA-led services for ITR filing, GST compliance, business registration, and loan advisory.
                Serving <strong className="text-white">10,000+ clients</strong> across India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link to="/income-tax" className="btn-primary" aria-label="File Income Tax Return">
                  File Your ITR Now →
                </Link>
                <a
                  href="tel:+918000000000"
                  className="btn-secondary"
                  aria-label="Call CimplyTax for free consultation"
                >
                  📞 Free Consultation
                </a>
              </motion.div>

              {/* Micro-trust pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {['✅ No Hidden Charges', '✅ 24hr Turnaround', '✅ CA-Reviewed Filing'].map((t) => (
                  <span key={t} className="text-slate-400 text-xs px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700">
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: Lead Form */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <LeadForm title="Get Free Consultation" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <TrustBar />

      {/* ── SERVICES GRID ── */}
      <section className="section-padding" aria-labelledby="services-heading">
        <div className="container-xl">
          <FadeUp className="text-center mb-14">
            <span className="badge-trust mb-4">Our Services</span>
            <h2 id="services-heading" className="section-title">
              Everything Your Business Needs,{' '}
              <span className="gradient-text">Under One Roof</span>
            </h2>
            <p className="section-sub mx-auto">
              From tax compliance to company formation — our CA experts handle every financial service
              your business needs to thrive.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.1}>
                <Link
                  to={svc.href}
                  className={`card p-6 flex flex-col h-full group cursor-pointer ${svc.border}`}
                  aria-label={`Learn more about ${svc.title}`}
                >
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-2xl border border-slate-700/50`}>
                      {svc.icon}
                    </div>
                    <span className="badge-gold text-[10px]">{svc.badge}</span>
                  </div>

                  <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-trust-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{svc.desc}</p>

                  <ul className="space-y-1.5 mb-5">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                        <svg className="w-3.5 h-3.5 text-trust-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span className="text-trust-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore →
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-padding bg-slate-900/30" aria-labelledby="why-heading">
        <div className="container-xl">
          <FadeUp className="text-center mb-14">
            <span className="badge-trust mb-4">Why CimplyTax</span>
            <h2 id="why-heading" className="section-title">
              The CimplyTax Advantage
            </h2>
            <p className="section-sub mx-auto">
              We combine technology with human expertise to deliver financial services that are fast,
              accurate, and genuinely affordable.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div className="card-glass p-6 flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-trust-900/40 border border-trust-800/50 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding" aria-labelledby="testimonials-heading">
        <div className="container-xl">
          <FadeUp className="text-center mb-14">
            <span className="badge-gold mb-4">Testimonials</span>
            <h2 id="testimonials-heading" className="section-title">
              10,000+ Happy Clients &amp; Counting
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="card p-6 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-slate-300 text-sm leading-relaxed flex-1 mb-5 italic">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-trust-600 to-navy-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-padding" aria-label="Call to action">
        <div className="container-xl">
          <FadeUp>
            <div className="relative rounded-3xl overflow-hidden border border-trust-700/30">
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-trust-900/60 to-navy-900" />
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              <div className="relative px-8 py-14 sm:px-14 text-center">
                <span className="badge-gold mb-4">Limited Time</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
                  File Your ITR Before the Deadline
                </h2>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Avoid ₹5,000 late fees. Our experts ensure accurate, timely filing with maximum refund.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/income-tax/itr-filing"
                    className="btn-primary px-8 py-3"
                    aria-label="Start ITR filing now"
                  >
                    Start Filing Now →
                  </Link>
                  <a
                    href="https://wa.me/918000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-8 py-3"
                    aria-label="Chat on WhatsApp"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
