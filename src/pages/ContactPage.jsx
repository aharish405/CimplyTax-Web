import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact Us — Free Tax & GST Consultation" description="Reach CimplyTax experts for ITR, GST, Company Registration, and Loan advisory. Call, WhatsApp, or fill the form for a free consultation." canonical="/contact" />

      <section className="relative bg-white overflow-hidden py-20 lg:py-28 min-h-[90vh]">
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-80 pointer-events-none" />
        <div className="relative container-xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <span className="eyebrow">Contact Us</span>
            <h1 className="text-5xl font-extrabold text-slate-900 mt-4 mb-4">
              Talk to Our <span className="gradient-brand">CA Experts</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">Free consultation · Same-day response · No spam, ever</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <div className="space-y-4 mb-10">
                {[
                  { icon: '📞', label: 'Phone / WhatsApp', value: '+91-8000-000-000', href: 'tel:+918000000000' },
                  { icon: '📧', label: 'Email',            value: 'hello@cimplytax.com', href: 'mailto:hello@cimplytax.com' },
                  { icon: '📍', label: 'Office Address',   value: '404, Business Hub, Andheri East, Mumbai – 400093' },
                  { icon: '🕐', label: 'Working Hours',    value: 'Monday – Saturday, 9:00 AM – 7:00 PM IST' },
                ].map((c) => (
                  <div key={c.label} className="card p-5 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-xl flex-shrink-0">{c.icon}</div>
                    <div>
                      <p className="text-slate-500 text-xs font-medium mb-0.5">{c.label}</p>
                      {c.href
                        ? <a href={c.href} className="text-brand-600 font-bold hover:underline">{c.value}</a>
                        : <p className="text-slate-800 font-medium text-sm">{c.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <LeadForm title="Send Us a Message" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
