import React from 'react';
import Image from 'next/image';
import { ShieldCheck, TrendingDown, Zap, Sun, Home, Leaf } from 'lucide-react';

const REASONS = [
  {
    icon: TrendingDown,
    title: 'Beat Rising Meralco Rates',
    desc: 'Philippine electricity rates rise 8–12% every year. Solar locks your cost at zero inflation for 25 years.',
  },
  {
    icon: ShieldCheck,
    title: 'Blackout-Proof Your Home',
    desc: 'When the grid goes dark, your battery keeps essential circuits running — lights, fridge, WiFi, all of it.',
  },
  {
    icon: Zap,
    title: 'Generate Your Own Power',
    desc: 'Panels produce clean electricity all day. Excess charges your battery or earns net-metering credits.',
  },
  {
    icon: Home,
    title: 'Increase Property Value',
    desc: 'Homes with solar sell faster and at higher prices. It is one of the smartest upgrades you can make.',
  },
  {
    icon: Sun,
    title: 'Perfect Climate for Solar',
    desc: 'The Philippines averages 5–6 peak sun hours daily — among the best solar resources in Southeast Asia.',
  },
  {
    icon: Leaf,
    title: 'Clean Energy, Clear Conscience',
    desc: 'Offset tonnes of CO₂ every year. Teach your kids what sustainable living looks like.',
  },
];

export function WhySolar() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-4">
            Why Choose Solar?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Every Filipino home can benefit from solar energy. Here is exactly why now is the right time.
          </p>
        </div>

        {/* Photo strip — why solar images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-14">
          {[
            { src: '/why-solar.jpg',   alt: 'Solar panels powering a Filipino home' },
            { src: '/why-solar-1.jpg', alt: 'Clean solar energy installation' },
            { src: '/why-solar-2.jpg', alt: 'Battery storage system' },
            { src: '/why-solar-3.jpg', alt: 'Solar array on residential rooftop' },
            { src: '/why-solar-4.jpg', alt: 'Smart solar monitoring system' },
          ].map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              {/* Subtle emerald tint on hover */}
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.06)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-base font-semibold text-[#f8fafc] mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
