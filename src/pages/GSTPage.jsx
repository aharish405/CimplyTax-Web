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
  { icon: '📝', title: 'GST Registration', desc: 'Get your GSTIN within 3-7 working days.', from: '₹999' },
  { icon: '📊', title: 'GST Return Filing', desc: 'GSTR-1, 3B, 9, 9C — all covered.', from: '₹499/month' },
  { icon: '💡', title: 'GST Advisory',      desc: 'Strategic advice to minimize GST liability.', from: '₹2,499' },
  { icon: '🔍', title: 'GST Audit',         desc: 'Annual GST audit & reconciliation.', from: '₹4,999' },
];

export default function GSTPage() {
  return (
    <>
      <SEO title="GST Registration & Filing Services India" description="CimplyTax offers expert GST registration, GSTR filing, reconciliation, and advisory for all businesses. Authorized GSTP. Prices from ₹499." canonical="/gst" />

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="badge-trust mb-4 inline-flex">GST Services</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold font-display text-white mb-5 mt-2">
            Expert <span className="gradient-text">GST Services</span> for Every Business
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg mb-8 max-w-2xl">
            From registration to monthly filing and annual audits — our GST practitioners keep you compliant and penalty-free.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">Register for GST →</Link>
            <a href="tel:+918000000000" className="btn-secondary">📞 GST Consultation</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <FadeUp className="text-center mb-12">
            <h2 className="section-title">Our GST Services</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gstServices.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.1}>
                <div className="card p-6 flex flex-col h-full">
                  <span className="text-3xl mb-4">{s.icon}</span>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm flex-1 mb-4">{s.desc}</p>
                  <p className="text-trust-400 font-semibold text-sm">From {s.from}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900/30">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeUp>
              <h2 className="section-title">Get a <span className="gradient-text">GST Expert</span> Now</h2>
              <p className="text-slate-400 mb-6">Fill in your details and we'll assign a GSTP to your case immediately.</p>
            </FadeUp>
            <FadeUp delay={0.1}><LeadForm title="GST Service Inquiry" compact /></FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
