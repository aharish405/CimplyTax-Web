import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  'Income Tax / ITR Filing',
  'Tax Planning & Advisory',
  'TDS Returns',
  'GST Registration',
  'GST Return Filing',
  'Private Limited Company',
  'LLP Registration',
  'OPC Formation',
  'Partnership Firm',
  'Personal Loan',
  'Home Loan',
  'Business Loan',
  'Loan Against Property',
  'Other',
];

const initialState = { name: '', phone: '', email: '', service: '', message: '' };

export default function LeadForm({ title = 'Get Free Consultation', compact = false }) {
  const [form,    setForm]    = useState(initialState);
  const [errors,  setErrors]  = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()        || form.name.length < 2) e.name = 'Please enter your full name.';
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.service)             e.service = 'Please select a service.';
    return e;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
    setForm(initialState);
  };

  return (
    <div className={`card ${compact ? 'p-6' : 'p-8'}`}>
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
            role="alert"
            aria-live="polite"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-900/40 border border-emerald-700/50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-display">We'll be in touch!</h3>
            <p className="text-slate-400 text-sm mb-6">Our expert will call you within 2 business hours.</p>
            <button
              onClick={() => setSuccess(false)}
              className="btn-secondary text-xs"
              aria-label="Submit another query"
            >
              Submit Another Query
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            aria-label="Lead capture form"
          >
            {title && (
              <h3 className="font-display font-bold text-lg text-white mb-1">{title}</h3>
            )}
            <p className="text-slate-400 text-sm mb-6">Free advisory · No spam · 100% confidential</p>

            {/* Name */}
            <div className="mb-4">
              <label htmlFor="lead-name" className="form-label">Full Name *</label>
              <input
                id="lead-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ramesh Kumar"
                className="form-input"
                aria-required="true"
                aria-describedby={errors.name ? 'lead-name-err' : undefined}
              />
              {errors.name && <p id="lead-name-err" className="form-error" role="alert">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="lead-phone" className="form-label">Mobile Number *</label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                maxLength={10}
                value={form.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="form-input"
                aria-required="true"
                aria-describedby={errors.phone ? 'lead-phone-err' : undefined}
              />
              {errors.phone && <p id="lead-phone-err" className="form-error" role="alert">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="lead-email" className="form-label">Email Address *</label>
              <input
                id="lead-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ramesh@example.com"
                className="form-input"
                aria-required="true"
                aria-describedby={errors.email ? 'lead-email-err' : undefined}
              />
              {errors.email && <p id="lead-email-err" className="form-error" role="alert">{errors.email}</p>}
            </div>

            {/* Service */}
            <div className="mb-4">
              <label htmlFor="lead-service" className="form-label">Service Required *</label>
              <select
                id="lead-service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="form-input"
                aria-required="true"
                aria-describedby={errors.service ? 'lead-service-err' : undefined}
              >
                <option value="">-- Select a service --</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <p id="lead-service-err" className="form-error" role="alert">{errors.service}</p>}
            </div>

            {/* Message (optional) */}
            {!compact && (
              <div className="mb-6">
                <label htmlFor="lead-message" className="form-label">Additional Notes (optional)</label>
                <textarea
                  id="lead-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirement…"
                  className="form-input resize-none"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center"
              aria-label="Submit consultation request"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Submitting…
                </>
              ) : (
                'Get Free Consultation →'
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
