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
    id: 'personal', label: 'Personal Loan', icon: '👤',
    headline: 'Personal Loans up to ₹50 Lakh',
    rate: '10.5% – 24% p.a.', tenure: 'Up to 60 months', amount: 'Up to ₹50 Lakh',
    desc: 'Get funds for any personal need — medical, travel, wedding, or home renovation — with minimal documentation.',
    eligibility: ['Indian citizen aged 21–60 years', 'Minimum monthly income ₹20,000', 'Credit score 700+ preferred', 'Minimum 1 year of employment', 'PAN and Aadhaar mandatory'],
  },
  {
    id: 'home', label: 'Home Loan', icon: '🏠',
    headline: 'Home Loans from 8.5% p.a.',
    rate: '8.5% – 12% p.a.', tenure: 'Up to 30 years', amount: 'Up to ₹10 Crore',
    desc: 'Fulfill your dream home with competitive rates, long tenures, and doorstep processing assistance.',
    eligibility: ['Salaried or self-employed resident', 'Age 23–65 at loan maturity', 'Minimum income ₹30,000/month', 'Credit score 720+ recommended', 'ITR for last 2 years (self-employed)'],
  },
  {
    id: 'business', label: 'Business Loan', icon: '💼',
    headline: 'Business Loans for Growth',
    rate: '12% – 22% p.a.', tenure: 'Up to 84 months', amount: 'Up to ₹5 Crore',
    desc: 'Scale operations with flexible loans. Working capital, machinery, or expansion — we finance it all.',
    eligibility: ['Business operational minimum 2 years', 'Annual turnover ₹15 Lakh+', 'ITR filings for last 2 years', 'GST returns (if registered)', 'Credit score 700+ preferred'],
  },
  {
    id: 'lap', label: 'Loan Against Property', icon: '🏗️',
    headline: 'Unlock Your Property Value',
    rate: '9% – 16% p.a.', tenure: 'Up to 15 years', amount: 'Up to ₹20 Crore',
    desc: 'Mortgage residential or commercial property for large-ticket funding at lower interest rates.',
    eligibility: ['Clear title property (residential or commercial)', 'Age 25–70 years', 'Loan-to-value ratio up to 70%', 'Minimum annual income ₹3 Lakh', 'No overdue on existing loans'],
  },
];

export default function LoansPage({ tab: defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab || 'personal');
  const tab = loanTabs.find((t) => t.id === activeTab) || loanTabs[0];

  return (
    <>
      <SEO title="Personal, Home & Business Loan Advisory India" description="CimplyTax helps you get the best loan deals — Personal, Home, Business, and LAP — with quick approvals and minimal documentation. Free eligibility check." canonical="/loans" />

      {/* HERO */}
      <section className="relative bg-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-80 pointer-events-none" />
        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                <span className="eyebrow">Loan Advisory</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4 mb-5 leading-tight text-balance">
                Smart Loans for <span className="gradient-brand">Every Life Goal</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                className="body-lg mb-8 max-w-lg">
                We compare 50+ lenders to find you the best rates with minimal paperwork and fastest disbursal — for any personal or business need.
              </motion.p>
              <div className="flex flex-wrap gap-3">
                <a href="#loan-tabs" className="btn-primary">Check Eligibility →</a>
                <a href="tel:+918000000000" className="btn-outline">📞 Free Advisory</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 32px 80px -12px rgb(5 150 105 / 0.15)' }}>
                <img src="/images/loans-family.png" alt="Happy Indian family celebrating home loan approval"
                  className="w-full h-[440px] object-cover" width={580} height={440} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABBED INTERFACE */}
      <section className="section-pad bg-slate-50" id="loan-tabs" aria-labelledby="loans-heading">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="section-header-center">
            <span className="eyebrow">Loan Types</span>
            <h2 id="loans-heading" className="h-section mb-4">Choose Your <span className="gradient-brand">Loan Type</span></h2>
          </FadeUp>

          {/* Tab buttons */}
          <FadeUp delay={0.05}>
            <div className="flex flex-wrap gap-3 justify-center mb-10" role="tablist" aria-label="Loan types">
              {loanTabs.map((t) => (
                <button key={t.id} role="tab" id={`tab-${t.id}`} aria-selected={activeTab === t.id}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border-2
                    ${activeTab === t.id
                      ? 'bg-brand-600 text-white border-brand-600 shadow-brand'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-brand-300 hover:text-brand-700'
                    }`}>
                  <span>{t.icon}</span> {t.label}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Tab panel */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}>
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{tab.icon}</span>
                    <h3 className="text-2xl font-extrabold text-slate-900">{tab.headline}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{tab.desc}</p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: 'Interest Rate', value: tab.rate },
                      { label: 'Loan Amount',   value: tab.amount },
                      { label: 'Tenure',         value: tab.tenure },
                    ].map((s) => (
                      <div key={s.label} className="card-flat p-4 text-center">
                        <p className="font-bold text-brand-600 text-sm">{s.value}</p>
                        <p className="text-slate-500 text-xs mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="card p-6">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      Quick Eligibility Checklist
                    </h4>
                    <ul className="space-y-2.5">
                      {tab.eligibility.map((e) => (
                        <li key={e} className="flex items-center gap-2.5 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <LeadForm title={`Apply for ${tab.label}`} compact />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
