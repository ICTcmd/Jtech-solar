'use client';

import React, { useEffect, useRef } from 'react';
import { X, Zap, TrendingDown } from 'lucide-react';
import type { HardwareItem } from './hardwareData';

interface SpecDrawerProps {
  item: HardwareItem | null;
  onClose: () => void;
}

/* ── Mini degradation SVG ─────────────────────────────── */
function DegradationCurve({ points }: { points: { year: number; pct: number }[] }) {
  const W = 320, H = 100;
  const maxYear = points[points.length - 1].year;
  const minPct = Math.min(...points.map(p => p.pct)) - 2;

  const toX = (y: number) => 24 + (y / maxYear) * (W - 36);
  const toY = (p: number) => H - 16 - ((p - minPct) / (100 - minPct)) * (H - 28);

  const polyPoints = points.map(p => `${toX(p.year)},${toY(p.pct)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Fill */}
      <polygon
        points={`${toX(0)},${H - 16} ${polyPoints} ${toX(maxYear)},${H - 16}`}
        fill="url(#dGrad)"
      />
      {/* Line */}
      <polyline points={polyPoints} fill="none" stroke="#10b981" strokeWidth="2" />
      {/* Dots */}
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={toX(p.year)} cy={toY(p.pct)} r="3.5" fill="#10b981" />
          <text x={toX(p.year)} y={H - 2} textAnchor="middle" fill="#64748b" fontSize="9">Yr {p.year}</text>
        </g>
      ))}
      {/* Y axis labels */}
      <text x="20" y={toY(100)} textAnchor="end" fill="#64748b" fontSize="9" dominantBaseline="middle">100%</text>
      <text x="20" y={toY(minPct + 2)} textAnchor="end" fill="#64748b" fontSize="9" dominantBaseline="middle">
        {Math.round(minPct + 2)}%
      </text>
    </svg>
  );
}

export function SpecDrawer({ item, onClose }: SpecDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  /* Trap focus & scroll lock */
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      drawerRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [item]);

  if (!item) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        tabIndex={-1}
        role="dialog"
        aria-label={`${item.name} specifications`}
        aria-modal="true"
        className="fixed top-0 right-0 h-full w-full max-w-[520px] z-50
          backdrop-blur-xl bg-slate-900/95 border-l border-slate-800
          shadow-[-20px_0_60px_rgba(0,0,0,0.5)]
          overflow-y-auto animate-slideInRight outline-none"
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 py-5 flex items-start justify-between z-10">
          <div>
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-widest mb-1">
              {item.category === 'panels' ? 'Solar Panels' : item.category === 'battery' ? 'Battery Storage' : 'Microinverters'}
            </p>
            <h2 className="text-xl font-bold text-[#f8fafc] leading-snug">{item.name}</h2>
            <p className="text-sm text-slate-400 mt-0.5">{item.tagline}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close equipment specifications"
            className="p-2 rounded-lg text-slate-400 hover:text-[#f8fafc] hover:bg-slate-800 transition-colors mt-1 flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-8">
          {/* Key stat */}
          <div className="flex gap-4">
            <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 text-center">
              <p className="text-4xl font-bold text-emerald-400">{item.keySpec}</p>
              <p className="text-xs text-slate-400 mt-1">{item.keySpecLabel}</p>
            </div>
            <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-5 text-center">
              <p className="text-4xl font-bold text-[#f8fafc]">{item.efficiency}%</p>
              <p className="text-xs text-slate-400 mt-1">Efficiency</p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {item.badges.map(b => (
              <span key={b} className="text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                {b}
              </span>
            ))}
          </div>

          {/* Real-time metrics */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
              <Zap className="w-3.5 h-3.5 inline mr-1 text-emerald-500" />
              Live Performance
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {item.realTimeMetrics.map(m => (
                <div key={m.label} className="bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-center">
                  <p className={`text-lg font-bold ${
                    m.color === 'emerald' ? 'text-emerald-400' :
                    m.color === 'orange' ? 'text-orange-400' : 'text-blue-400'
                  }`}>{m.value}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical specs table */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
              Technical Specifications
            </h3>
            <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 overflow-hidden">
              {item.specs.map((s, i) => (
                <div key={i} className={`flex items-start justify-between gap-3 px-4 py-3 ${i % 2 === 0 ? 'bg-slate-800/20' : 'bg-transparent'}`}>
                  <span className="text-xs text-slate-400 flex-shrink-0 w-44">{s.label}</span>
                  <span className="text-xs text-[#f8fafc] font-medium text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Degradation curve */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
              <TrendingDown className="w-3.5 h-3.5 inline mr-1 text-emerald-500" />
              Performance Curve Over Time
            </h3>
            <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4">
              <DegradationCurve points={item.degradation} />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Projected output retention over product lifetime based on manufacturer data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
