import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact Us — Free Tax & GST Consultation" description="Reach CimplyTax for Income Tax, GST, Company Registration, and Loan advisory. Call, WhatsApp, or fill the form for a free consultation." canonical="/contact" />

      <section className="relative overflow-hidden py-20 lg:py-28 min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <span className="badge-trust mb-4">Contact Us</span>
            <h1 className="section-title mt-4">Get in Touch with Our <span className="gradient-text">Experts</span></h1>
            <p className="section-sub mx-auto">Free consultation · Same-day response · No spam</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <div className="space-y-6 mb-8">
                {[
                  { icon: '📞', label: 'Phone / WhatsApp', value: '+91-8000-000-000', href: 'tel:+918000000000' },
                  { icon: '📧', label: 'Email',            value: 'hello@cimplytax.com', href: 'mailto:hello@cimplytax.com' },
                  { icon: '📍', label: 'Office',           value: '404, Business Hub, Andheri East, Mumbai – 400093' },
                ].map((c) => (
                  <div key={c.label} className="card p-5 flex gap-4 items-start">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p className="text-slate-400 text-xs mb-0.5">{c.label}</p>
                      {c.href
                        ? <a href={c.href} className="text-trust-300 font-semibold hover:underline">{c.value}</a>
                        : <p className="text-white font-medium">{c.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm">Office hours: Mon–Sat, 9 AM – 7 PM IST</p>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <LeadForm title="Send Us a Message" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
