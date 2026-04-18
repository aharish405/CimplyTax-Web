import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';

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

const loanTabs = [
  {
    id: 'personal',
    label: 'Personal Loan',
    icon: '👤',
    headline: 'Personal Loans up to ₹50 Lakh',
    desc: 'Get funds for any personal need — medical, travel, wedding, or renovation — with minimal documentation and quick approval.',
    rate: '10.5% – 24% p.a.',
    tenure: 'Up to 60 months',
    amount: 'Up to ₹50 Lakh',
    eligibility: [
      'Indian citizen aged 21–60 years',
      'Minimum monthly income ₹20,000',
      'Credit score of 700+ preferred',
      'Minimum 1 year of employment (salaried)',
      'PAN and Aadhaar mandatory',
      'Bank statements (last 3 months)',
    ],
  },
  {
    id: 'home',
    label: 'Home Loan',
    icon: '🏠',
    headline: 'Home Loans Starting at 8.5% p.a.',
    desc: 'Fulfill your dream of owning a home with competitive interest rates, long tenures, and doorstep assistance.',
    rate: '8.5% – 12% p.a.',
    tenure: 'Up to 30 years',
    amount: 'Up to ₹10 Crore',
    eligibility: [
      'Salaried or self-employed Indian resident',
      'Age 23–65 years at loan maturity',
      'Minimum income ₹30,000/month',
      'Property should be legally clear',
      'Credit score 720+ recommended',
      'ITR for last 2 years (self-employed)',
    ],
  },
  {
    id: 'business',
    label: 'Business Loan',
    icon: '💼',
    headline: 'Business Loans for Growth',
    desc: 'Scale your operations with flexible business loans from top banks. Working capital, machinery, or expansion — we finance it all.',
    rate: '12% – 22% p.a.',
    tenure: 'Up to 84 months',
    amount: 'Up to ₹5 Crore',
    eligibility: [
      'Business operational for at least 2 years',
      'Annual turnover ₹15 Lakh+',
      'ITR filings for last 2 years',
      'GST returns (if registered)',
      'Business & personal bank statements',
      'Credit score 700+ preferred',
    ],
  },
  {
    id: 'lap',
    label: 'Loan Against Property',
    icon: '🏗️',
    headline: 'Unlock the Value of Your Property',
    desc: 'Mortgage your residential or commercial property to get large-ticket funding at lower interest rates for any business need.',
    rate: '9% – 16% p.a.',
    tenure: 'Up to 15 years',
    amount: 'Up to ₹20 Crore',
    eligibility: [
      'Clear title property (residential or commercial)',
      'Age 25–70 years',
      'Loan to value ratio up to 70%',
      'Minimum annual income ₹3 Lakh',
      'ITR for last 2–3 years',
      'No overdue on existing loans',
    ],
  },
];

export default function LoansPage({ tab: defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab || 'personal');
  const tab = loanTabs.find((t) => t.id === activeTab) || loanTabs[0];

  return (
    <>
      <SEO title="Personal, Home & Business Loan Advisory India" description="CimplyTax helps you get the best loan deals — Personal, Home, Business, and LAP — with quick approvals and minimal documentation. Free eligibility check." canonical="/loans" />

      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="badge-trust mb-4 inline-flex">Loan Services</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold font-display text-white mb-5 mt-2">
            Smart Loan Advisory for{' '}
            <span className="gradient-text">Every Need</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg mb-8 max-w-xl">
            We compare 50+ lenders to find you the best rates with minimal paperwork and fastest disbursal.
          </motion.p>
        </div>
      </section>

      {/* TABBED INTERFACE */}
      <section className="section-padding" aria-labelledby="loans-heading">
        <div className="container-xl">
          <FadeUp className="text-center mb-10">
            <h2 id="loans-heading" className="section-title">
              Choose Your <span className="gradient-text">Loan Type</span>
            </h2>
          </FadeUp>

          {/* Tab buttons */}
          <FadeUp delay={0.05}>
            <div className="flex flex-wrap gap-3 justify-center mb-10" role="tablist" aria-label="Loan types">
              {loanTabs.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={activeTab === t.id}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                    ${activeTab === t.id
                      ? 'bg-trust-700 text-white shadow-lg shadow-trust-900/40'
                      : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
                    }`}
                >
                  <span>{t.icon}</span> {t.label}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Tab panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Left: info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{tab.icon}</span>
                    <h3 className="text-2xl font-bold font-display text-white">{tab.headline}</h3>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">{tab.desc}</p>

                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: 'Interest Rate', value: tab.rate },
                      { label: 'Loan Amount',   value: tab.amount },
                      { label: 'Tenure',         value: tab.tenure },
                    ].map((s) => (
                      <div key={s.label} className="card p-4 text-center">
                        <p className="text-white font-bold font-display text-sm">{s.value}</p>
                        <p className="text-slate-500 text-xs mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Eligibility checklist */}
                  <div className="card p-6">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-trust-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      Quick Eligibility Checklist
                    </h4>
                    <ul className="space-y-2.5">
                      {tab.eligibility.map((e) => (
                        <li key={e} className="flex items-start gap-2.5 text-sm">
                          <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-300">{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: lead form */}
                <LeadForm title={`Apply for ${tab.label}`} compact />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
