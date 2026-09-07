import React from 'react';
import { Sun, Home, Battery, Zap, TrendingUp, TrendingDown, Minus, AlertTriangle, ShieldCheck } from 'lucide-react';

interface EnergyMetrics {
  solarProduction: number;
  homeConsumption: number;
  batteryLevel: number;
  batteryFlow: number;
  gridStatus: 'exporting' | 'importing' | 'idle' | 'outage';
  gridFlow: number;
}

interface MetricsPanelProps {
  mode: 'day' | 'night';
  metrics: EnergyMetrics;
  outage?: boolean;
}

export function MetricsPanel({ mode, metrics, outage = false }: MetricsPanelProps) {
  return (
    <div className="mt-8 pt-8 border-t border-slate-700/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Live System Status</h3>
        {outage && (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-red-400 bg-red-950/40 border border-red-800/50 px-3 py-1 rounded-full animate-pulse">
            <AlertTriangle className="w-3 h-3" /> Grid Outage Active
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Solar */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sun className={`w-4 h-4 ${mode === 'day' || outage ? 'text-emerald-500' : 'text-slate-600'} transition-colors duration-500`} />
            <span className="text-xs text-slate-400 font-medium">Solar</span>
          </div>
          <div className={`text-2xl font-bold ${mode === 'day' || outage ? 'text-emerald-400' : 'text-slate-600'} transition-colors duration-500`}>
            {metrics.solarProduction.toFixed(1)} kW
          </div>
          <div className="text-xs text-slate-500 mt-1">{outage ? 'Trickling' : mode === 'day' ? 'Producing' : 'Offline'}</div>
        </div>

        {/* Home */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Home className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-slate-400 font-medium">Home</span>
          </div>
          <div className="text-2xl font-bold text-emerald-400">{metrics.homeConsumption.toFixed(1)} kW</div>
          <div className="text-xs text-slate-500 mt-1">{outage ? 'Essential Only' : 'Consuming'}</div>
        </div>

        {/* Battery */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Battery className={`w-4 h-4 ${outage ? 'text-emerald-400' : 'text-emerald-500'}`} />
            <span className="text-xs text-slate-400 font-medium">Battery</span>
          </div>
          <div className="text-2xl font-bold text-emerald-400">{metrics.batteryLevel}%</div>
          <div className="flex items-center gap-1 text-xs mt-1">
            {metrics.batteryFlow > 0 ? (
              <><TrendingUp className="w-3 h-3 text-emerald-500" /><span className="text-emerald-500">Charging</span></>
            ) : metrics.batteryFlow < 0 ? (
              <><TrendingDown className="w-3 h-3 text-orange-400" /><span className="text-orange-400">Discharging</span></>
            ) : (
              <><Minus className="w-3 h-3 text-slate-500" /><span className="text-slate-500">Idle</span></>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className={`rounded-xl p-4 border transition-all duration-500 ${
          outage
            ? 'bg-red-950/30 border-red-800/50'
            : 'bg-slate-800/30 border-slate-700/50'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <Zap className={`w-4 h-4 ${outage ? 'text-red-400' : mode === 'day' ? 'text-emerald-500' : 'text-slate-600'} transition-colors duration-500`} />
            <span className="text-xs text-slate-400 font-medium">Grid</span>
          </div>
          <div className={`text-2xl font-bold ${outage ? 'text-red-400' : mode === 'day' ? 'text-emerald-400' : 'text-slate-600'} transition-colors duration-500`}>
            {outage ? 'DOWN' : `${metrics.gridFlow.toFixed(1)} kW`}
          </div>
          <div className={`flex items-center gap-1 text-xs mt-1 ${outage ? 'text-red-400' : 'text-slate-500'}`}>
            {outage ? (
              <><AlertTriangle className="w-3 h-3" /><span>Outage</span></>
            ) : mode === 'day' ? (
              <><TrendingUp className="w-3 h-3" /><span>Exporting</span></>
            ) : (
              <><Minus className="w-3 h-3" /><span>Idle</span></>
            )}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className={`mt-4 p-4 rounded-xl border transition-all duration-500 ${
        outage
          ? 'bg-emerald-500/5 border-emerald-500/30'
          : 'bg-emerald-500/5 border-emerald-500/20'
      }`}>
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            {outage ? <ShieldCheck className="w-4 h-4 text-emerald-400" /> : <Zap className="w-4 h-4 text-emerald-500" />}
          </div>
          <div>
            <p className="text-sm text-slate-200 font-medium mb-0.5">
              {outage
                ? '🛡️ Blackout Resilience Active — Your home is running on stored solar energy'
                : mode === 'day'
                  ? '⚡ Peak Performance — Producing more than you need'
                  : '🌙 Battery Powered — Clean stored energy overnight'}
            </p>
            <p className="text-xs text-slate-400">
              {outage
                ? 'Grid isolated. Battery powering essential circuits at 0ms switchover. Neighborhood is dark — your home is bright.'
                : mode === 'day'
                  ? 'Excess energy stored in battery and exported to grid for credits.'
                  : 'Zero grid dependency through the night with clean solar storage.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
