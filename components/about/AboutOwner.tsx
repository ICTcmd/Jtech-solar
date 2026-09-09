import React from 'react';
import Image from 'next/image';
import { Play, Star, Quote } from 'lucide-react';

export function AboutOwner() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ── PART 1: Meet the Owner ─────────────────────────────── */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-4">
              Meet the Owner
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The person behind JTech Solar-Pro — passionate about bringing reliable solar energy to every Filipino home.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Owner photo — owner.jpg */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
                {/* Name badge overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="backdrop-blur-md bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3">
                    <p className="text-sm font-bold text-[#f8fafc]">JTech Solar-Pro</p>
                    <p className="text-xs text-emerald-400">Founder &amp; Lead Solar Engineer</p>
                  </div>
                </div>
              </div>
              {/* Glow blobs */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Owner details */}
            <div className="space-y-6">
              <div className="backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8">
                <Quote className="w-8 h-8 text-emerald-500/40 mb-4" />
                <p className="text-lg text-slate-200 leading-relaxed mb-6">
                  &quot;We started JTech Solar-Pro because we were tired of watching Filipino families pay more and more every year for electricity. Solar is not a luxury — it is the smartest investment any homeowner can make, and we make it easy.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 font-bold text-sm">JT</span>
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
                  { value: '10+',  label: 'Years Experience' },
                  { value: '98%',  label: 'Satisfaction Rate' },
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

        {/* ── PART 2: Customer Video Review ─────────────────────── */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-4">
              Hear From Our Customers
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Real feedback from real Filipino homeowners who switched to JTech Solar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Video review — reels.mp4 */}
            <div className="backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Play className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#f8fafc]">Customer Review Video</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    ))}
                    <span className="text-xs text-slate-400 ml-1">5.0 / 5.0</span>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-800/60 flex-1">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  poster="/owner.jpg"
                  aria-label="Customer review video about JTech Solar installation"
                >
                  <source src="/reels.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Watch our customer walk through their JTech Solar installation and share their experience with energy savings and blackout protection.
              </p>
            </div>

            {/* Photo review — solar-jtec-reviews.jpg */}
            <div className="flex flex-col gap-5">
              <div className="relative flex-1 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/30 transition-colors min-h-[240px]">
                <Image
                  src="/solar-jtec-reviews.jpg"
                  alt="Customer review of recent JTech Solar installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="backdrop-blur-md bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-1 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-200 font-medium">Recent Installation — Verified Customer</p>
                    <p className="text-xs text-slate-400 mt-0.5">JTech Solar-Pro • Philippines</p>
                  </div>
                </div>
              </div>

              {/* Testimonial quote card */}
              <div className="backdrop-blur-md bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
                <Quote className="w-6 h-6 text-emerald-500/40 mb-3" />
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  &quot;Napakagaling ng JTech Solar-Pro! Hindi na kami nagbabayad ng malaki sa Meralco. Ang aming bahay ay protektado kahit may brownout. Highly recommended!&quot;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 text-xs font-bold">★</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#f8fafc]">Verified Customer</p>
                    <p className="text-xs text-slate-500">Metro Manila, Philippines</p>
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
