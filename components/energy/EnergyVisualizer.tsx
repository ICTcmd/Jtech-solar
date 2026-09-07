'use client';

import React, { useState } from 'react';
import { Sun, Moon, Home, Battery, Zap, AlertTriangle, ShieldCheck } from 'lucide-react';
import { MetricsPanel } from './MetricsPanel';

type Mode = 'day' | 'night';

interface EnergyMetrics {
  solarProduction: number;
  homeConsumption: number;
  batteryLevel: number;
  batteryFlow: number;
  gridStatus: 'exporting' | 'importing' | 'idle' | 'outage';
  gridFlow: number;
}

const DAY_METRICS: EnergyMetrics = {
  solarProduction: 6.4,
  homeConsumption: 3.2,
  batteryLevel: 88,
  batteryFlow: 2.1,
  gridStatus: 'exporting',
  gridFlow: 1.1,
};

const NIGHT_METRICS: EnergyMetrics = {
  solarProduction: 0,
  homeConsumption: 2.8,
  batteryLevel: 65,
  batteryFlow: -2.8,
  gridStatus: 'idle',
  gridFlow: 0,
};

const OUTAGE_METRICS: EnergyMetrics = {
  solarProduction: 3.8,
  homeConsumption: 2.1,
  batteryLevel: 91,
  batteryFlow: 1.7,
  gridStatus: 'outage',
  gridFlow: 0,
};

/* ─── Animated SVG path component ─────────────────────────────── */
function FlowPath({
  d,
  color = '#10b981',
  speed = '2s',
  reverse = false,
}: {
  d: string;
  color?: string;
  speed?: string;
  reverse?: boolean;
}) {
  const particles = [0, 0.4, 0.8, 1.2, 1.6];
  return (
    <g>
      {/* Glow base */}
      <path d={d} stroke={color} strokeWidth="8" fill="none" opacity="0.12" filter="url(#glow)" />
      {/* Line */}
      <path d={d} stroke={color} strokeWidth="2.5" fill="none" opacity="0.8" />
      {/* Pulsing line */}
      <path d={d} stroke={color} strokeWidth="6" fill="none" filter="url(#glow)">
        <animate attributeName="opacity" values="0.05;0.3;0.05" dur={speed} repeatCount="indefinite" />
      </path>
      {/* Flowing particles */}
      {particles.map((delay, i) => (
        <circle key={i} r={i === 0 ? 6 : i === 1 ? 5 : 4} fill={color} filter="url(#glow)">
          <animateMotion
            dur={speed}
            repeatCount="indefinite"
            begin={`${delay}s`}
            keyPoints={reverse ? '1;0' : '0;1'}
            keyTimes="0;1"
            calcMode="linear"
            path={d}
          />
        </circle>
      ))}
    </g>
  );
}

/* ─── Inactive path ────────────────────────────────────────────── */
function InactivePath({ d }: { d: string }) {
  return <path d={d} stroke="#334155" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="6 4" />;
}

/* ─── Main component ───────────────────────────────────────────── */
export function EnergyVisualizer() {
  const [mode, setMode] = useState<Mode>('day');
  const [outage, setOutage] = useState(false);

  const metrics = outage ? OUTAGE_METRICS : mode === 'day' ? DAY_METRICS : NIGHT_METRICS;
  const isOutage = outage;

  const toggleOutage = () => setOutage((o) => !o);

  // Path definitions
  const P_SOLAR_HOME   = 'M 400 125 L 400 230';
  const P_SOLAR_BATT   = 'M 345 110 Q 210 185 170 238';
  const P_BATT_HOME    = 'M 178 278 L 328 278';
  const P_HOME_GRID    = 'M 472 278 L 632 278';

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-4">
            Your Home Energy Command Center
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Real-time energy routing — and when the grid fails, your home never misses a beat.
          </p>
        </div>

        {/* ── Main card ── */}
        <div
          className={`relative overflow-hidden rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md border transition-all duration-500
            ${isOutage
              ? 'bg-slate-900/80 border-red-800/60 shadow-[0_0_60px_rgba(239,68,68,0.08)]'
              : 'bg-slate-900/60 border-slate-800'
            }`}
        >
          {/* Ambient glow */}
          <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
            isOutage
              ? 'bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.04)_0%,transparent_70%)]'
              : 'bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04)_0%,transparent_70%)]'
          }`} />

          {/* ── Controls row ── */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            {/* Day / Night toggle */}
            <div className="inline-flex items-center gap-1 p-1 bg-slate-800/60 rounded-xl border border-slate-700">
              <button
                onClick={() => { setMode('day'); setOutage(false); }}
                aria-label="Day mode" role="switch" aria-checked={mode === 'day' && !isOutage}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300
                  ${mode === 'day' && !isOutage
                    ? 'bg-emerald-500 text-white shadow-[0_0_18px_rgba(16,185,129,0.35)]'
                    : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Sun className="w-4 h-4" /> Day
              </button>
              <button
                onClick={() => { setMode('night'); setOutage(false); }}
                aria-label="Night mode" role="switch" aria-checked={mode === 'night' && !isOutage}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300
                  ${mode === 'night' && !isOutage
                    ? 'bg-slate-700 text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Moon className="w-4 h-4" /> Night
              </button>
            </div>

            {/* Outage toggle */}
            <button
              onClick={toggleOutage}
              aria-pressed={isOutage}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm border transition-all duration-300
                ${isOutage
                  ? 'bg-red-950/60 border-red-700 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.25)] animate-pulse-slow'
                  : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-red-700/50 hover:text-red-400'
                }`}
            >
              <Zap className="w-4 h-4" />
              {isOutage ? 'Restore Grid Power' : 'Simulate Power Outage'}
            </button>
          </div>

          {/* ── Outage warning banner ── */}
          {isOutage && (
            <div className="mb-6 flex items-center gap-3 px-5 py-3 bg-red-950/40 border border-red-800/60 rounded-xl animate-fadeIn">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 animate-pulse" />
              <div>
                <span className="text-red-400 font-semibold text-sm">⚡ Grid Outage Detected — Neighborhood Dark</span>
                <span className="mx-3 text-slate-600">|</span>
                <span className="text-emerald-400 font-medium text-sm flex-inline items-center gap-1">
                  <ShieldCheck className="w-4 h-4 inline mr-1" />
                  Instant Backup Active • 0ms Switchover
                </span>
              </div>
            </div>
          )}

          {/* ── SVG Schematic ── */}
          <div className="relative">
            <svg viewBox="0 0 800 480" className="w-full h-auto max-h-[480px]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="redglow">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                {/* Emerald radial for home halo in outage */}
                <radialGradient id="homeHalo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Dot grid */}
              <g opacity="0.07">
                {Array.from({ length: 20 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="480" stroke="#f8fafc" strokeWidth="0.5" />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="#f8fafc" strokeWidth="0.5" />
                ))}
              </g>

              {/* ─── Home halo (outage) ─── */}
              {isOutage && (
                <ellipse cx="400" cy="278" rx="130" ry="100" fill="url(#homeHalo)">
                  <animate attributeName="rx" values="130;145;130" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="100;112;100" dur="2s" repeatCount="indefinite" />
                </ellipse>
              )}

              {/* ─── FLOW PATHS ─── */}
              {/* Normal Day */}
              {!isOutage && mode === 'day' && (
                <>
                  <FlowPath d={P_SOLAR_HOME} />
                  <FlowPath d={P_SOLAR_BATT} />
                  <FlowPath d={P_HOME_GRID} />
                </>
              )}
              {/* Normal Night */}
              {!isOutage && mode === 'night' && (
                <FlowPath d={P_BATT_HOME} />
              )}
              {/* Outage: Battery → Home only */}
              {isOutage && (
                <>
                  <FlowPath d={P_BATT_HOME} color="#10b981" speed="1.5s" />
                  {/* Faded solar still trickling */}
                  <FlowPath d={P_SOLAR_BATT} color="#10b981" speed="3s" />
                  {/* Isolated from grid */}
                  <InactivePath d={P_HOME_GRID} />
                </>
              )}
              {/* Inactive paths for context */}
              {!isOutage && mode === 'night' && (
                <>
                  <InactivePath d={P_SOLAR_HOME} />
                  <InactivePath d={P_SOLAR_BATT} />
                  <InactivePath d={P_HOME_GRID} />
                </>
              )}

              {/* ─── SOLAR PANEL NODE ─── */}
              <g transform="translate(400, 78)">
                <rect x="-62" y="-42" width="124" height="84" rx="10"
                  fill={!isOutage && mode === 'day' ? '#10b981' : '#1e293b'}
                  fillOpacity={!isOutage && mode === 'day' ? 0.18 : 0.12}
                  stroke={!isOutage && mode === 'day' ? '#10b981' : '#334155'}
                  strokeWidth="1.5"
                />
                <foreignObject x="-22" y="-22" width="44" height="44">
                  <div className="flex items-center justify-center h-full">
                    <Sun className={`w-11 h-11 ${!isOutage && mode === 'day' ? 'text-emerald-400' : 'text-slate-600'} transition-colors duration-500`} />
                  </div>
                </foreignObject>
                <text x="0" y="58" textAnchor="middle" fill={!isOutage && mode === 'day' ? '#a7f3d0' : '#64748b'} fontSize="14" fontWeight="600">
                  Solar Panels
                </text>
                {!isOutage && mode === 'day' && (
                  <text x="0" y="74" textAnchor="middle" fill="#34d399" fontSize="12">6.4 kW</text>
                )}
              </g>

              {/* ─── HOME NODE ─── */}
              <g transform="translate(400, 278)">
                {/* Outage halo ring */}
                {isOutage && (
                  <rect x="-80" y="-58" width="160" height="116" rx="14"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    filter="url(#glow)"
                    opacity="0.7"
                  >
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite" />
                  </rect>
                )}
                <rect x="-72" y="-50" width="144" height="100" rx="10"
                  fill="#10b981" fillOpacity="0.18"
                  stroke="#10b981" strokeWidth="2"
                />
                <foreignObject x="-26" y="-26" width="52" height="52">
                  <div className="flex items-center justify-center h-full">
                    <Home className="w-13 h-13 text-emerald-400" style={{ width: '3.25rem', height: '3.25rem' }} />
                  </div>
                </foreignObject>
                <text x="0" y="68" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="600">
                  {isOutage ? 'Essential Circuits' : 'Your Home'}
                </text>
                {isOutage && (
                  <text x="0" y="84" textAnchor="middle" fill="#34d399" fontSize="11">
                    Protected
                  </text>
                )}
              </g>

              {/* ─── BATTERY NODE ─── */}
              <g transform="translate(120, 278)">
                <rect x="-58" y="-46" width="116" height="92" rx="10"
                  fill="#10b981" fillOpacity={isOutage ? 0.22 : 0.15}
                  stroke="#10b981" strokeWidth={isOutage ? '2.5' : '1.5'}
                  filter={isOutage ? 'url(#glow)' : undefined}
                />
                <foreignObject x="-22" y="-22" width="44" height="44">
                  <div className="flex items-center justify-center h-full">
                    <Battery className="w-11 h-11 text-emerald-400" />
                  </div>
                </foreignObject>
                <text x="0" y="62" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="600">Battery</text>
                <text x="0" y="76" textAnchor="middle" fill="#34d399" fontSize="12">
                  {isOutage ? '91%' : mode === 'day' ? '88%' : '65%'}
                </text>
                {isOutage && (
                  <text x="0" y="92" textAnchor="middle" fill="#a7f3d0" fontSize="11">Discharging</text>
                )}
              </g>

              {/* ─── GRID NODE ─── */}
              <g transform="translate(680, 278)">
                <rect x="-52" y="-46" width="104" height="92" rx="10"
                  fill={isOutage ? '#450a0a' : mode === 'day' ? '#10b981' : '#1e293b'}
                  fillOpacity={isOutage ? 0.5 : mode === 'day' ? 0.18 : 0.12}
                  stroke={isOutage ? '#991b1b' : mode === 'day' ? '#10b981' : '#334155'}
                  strokeWidth="2"
                  filter={isOutage ? 'url(#redglow)' : undefined}
                >
                  {isOutage && (
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                  )}
                </rect>
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex items-center justify-center h-full">
                    <Zap className={`w-10 h-10 ${isOutage ? 'text-red-400' : mode === 'day' ? 'text-emerald-400' : 'text-slate-600'} transition-colors duration-500`} />
                  </div>
                </foreignObject>
                <text x="0" y="62" textAnchor="middle"
                  fill={isOutage ? '#fca5a5' : '#f8fafc'}
                  fontSize="14" fontWeight="600"
                >
                  {isOutage ? 'Grid DOWN' : 'Grid'}
                </text>
                {isOutage && (
                  <text x="0" y="78" textAnchor="middle" fill="#f87171" fontSize="11">
                    Isolated
                  </text>
                )}
              </g>

              {/* ─── Outage micro-label on Battery→Home path ─── */}
              {isOutage && (
                <text x="248" y="265" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="500">
                  Instant Backup Active
                </text>
              )}
            </svg>
          </div>

          {/* ── Metrics Panel ── */}
          <MetricsPanel mode={mode} metrics={metrics} outage={isOutage} />
        </div>

        {/* ── Info cards ── */}
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Sun className="w-5 h-5 text-emerald-500" />
              <h3 className="text-sm font-semibold text-[#f8fafc]">Daytime Operation</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Panels power your home, charge batteries, and export surplus to the grid for credits.
            </p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Moon className="w-5 h-5 text-slate-400" />
              <h3 className="text-sm font-semibold text-[#f8fafc]">Nighttime Operation</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Stored battery power runs your home through the night with zero grid dependency.
            </p>
          </div>
          <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <h3 className="text-sm font-semibold text-[#f8fafc]">Blackout Resilience</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Grid fails — your home stays on. Battery routes power to essential circuits instantly with 0ms switchover.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
