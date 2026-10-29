import { useState } from 'react';
import { ArrowRight, Server, Cloud, Workflow, CheckCircle2, ChevronRight } from 'lucide-react';
import { stats, services } from '../data/companyData';

const practiceStyles = {
  'backend-mern': {
    Icon: Server,
    badgeClass: 'bg-amber-500/15 text-amber-300',
  },
  'cloud-advisory': {
    Icon: Cloud,
    badgeClass: 'bg-sky-500/15 text-sky-300',
  },
  'power-platform': {
    Icon: Workflow,
    badgeClass: 'bg-emerald-500/15 text-emerald-300',
  },
};

export default function Hero() {
  const [activeId, setActiveId] = useState(services[0].id);

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Column: Value Proposition (Immediate render for fast LCP) */}
          <div className="lg:col-span-7 space-y-6 animate-panel">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-stone border border-ink/10">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse motion-reduce:animate-none" />
              <span className="text-xs font-medium tracking-wide text-ink/85">
                Engineering &amp; Technology Consultancy • Est. 2022
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.08] text-balance">
              Backend systems, cloud reliability, and{' '}
              <span className="underline decoration-ink/25 decoration-2 underline-offset-8">
                workflow automation
              </span>{' '}
              for growing teams.
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
              TrimPoint Consulting delivers cohesive technical execution: we{' '}
              <strong className="font-semibold text-ink">build high-throughput backends</strong>,{' '}
              <strong className="font-semibold text-ink">govern cloud reliability &amp; compliance</strong>, and{' '}
              <strong className="font-semibold text-ink">automate enterprise operations</strong>.
              Direct co-founder engineering without agency handoff gaps.
            </p>

            {/* Primary CTAs & Micro-Reassurance */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 bg-ink text-cream px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-ink/85 transition-all shadow-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-ink bg-stone/80 hover:bg-stone border border-ink/15 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
                >
                  <span>Explore Blueprints</span>
                </a>
              </div>
              <p className="text-xs text-muted flex flex-wrap items-center gap-x-2 gap-y-1 font-mono pt-0.5">
                <span>✓ Direct co-founder technical scoping</span>
                <span>•</span>
                <span>Transparent milestone delivery</span>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Practice Accordion Console */}
          <div className="lg:col-span-5 animate-panel">
            <div className="bg-ink text-cream rounded-2xl p-6 sm:p-7 shadow-xl border border-ink">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/15">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-white/70">
                    Interactive Stack Explorer
                  </p>
                  <h2 className="text-base sm:text-lg font-semibold mt-0.5 text-white">
                    Click a Practice to Inspect
                  </h2>
                </div>
                <span className="font-mono text-xs text-white/70">3 Pillars</span>
              </div>

              <div className="space-y-3" role="group" aria-label="Interactive practice stack explorer">
                {services.map((service) => {
                  const style = practiceStyles[service.id] || practiceStyles['backend-mern'];
                  const IconComponent = style.Icon;
                  const isExpanded = activeId === service.id;
                  const panelId = `hero-panel-${service.id}`;

                  return (
                    <div
                      key={service.id}
                      className={`rounded-xl border transition-all duration-300 ${
                        isExpanded
                          ? 'bg-white/[0.08] border-white/30 shadow-md'
                          : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={panelId}
                        onClick={() => setActiveId(service.id)}
                        className="w-full text-left p-4 flex items-start gap-3.5 cursor-pointer rounded-xl focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
                      >
                        <div className={`p-2.5 rounded-lg mt-0.5 shrink-0 ${style.badgeClass}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-[10px] tracking-wider uppercase text-amber-300 font-medium">
                              {service.lifecycleStage}
                            </span>
                            <span className="font-mono text-xs font-medium text-white/70 shrink-0">
                              {service.number}
                            </span>
                          </div>
                          <h3 className="font-semibold text-sm text-white truncate mt-0.5">
                            {service.shortTitle}
                          </h3>
                          <p className="text-xs text-white/75 mt-1 leading-relaxed">
                            {service.heroSummary}
                          </p>
                        </div>
                      </button>

                      {/* Animated Expandable Stack Drawer */}
                      <div
                        id={panelId}
                        hidden={!isExpanded}
                        className={`px-4 pb-4 pt-1 border-t border-white/10 ${
                          isExpanded ? 'animate-panel' : ''
                        }`}
                      >
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {service.techStack.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/10 text-white/90"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 flex justify-end">
                          <a
                            href={`#${service.id}`}
                            className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:underline rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-300"
                          >
                            <span>View practice deliverables</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/75">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Led directly by practice co-founders
                </span>
                <span className="font-mono">Lagos • Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Concrete Trust Strip */}
        <div className="mt-12 pt-8 border-t border-ink/10 grid grid-cols-2 lg:grid-cols-4 gap-6 animate-panel">
          {stats.map((item) => (
            <div key={item.label} className="space-y-0.5">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-display">
                {item.value}
              </p>
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="text-xs text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}