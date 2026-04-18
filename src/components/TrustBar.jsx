import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 10000, suffix: '+', label: 'Clients Served',      icon: '👥', color: 'bg-brand-50 text-brand-600' },
  { value: 15,    suffix: '+', label: 'Years Experience',     icon: '🏆', color: 'bg-amber-50 text-amber-600' },
  { value: 50,    suffix: '+', label: 'CA & Legal Experts',   icon: '🎓', color: 'bg-violet-50 text-violet-600' },
  { value: 99,    suffix: '%', label: 'Client Satisfaction',  icon: '⭐', color: 'bg-teal-50 text-teal-600' },
];

const certs = [
  { label: 'Registered eRI',     sub: 'Income Tax Dept.', icon: '✅' },
  { label: 'GST Practitioner',   sub: 'GSTN Approved',    icon: '🏛️' },
  { label: 'ISO 9001:2015',      sub: 'Quality Certified',icon: '🏅' },
  { label: 'MCA Registered',     sub: 'Govt. of India',   icon: '🇮🇳' },
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

  return <span ref={ref} className="tabular-nums">{count.toLocaleString('en-IN')}{suffix}</span>;
}

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="bg-white border-y border-slate-100 py-16" aria-label="Our achievements">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center text-2xl mx-auto mb-3`}
                role="img" aria-label={s.label}>
                {s.icon}
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-slate-500 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Cert strip */}
        <div className="border-t border-slate-100 pt-10">
          <p className="text-center text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Certifications & Authorizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {certs.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl"
              >
                <span className="text-lg" aria-hidden="true">{c.icon}</span>
                <div>
                  <p className="text-slate-800 text-xs font-semibold">{c.label}</p>
                  <p className="text-slate-400 text-xs">{c.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
