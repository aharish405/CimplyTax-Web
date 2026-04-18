import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
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

/* ── Process Timeline ── */
const steps = [
  {
    n: '01',
    title: 'DSC & DIN',
    desc: 'Obtain Digital Signature Certificate (DSC) and Director Identification Number (DIN) for all proposed directors.',
    time: '1–2 Days',
    icon: '🔐',
  },
  {
    n: '02',
    title: 'Name Approval (RUN)',
    desc: 'File RUN (Reserve Unique Name) application with MCA. Reserve your company name with up to 2 choices.',
    time: '1–3 Days',
    icon: '✍️',
  },
  {
    n: '03',
    title: 'Incorporation Filing',
    desc: 'File SPICe+ form with MoA, AoA, and other incorporation documents. MCA reviews and issues Certificate of Incorporation.',
    time: '3–5 Days',
    icon: '📋',
  },
  {
    n: '04',
    title: 'PAN, TAN & Bank Account',
    desc: "PAN and TAN are issued with the Incorporation Certificate. Open the company's current account thereafter.",
    time: '1–2 Days',
    icon: '🏦',
  },
];

/* ── Comparison table ── */
const compareData = {
  headers: ['Feature', 'Pvt Ltd', 'LLP', 'OPC', 'Partnership'],
  rows: [
    ['Min. Members',         '2 Directors',  '2 Partners',   '1 Director',   '2+ Partners'],
    ['Legal Separate Entity','✅ Yes',        '✅ Yes',        '✅ Yes',        '❌ No'],
    ['Limited Liability',    '✅ Yes',        '✅ Yes',        '✅ Yes',        '❌ No'],
    ['Min. Capital',         'No minimum',   'No minimum',   'No minimum',   'No minimum'],
    ['Annual Compliance',    'High',         'Moderate',     'Moderate',     'Low'],
    ['Stakeholder Trust',    'Very High',    'High',         'Moderate',     'Low'],
    ['Recommended for',      'Startups/FDI', 'Professionals','Solo Founders','Small Traders'],
    ['Our Price from',       '₹6,999',       '₹5,999',       '₹4,999',       '₹2,999'],
  ],
};

export default function IncorporationPage() {
  return (
    <>
      <SEO title="Company Registration — Pvt Ltd, LLP, OPC Formation India" description="Register your company with CimplyTax. Private Limited, LLP, OPC, or Partnership — complete incorporation with DSC, DIN, PAN. CA-guided process from ₹2,999." canonical="/company-incorporation" />

      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-10 right-20 w-72 h-72 bg-violet-700/10 rounded-full blur-3xl" />
        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="badge-trust mb-4 inline-flex">Company Incorporation</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold font-display text-white mb-5 mt-2 max-w-2xl">
            Register Your Company{' '}
            <span className="gradient-text">in Just 7 Days</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg mb-8 max-w-xl">
            From DSC to Incorporation Certificate — our CA experts handle every step. Start your business journey the right way.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">Register Now →</Link>
            <a href="tel:+918000000000" className="btn-secondary">📞 Free Advisory</a>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="section-padding" aria-labelledby="process-heading">
        <div className="container-xl">
          <FadeUp className="text-center mb-14">
            <span className="badge-trust mb-4">The Process</span>
            <h2 id="process-heading" className="section-title">
              4-Step Incorporation <span className="gradient-text">Timeline</span>
            </h2>
          </FadeUp>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.12}>
                <div className="timeline-step pb-10">
                  {/* Left: number bubble */}
                  <div className="flex flex-col items-center flex-shrink-0 w-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-trust-600 to-navy-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-trust-900/40 z-10">
                      {step.n}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="flex-1 w-0.5 bg-gradient-to-b from-trust-700/60 to-transparent mt-2 min-h-[48px]" />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className="ml-5 card p-5 flex-1 mb-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{step.icon}</span>
                        <h3 className="font-display font-bold text-white">{step.title}</h3>
                      </div>
                      <span className="badge-trust text-[10px] flex-shrink-0">{step.time}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON CHART */}
      <section className="section-padding bg-slate-900/30" aria-labelledby="compare-heading">
        <div className="container-xl">
          <FadeUp className="text-center mb-12">
            <span className="badge-trust mb-4">Comparison</span>
            <h2 id="compare-heading" className="section-title">
              Which Business Structure is{' '}
              <span className="gradient-text">Right for You?</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-slate-800">
                <table className="w-full min-w-[640px] bg-slate-900/60" role="table" aria-label="Business structure comparison">
                <thead>
                  <tr className="bg-slate-800/80">
                    {compareData.headers.map((h, hi) => (
                      <th key={h} scope="col"
                        className={`compare-th px-5 py-4 text-left
                          ${hi === 0 ? 'text-slate-400' : hi === 1 ? 'text-trust-300' : 'text-white'}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareData.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? 'bg-slate-900/30' : 'bg-slate-900/10'}>
                      {row.map((cell, ci) => (
                        <td key={ci} className={`compare-td px-5 py-4 border-t border-slate-800
                          ${ci === 0 ? 'text-slate-300 font-medium' : 'text-center text-slate-400'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <h2 className="section-title">Start Your <span className="gradient-text">Business Today</span></h2>
              <p className="text-slate-400 mb-6">Get a free consultation and choose the right structure with expert CA guidance.</p>
            </FadeUp>
            <FadeUp delay={0.1}><LeadForm title="Company Registration Inquiry" compact /></FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
