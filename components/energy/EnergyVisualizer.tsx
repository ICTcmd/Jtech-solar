'use client';

import React, { useState } from 'react';
import { Sun, Moon, Home, Battery, Zap } from 'lucide-react';
import { EnergyFlowPath } from './EnergyFlowPath';
import { MetricsPanel } from './MetricsPanel';

type Mode = 'day' | 'night';

interface EnergyMetrics {
  solarProduction: number;
  homeConsumption: number;
  batteryLevel: number;
  batteryFlow: number;
  gridStatus: 'exporting' | 'importing' | 'idle';
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

export function EnergyVisualizer() {
  const [mode, setMode] = useState<Mode>('day');
  const metrics = mode === 'day' ? DAY_METRICS : NIGHT_METRICS;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-4">
            How Solar Energy Flows
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Watch energy move through your home in real-time. Toggle between day and night to see how your system adapts.
          </p>
        </div>

        {/* Main Visualizer Card */}
        <div className="backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
          
          {/* Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-1 p-1 bg-slate-800/50 rounded-xl border border-slate-700">
              <button
                onClick={() => setMode('day')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  mode === 'day'
                    ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'text-slate-400 hover:text-slate-300'
                }`}
                aria-label="Switch to day mode"
                role="switch"
                aria-checked={mode === 'day'}
              >
                <Sun className="w-5 h-5" />
                <span>Day Mode</span>
              </button>
              <button
                onClick={() => setMode('night')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  mode === 'night'
                    ? 'bg-slate-700 text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-300'
                }`}
                aria-label="Switch to night mode"
                role="switch"
                aria-checked={mode === 'night'}
              >
                <Moon className="w-5 h-5" />
                <span>Night Mode</span>
              </button>
            </div>
          </div>

          {/* Energy Flow Schematic */}
          <div className="relative">
            <svg
              viewBox="0 0 800 500"
              className="w-full h-auto max-h-[500px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Define gradients and filters */}
              <defs>
                <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Grid (subtle) */}
              <g opacity="0.1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={i * 40}
                    y1="0"
                    x2={i * 40}
                    y2="500"
                    stroke="#f8fafc"
                    strokeWidth="0.5"
                  />
                ))}
                {Array.from({ length: 13 }).map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 40}
                    x2="800"
                    y2={i * 40}
                    stroke="#f8fafc"
                    strokeWidth="0.5"
                  />
                ))}
              </g>

              {/* Solar Panels (Top) */}
              <g transform="translate(400, 80)">
                <rect
                  x="-60"
                  y="-40"
                  width="120"
                  height="80"
                  rx="8"
                  fill={mode === 'day' ? '#10b981' : '#334155'}
                  fillOpacity={mode === 'day' ? 0.2 : 0.1}
                  stroke={mode === 'day' ? '#10b981' : '#475569'}
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                <foreignObject x="-24" y="-24" width="48" height="48">
                  <div className="flex items-center justify-center h-full">
                    <Sun className={`w-12 h-12 ${mode === 'day' ? 'text-emerald-500' : 'text-slate-600'} transition-colors duration-500`} />
                  </div>
                </foreignObject>
                <text
                  x="0"
                  y="60"
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="16"
                  fontWeight="600"
                >
                  Solar Panels
                </text>
              </g>

              {/* Home (Center) */}
              <g transform="translate(400, 280)">
                <rect
                  x="-70"
                  y="-50"
                  width="140"
                  height="100"
                  rx="8"
                  fill="#10b981"
                  fillOpacity="0.2"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                <foreignObject x="-28" y="-28" width="56" height="56">
                  <div className="flex items-center justify-center h-full">
                    <Home className="w-14 h-14 text-emerald-500" />
                  </div>
                </foreignObject>
                <text
                  x="0"
                  y="75"
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="16"
                  fontWeight="600"
                >
                  Your Home
                </text>
              </g>

              {/* Battery (Left) */}
              <g transform="translate(120, 280)">
                <rect
                  x="-55"
                  y="-45"
                  width="110"
                  height="90"
                  rx="8"
                  fill="#10b981"
                  fillOpacity="0.2"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                <foreignObject x="-24" y="-24" width="48" height="48">
                  <div className="flex items-center justify-center h-full">
                    <Battery className="w-12 h-12 text-emerald-500" />
                  </div>
                </foreignObject>
                <text
                  x="0"
                  y="70"
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="16"
                  fontWeight="600"
                >
                  Battery
                </text>
              </g>

              {/* Grid (Right) */}
              <g transform="translate(680, 280)">
                <rect
                  x="-50"
                  y="-45"
                  width="100"
                  height="90"
                  rx="8"
                  fill={mode === 'day' && metrics.gridStatus === 'exporting' ? '#10b981' : '#334155'}
                  fillOpacity="0.2"
                  stroke={mode === 'day' && metrics.gridStatus === 'exporting' ? '#10b981' : '#475569'}
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex items-center justify-center h-full">
                    <Zap className={`w-10 h-10 ${mode === 'day' && metrics.gridStatus === 'exporting' ? 'text-emerald-500' : 'text-slate-600'} transition-colors duration-500`} />
                  </div>
                </foreignObject>
                <text
                  x="0"
                  y="70"
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="16"
                  fontWeight="600"
                >
                  Grid
                </text>
              </g>

              {/* Energy Flow Paths */}
              
              {/* Solar to Home (Day only) */}
              {mode === 'day' && (
                <EnergyFlowPath
                  d="M 400 120 L 400 230"
                  active={true}
                />
              )}

              {/* Solar to Battery (Day only) */}
              {mode === 'day' && (
                <EnergyFlowPath
                  d="M 340 120 Q 200 180 165 235"
                  active={true}
                />
              )}

              {/* Battery to Home (Night only) */}
              {mode === 'night' && (
                <EnergyFlowPath
                  d="M 175 280 L 330 280"
                  active={true}
                />
              )}

              {/* Home to Grid (Day only, when exporting) */}
              {mode === 'day' && metrics.gridStatus === 'exporting' && (
                <EnergyFlowPath
                  d="M 470 280 L 630 280"
                  active={true}
                />
              )}
            </svg>
          </div>

          {/* Metrics Panel */}
          <MetricsPanel mode={mode} metrics={metrics} />
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Sun className="w-6 h-6 text-emerald-500" />
              <h3 className="text-lg font-semibold text-[#f8fafc]">Daytime Operation</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Solar panels generate electricity to power your home. Excess energy charges your battery 
              and can be exported to the grid for credits.
            </p>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Moon className="w-6 h-6 text-slate-400" />
              <h3 className="text-lg font-semibold text-[#f8fafc]">Nighttime Operation</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Your battery storage powers your home through the night. No grid dependency means 
              lower costs and energy independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
