export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-5">
        {/* Logo mark */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-trust-500 to-navy-700 flex items-center justify-center shadow-xl shadow-trust-900/40 animate-pulse-slow">
          <span className="text-white font-bold text-xl font-display">CT</span>
        </div>
        {/* Spinner */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-trust-500"
              style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
        <p className="text-slate-500 text-sm">Loading…</p>
      </div>
    </div>
  );
}
