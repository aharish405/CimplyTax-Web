import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import PageLoader from './components/PageLoader';

// Lazy-loaded pages for route-based code splitting
const HomePage         = lazy(() => import('./pages/HomePage'));
const IncomeTaxPage    = lazy(() => import('./pages/IncomeTaxPage'));
const GSTPage          = lazy(() => import('./pages/GSTPage'));
const IncorporationPage = lazy(() => import('./pages/IncorporationPage'));
const LoansPage        = lazy(() => import('./pages/LoansPage'));
const ContactPage      = lazy(() => import('./pages/ContactPage'));
const PricingPage      = lazy(() => import('./pages/PricingPage'));
const TaxCalculatorPage = lazy(() => import('./pages/TaxCalculatorPage'));
const NotFoundPage     = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />

              {/* Income Tax sub-routes */}
              <Route path="income-tax">
                <Route index element={<IncomeTaxPage />} />
                <Route path="itr-filing"       element={<IncomeTaxPage tab="itr" />} />
                <Route path="tax-planning"     element={<IncomeTaxPage tab="planning" />} />
                <Route path="tds-returns"      element={<IncomeTaxPage tab="tds" />} />
              </Route>

              {/* GST sub-routes */}
              <Route path="gst">
                <Route index element={<GSTPage />} />
                <Route path="registration"   element={<GSTPage tab="registration" />} />
                <Route path="filing"         element={<GSTPage tab="filing" />} />
                <Route path="advisory"       element={<GSTPage tab="advisory" />} />
              </Route>

              {/* Company Incorporation */}
              <Route path="company-incorporation">
                <Route index element={<IncorporationPage />} />
                <Route path="private-limited" element={<IncorporationPage type="pvt" />} />
                <Route path="llp"             element={<IncorporationPage type="llp" />} />
                <Route path="opc"             element={<IncorporationPage type="opc" />} />
                <Route path="partnership"     element={<IncorporationPage type="partnership" />} />
              </Route>

              {/* Loans sub-routes */}
              <Route path="loans">
                <Route index element={<LoansPage />} />
                <Route path="personal" element={<LoansPage tab="personal" />} />
                <Route path="home"     element={<LoansPage tab="home" />} />
                <Route path="business" element={<LoansPage tab="business" />} />
                <Route path="lap"      element={<LoansPage tab="lap" />} />
              </Route>

              <Route path="contact" element={<ContactPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="tax-calculator" element={<TaxCalculatorPage />} />
              <Route path="*"       element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
