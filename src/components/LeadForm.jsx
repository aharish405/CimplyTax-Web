import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  'Income Tax / ITR Filing', 'Tax Planning & Advisory', 'TDS Returns',
  'GST Registration', 'GST Return Filing', 'Private Limited Company',
  'LLP Registration', 'OPC Formation', 'Partnership Firm',
  'Personal Loan', 'Home Loan', 'Business Loan', 'Loan Against Property', 'Other',
];

const init = { name: '', phone: '', email: '', service: '', message: '' };

export default function LeadForm({ title = 'Talk to a CA Advisor', compact = false, bordered = true }) {
  const [form,    setForm]    = useState(init);
  const [errors,  setErrors]  = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.length < 2) e.name = 'Enter your full name.';
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.service) e.service = 'Please select a service.';
    return e;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
    setForm(init);
  };

  const wrapCls = bordered
    ? 'bg-white border border-slate-200 rounded-3xl p-8 lg:p-10'
    : 'bg-white rounded-3xl p-8 lg:p-10';

  return (
    <div className={wrapCls} style={{ boxShadow: bordered ? '0 4px 32px -4px rgb(0 0 0 / 0.10)' : 'none' }}>
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="s"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-10"
            role="alert"
            aria-live="polite"
          >
            <div className="w-20 h-20 rounded-full bg-teal-50 border-2 border-teal-200 flex items-center justify-center mx-auto mb-5">
              <svg className="w-10 h-10 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">We'll be in touch!</h3>
            <p className="text-slate-500 mb-8">Our CA expert will call you within 2 business hours.</p>
            <button onClick={() => setSuccess(false)} className="btn-outline text-sm">
              Submit Another Query
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="f"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            aria-label="Free consultation request form"
          >
            {title && (
              <>
                <h3 className="text-xl font-extrabold text-slate-900 mb-1">{title}</h3>
                <p className="text-slate-500 text-sm mb-7">
                  Free advisory · 100% confidential · No spam
                </p>
              </>
            )}

            {/* Name */}
            <div className="mb-4">
              <label htmlFor="lf-name" className="form-label">Full Name <span aria-hidden="true" className="text-red-400">*</span></label>
              <input id="lf-name" name="name" type="text" autoComplete="name" value={form.name}
                onChange={handleChange} placeholder="e.g. Ramesh Kumar" className="form-input"
                aria-required="true" aria-describedby={errors.name ? 'lf-name-err' : undefined} />
              {errors.name && <p id="lf-name-err" className="form-error" role="alert">{errors.name}</p>}
            </div>

            {/* Phone + Email */}
            <div className={`gap-4 mb-4 ${compact ? 'flex flex-col' : 'grid sm:grid-cols-2'}`}>
              <div>
                <label htmlFor="lf-phone" className="form-label">Mobile <span aria-hidden="true" className="text-red-400">*</span></label>
                <input id="lf-phone" name="phone" type="tel" autoComplete="tel" inputMode="numeric"
                  maxLength={10} value={form.phone} onChange={handleChange} placeholder="9876543210"
                  className="form-input" aria-required="true" aria-describedby={errors.phone ? 'lf-phone-err' : undefined} />
                {errors.phone && <p id="lf-phone-err" className="form-error" role="alert">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="lf-email" className="form-label">Email <span aria-hidden="true" className="text-red-400">*</span></label>
                <input id="lf-email" name="email" type="email" autoComplete="email" value={form.email}
                  onChange={handleChange} placeholder="you@example.com" className="form-input"
                  aria-required="true" aria-describedby={errors.email ? 'lf-email-err' : undefined} />
                {errors.email && <p id="lf-email-err" className="form-error" role="alert">{errors.email}</p>}
              </div>
            </div>

            {/* Service */}
            <div className="mb-4">
              <label htmlFor="lf-service" className="form-label">Service Required <span aria-hidden="true" className="text-red-400">*</span></label>
              <select id="lf-service" name="service" value={form.service} onChange={handleChange}
                className="form-input" aria-required="true" aria-describedby={errors.service ? 'lf-service-err' : undefined}>
                <option value="">— Select a service —</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <p id="lf-service-err" className="form-error" role="alert">{errors.service}</p>}
            </div>

            {/* Message */}
            {!compact && (
              <div className="mb-6">
                <label htmlFor="lf-msg" className="form-label">Additional Notes <span className="text-slate-400 font-normal">(optional)</span></label>
                <textarea id="lf-msg" name="message" rows={3} value={form.message} onChange={handleChange}
                  placeholder="Tell us about your specific requirement…" className="form-input resize-none" />
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-cta w-full justify-center mt-2"
              aria-label="Submit consultation request">
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Submitting…
                </>
              ) : 'Get My Free Consultation →'}
            </button>

            <p className="text-xs text-slate-400 text-center mt-4">
              🔒 Your data is 100% secure and private.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
