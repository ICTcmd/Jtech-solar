import React from 'react';
import Image from 'next/image';
import { Star, Quote, Laugh } from 'lucide-react';

export function AboutOwner() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ══════════════════════════════════════════════════════
            PART 1 — Meet the Owner + His Funny Reel
        ══════════════════════════════════════════════════════ */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-4">
              Meet the Owner
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The man behind JTech Solar-Pro has a message for you — and it is hilarious.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Owner portrait — owner.jpg */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500/25 shadow-2xl shadow-emerald-500/5">
                <Image
                  src="/owner.jpg"
                  alt="JTech Solar-Pro Owner"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/65 via-transparent to-transparent" />
                {/* Name badge */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="backdrop-blur-md bg-slate-900/75 border border-slate-700 rounded-xl px-4 py-3">
                    <p className="text-sm font-bold text-[#f8fafc]">JTech Solar-Pro</p>
                    <p className="text-xs text-emerald-400">Founder &amp; Lead Solar Engineer</p>
                  </div>
                </div>
              </div>
              {/* Decorative glows */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Owner's funny reel about brownouts + stats + quote */}
            <div className="space-y-6">

              {/* Funny video card */}
              <div className="backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <Laugh className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#f8fafc]">
                      Why You Need Solar RIGHT NOW 😂
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      The owner explains it better than anyone — with proof from last night&apos;s brownout
                    </p>
                  </div>
                </div>

                {/* Video — reels.mp4 (owner's funny brownout reel) */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-800/60">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                    poster="/owner.jpg"
                    aria-label="Owner's funny video about why you need solar because of brownouts"
                  >
                    <source src="/reels.mp4" type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>

                {/* Context tag */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-orange-300 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                    ⚡ Brownout Reality Check
                  </span>
                  <span className="text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    😂 From the Owner Himself
                  </span>
                  <span className="text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700 px-3 py-1 rounded-full">
                    🇵🇭 Philippines
                  </span>
                </div>
              </div>

              {/* Owner quote */}
              <div className="backdrop-blur-md bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
                <Quote className="w-6 h-6 text-emerald-500/40 mb-3" />
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  &quot;Tired of losing power every time there&apos;s a brownout? I was too — so I built a business around fixing it. Solar is not just about saving money. It&apos;s about never being in the dark again.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 font-bold text-xs">JT</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#f8fafc]">JTech Solar-Pro</p>
                    <p className="text-xs text-slate-400">Founder &amp; CEO</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '500+', label: 'Installations' },
                  { value: '10+',  label: 'Years Exp.' },
                  { value: '98%',  label: 'Satisfaction' },
                ].map(s => (
                  <div key={s.label} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400">{s.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            PART 2 — Customer Review
        ══════════════════════════════════════════════════════ */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Real reviews from real Filipino homeowners who made the switch.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">

            {/* Review photo — solar-jtec-reviews.jpg */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/30 transition-colors min-h-[320px]">
              <Image
                src="/solar-jtec-reviews.jpg"
                alt="Happy customer after JTech Solar installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="backdrop-blur-md bg-slate-900/75 border border-slate-700 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    ))}
                    <span className="text-xs text-slate-300 ml-1.5 font-medium">5.0 / 5.0</span>
                  </div>
                  <p className="text-xs text-slate-200 font-medium">Verified Installation — Recent Customer</p>
                  <p className="text-xs text-slate-400 mt-0.5">JTech Solar-Pro • Philippines</p>
                </div>
              </div>
            </div>

            {/* Testimonial cards */}
            <div className="flex flex-col gap-5 justify-between">

              <div className="backdrop-blur-md bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-emerald-500/30 mb-3" />
                <p className="text-sm text-slate-200 leading-relaxed mb-5">
                  &quot;Napakagaling ng JTech Solar-Pro! Hindi na kami nagbabayad ng malaki sa Meralco. 
                  Kahit may brownout sa neighborhood, naka-on pa rin ang bahay namin. 
                  Highly recommended sa lahat ng Filipino families!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 text-xs font-bold">RC</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#f8fafc]">Verified Customer</p>
                    <p className="text-xs text-slate-400">Metro Manila, Philippines</p>
                  </div>
                </div>
              </div>

              {/* Second mini testimonial */}
              <div className="backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  &quot;Malaking savings na ang na-experience namin. Yung dating ₱8,000 monthly bill namin, 
                  naging ₱800 na lang. Ang galing ng JTech Solar-Pro!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-300 text-xs font-bold">ML</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#f8fafc]">Verified Customer</p>
                    <p className="text-xs text-slate-400">Quezon City, Philippines</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
