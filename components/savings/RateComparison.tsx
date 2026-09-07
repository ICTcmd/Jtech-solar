'use client';

import React, { useState } from 'react';
import { TrendingUp, Lock, AlertTriangle, Zap, DollarSign, ShieldCheck } from 'lucide-react';

/* ── 20-year data ───────────────────────────────────────────── */
const YEARS = Array.from({ length: 21 }, (_, i) => i);

function utilityBill(year: number, baseMonthly: number, inflation: number): number {
  return baseMonthly * 12 * Math.pow(1 + inflation, year);
}

function cumulativeUtility(year: number, baseMonthly: number, inflation: number): number {
  let total = 0;
  for (let y = 1; y <= year; y++) total += utilityBill(y, baseMonthly, inflation);
  return total;
}

function cumulativeSolar(year: number, monthly: number, loanYears: number): number {
  const paid = Math.min(year, loanYears) * monthly * 12;
  return paid;
}

/* ── SVG chart ──────────────────────────────────────────────── */
const W = 700, H = 280;
const PAD = { top: 24, right: 24, bottom: 40, left: 64 };

function toX(year: number) {
  return PAD.left + (year / 20) * (W - PAD.left - PAD.right);
}

function toY(value: number, maxVal: number) {
  return PAD.top + (1 - value / maxVal) * (H - PAD.top - PAD.bottom);
}

function formatPHP(n: number): string {
  if (n >= 1_000_000) return `₱${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `₱${Math.round(n / 1_000)}K`;
  return `₱${Math.round(n)}`;
}

/* ─── Peak surge markers ─────────────────────────────────────── */
const SURGE_YEARS = [4, 8, 13, 17];

export function RateComparison() {
  const [currentYear, setCurrentYear] = useState(10);
  const baseMonthly = 3200; // ₱ monthly bill
  const inflation = 0.08;   // 8% p.a. (Philippine rate)
  const solarMonthly = 2100;
  const loanYears = 7;

  const utilityCurve = YEARS.map(y => cumulativeUtility(y, baseMonthly, inflation));
  const solarCurve   = YEARS.map(y => cumulativeSolar(y, solarMonthly, loanYears));
  const maxVal = Math.max(...utilityCurve) * 1.05;

  const utilityAt = (y: number) => utilityCurve[y];
  const solarAt   = (y: number) => solarCurve[y];
  const savings   = (y: number) => utilityAt(y) - solarAt(y);

  // build SVG polyline points
  const utilityPoints = YEARS.map(y => `${toX(y)},${toY(utilityCurve[y], maxVal)}`).join(' ');
  const solarPoints   = YEARS.map(y => `${toX(y)},${toY(solarCurve[y], maxVal)}`).join(' ');

  const cx = toX(currentYear);
  const uY = toY(utilityAt(currentYear), maxVal);
  const sY = toY(solarAt(currentYear), maxVal);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-800/50 text-red-400 text-xs font-semibold mb-5">
            <AlertTriangle className="w-3.5 h-3.5" />
            Philippine Utility Rates Rising 8–12% Every Year
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-4">
            Lock Your Rate. Stop the Bleeding.
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Every year you wait costs more. Solar freezes your energy cost while Meralco keeps hiking.
          </p>
        </div>

        {/* Main card */}
        <div className="backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-red-500 rounded" />
              <span className="text-sm text-slate-300">Utility Bill (Meralco+)</span>
              <span className="text-xs text-red-400 font-semibold bg-red-950/40 border border-red-800/50 px-2 py-0.5 rounded-full">+8% /yr inflation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-emerald-500 rounded" />
              <span className="text-sm text-slate-300">Solar (JTech)</span>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <Lock className="w-3 h-3 inline mr-1" />Rate Locked
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="w-full overflow-x-auto">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="utilGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
                <filter id="redGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="greenGlow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map(t => {
                const y = PAD.top + t * (H - PAD.top - PAD.bottom);
                const val = maxVal * (1 - t);
                return (
                  <g key={t}>
                    <line x1={PAD.left} y1={y} x2={W - PAD.right} y2={y} stroke="#1e293b" strokeWidth="1" />
                    <text x={PAD.left - 6} y={y + 4} textAnchor="end" fill="#64748b" fontSize="11">{formatPHP(val)}</text>
                  </g>
                );
              })}

              {/* Year labels */}
              {[0, 5, 10, 15, 20].map(y => (
                <text key={y} x={toX(y)} y={H - 8} textAnchor="middle" fill="#64748b" fontSize="11">Year {y}</text>
              ))}

              {/* Utility fill */}
              <polygon
                points={`${toX(0)},${H - PAD.bottom} ${utilityPoints} ${toX(20)},${H - PAD.bottom}`}
                fill="url(#utilGrad)"
              />

              {/* Solar fill */}
              <polygon
                points={`${toX(0)},${H - PAD.bottom} ${solarPoints} ${toX(20)},${H - PAD.bottom}`}
                fill="url(#solarGrad)"
              />

              {/* Utility line */}
              <polyline
                points={utilityPoints}
                fill="none"
                stroke="#ef4444"
                strokeWidth="2.5"
                filter="url(#redGlow)"
              />

              {/* Solar line */}
              <polyline
                points={solarPoints}
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                filter="url(#greenGlow)"
              />

              {/* Surge markers on utility line */}
              {SURGE_YEARS.map(y => (
                <g key={y}>
                  <circle
                    cx={toX(y)}
                    cy={toY(utilityCurve[y], maxVal)}
                    r="6"
                    fill="#ef4444"
                    filter="url(#redGlow)"
                  >
                    <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text
                    x={toX(y)}
                    y={toY(utilityCurve[y], maxVal) - 14}
                    textAnchor="middle"
                    fill="#fca5a5"
                    fontSize="10"
                    fontWeight="600"
                  >
                    +18% Peak
                  </text>
                </g>
              ))}

              {/* Current year vertical line */}
              <line
                x1={cx} y1={PAD.top}
                x2={cx} y2={H - PAD.bottom}
                stroke="#f8fafc"
                strokeWidth="1"
                strokeDasharray="4 3"
                opacity="0.3"
              />

              {/* Utility dot */}
              <circle cx={cx} cy={uY} r="7" fill="#ef4444" filter="url(#redGlow)" />
              {/* Solar dot */}
              <circle cx={cx} cy={sY} r="7" fill="#10b981" filter="url(#greenGlow)" />

              {/* Savings label between lines */}
              {currentYear > 1 && (
                <>
                  <line
                    x1={cx + 12} y1={sY}
                    x2={cx + 12} y2={uY}
                    stroke="#f8fafc"
                    strokeWidth="1"
                    strokeDasharray="3 2"
                    opacity="0.4"
                  />
                  <text
                    x={cx + 22}
                    y={(sY + uY) / 2 + 4}
                    fill="#34d399"
                    fontSize="12"
                    fontWeight="700"
                  >
                    {formatPHP(savings(currentYear))} saved
                  </text>
                </>
              )}

              {/* Labels at year 20 */}
              <text x={toX(20) - 8} y={toY(utilityCurve[20], maxVal) - 10} textAnchor="end" fill="#fca5a5" fontSize="12" fontWeight="600">
                Utility Total
              </text>
              <text x={toX(20) - 8} y={toY(solarCurve[20], maxVal) + 16} textAnchor="end" fill="#34d399" fontSize="12" fontWeight="600">
                Solar Total
              </text>
            </svg>
          </div>

          {/* Slider */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Drag to explore timeline</span>
              <span className="text-sm font-semibold text-[#f8fafc]">Year {currentYear} of 20</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={currentYear}
              onChange={e => setCurrentYear(Number(e.target.value))}
              aria-label="Select year for savings comparison"
              aria-valuemin={1}
              aria-valuemax={20}
              aria-valuenow={currentYear}
              aria-valuetext={`Year ${currentYear}`}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${((currentYear - 1) / 19) * 100}%, #334155 ${((currentYear - 1) / 19) * 100}%, #334155 100%)`,
              }}
            />
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-red-400" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Utility Cost by Yr {currentYear}</span>
              </div>
              <div className="text-2xl font-bold text-red-400">{formatPHP(utilityAt(currentYear))}</div>
              <div className="text-xs text-slate-500 mt-1">Compounding 8% annually</div>
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Solar Cost by Yr {currentYear}</span>
              </div>
              <div className="text-2xl font-bold text-emerald-400">{formatPHP(solarAt(currentYear))}</div>
              <div className="text-xs text-slate-500 mt-1">Fixed rate, no inflation</div>
            </div>

            <div className="bg-slate-800/50 border border-emerald-500/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">You Save by Yr {currentYear}</span>
              </div>
              <div className="text-2xl font-bold text-emerald-400">{formatPHP(savings(currentYear))}</div>
              <div className="text-xs text-slate-500 mt-1">Protected from rate hikes</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-700/50">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Zap className="w-4 h-4 text-emerald-500" />
              <span>Every month you wait, Meralco pockets more of your money.</span>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-600 hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] transition-all duration-200 text-sm whitespace-nowrap">
              <Lock className="w-4 h-4" />
              Lock My Rate Now
            </button>
          </div>
        </div>

        {/* Sub-cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
            <DollarSign className="w-8 h-8 text-red-400 mb-3" />
            <h3 className="text-lg font-semibold text-[#f8fafc] mb-2">20-Year Utility Exposure</h3>
            <p className="text-3xl font-bold text-red-400 mb-1">{formatPHP(utilityAt(20))}</p>
            <p className="text-xs text-slate-400">Projected cumulative cost at 8% annual inflation</p>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-lg font-semibold text-[#f8fafc] mb-2">Solar Protection Savings</h3>
            <p className="text-3xl font-bold text-emerald-400 mb-1">{formatPHP(savings(20))}</p>
            <p className="text-xs text-slate-400">Money back in your pocket over 20 years</p>
          </div>
        </div>
      </div>
    </section>
  );
}
