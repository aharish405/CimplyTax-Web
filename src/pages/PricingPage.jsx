import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const categories = [
  {
    id: 'tax',
    icon: '📋',
    iconBg: 'bg-brand-50 text-brand-600',
    label: 'Income Tax',
    href: '/income-tax',
    tagline: 'CA-reviewed ITR filing for every taxpayer profile',
    plans: [
      {
        name: 'Basic',
        price: '₹499',
        period: 'per filing',
        featured: false,
        desc: 'Salaried individuals with simple income',
        features: [
          { t: 'Salary income (ITR-1)',                ok: true  },
          { t: 'House Property income',                ok: true  },
          { t: 'Other sources (FD interest, etc.)',    ok: true  },
          { t: 'Capital Gains (Equity / MF)',          ok: false },
          { t: 'Business / Freelance / F&O income',   ok: false },
          { t: 'Foreign income / NRI filing',         ok: false },
          { t: 'Tax Planning Advisory',               ok: false },
          { t: 'CA review & digital signature',       ok: true  },
          { t: 'Priority support',                    ok: false },
          { t: 'Post-filing notice handling',         ok: false },
        ],
      },
      {
        name: 'Deluxe',
        price: '₹1,499',
        period: 'per filing',
        featured: true,
        badge: 'Most Popular',
        desc: 'Investors with capital gains & multiple income sources',
        features: [
          { t: 'Salary income (ITR-1 / ITR-2)',       ok: true },
          { t: 'House Property income',               ok: true },
          { t: 'Other sources (FD interest, etc.)',   ok: true },
          { t: 'Capital Gains (Equity / MF)',         ok: true },
          { t: 'Business / Freelance / F&O income',  ok: false },
          { t: 'Foreign income / NRI filing',        ok: false },
          { t: 'Tax Planning Advisory',              ok: true  },
          { t: 'CA review & digital signature',      ok: true  },
          { t: 'Priority support',                   ok: false },
          { t: 'Post-filing notice handling',        ok: true  },
        ],
      },
      {
        name: 'Premier',
        price: '₹3,999',
        period: 'per filing',
        featured: false,
        badge: 'Complete',
        desc: 'Business owners, NRIs & complex income scenarios',
        features: [
          { t: 'Salary income (all ITR types)',       ok: true },
          { t: 'House Property income',               ok: true },
          { t: 'Other sources (FD interest, etc.)',   ok: true },
          { t: 'Capital Gains (Equity / MF)',         ok: true },
          { t: 'Business / Freelance / F&O income',  ok: true },
          { t: 'Foreign income / NRI filing',        ok: true },
          { t: 'Tax Planning Advisory',              ok: true  },
          { t: 'CA review & digital signature',      ok: true  },
          { t: 'Priority support',                   ok: true  },
          { t: 'Post-filing notice handling',        ok: true  },
        ],
      },
    ],
  },
  {
    id: 'gst',
    icon: '🏛️',
    iconBg: 'bg-teal-50 text-teal-600',
    label: 'GST Services',
    href: '/gst',
    tagline: 'Authorized GST Practitioner — registration to annual audit',
    plans: [
      {
        name: 'Registration',
        price: '₹999',
        period: 'one-time',
        featured: false,
        desc: 'Get your GSTIN in 3–7 working days',
        features: [
          { t: 'GSTIN registration',                  ok: true  },
          { t: 'Document preparation & filing',       ok: true  },
          { t: 'GSTR-1 return filing',               ok: false },
          { t: 'GSTR-3B return filing',              ok: false },
          { t: 'Input credit reconciliation',        ok: false },
          { t: 'Annual GSTR-9 / 9C audit',           ok: false },
        ],
      },
      {
        name: 'Monthly Filing',
        price: '₹499',
        period: 'per month',
        featured: true,
        badge: 'Best Value',
        desc: 'Ongoing compliance — GSTR-1 & GSTR-3B every month',
        features: [
          { t: 'GSTIN registration',                  ok: false },
          { t: 'Document preparation & filing',       ok: true  },
          { t: 'GSTR-1 return filing',               ok: true  },
          { t: 'GSTR-3B return filing',              ok: true  },
          { t: 'Input credit reconciliation',        ok: true  },
          { t: 'Annual GSTR-9 / 9C audit',           ok: false },
        ],
      },
      {
        name: 'Annual Audit',
        price: '₹4,999',
        period: 'per year',
        featured: false,
        badge: 'Compliance',
        desc: 'Full GSTR-9 audit and vendor reconciliation',
        features: [
          { t: 'GSTIN registration',                  ok: false },
          { t: 'Document preparation & filing',       ok: true  },
          { t: 'GSTR-1 return filing',               ok: true  },
          { t: 'GSTR-3B return filing',              ok: true  },
          { t: 'Input credit reconciliation',        ok: true  },
          { t: 'Annual GSTR-9 / 9C audit',           ok: true  },
        ],
      },
    ],
  },
  {
    id: 'incorporation',
    icon: '🏢',
    iconBg: 'bg-violet-50 text-violet-600',
    label: 'Company Registration',
    href: '/company-incorporation',
    tagline: 'Incorporate in 7 days — complete DSC, DIN, PAN & TAN support',
    plans: [
      {
        name: 'Partnership Firm',
        price: '₹2,999',
        period: 'one-time',
        featured: false,
        desc: 'Ideal for small businesses & traders',
        features: [
          { t: 'Partnership deed drafting',           ok: true  },
          { t: 'GST registration assistance',         ok: true  },
          { t: 'DSC for directors',                   ok: false },
          { t: 'MCA SPICe+ filing',                  ok: false },
          { t: 'PAN & TAN registration',             ok: true  },
          { t: 'MOA & AOA drafting',                 ok: false },
          { t: 'Compliance calendar',                ok: false },
        ],
      },
      {
        name: 'LLP',
        price: '₹5,999',
        period: 'one-time',
        featured: false,
        desc: 'For professionals and service firms',
        features: [
          { t: 'Partnership deed drafting',           ok: true  },
          { t: 'GST registration assistance',         ok: true  },
          { t: 'DSC for directors',                   ok: true  },
          { t: 'MCA SPICe+ filing',                  ok: true  },
          { t: 'PAN & TAN registration',             ok: true  },
          { t: 'MOA & AOA drafting',                 ok: false },
          { t: 'Compliance calendar',                ok: true  },
        ],
      },
      {
        name: 'Private Limited',
        price: '₹6,999',
        period: 'one-time',
        featured: true,
        badge: 'Most Popular',
        desc: 'Best for startups, FDI & investor-funded companies',
        features: [
          { t: 'Partnership deed drafting',           ok: false },
          { t: 'GST registration assistance',         ok: true  },
          { t: 'DSC for directors',                   ok: true  },
          { t: 'MCA SPICe+ filing',                  ok: true  },
          { t: 'PAN & TAN registration',             ok: true  },
          { t: 'MOA & AOA drafting',                 ok: true  },
          { t: 'Compliance calendar',                ok: true  },
        ],
      },
    ],
  },
  {
    id: 'loans',
    icon: '💰',
    iconBg: 'bg-emerald-50 text-emerald-600',
    label: 'Loan Advisory',
    href: '/loans',
    tagline: 'Compare 50+ lenders — best rates, minimal paperwork',
    plans: [
      {
        name: 'Personal Loan',
        price: 'Free',
        period: 'advisory',
        featured: false,
        desc: 'Get funds for any personal need within 48 hours',
        features: [
          { t: 'Loan amount up to ₹50 Lakh',         ok: true  },
          { t: 'Interest rates from 10.5% p.a.',     ok: true  },
          { t: 'Tenure up to 60 months',             ok: true  },
          { t: 'No collateral required',             ok: true  },
          { t: 'Dedicated loan manager',             ok: false },
          { t: 'Balance transfer advisory',          ok: false },
        ],
      },
      {
        name: 'Home / Business Loan',
        price: 'Free',
        period: 'advisory',
        featured: true,
        badge: 'Best Rates',
        desc: 'Home from 8.5% · Business loans up to ₹5 Cr',
        features: [
          { t: 'Loan amount up to ₹10 Crore',        ok: true  },
          { t: 'Interest rates from 8.5% p.a.',      ok: true  },
          { t: 'Tenure up to 30 years',              ok: true  },
          { t: 'No collateral required',             ok: false },
          { t: 'Dedicated loan manager',             ok: true  },
          { t: 'Balance transfer advisory',          ok: true  },
        ],
      },
      {
        name: 'Loan Against Property',
        price: 'Free',
        period: 'advisory',
        featured: false,
        desc: 'Unlock your property value — up to ₹20 Crore',
        features: [
          { t: 'Loan amount up to ₹20 Crore',        ok: true  },
          { t: 'Interest rates from 9% p.a.',        ok: true  },
          { t: 'Tenure up to 15 years',              ok: true  },
          { t: 'LTV up to 70%',                      ok: true  },
          { t: 'Dedicated loan manager',             ok: true  },
          { t: 'Balance transfer advisory',          ok: true  },
        ],
      },
    ],
  },
];

const Tick = ({ ok, featured }) => ok ? (
  <svg className={`w-4 h-4 flex-shrink-0 ${featured ? 'text-teal-300' : 'text-teal-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
) : (
  <svg className={`w-4 h-4 flex-shrink-0 ${featured ? 'text-white/25' : 'text-slate-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function PlanCard({ plan, featured, accentBorder }) {
  return (
    <div className={`relative flex flex-col h-full rounded-xl border-2 transition-all duration-200
      ${featured
        ? `${accentBorder} bg-brand-600`
        : 'border-slate-200 bg-white hover:border-brand-300 hover:shadow-md'
      }`}
      style={featured ? { boxShadow: '0 4px 20px -4px rgb(37 99 235 / 0.4)' } : { boxShadow: '0 1px 4px 0 rgb(0 0 0 / 0.05)' }}>

      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-bold shadow
            ${featured ? 'bg-amber-400 text-amber-900' : 'bg-brand-100 text-brand-700'}`}>
            {plan.badge}
          </span>
        </div>
      )}

      <div className="p-7 flex-1">
        <h3 className={`font-extrabold text-xl mb-1 ${featured ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
        <p className={`text-xs mb-5 ${featured ? 'text-brand-200' : 'text-slate-500'}`}>{plan.desc}</p>

        <div className="flex items-baseline gap-1.5 mb-7">
          <span className={`text-4xl font-extrabold ${featured ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
          <span className={`text-sm ${featured ? 'text-brand-200' : 'text-slate-400'}`}>{plan.period}</span>
        </div>

        <ul className="space-y-2.5">
          {plan.features.map((f) => (
            <li key={f.t} className="flex items-center gap-2.5 text-sm">
              <Tick ok={f.ok} featured={featured} />
              <span className={
                f.ok
                  ? (featured ? 'text-white' : 'text-slate-700')
                  : (featured ? 'text-white/35' : 'text-slate-300')
              }>{f.t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-7 pb-7">
        <Link to="/contact"
          className={`flex items-center justify-center w-full px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200
            ${featured
              ? 'bg-white text-brand-700 hover:bg-brand-50'
              : 'bg-brand-600 text-white hover:bg-brand-700'
            }`}>
          Get Started →
        </Link>
      </div>
    </div>
  );
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Plans & Pricing — CimplyTax',
  description: 'Transparent pricing for Income Tax, GST, Company Registration and Loan services by CimplyTax CA experts.',
};

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Plans & Pricing — Tax, GST & Business Services"
        description="Transparent, affordable pricing for ITR filing, GST compliance, company registration and loan advisory. CA-reviewed services starting from ₹499. No hidden fees."
        canonical="/pricing"
        schema={schema}
      />

      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden py-16 lg:py-20" aria-label="Pricing page header">
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-50 rounded-full blur-3xl opacity-80 pointer-events-none" />
        <div className="relative container-xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="eyebrow">Plans & Pricing</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mt-4 mb-5 text-balance">
            Simple, Transparent{' '}
            <span className="gradient-brand">Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="body-lg max-w-2xl mx-auto mb-10">
            No hidden charges. No surprises. Every plan is CA-reviewed and includes all government filing fees unless stated otherwise.
          </motion.p>
          {/* Quick jumps */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2.5 justify-center">
            {categories.map((c) => (
              <a key={c.id} href={`#${c.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-brand-300 hover:text-brand-700 transition-all">
                <span>{c.icon}</span> {c.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING SECTIONS ── */}
      {categories.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section-pad ${ci % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
          aria-labelledby={`heading-${cat.id}`}>
          <div className="container-xl px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <FadeUp className="max-w-2xl mb-12">
              <div className={`w-11 h-11 rounded-lg ${cat.iconBg} flex items-center justify-center text-xl mb-4`}>
                {cat.icon}
              </div>
              <h2 id={`heading-${cat.id}`} className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                {cat.label}
              </h2>
              <p className="text-slate-500">{cat.tagline}</p>
              <div className="mt-3">
                <Link to={cat.href} className="text-sm text-brand-600 font-semibold hover:underline">
                  View detailed service page →
                </Link>
              </div>
            </FadeUp>

            {/* Plan cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.plans.map((plan, pi) => (
                <FadeUp key={plan.name} delay={pi * 0.08}>
                  <PlanCard
                    plan={plan}
                    featured={plan.featured}
                    accentBorder="border-brand-600"
                  />
                </FadeUp>
              ))}
            </div>

            {/* Note strip */}
            <FadeUp delay={0.2} className="mt-6">
              <p className="text-xs text-slate-400 text-center">
                * Prices exclude 18% GST. Government fees (stamp duty, MCA filing charges) billed at actuals.
                {cat.id === 'loans' && ' Loan advisory is completely free — we earn a referral from lenders.'}
              </p>
            </FadeUp>
          </div>
        </section>
      ))}

      {/* ── TRUST STRIP ── */}
      <section className="bg-brand-600 py-14" aria-label="Trust and guarantees">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-white mb-2">Every Plan Includes</h2>
            <p className="text-brand-200 text-sm">Regardless of which plan you choose, you always get:</p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🎓', title: 'CA-Reviewed Work',      desc: 'Every filing is reviewed and approved by a registered CA.' },
              { icon: '🔒', title: 'Secure Document Vault', desc: '256-bit encryption. Documents handled with full confidentiality.' },
              { icon: '⚡', title: 'Fast Turnaround',       desc: 'Most services completed within 24–48 business hours.' },
              { icon: '💬', title: 'WhatsApp Support',      desc: 'Reach your CA via WhatsApp or phone during working hours.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-2xl mb-3" aria-hidden="true">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-brand-200 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section className="section-pad bg-slate-50" aria-label="Get a custom quote">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <span className="eyebrow">Custom Quote</span>
              <h2 className="h-section mb-5 mt-3">
                Need a <span className="gradient-brand">Custom Plan?</span>
              </h2>
              <p className="body-lg mb-8">
                Not sure which plan fits? Our CA advisors will review your situation and suggest the most cost-effective solution — at no charge.
              </p>
              <ul className="space-y-3">
                {[
                  'Free 15-min CA consultation',
                  'Custom bundles available (Tax + GST + Incorporation)',
                  'Retainer plans for businesses (call for pricing)',
                  'No commitment required',
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
            <FadeUp delay={0.1}>
              <LeadForm title="Get a Custom Quote" compact />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
