import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — Page Not Found" description="This page doesn't exist." noIndex />
      <section className="min-h-screen flex items-center justify-center px-4 bg-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-8xl font-bold font-display gradient-text mb-4">404</div>
          <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-slate-400 mb-8 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary" aria-label="Return to CimplyTax homepage">
            ← Back to Home
          </Link>
        </motion.div>
      </section>
    </>
  );
}
