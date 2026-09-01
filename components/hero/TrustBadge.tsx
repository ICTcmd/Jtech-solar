import React from 'react';
import { Zap } from 'lucide-react';

export function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-[#10b981]/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <Zap className="w-4 h-4 text-emerald-500" />
      <span className="text-sm font-medium text-[#f8fafc] tracking-wide uppercase">
        Next-Gen Residential Solar
      </span>
    </div>
  );
}
