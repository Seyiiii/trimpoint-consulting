import { Check, Server, Cloud, Workflow } from 'lucide-react';
import { services } from '../data/companyData';
import Reveal from './Reveal';

const iconMap = {
  'backend-mern': Server,
  'cloud-advisory': Cloud,
  'power-platform': Workflow,
};

export default function Services() {
  return (
    <section id="capabilities" className="bg-ink text-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-300">
            Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Three specialized practices. One cohesive engineering standard.
          </h2>
          <p className="text-base text-white/75 leading-relaxed">
            Whether designing backend APIs from scratch, governing cloud infrastructure, or automating cross-departmental workflows, we build maintainable production systems.
          </p>
        </Reveal>

        {/* 3 Practice Pillars Grid (Compact + Hover Lift + Deep-Link IDs) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.id] || Server;
            return (
              <Reveal key={service.id} delay={idx * 80}>
                <div
                  id={service.id}
                  className="h-full bg-slate border border-white/15 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/35 hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Top metadata */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="space-y-1">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-amber-300 font-semibold block">
                          {service.lifecycleStage}
                        </span>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/85 border border-white/15 inline-block">
                          {service.category}
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/10 text-white self-start">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-white/75 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables */}
                    <div className="mt-5 pt-5 border-t border-white/15 space-y-2.5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                        Key Deliverables
                      </p>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 pt-5 border-t border-white/15">
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2.5 py-0.5 rounded bg-white/10 text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}