import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import TrustBar from '../components/TrustBar';

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}
function FadeLeft({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const plans = [
  {
    tier: 'Basic',
    price: '₹499',
    period: 'per filing',
    featured: false,
    desc: 'For salaried individuals with simple income',
    features: [
      { text: 'Salary income (ITR-1)',       ok: true  },
      { text: 'House Property income',       ok: true  },
      { text: 'Other sources (FD interest)', ok: true  },
      { text: 'Capital Gains (Equity/MF)',   ok: false },
      { text: 'Business / F&O income',       ok: false },
      { text: 'Foreign income / FEMA',       ok: false },
      { text: 'Tax Planning Advisory',       ok: false },
      { text: 'CA review & sign',            ok: true  },
      { text: 'Priority support',            ok: false },
    ],
  },
  {
    tier: 'Deluxe',
    price: '₹1,499',
    period: 'per filing',
    featured: true,
    badge: 'Most Popular',
    desc: 'For investors with capital gains & multiple sources',
    features: [
      { text: 'Salary income (ITR-1/2)',     ok: true },
      { text: 'House Property income',       ok: true },
      { text: 'Other sources (FD interest)', ok: true },
      { text: 'Capital Gains (Equity/MF)',   ok: true },
      { text: 'Business / F&O income',       ok: false },
      { text: 'Foreign income / FEMA',       ok: false },
      { text: 'Tax Planning Advisory',       ok: true  },
      { text: 'CA review & sign',            ok: true  },
      { text: 'Priority support',            ok: false },
    ],
  },
  {
    tier: 'Premier',
    price: '₹3,999',
    period: 'per filing',
    featured: false,
    badge: 'Complete',
    desc: 'For business owners, NRIs & complex income scenarios',
    features: [
      { text: 'Salary income (All ITRs)',    ok: true },
      { text: 'House Property income',       ok: true },
      { text: 'Other sources (FD interest)', ok: true },
      { text: 'Capital Gains (Equity/MF)',   ok: true },
      { text: 'Business / F&O income',       ok: true },
      { text: 'Foreign income / FEMA',       ok: true },
      { text: 'Tax Planning Advisory',       ok: true },
      { text: 'CA review & sign',            ok: true },
      { text: 'Priority support',            ok: true },
    ],
  },
];

const docSections = [
  {
    title: 'Salaried Individuals',
    items: ['Form 16 (Part A & B) from employer', 'Salary slips for the financial year', 'PAN Card & Aadhaar Card', 'Bank account statement (all accounts)', 'Interest certificate from bank (savings / FD)', 'Investment proof for 80C (LIC, PPF, ELSS)', 'Home loan interest certificate (if applicable)', 'Rent receipts (for HRA claim)'],
  },
  {
    title: 'Capital Gains (Stocks, Mutual Funds, Property)',
    items: ['Capital Gain Statement from broker / MF platform', 'Demat account statement for the full year', 'Purchase & sale deed for property (if sold)', 'Cost of improvement documents', 'LTCG / STCG computation sheet'],
  },
  {
    title: 'Business / Freelance Income',
    items: ['P&L statement or turnover summary', 'GST invoices and returns (if registered)', 'TDS certificates (Form 26AS / AIS)', 'Bank statements for all business accounts', 'Balance sheet (for audit applicable cases)'],
  },
  {
    title: 'Deductions & Exemptions',
    items: ['Section 80C: LIC premium, PPF, NSC, ELSS, tuition fees', 'Section 80D: Medical insurance premium receipts', 'Section 80G: Donation receipts with 80G certificate', 'Section 80E: Education loan interest certificate', 'Section 24(b): Home loan interest certificate'],
  },
];

function AccordionItem({ section }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button className="accordion-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="text-sm">{section.title}</span>
        <motion.svg animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
          className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="c" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
            <ul className="px-6 pb-5 space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                  <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
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
  description: 'Professional ITR filing for salaried, capital gains, business and NRI taxpayers in India.',
  areaServed: 'IN',
  serviceType: 'Tax Preparation',
};

export default function IncomeTaxPage() {
  return (
    <>
      <SEO
        title="Income Tax Return Filing — ITR Filing Online India"
        description="File your ITR online with CimplyTax CA experts. Plans from ₹499 for salaried, capital gains, business & NRI returns. Free consultation, CA-reviewed filing."
        canonical="/income-tax"
        schema={schema}
      />

      {/* HERO */}
      <section className="relative bg-white overflow-hidden py-20 lg:py-0" aria-label="Income tax page header">
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-80 pointer-events-none" />

        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[78vh]">
            <div className="py-16 lg:py-0">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <span className="eyebrow">Income Tax Services</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
                className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mt-4 mb-5 text-balance">
                ITR Filing Made{' '}
                <span className="gradient-brand">Simple & Accurate</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                className="body-lg mb-8 max-w-lg">
                Expert CA-reviewed ITR filing for individuals, HUFs, businesses & NRIs. We maximize your refund
                while keeping you 100% compliant.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-10">
                <Link to="/contact" className="btn-primary" aria-label="Start ITR filing">Start Filing →</Link>
                <a href="tel:+918000000000" className="btn-outline">📞 Talk to a CA</a>
              </motion.div>
              {/* Quick stats */}
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { n: '₹499', l: 'Starting Price' },
                  { n: '24hr', l: 'Turnaround' },
                  { n: '8,000+', l: 'ITRs Filed' },
                  { n: '100%', l: 'Accuracy' },
                ].map((s) => (
                  <div key={s.l} className="card-flat p-4 text-center">
                    <p className="font-extrabold text-brand-600 text-lg mb-0.5">{s.n}</p>
                    <p className="text-slate-500 text-xs">{s.l}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right image */}
            <FadeLeft delay={0.15} className="hidden lg:block">
              <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ boxShadow: '0 12px 40px -8px rgb(37 99 235 / 0.12)' }}>
                <img
                  src="/images/tax-advisor.png"
                  alt="CimplyTax CA tax advisor consulting a client"
                  className="w-full h-[480px] object-cover"
                  width={620}
                  height={480}
                />
              </div>
            </FadeLeft>
          </div>
        </div>
      </section>

      {/* PLAN COMPARISON TABLE */}
      <section className="section-pad bg-slate-50" aria-labelledby="plans-heading">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="section-header-center">
            <span className="eyebrow">Pricing Plans</span>
            <h2 id="plans-heading" className="h-section mb-4">
              Transparent Pricing — <span className="gradient-brand">No Hidden Fees</span>
            </h2>
            <p className="body-lg text-center">Choose a plan that fits your tax situation. Upgrade anytime.</p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <FadeUp key={plan.tier} delay={i * 0.1}>
                <div className={`relative flex flex-col h-full rounded-xl border-2
                  ${plan.featured
                    ? 'border-brand-600 bg-brand-600 shadow-brand'
                    : 'border-slate-100 bg-white shadow-card hover:shadow-card-hover'
                  } transition-all duration-300`}>

                  {plan.badge && plan.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-900 shadow">
                        ★ {plan.badge}
                      </span>
                    </div>
                  )}
                  {plan.badge && !plan.featured && (
                    <div className="absolute -top-3.5 right-4">
                      <span className="badge-blue">{plan.badge}</span>
                    </div>
                  )}

                  <div className="p-8 flex-1">
                    <h3 className={`font-extrabold text-2xl mb-1 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                      {plan.tier}
                    </h3>
                    <p className={`text-sm mb-6 ${plan.featured ? 'text-brand-200' : 'text-slate-500'}`}>{plan.desc}</p>
                    <div className="flex items-baseline gap-1.5 mb-8">
                      <span className={`text-4xl font-extrabold ${plan.featured ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                      <span className={`text-sm ${plan.featured ? 'text-brand-200' : 'text-slate-400'}`}>{plan.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f.text} className="flex items-center gap-3 text-sm">
                          {f.ok ? (
                            <svg className={`w-4 h-4 flex-shrink-0 ${plan.featured ? 'text-teal-300' : 'text-teal-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className={`w-4 h-4 flex-shrink-0 ${plan.featured ? 'text-white/30' : 'text-slate-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          <span className={f.ok
                            ? (plan.featured ? 'text-white' : 'text-slate-700')
                            : (plan.featured ? 'text-white/40' : 'text-slate-300')
                          }>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-8 pb-8">
                    <Link to="/contact"
                      className={plan.featured ? 'btn-cta w-full justify-center' : 'btn-outline w-full justify-center'}
                      aria-label={`Select ${plan.tier} ITR filing plan`}>
                      Get Started — {plan.tier}
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              All prices exclude GST. Need a custom plan?{' '}
              <a href="tel:+918000000000" className="text-brand-600 font-semibold hover:underline">Call us</a>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* DOCUMENTS ACCORDION */}
      <section className="section-pad bg-white" aria-labelledby="docs-heading">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <img
                src="/images/tax-advisor.png"
                alt="CA advisor discussing tax documents with client"
                className="w-full h-64 object-cover rounded-xl shadow-md mb-8"
                loading="lazy"
              />
              <span className="eyebrow">Document Checklist</span>
              <h2 id="docs-heading" className="h-section mb-5 mt-3">
                Documents Required for{' '}
                <span className="gradient-brand">ITR Filing</span>
              </h2>
              <p className="body-lg mb-8">
                Gather these documents and share them securely via WhatsApp or email. Our CA takes it from there.
              </p>
              <Link to="/contact" className="btn-primary" aria-label="Start ITR filing process">
                Start Filing Now →
              </Link>
            </FadeUp>
            <FadeLeft delay={0.1}>
              {docSections.map((s) => <AccordionItem key={s.title} section={s} />)}
            </FadeLeft>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* LEAD FORM */}
      <section className="section-pad bg-slate-50" aria-label="ITR filing consultation form">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <span className="eyebrow">Free Consultation</span>
              <h2 className="h-section mb-5 mt-3">
                File Your ITR with a{' '}
                <span className="gradient-brand">CA Expert Today</span>
              </h2>
              <p className="body-lg mb-8">Fill the form — our CA will call within 2 business hours.</p>
              <ul className="space-y-3">
                {['Free initial tax assessment', 'CA-reviewed and signed filing', 'Maximum legitimate refund guaranteed', 'Secure document handling', 'Post-filing notice support'].map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeLeft delay={0.1}><LeadForm title="Request ITR Filing Consultation" compact /></FadeLeft>
          </div>
        </div>
      </section>
    </>
  );
}
