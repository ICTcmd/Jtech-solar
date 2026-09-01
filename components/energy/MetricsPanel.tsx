import React from 'react';
import { Sun, Home, Battery, Zap, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface EnergyMetrics {
  solarProduction: number;
  homeConsumption: number;
  batteryLevel: number;
  batteryFlow: number;
  gridStatus: 'exporting' | 'importing' | 'idle';
  gridFlow: number;
}

interface MetricsPanelProps {
  mode: 'day' | 'night';
  metrics: EnergyMetrics;
}

export function MetricsPanel({ mode, metrics }: MetricsPanelProps) {
  const getGridStatusIcon = () => {
    if (metrics.gridStatus === 'exporting') return <TrendingUp className="w-4 h-4" />;
    if (metrics.gridStatus === 'importing') return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getGridStatusText = () => {
    if (metrics.gridStatus === 'exporting') return 'Exporting';
    if (metrics.gridStatus === 'importing') return 'Importing';
    return 'Idle';
  };

  const getGridStatusColor = () => {
    if (metrics.gridStatus === 'exporting') return 'text-emerald-500';
    if (metrics.gridStatus === 'importing') return 'text-orange-500';
    return 'text-slate-500';
  };

  return (
    <div className="mt-8 pt-8 border-t border-slate-700/50">
      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
        Live System Status
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Solar Production */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 transition-all duration-500">
          <div className="flex items-center gap-2 mb-2">
            <Sun className={`w-5 h-5 ${mode === 'day' ? 'text-emerald-500' : 'text-slate-600'} transition-colors duration-500`} />
            <span className="text-xs text-slate-400 font-medium">Solar</span>
          </div>
          <div className={`text-2xl font-bold ${mode === 'day' ? 'text-emerald-500' : 'text-slate-600'} transition-colors duration-500`}>
            {metrics.solarProduction.toFixed(1)} kW
          </div>
          <div className="text-xs text-slate-500 mt-1">
            {mode === 'day' ? 'Producing' : 'Offline'}
          </div>
        </div>

        {/* Home Consumption */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Home className="w-5 h-5 text-emerald-500" />
            <span className="text-xs text-slate-400 font-medium">Home</span>
          </div>
          <div className="text-2xl font-bold text-emerald-500">
            {metrics.homeConsumption.toFixed(1)} kW
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Using
          </div>
        </div>

        {/* Battery Status */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 transition-all duration-500">
          <div className="flex items-center gap-2 mb-2">
            <Battery className="w-5 h-5 text-emerald-500" />
            <span className="text-xs text-slate-400 font-medium">Battery</span>
          </div>
          <div className="text-2xl font-bold text-emerald-500">
            {metrics.batteryLevel}%
          </div>
          <div className="flex items-center gap-1 text-xs mt-1">
            {metrics.batteryFlow > 0 ? (
              <>
                <TrendingUp className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-500">Charging</span>
              </>
            ) : metrics.batteryFlow < 0 ? (
              <>
                <TrendingDown className="w-3 h-3 text-orange-500" />
                <span className="text-orange-500">Discharging</span>
              </>
            ) : (
              <>
                <Minus className="w-3 h-3 text-slate-500" />
                <span className="text-slate-500">Idle</span>
              </>
            )}
          </div>
        </div>

        {/* Grid Status */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 transition-all duration-500">
          <div className="flex items-center gap-2 mb-2">
            <Zap className={`w-5 h-5 ${mode === 'day' && metrics.gridStatus === 'exporting' ? 'text-emerald-500' : 'text-slate-600'} transition-colors duration-500`} />
            <span className="text-xs text-slate-400 font-medium">Grid</span>
          </div>
          <div className={`text-2xl font-bold ${mode === 'day' && metrics.gridStatus === 'exporting' ? 'text-emerald-500' : 'text-slate-600'} transition-colors duration-500`}>
            {metrics.gridFlow.toFixed(1)} kW
          </div>
          <div className={`flex items-center gap-1 text-xs mt-1 ${getGridStatusColor()} transition-colors duration-500`}>
            {getGridStatusIcon()}
            <span>{getGridStatusText()}</span>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Zap className="w-4 h-4 text-emerald-500" />
          </div>
          <div>
            <p className="text-sm text-slate-200 font-medium mb-1">
              {mode === 'day' 
                ? '⚡ Peak Performance: Your system is producing more energy than you need'
                : '🌙 Battery Powered: Running entirely on stored solar energy'
              }
            </p>
            <p className="text-xs text-slate-400">
              {mode === 'day'
                ? 'Excess energy is being stored and exported to the grid for credits.'
                : 'Your home stays powered through the night with clean stored energy.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
