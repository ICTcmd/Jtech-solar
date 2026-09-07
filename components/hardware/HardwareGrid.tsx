'use client';

import React, { useState } from 'react';
import { Sun, Battery, Cpu, ChevronRight, Shield } from 'lucide-react';
import { SpecDrawer } from './SpecDrawer';
import { HARDWARE } from './hardwareData';
import type { HardwareItem } from './hardwareData';

/* ── Equipment card ───────────────────────────────────── */
function EquipmentCard({ item, onOpen }: { item: HardwareItem; onOpen: () => void }) {
  const Icon = item.icon === 'sun' ? Sun : item.icon === 'battery' ? Battery : Cpu;

  return (
    <div
      className="group relative backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-2xl p-8
        hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]
        transition-all duration-300 cursor-pointer flex flex-col"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label={`View specifications for ${item.name}`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onOpen(); }}
    >
      {/* Ambient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Category chip */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">
          {item.category === 'panels' ? 'Tier-1 Panels' : item.category === 'battery' ? 'LFP Battery' : 'Microinverters'}
        </span>
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <Icon className="w-4 h-4 text-emerald-500" />
        </div>
      </div>

      {/* Equipment schematic (monochrome SVG) */}
      <div className="flex items-center justify-center mb-6 h-28">
        {item.icon === 'sun' && (
          <svg viewBox="0 0 120 100" className="w-32 h-24 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Panel grid */}
            <rect x="10" y="20" width="100" height="60" rx="4" stroke="#334155" strokeWidth="1.5" fill="#0f172a" />
            <rect x="10" y="20" width="100" height="60" rx="4" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.04" />
            {/* Grid lines */}
            {[0,1,2,3].map(i => <line key={i} x1={10 + (i+1)*20} y1="20" x2={10 + (i+1)*20} y2="80" stroke="#1e293b" strokeWidth="1" />)}
            {[0,1].map(i => <line key={i} x1="10" y1={20 + (i+1)*20} x2="110" y2={20 + (i+1)*20} stroke="#1e293b" strokeWidth="1" />)}
            {/* Cell highlights */}
            {[0,1,2,3,4].map(col => [0,1,2].map(row => (
              <rect key={`${col}-${row}`} x={12+col*20} y={22+row*20} width="17" height="17" rx="1" fill="#10b981" fillOpacity="0.07" />
            )))}
            {/* Sun */}
            <circle cx="95" cy="16" r="8" fill="none" stroke="#10b981" strokeWidth="1.2" />
            {[0,45,90,135,180,225,270,315].map(a => {
              const rad = a * Math.PI / 180;
              return <line key={a} x1={95+10*Math.cos(rad)} y1={16+10*Math.sin(rad)} x2={95+13*Math.cos(rad)} y2={16+13*Math.sin(rad)} stroke="#10b981" strokeWidth="1" />;
            })}
          </svg>
        )}
        {item.icon === 'battery' && (
          <svg viewBox="0 0 120 100" className="w-32 h-24 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Body */}
            <rect x="15" y="15" width="82" height="70" rx="6" stroke="#334155" strokeWidth="1.5" fill="#0f172a" />
            <rect x="15" y="15" width="82" height="70" rx="6" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.04" />
            {/* Terminal */}
            <rect x="97" y="36" width="8" height="28" rx="2" fill="#334155" />
            {/* Fill bar */}
            <rect x="20" y="20" width="66" height="60" rx="4" fill="#10b981" fillOpacity="0.08" />
            <rect x="20" y="20" width="58" height="60" rx="4" fill="#10b981" fillOpacity="0.12" />
            {/* Percentage */}
            <text x="56" y="56" textAnchor="middle" fill="#10b981" fontSize="18" fontWeight="700" dominantBaseline="middle">88%</text>
            <text x="56" y="70" textAnchor="middle" fill="#475569" fontSize="9">State of Charge</text>
            {/* Bolt */}
            <text x="56" y="40" textAnchor="middle" fill="#10b981" fontSize="12" dominantBaseline="middle">⚡</text>
          </svg>
        )}
        {item.icon === 'cpu' && (
          <svg viewBox="0 0 120 100" className="w-32 h-24 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Chip body */}
            <rect x="30" y="20" width="60" height="60" rx="4" stroke="#334155" strokeWidth="1.5" fill="#0f172a" />
            <rect x="30" y="20" width="60" height="60" rx="4" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.04" />
            {/* Inner die */}
            <rect x="40" y="30" width="40" height="40" rx="2" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="0.8" />
            {/* Pins left/right */}
            {[0,1,2,3].map(i => (
              <g key={i}>
                <line x1="18" y1={32+i*12} x2="30" y2={32+i*12} stroke="#334155" strokeWidth="2" />
                <line x1="90" y1={32+i*12} x2="102" y2={32+i*12} stroke="#334155" strokeWidth="2" />
              </g>
            ))}
            {/* Pins top/bottom */}
            {[0,1,2,3].map(i => (
              <g key={i}>
                <line x1={38+i*12} y1="8" x2={38+i*12} y2="20" stroke="#334155" strokeWidth="2" />
                <line x1={38+i*12} y1="80" x2={38+i*12} y2="92" stroke="#334155" strokeWidth="2" />
              </g>
            ))}
            {/* Center indicator */}
            <circle cx="60" cy="50" r="8" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="0.8" />
            <circle cx="60" cy="50" r="3" fill="#10b981" />
          </svg>
        )}
      </div>

      {/* Name + tagline */}
      <h3 className="text-lg font-bold text-[#f8fafc] mb-1">{item.name}</h3>
      <p className="text-sm text-slate-400 mb-4">{item.tagline}</p>

      {/* Key spec */}
      <div className="flex items-baseline gap-1.5 mb-5">
        <span className="text-3xl font-bold text-emerald-400">{item.keySpec}</span>
        <span className="text-sm text-slate-400">{item.keySpecLabel}</span>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {item.badges.map(b => (
          <span key={b} className="flex items-center gap-1 text-[10px] font-medium text-slate-300 bg-slate-800/60 border border-slate-700/60 px-2 py-1 rounded-full">
            <Shield className="w-2.5 h-2.5 text-emerald-500" />
            {b}
          </span>
        ))}
      </div>

      {/* Efficiency bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-slate-400">Efficiency</span>
          <span className="text-xs font-semibold text-emerald-400">{item.efficiency}%</span>
        </div>
        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"
            style={{ width: `${item.efficiency}%` }}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-800">
        <span className="text-xs text-slate-400">Full technical specs</span>
        <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:gap-2 transition-all">
          View Details <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

/* ── Main grid section ────────────────────────────────── */
export function HardwareGrid() {
  const [selected, setSelected] = useState<HardwareItem | null>(null);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-5">
            <Shield className="w-3.5 h-3.5" />
            Premium Tier-1 Equipment Only
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-4">
            The Hardware Behind the Guarantee
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We install only the best. Every component is engineered for Philippine conditions — heat, humidity, and typhoon season.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {HARDWARE.map(item => (
            <EquipmentCard key={item.id} item={item} onOpen={() => setSelected(item)} />
          ))}
        </div>

        {/* Bottom badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {['IEC Certified', 'Typhoon-Grade', '25-Year Warranty', 'Local Support', 'Zero Maintenance'].map(b => (
            <span key={b} className="text-xs text-slate-300 bg-slate-800/60 border border-slate-700 px-4 py-2 rounded-full">
              ✓ {b}
            </span>
          ))}
        </div>
      </div>

      {/* Spec drawer */}
      <SpecDrawer item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
