import React from 'react';
import Image from 'next/image';
import { Play, Star } from 'lucide-react';

export function AboutOwner() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f8fafc] mb-4">
            Real Results, Real Reviews
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            See what our satisfied customers say about their solar installations and energy savings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Customer Installation Photo */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-emerald-500/20 shadow-2xl">
              <Image
                src="/owner.jpg"
                alt="Happy JTech Solar Customer Installation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              {/* Emerald glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>

          {/* Customer Video Review */}
          <div className="space-y-6">
            <div className="backdrop-blur-md bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#f8fafc]">Customer Success Story</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/owner.jpg"
                >
                  <source src="/reels.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="text-sm text-slate-300 mt-4">
                Watch how our customer shares their experience with JTech Solar installation 
                and the amazing energy savings they&apos;re enjoying.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-emerald-500">500+</div>
                <div className="text-xs text-slate-400 mt-1">Installations</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-emerald-500">10+</div>
                <div className="text-xs text-slate-400 mt-1">Years Experience</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-emerald-500">98%</div>
                <div className="text-xs text-slate-400 mt-1">Satisfaction</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
              <p className="text-slate-200 mb-3">
                &quot;Dedicated to bringing clean, affordable energy to every Filipino home. 
                Our mission is to make solar accessible and reliable for all.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-500 font-bold">JT</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#f8fafc]">JTech Solar-Pro Team</div>
                  <div className="text-xs text-slate-400">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#f8fafc] mb-8 text-center">
            Our Recent Installations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-colors">
              <Image
                src="/aboutsolar.jpg"
                alt="Solar panel installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-colors">
              <Image
                src="/aboutsolar1.jpg"
                alt="Solar panel installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-colors">
              <Image
                src="/solar jtec reviews.jpg"
                alt="Customer review and installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
