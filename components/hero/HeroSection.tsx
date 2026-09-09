import React from 'react';
import Image from 'next/image';
import { TrustBadge } from './TrustBadge';
import { RoofEstimator } from './RoofEstimator';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900/10 to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjQ4LCAyNTAsIDI1MiwgMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      {/* Solar installation photos — subtle floating thumbnails (desktop only) */}
      <div className="hidden xl:block absolute top-20 right-[52%] w-40 h-28 rounded-xl overflow-hidden opacity-20 rotate-[-3deg] border border-slate-700">
        <Image src="/aboutsolar.jpg" alt="" fill className="object-cover" aria-hidden="true" />
      </div>
      <div className="hidden xl:block absolute bottom-24 right-[52%] w-36 h-24 rounded-xl overflow-hidden opacity-15 rotate-[2deg] border border-slate-700">
        <Image src="/aboutsolar1.jpg" alt="" fill className="object-cover" aria-hidden="true" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Copy */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/jtehlogo.jpg"
                alt="JTech Solar-Pro Logo"
                width={300}
                height={120}
                className="h-24 md:h-28 lg:h-32 w-auto"
                priority
              />
            </div>
            
            <TrustBadge />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f8fafc] leading-[1.1]">
              Power Your Home with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Intelligent, Guaranteed Solar
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Lock in your energy costs for 25 years while utility rates rise. 
              Premium solar systems designed for modern homes, backed by industry-leading warranties.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">25-Year</div>
                  <div className="text-xs text-slate-400">Production Guarantee</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">Premium</div>
                  <div className="text-xs text-slate-400">Tier-1 Equipment</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">₱0 Down</div>
                  <div className="text-xs text-slate-400">Financing Available</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Estimator */}
          <div className="lg:sticky lg:top-8">
            <RoofEstimator />
          </div>
        </div>
      </div>
    </section>
  );
}
