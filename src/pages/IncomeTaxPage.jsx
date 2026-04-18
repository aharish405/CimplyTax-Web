import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import TrustBar from '../components/TrustBar';

/* ── Fade-up helper ── */
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

/* ── Plan comparison table ── */
const plans = [
  {
    tier: 'Basic',
    badge: '',
    price: '₹499',
    period: 'per filing',
    highlight: false,
    features: [
      { text: 'Salary income (ITR-1)',       included: true  },
      { text: 'House Property income',       included: true  },
      { text: 'Other sources (FD interest)', included: true  },
      { text: 'Capital Gains (Equity/MF)',   included: false },
      { text: 'Business / F&O income',       included: false },
      { text: 'Foreign income / FEMA',       included: false },
      { text: 'Tax Planning Advisory',       included: false },
      { text: 'CA review & sign',            included: true  },
      { text: 'Priority support',            included: false },
    ],
  },
  {
    tier: 'Deluxe',
    badge: 'Most Popular',
    price: '₹1,499',
    period: 'per filing',
    highlight: true,
    features: [
      { text: 'Salary income (ITR-1/2)',     included: true },
      { text: 'House Property income',       included: true },
      { text: 'Other sources (FD interest)', included: true },
      { text: 'Capital Gains (Equity/MF)',   included: true },
      { text: 'Business / F&O income',       included: false },
      { text: 'Foreign income / FEMA',       included: false },
      { text: 'Tax Planning Advisory',       included: true  },
      { text: 'CA review & sign',            included: true  },
      { text: 'Priority support',            included: false },
    ],
  },
  {
    tier: 'Premier',
    badge: 'Complete',
    price: '₹3,999',
    period: 'per filing',
    highlight: false,
    features: [
      { text: 'Salary income (All ITRs)',    included: true },
      { text: 'House Property income',       included: true },
      { text: 'Other sources (FD interest)', included: true },
      { text: 'Capital Gains (Equity/MF)',   included: true },
      { text: 'Business / F&O income',       included: true },
      { text: 'Foreign income / FEMA',       included: true },
      { text: 'Tax Planning Advisory',       included: true },
      { text: 'CA review & sign',            included: true },
      { text: 'Priority support',            included: true },
    ],
  },
];

/* ── Documents accordion ── */
const docSections = [
  {
    title: 'Salaried Individuals',
    items: [
      'Form 16 (Part A & B) from employer',
      'Salary slips for the financial year',
      'PAN Card & Aadhaar Card',
      'Bank account statement (all accounts)',
      'Interest certificate from bank (savings / FD)',
      'Investment proof for 80C (LIC, PPF, ELSS)',
      'Home loan interest certificate (if applicable)',
      'Rent receipts (for HRA)',
    ],
  },
  {
    title: 'Capital Gains (Stocks, Mutual Funds, Property)',
    items: [
      'Capital Gain Statement from broker / MF platform',
      'Demat account statement for the full year',
      'Purchase & sale deed for property (if sold)',
      'Cost of improvement documents',
      'LTCG/STCG computation sheet',
    ],
  },
  {
    title: 'Business / Freelance Income',
    items: [
      'P&L statement or turnover summary',
      'GST invoices and returns (if GST registered)',
      'TDS certificates (Form 26AS / AIS)',
      'Bank statements for all business accounts',
      'Balance sheet (for audit cases)',
    ],
  },
  {
    title: 'Deductions & Exemptions',
    items: [
      'Section 80C: LIC premium, PPF, NSC, ELSS, tuition fees',
      'Section 80D: Medical insurance premium receipts',
      'Section 80G: Donation receipts',
      'Section 80E: Education loan interest certificate',
      'Section 24(b): Home loan interest certificate',
    ],
  },
];

function AccordionItem({ section }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button
        className="accordion-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`acc-${section.title}`}
        id={`acc-btn-${section.title}`}
      >
        <span>{section.title}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-slate-400 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            id={`acc-${section.title}`}
            role="region"
            aria-labelledby={`acc-btn-${section.title}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="px-5 pb-5 space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-trust-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Income Tax Return Filing',
  provider: { '@type': 'Organization', name: 'CimplyTax' },
  description: 'Professional ITR filing services for salaried, business, and NRI taxpayers in India.',
  areaServed: 'IN',
  serviceType: 'Tax Preparation',
};

export default function IncomeTaxPage() {
  return (
    <>
      <SEO
        title="Income Tax Return Filing — ITR Filing Online India"
        description="File your Income Tax Return (ITR) online with CimplyTax. Expert CA assistance for salaried, capital gains, business & NRI returns. Prices from ₹499. Free consultation."
        canonical="/income-tax"
        schema={schema}
      />

      {/* ── PAGE HERO ── */}
      <section className="relative overflow-hidden py-20 lg:py-28" aria-label="Income Tax page header">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-10 left-20 w-72 h-72 bg-trust-700/10 rounded-full blur-3xl" />

        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-4"
              >
                <span className="badge-trust">Income Tax Services</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold font-display text-white leading-tight mb-5"
              >
                Income Tax Return{' '}
                <span className="gradient-text">Filing Made Simple</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed mb-8"
              >
                Expert CA-reviewed ITR filing for individuals, HUFs, businesses, and NRIs.
                Maximize your refund and stay 100% compliant.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-primary">Get Started →</Link>
                <a href="tel:+918000000000" className="btn-secondary">📞 Talk to a CA</a>
              </motion.div>
            </div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { n: '₹499', label: 'Starting Price', sub: 'Per filing' },
                { n: '24hr', label: 'Turnaround',    sub: 'For most ITRs' },
                { n: '8,000+', label: 'ITRs Filed',   sub: 'This year' },
                { n: '100%', label: 'Accuracy',       sub: 'CA guaranteed' },
              ].map((s) => (
                <div key={s.label} className="card p-5">
                  <p className="text-2xl font-bold font-display text-white mb-0.5">{s.n}</p>
                  <p className="text-trust-400 text-sm font-semibold">{s.label}</p>
                  <p className="text-slate-500 text-xs">{s.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PLAN COMPARISON TABLE ── */}
      <section className="section-padding" aria-labelledby="plans-heading">
        <div className="container-xl">
          <FadeUp className="text-center mb-14">
            <span className="badge-trust mb-4">Pricing Plans</span>
            <h2 id="plans-heading" className="section-title">
              Choose the Right ITR Filing Plan
            </h2>
            <p className="section-sub mx-auto">
              Transparent pricing — no hidden fees. Upgrade anytime.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <FadeUp key={plan.tier} delay={i * 0.1}>
                <div className={`relative rounded-2xl flex flex-col h-full transition-all duration-300
                  ${plan.highlight
                    ? 'bg-gradient-to-b from-trust-800/30 to-navy-900/60 border-2 border-trust-600/60 shadow-2xl shadow-trust-900/30'
                    : 'card'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="badge bg-trust-600 text-white text-[10px] px-4 py-1 shadow-lg">
                        ★ Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-7 flex-1">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-bold text-xl text-white">{plan.tier}</h3>
                      {plan.badge && !plan.highlight && (
                        <span className="badge-gold text-[10px]">{plan.badge}</span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1.5 mb-6">
                      <span className="text-4xl font-bold font-display text-white">{plan.price}</span>
                      <span className="text-slate-400 text-sm">{plan.period}</span>
                    </div>

                    {/* Feature list */}
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f.text} className="flex items-center gap-3 text-sm">
                          {f.included ? (
                            <svg className="w-4 h-4 text-trust-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-slate-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          <span className={f.included ? 'text-slate-300' : 'text-slate-600'}>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      to="/contact"
                      className={plan.highlight ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
                      aria-label={`Select ${plan.tier} ITR filing plan`}
                    >
                      Get Started — {plan.tier}
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              All prices are exclusive of GST. Need a custom plan for your business?{' '}
              <a href="tel:+918000000000" className="text-trust-400 hover:text-trust-300 underline">
                Call us
              </a>.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── DOCUMENTS REQUIRED (ACCORDION) ── */}
      <section className="section-padding bg-slate-900/30" aria-labelledby="docs-heading">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <FadeUp>
                <span className="badge-trust mb-4">Checklist</span>
                <h2 id="docs-heading" className="section-title">
                  Documents Required for{' '}
                  <span className="gradient-text">ITR Filing</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Gather these documents before your appointment. Our CA will guide you
                  through every step once you submit your details.
                </p>
                <Link to="/contact" className="btn-primary" aria-label="Start ITR filing process">
                  Start Filing Now →
                </Link>
              </FadeUp>
            </div>

            <FadeUp delay={0.15}>
              <div>
                {docSections.map((section) => (
                  <AccordionItem key={section.title} section={section} />
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <TrustBar />

      {/* ── LEAD FORM CTA ── */}
      <section className="section-padding" aria-label="Contact form">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <span className="badge-gold mb-4">Free Consultation</span>
              <h2 className="section-title">
                File Your ITR with a{' '}
                <span className="gradient-text">CA Expert Today</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Fill the form and our team will call you within 2 business hours. No spam, no pressure —
                just expert advice tailored to your needs.
              </p>
              <ul className="space-y-3">
                {[
                  'Free initial tax assessment',
                  'CA-reviewed and signed filing',
                  'Maximum legitimate refund guaranteed',
                  'Secure document handling',
                  'Post-filing notice support',
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-trust-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.15}>
              <LeadForm title="Request ITR Filing Consultation" />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
