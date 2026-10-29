import { methodology, engagementModels } from '../data/companyData';
import Reveal from './Reveal';

export default function Methodology() {
  return (
    <section id="methodology" className="bg-ink text-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Tier 1: 4-Stage Delivery Lifecycle */}
        <div>
          <Reveal className="max-w-3xl space-y-3 mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-amber-300">
              Delivery &amp; Engagement
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How we take systems from blueprint to production.
            </h2>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed">
              Every project follows a disciplined four-stage engineering lifecycle to guarantee architecture integrity, predictable delivery, and seamless handover.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {methodology.map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl bg-slate border border-white/15 hover:border-white/35 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                        Stage
                      </span>
                      <span className="font-mono text-sm font-medium text-amber-300 px-2.5 py-0.5 rounded bg-white/10">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Tier 2: Commercial Engagement Models (Unrolled for full visibility) */}
        <div className="pt-10 border-t border-white/15">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="max-w-2xl space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-amber-300">
                Engagement Models
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Transparent commercial formats tailored to your roadmap.
              </h3>
            </div>
            <span className="font-mono text-xs text-white/70">
              Flexible Handovers • Milestone-Based
            </span>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((model, idx) => {
                const isFeatured = idx === 0;
                return (
                  <div
                    key={model.title}
                    className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                      isFeatured
                        ? 'bg-slate border-2 border-amber-300/60 shadow-lg relative'
                        : 'bg-slate border border-white/15 hover:border-white/35'
                    }`}
                  >
                    <div>
                      {isFeatured && (
                        <div className="mb-3">
                          <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded bg-amber-400 text-ink">
                            Recommended for New Builds
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {model.title}
                        </h4>
                      </div>
                      <span className="inline-block font-mono text-xs font-medium px-2.5 py-0.5 rounded bg-white/10 text-amber-300 mb-3">
                        {model.timeline}
                      </span>
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                        {model.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-white/10">
                      <a
                        href="#contact"
                        className="inline-flex items-center text-xs font-semibold text-white hover:text-amber-300 transition-colors"
                      >
                        <span>Discuss this model &rarr;</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
