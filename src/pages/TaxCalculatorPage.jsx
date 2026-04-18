import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Income Tax Calculator India',
  applicationCategory: 'Utility',
  operatingSystem: 'All',
  description: 'Calculate Indian Income Tax under the Old and New Tax Regimes for FY 2024-25.',
};

export default function TaxCalculatorPage() {
  const [grossIncome, setGrossIncome] = useState(1200000);
  const [deductions80C, setDeductions80C] = useState(150000);
  const [hraExemption, setHraExemption] = useState(0);
  const [otherDeductions, setOtherDeductions] = useState(0);

  // Standard deduction is 50k for salaried individuals in both regimes now.
  const standardDeduction = 50000;

  const calculateTax = (income, regime) => {
    let taxable = income;
    
    // Deductions
    if (regime === 'old') {
      taxable -= (standardDeduction + deductions80C + hraExemption + otherDeductions);
    } else {
      // New regime allows standard deduction (FY 2023-24 onwards)
      taxable -= standardDeduction;
    }

    if (taxable <= 0) return { tax: 0, taxable: 0, rebate: 0, cess: 0, total: 0 };

    let tax = 0;
    
    if (regime === 'old') {
      if (taxable > 250000) tax += Math.min(250000, taxable - 250000) * 0.05;
      if (taxable > 500000) tax += Math.min(500000, taxable - 500000) * 0.20;
      if (taxable > 1000000) tax += (taxable - 1000000) * 0.30;
      
      // 87A Rebate for old regime (up to 5 Lakhs)
      if (taxable <= 500000) return { tax: 0, taxable, rebate: tax, cess: 0, total: 0 };

    } else {
      // New Regime Slabs
      if (taxable > 300000) tax += Math.min(300000, taxable - 300000) * 0.05;
      if (taxable > 600000) tax += Math.min(300000, taxable - 600000) * 0.10;
      if (taxable > 900000) tax += Math.min(300000, taxable - 900000) * 0.15;
      if (taxable > 1200000) tax += Math.min(300000, taxable - 1200000) * 0.20;
      if (taxable > 1500000) tax += (taxable - 1500000) * 0.30;
      
      // 87A Rebate for new regime (up to 7 Lakhs)
      if (taxable <= 700000) return { tax: 0, taxable, rebate: tax, cess: 0, total: 0 };
    }

    const cess = tax * 0.04; // 4% Health & Education Cess
    return { tax, taxable, rebate: 0, cess, total: tax + cess };
  };

  const oldRegime = useMemo(() => calculateTax(grossIncome, 'old'), [grossIncome, deductions80C, hraExemption, otherDeductions]);
  const newRegime = useMemo(() => calculateTax(grossIncome, 'new'), [grossIncome]);

  const recommended = oldRegime.total < newRegime.total ? 'Old Regime' : 'New Regime';
  const savings = Math.abs(oldRegime.total - newRegime.total);

  return (
    <>
      <SEO 
        title="Income Tax Calculator FY 2024-25 — CimplyTax" 
        description="Free Indian Income Tax calculator. Compare Old vs New Tax Regime, view tax slabs, and instantly find out how much tax you can save."
        canonical="/tax-calculator"
        schema={schema}
      />

      <section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
        <div className="relative container-xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <span className="eyebrow">Free Resource</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4">
              Income Tax <span className="gradient-brand">Calculator</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Compare your tax liability under the Old and New tax regimes for FY 2024-25 (AY 2025-26). Find out which regime saves you the most money.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Input Form */}
            <div className="lg:col-span-5">
              <div className="card p-6 sm:p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center text-sm">1</span>
                  Income & Deductions
                </h2>
                
                <div className="space-y-5">
                  <div>
                    <label className="form-label" htmlFor="grossIncome">Gross Annual Income (₹)</label>
                    <input 
                      id="grossIncome"
                      type="number" 
                      className="form-input text-lg font-bold"
                      value={grossIncome || ''} 
                      onChange={(e) => setGrossIncome(Number(e.target.value))}
                    />
                  </div>
                  
                  <div className="divider" />

                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-3">Deductions (Only applicable for Old Regime)</p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1" htmlFor="sec80c">Sec 80C (PPF, ELSS, EPF, LIC)</label>
                        <input 
                          id="sec80c"
                          type="number" 
                          className="form-input"
                          value={deductions80C || ''} 
                          onChange={(e) => setDeductions80C(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1" htmlFor="hra">HRA Exemption</label>
                        <input 
                          id="hra"
                          type="number" 
                          className="form-input"
                          value={hraExemption || ''} 
                          onChange={(e) => setHraExemption(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1" htmlFor="other">Other Deductions (Sec 80D, 24b, etc.)</label>
                        <input 
                          id="other"
                          type="number" 
                          className="form-input"
                          value={otherDeductions || ''} 
                          onChange={(e) => setOtherDeductions(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-brand-50 border border-brand-100 rounded-lg p-4 flex items-start gap-3 mt-4">
                    <svg className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-xs text-brand-800">
                      <strong>Note:</strong> Standard deduction of ₹50,000 is automatically applied to both Old and New regimes for salaried individuals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Panel */}
            <div className="lg:col-span-7">
              <div className="card p-6 sm:p-8 bg-brand-600 text-white h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-sm">2</span>
                  Tax Calculation Summary
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 relative z-10 mb-8">
                  {/* Old Regime Card */}
                  <div className="bg-white/10 rounded-xl p-5 border border-white/20 backdrop-blur-sm">
                    <h3 className="text-brand-200 font-semibold mb-4 text-sm uppercase tracking-wider">Old Tax Regime</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Taxable Income</span>
                        <span className="font-medium">₹{oldRegime.taxable.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Base Tax</span>
                        <span className="font-medium">₹{oldRegime.tax.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Cess (4%)</span>
                        <span className="font-medium">₹{oldRegime.cess.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="border-t border-white/20 pt-3 mt-3 flex justify-between items-center">
                        <span className="font-bold text-white">Total Tax</span>
                        <span className="text-xl font-extrabold text-white">₹{oldRegime.total.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  {/* New Regime Card */}
                  <div className="bg-white/10 rounded-xl p-5 border border-white/20 backdrop-blur-sm">
                    <h3 className="text-brand-200 font-semibold mb-4 text-sm uppercase tracking-wider">New Tax Regime</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Taxable Income</span>
                        <span className="font-medium">₹{newRegime.taxable.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Base Tax</span>
                        <span className="font-medium">₹{newRegime.tax.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Cess (4%)</span>
                        <span className="font-medium">₹{newRegime.cess.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="border-t border-white/20 pt-3 mt-3 flex justify-between items-center">
                        <span className="font-bold text-white">Total Tax</span>
                        <span className="text-xl font-extrabold text-white">₹{newRegime.total.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 text-slate-900 text-center relative z-10 shadow-lg">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-1">Recommendation</p>
                  <p className="text-2xl font-extrabold mb-2">
                    Opt for the <span className="text-teal-600">{recommended}</span>
                  </p>
                  {savings > 0 ? (
                    <p className="text-slate-600 text-sm">
                      You save <strong className="text-slate-900 text-base">₹{savings.toLocaleString('en-IN')}</strong> in taxes.
                    </p>
                  ) : (
                    <p className="text-slate-600 text-sm">Both regimes result in the same tax liability.</p>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
