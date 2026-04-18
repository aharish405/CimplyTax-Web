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

const gstServices = [
  { icon: '📝', iconBg: 'bg-brand-50 text-brand-600', title: 'GST Registration', desc: 'Get GSTIN within 3–7 working days with complete documentation support.', from: '₹999' },
  { icon: '📊', iconBg: 'bg-teal-50 text-teal-600',  title: 'GST Return Filing', desc: 'GSTR-1, 3B, 9, 9C — accurate filing every month with ITC reconciliation.', from: '₹499/month' },
  { icon: '💡', iconBg: 'bg-amber-50 text-amber-600', title: 'GST Advisory',  desc: 'Strategic input credit planning to minimize your GST outgo legally.', from: '₹2,499' },
  { icon: '🔍', iconBg: 'bg-violet-50 text-violet-600', title: 'GST Audit', desc: 'Annual GSTR-9 / 9C audit and vendor reconciliation for penalty-free compliance.', from: '₹4,999' },
];

export default function GSTPage() {
  return (
    <>
      <SEO title="GST Registration & Filing Services India" description="CimplyTax offers expert GST registration, GSTR filing, reconciliation, and advisory for all businesses. Authorized GSTP. From ₹499." canonical="/gst" />

      <section className="relative bg-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-80 pointer-events-none" />
        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                <span className="eyebrow">GST Services</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4 mb-5 leading-tight text-balance">
                Expert GST for <span className="gradient-brand">Every Business</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                className="body-lg mb-8 max-w-lg">
                Authorized GST Practitioners handling registration, monthly filing, input credit reconciliation and advisory — so you stay fully compliant.
              </motion.p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Register for GST →</Link>
                <a href="tel:+918000000000" className="btn-outline">📞 GST Consultation</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-xl overflow-hidden shadow-lg" style={{ boxShadow: '0 12px 40px -8px rgb(13 148 136 / 0.12)' }}>
                <img src="/images/gst-office.png" alt="Indian professional filing GST compliance on laptop in modern office"
                  className="w-full h-[440px] object-cover" width={580} height={440} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="section-header-center">
            <span className="eyebrow">What We Offer</span>
            <h2 className="h-section mb-4">Our GST Services</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gstServices.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08}>
                <div className="card p-7 flex flex-col h-full">
                  <div className={`feature-icon ${s.iconBg} mb-5`}>{s.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm flex-1 mb-4 leading-relaxed">{s.desc}</p>
                  <p className="text-brand-600 font-bold text-sm">From {s.from}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <span className="eyebrow">Get Started</span>
              <h2 className="h-section mb-5 mt-3">Get a <span className="gradient-brand">GST Expert</span> Today</h2>
              <p className="body-lg mb-6">Fill in your details and we'll assign an authorized GST Practitioner to your case immediately.</p>
            </FadeUp>
            <FadeUp><LeadForm title="GST Service Inquiry" compact /></FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
