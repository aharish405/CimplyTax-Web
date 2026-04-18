import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 10000, suffix: '+', label: 'Clients Served', icon: '👥' },
  { value: 15,    suffix: '+', label: 'Years Experience', icon: '🏆' },
  { value: 50,    suffix: '+', label: 'CA Experts',       icon: '🎓' },
  { value: 99,    suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
];

const certs = [
  { name: 'Registered eRI',        sub: 'Income Tax Dept.' },
  { name: 'GST Practitioner',      sub: 'GSTN Approved' },
  { name: 'ISO 9001:2015',         sub: 'Quality Certified' },
  { name: 'MCA Registered',        sub: 'Govt. of India' },
];

function Counter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-slate-800"
      aria-label="Trust indicators and statistics"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative container-xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="trust-stat"
            >
              <span className="text-3xl mb-2" role="img" aria-label={s.label}>{s.icon}</span>
              <span className="text-3xl sm:text-4xl font-bold font-display gradient-text">
                <Counter target={s.value} suffix={s.suffix} />
              </span>
              <span className="text-slate-400 text-sm mt-1">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Certification bar */}
        <div className="divider mb-8" />
        <p className="text-center text-slate-500 text-xs uppercase tracking-widest mb-6 font-semibold">
          Certifications & Authorizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-800/50 border border-slate-700"
            >
              <div className="w-8 h-8 rounded-lg bg-trust-900/60 border border-trust-700/40 flex items-center justify-center">
                <svg className="w-4 h-4 text-trust-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white text-xs font-semibold">{c.name}</p>
                <p className="text-slate-500 text-xs">{c.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
