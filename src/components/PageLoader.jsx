export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center shadow-lg">
          <span className="text-white font-extrabold text-lg">CT</span>
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-brand-400"
              style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }} />
          ))}
        </div>
        <p className="text-slate-400 text-sm">Loading…</p>
      </div>
    </div>
  );
}
