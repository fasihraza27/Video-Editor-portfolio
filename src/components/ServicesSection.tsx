import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, Service } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const handleInquire = (service: Service) => {
    if (onSelectService) {
      onSelectService(service.title);
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 border-b border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Editing capabilities
          </h2>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            Specialized editing services tailored for creators, agencies, and modern brands.
          </p>
        </div>

        {/* 6 Services Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 rounded-xl border border-white/[0.08] hover:border-white/20 transition-colors group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>{service.turnaround}</span>
                </div>

                <h3 className="text-lg font-medium text-white group-hover:opacity-90">
                  {service.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {service.shortDesc}
                </p>

                <ul className="pt-3 space-y-1.5 text-xs text-neutral-400 font-light">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-neutral-600">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => handleInquire(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-neutral-300 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
