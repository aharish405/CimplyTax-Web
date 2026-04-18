import { Link } from 'react-router-dom';

const cols = [
  {
    title: 'Tax Services',
    links: [
      { label: 'ITR Filing',          href: '/income-tax/itr-filing' },
      { label: 'Tax Planning',        href: '/income-tax/tax-planning' },
      { label: 'TDS Returns',         href: '/income-tax/tds-returns' },
      { label: 'GST Registration',    href: '/gst/registration' },
      { label: 'GST Return Filing',   href: '/gst/filing' },
      { label: 'GST Advisory',        href: '/gst/advisory' },
    ],
  },
  {
    title: 'Business Services',
    links: [
      { label: 'Private Limited Co.', href: '/company-incorporation/private-limited' },
      { label: 'LLP Registration',    href: '/company-incorporation/llp' },
      { label: 'OPC Formation',       href: '/company-incorporation/opc' },
      { label: 'Partnership Firm',    href: '/company-incorporation/partnership' },
      { label: 'MSME / Udyam',        href: '/company-incorporation' },
      { label: 'Trademark Filing',    href: '/company-incorporation' },
    ],
  },
  {
    title: 'Loans',
    links: [
      { label: 'Personal Loan',             href: '/loans/personal' },
      { label: 'Home Loan',                 href: '/loans/home' },
      { label: 'Business Loan',             href: '/loans/business' },
      { label: 'Loan Against Property',     href: '/loans/lap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About CimplyTax',    href: '/' },
      { label: 'Contact Us',         href: '/contact' },
      { label: 'Careers',            href: '/' },
      { label: 'Privacy Policy',     href: '/' },
      { label: 'Terms of Service',   href: '/' },
      { label: 'Disclaimer',         href: '/' },
    ],
  },
];

const socials = [
  {
    name: 'WhatsApp', href: 'https://wa.me/918000000000',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.845L.057 23.486a.5.5 0 00.638.611l5.783-1.515A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.016-1.37l-.36-.214-3.732.979.996-3.638-.236-.375A9.818 9.818 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z" /></svg>,
  },
  {
    name: 'LinkedIn', href: '#',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>,
  },
  {
    name: 'Instagram', href: '#',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
  },
  {
    name: 'Twitter / X', href: '#',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      {/* CTA strip */}
      <div className="border-b border-slate-800">
        <div className="container-xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-extrabold text-xl mb-1">Ready to simplify your finances?</p>
            <p className="text-slate-400 text-sm">Get a free consultation from our CA experts today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm transition-colors shadow-lg"
              aria-label="Chat on WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.845L.057 23.486a.5.5 0 00.638.611l5.783-1.515A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.016-1.37l-.36-.214-3.732.979.996-3.638-.236-.375A9.818 9.818 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z" /></svg>
              WhatsApp Us
            </a>
            <a href="tel:+918000000000"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-200 hover:bg-slate-800 font-semibold text-sm transition-colors"
              aria-label="Call CimplyTax">
              📞 +91-80000-00000
            </a>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">CT</span>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Cimply<span className="text-brand-400">Tax</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              India's trusted CA-led platform for Tax, GST, and Business compliance since 2015.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={`CimplyTax on ${s.name}`}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-400 hover:text-white flex items-center justify-center transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((lnk) => (
                  <li key={lnk.label}>
                    <Link to={lnk.href} className="text-slate-400 hover:text-slate-200 text-sm transition-colors">
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} CimplyTax. All rights reserved. | Registered eRI | CIN: U74900MH2015PTC123456
          </p>
          <p className="text-slate-600 text-xs hidden lg:block">
            Income Tax Return Filing · GST Services · Company Registration · Loan Advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
