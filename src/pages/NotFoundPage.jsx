import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-3xl bg-brand-600 flex items-center justify-center mx-auto mb-8 shadow-brand">
            <span className="text-white font-extrabold text-2xl">CT</span>
          </div>
          <h1 className="text-8xl font-extrabold text-slate-900 mb-4">404</h1>
          <p className="text-2xl font-bold text-slate-700 mb-3">Page Not Found</p>
          <p className="text-slate-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className="btn-primary">← Back to Home</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
