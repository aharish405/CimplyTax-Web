import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/SEO';
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

/* ── Timeline steps ── */
const steps = [
  {
    n: '01',
    title: 'DSC & DIN Procurement',
    desc: 'Obtain Digital Signature Certificate (DSC) for all proposed directors and apply for Director Identification Number (DIN) via the MCA portal.',
    time: '1–2 Days',
    icon: '🔐',
    iconBg: 'bg-brand-50 text-brand-600',
    detail: 'Documents: Aadhaar, PAN, Passport photo, Address proof',
  },
  {
    n: '02',
    title: 'Name Approval (RUN)',
    desc: 'File the Reserve Unique Name (RUN) application with MCA. Submit up to 2 company name options with objects of the business.',
    time: '1–3 Days',
    icon: '💡',
    iconBg: 'bg-amber-50 text-amber-600',
    detail: 'Pro tip: Keep names descriptive and unique to avoid rejection',
  },
  {
    n: '03',
    title: 'Incorporation Filing (SPICe+)',
    desc: 'File the SPICe+ form along with MoA, AoA, and other mandatory incorporation documents. MCA review and Certificate of Incorporation issued.',
    time: '3–5 Days',
    icon: '📋',
    iconBg: 'bg-teal-50 text-teal-600',
    detail: 'Includes: MOA, AOA, INC-9, AGILE PRO-S form',
  },
  {
    n: '04',
    title: 'PAN, TAN & Bank Account',
    desc: 'PAN and TAN are auto-generated alongside the Incorporation Certificate. Open your company\'s current account with any scheduled bank.',
    time: '1–2 Days',
    icon: '🏦',
    iconBg: 'bg-emerald-50 text-emerald-600',
    detail: 'We assist with current account opening at 20+ banks',
  },
];

/* ── Comparison table ── */
const compareData = {
  headers: ['Feature', 'Pvt Ltd', 'LLP', 'OPC', 'Partnership'],
  rows: [
    ['Minimum Members',       '2 Directors',  '2 Partners',   '1 Director',   '2+ Partners'],
    ['Legal Separate Entity', '✅ Yes',         '✅ Yes',         '✅ Yes',         '❌ No'],
    ['Limited Liability',     '✅ Yes',         '✅ Yes',         '✅ Yes',         '❌ No'],
    ['Annual Compliance',     'Moderate-High', 'Moderate',     'Moderate',     'Low'],
    ['Foreign Investment',    '✅ Allowed',     '✅ Allowed',     '❌ Restricted', '❌ Restricted'],
    ['Investor Preference',   '⭐⭐⭐⭐⭐',       '⭐⭐⭐',          '⭐⭐',           '⭐'],
    ['Recommended For',       'Startups/FDI', 'Professionals','Solo Founders','Small Traders'],
    ['Our Price From',        '₹6,999',        '₹5,999',        '₹4,999',        '₹2,999'],
  ],
};

/* ── Accordion for docs ── */
const docSections = [
  {
    title: 'For All Directors',
    items: ['PAN Card (mandatory)', 'Aadhaar Card', 'Passport-size photograph', 'Address proof (utility bill / bank statement)', 'Email and mobile number'],
  },
  {
    title: 'Registered Office Proof',
    items: ['Ownership proof (sale deed) OR Rent agreement', 'NOC from property owner', 'Utility bill (not older than 2 months)'],
  },
  {
    title: 'Additional for LLP',
    items: ['LLP Agreement draft', 'Contribution amount details', 'Business activity description'],
  },
];

function AccordionItem({ section }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button className="accordion-btn" onClick={() => setOpen(!open)}
        aria-expanded={open} id={`sec-${section.title}`}>
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
  name: 'Company Incorporation',
  provider: { '@type': 'Organization', name: 'CimplyTax' },
  description: 'Professional company registration services — Private Limited, LLP, OPC, and Partnership in India.',
  areaServed: 'IN',
};

export default function IncorporationPage() {
  return (
    <>
      <SEO
        title="Company Registration — Pvt Ltd, LLP, OPC Formation India"
        description="Register your company with CimplyTax in 7 days. Private Limited, LLP, OPC, or Partnership — complete DSC, DIN, PAN documentation handled by CA experts. From ₹2,999."
        canonical="/company-incorporation"
        schema={schema}
      />

      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden py-20 lg:py-0" aria-label="Company incorporation hero">
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-violet-50 rounded-full blur-3xl opacity-80 pointer-events-none" />

        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[82vh]">

            {/* Left: copy */}
            <div className="py-16 lg:py-0">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <span className="eyebrow">Company Registration</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
                className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5 mt-4 text-balance">
                Register Your Company{' '}
                <span className="gradient-brand">in Just 7 Days</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                className="body-lg mb-8 max-w-lg">
                From Digital Signature to Incorporation Certificate — our CA experts handle every Ministry of Corporate Affairs (MCA) filing. Start your business the right way.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-10">
                <Link to="/contact" className="btn-primary" aria-label="Start company registration">Register My Company →</Link>
                <a href="tel:+918000000000" className="btn-outline">📞 Free Advisory Call</a>
              </motion.div>

              {/* Quick stats row */}
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-4">
                {[
                  { n: '₹2,999', l: 'Starting Price' },
                  { n: '7 Days', l: 'Typical Timeline' },
                  { n: '2,400+', l: 'Companies Registered' },
                ].map((s) => (
                  <div key={s.l} className="card-flat p-4 text-center">
                    <p className="font-extrabold text-brand-600 text-xl">{s.n}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{s.l}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: AI image */}
            <FadeLeft delay={0.2} className="hidden lg:block">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ boxShadow: '0 12px 40px -8px rgb(124 58 237 / 0.12), 0 4px 16px -4px rgb(0 0 0 / 0.08)' }}>
                  <img
                    src="/images/incorporation-team.png"
                    alt="Young Indian startup team reviewing company registration documents in a Bengaluru co-working space"
                    className="w-full h-[500px] object-cover"
                    width={620}
                    height={500}
                  />
                </div>
                {/* Floating cert badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-md border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center text-xl">🏢</div>
                  <div>
                    <p className="font-extrabold text-slate-900">MCA Registered</p>
                    <p className="text-slate-500 text-xs">Govt. of India Authorized</p>
                  </div>
                </motion.div>
              </div>
            </FadeLeft>
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ── */}
      <section className="section-pad bg-slate-50" aria-labelledby="process-heading">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="section-header-center">
            <span className="eyebrow">The Process</span>
            <h2 id="process-heading" className="h-section mb-4">
              4 Simple Steps to{' '}
              <span className="gradient-brand">Incorporate Your Company</span>
            </h2>
            <p className="body-lg text-center">
              We handle all MCA filings, document preparation, and follow-ups — you just provide documents.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Timeline left */}
            <div className="max-w-lg mx-auto w-full">
              {steps.map((step, i) => (
                <FadeUp key={step.n} delay={i * 0.12}>
                  <div className="flex gap-5 mb-1 relative">
                    {/* Step number + connector */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-white border-2 border-brand-100 flex items-center justify-center font-extrabold text-brand-600 text-base shadow-sm z-10">
                        {step.n}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-200 to-brand-50 mt-2 min-h-[32px] mb-1" />
                      )}
                    </div>

                    {/* Content card */}
                    <div className={`card p-5 flex-1 mb-${i < steps.length - 1 ? '4' : '0'}`}>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-9 h-9 rounded-xl ${step.iconBg} flex items-center justify-center text-lg flex-shrink-0`}>
                            {step.icon}
                          </div>
                          <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                        </div>
                        <span className="badge-blue text-[10px] flex-shrink-0">{step.time}</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">{step.desc}</p>
                      <p className="text-xs text-brand-600 font-medium bg-brand-50 px-3 py-1.5 rounded-lg inline-block">
                        📎 {step.detail}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Right: document accordion + image */}
            <div>
              <FadeLeft delay={0.1}>
                <img
                  src="/images/incorporation-team.png"
                  alt="Startup team reviewing incorporation documents"
                  className="w-full h-64 object-cover rounded-xl mb-8 shadow-md"
                  loading="lazy"
                />
              </FadeLeft>
              <FadeLeft delay={0.2}>
                <h3 className="font-bold text-slate-900 mb-4">Documents Required</h3>
                {docSections.map((sec) => <AccordionItem key={sec.title} section={sec} />)}
              </FadeLeft>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON CHART ── */}
      <section className="section-pad bg-white" aria-labelledby="compare-heading">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="section-header-center">
            <span className="eyebrow">Compare Structures</span>
            <h2 id="compare-heading" className="h-section mb-4">
              Which Business Structure is{' '}
              <span className="gradient-brand">Right for You?</span>
            </h2>
            <p className="body-lg text-center">
              Each structure has unique advantages. Our CA advisors will recommend the right fit for your goals.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-card">
              <table className="w-full min-w-[680px] bg-white" role="table" aria-label="Business structure comparison table">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    {compareData.headers.map((h, hi) => (
                      <th key={h} scope="col"
                        className={`px-6 py-4 text-sm font-bold tracking-tight
                          ${hi === 0 ? 'text-left text-slate-500 w-44' : 'text-center'}
                          ${hi === 1 ? 'text-brand-700 bg-brand-50/50' : 'text-slate-700'}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {compareData.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      {row.map((cell, ci) => (
                        <td key={ci}
                          className={`px-6 py-4 text-sm
                            ${ci === 0 ? 'font-semibold text-slate-700' : 'text-center text-slate-600'}
                            ${ci === 1 ? 'bg-brand-50/30' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Not sure which to pick?{' '}
              <a href="tel:+918000000000" className="text-brand-600 font-semibold hover:underline">Call a CA for a free 15-min advisory →</a>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section className="section-pad bg-slate-50" aria-label="Company registration inquiry">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <span className="eyebrow">Get Started</span>
              <h2 className="h-section mb-5 mt-3">
                Start Your{' '}
                <span className="gradient-brand">Business Today</span>
              </h2>
              <p className="body-lg mb-8">
                Fill the form for a free CA consultation. We'll advise the right business structure and start the filing process immediately.
              </p>
              <ul className="space-y-3">
                {[
                  'Free 15-min CA consultation included',
                  'All MCA filings handled for you',
                  'Digital signatures arranged',
                  'Post-incorporation compliance guidance',
                  'GST and Udyam registration assistance',
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeLeft delay={0.1}>
              <LeadForm title="Company Registration Inquiry" compact />
            </FadeLeft>
          </div>
        </div>
      </section>
    </>
  );
}
