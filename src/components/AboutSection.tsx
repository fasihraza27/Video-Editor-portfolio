import React, { useState } from 'react';
import { EDITOR_PROFILE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [customPortrait, setCustomPortrait] = useState<string | null>(null);
  const specialties = [
    {
      title: 'Short-Form Retention',
      desc: 'Hook engineering, rhythm variations, and kinetic transitions crafted specifically for vertical feeds.',
    },
    {
      title: 'Color Grading',
      desc: 'Film print emulation, balanced skin tones, and disciplined color palettes that enhance story mood.',
    },
    {
      title: 'Sound Design',
      desc: 'Layered Foley, clean vocal dynamics, and micro-impacts that give every visual cut physical weight.',
    },
    {
      title: 'Pacing & Narrative',
      desc: 'Stripping out dead air and shaping raw footage into a seamless, engaging emotional arc.',
    },
  ];

  const tools = [
    'Adobe Premiere Pro',
    'DaVinci Resolve Studio',
    'Adobe After Effects',
    'CapCut Pro',
    'Adobe Audition',
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-b border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Minimal Section Label */}
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          About
        </span>

        {/* 2-Column Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Short Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 group">
              <img
                src={customPortrait || EDITOR_PROFILE.portraitUrl}
                alt={EDITOR_PROFILE.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter contrast-[1.05]"
              />
              {/* Subtle hover option to upload / replace photo */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <label className="px-3 py-1.5 bg-white text-black text-xs font-medium rounded cursor-pointer hover:bg-neutral-200 transition-colors">
                  <span>Replace Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setCustomPortrait(url);
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-medium text-white">{EDITOR_PROFILE.name}</h3>
              <p className="text-xs text-neutral-400">{EDITOR_PROFILE.role} · {EDITOR_PROFILE.location}</p>
            </div>
          </div>

          {/* Right Column: Narrative, Specialties, Tools */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug">
                Every frame must justify its existence. Good editing is felt rather than noticed.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                {EDITOR_PROFILE.bio}
              </p>
            </div>

            {/* Specialties */}
            <div className="space-y-4 pt-6 border-t border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Specialties
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {specialties.map((item) => (
                  <div key={item.title} className="space-y-1.5">
                    <h4 className="text-sm font-medium text-white">{item.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Software &amp; Tools
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-neutral-300">
                {tools.map((tool, idx) => (
                  <span key={tool} className="flex items-center gap-2">
                    <span>{tool}</span>
                    {idx < tools.length - 1 && (
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
