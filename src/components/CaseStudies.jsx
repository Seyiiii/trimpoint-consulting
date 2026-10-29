import { useState } from 'react';
import {
  Layers,
  CheckCircle2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { caseStudies } from '../data/companyData';
import Reveal from './Reveal';

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStudy = caseStudies[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="case-studies" className="py-16 lg:py-24 border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header & Interactive Selector Controls */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Reference Architectures
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Representative system blueprints.
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Select a practice blueprint below to inspect how we model backend APIs, cloud landing zones, and enterprise workflow automation.
            </p>
          </div>

          {/* Prev / Next Stepper Controls */}
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <span className="font-mono text-xs text-muted mr-2">
              Blueprint {activeStudy.number} of {String(caseStudies.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous architecture blueprint"
              className="p-2.5 rounded-full bg-stone text-ink hover:bg-ink hover:text-cream transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next architecture blueprint"
              className="p-2.5 rounded-full bg-stone text-ink hover:bg-ink hover:text-cream transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>

        {/* Interactive 3-Blueprint Selector Bar */}
        <Reveal delay={80} className="mt-8">
          <div
            role="group"
            aria-label="Select reference architecture blueprint"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {caseStudies.map((study, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={study.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40 ${
                    isSelected
                      ? 'bg-ink text-cream border-ink shadow-sm'
                      : 'bg-stone/70 text-ink border-ink/10 hover:bg-stone'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-xs font-medium ${
                        isSelected ? 'text-amber-300' : 'text-muted'
                      }`}
                    >
                      CASE {study.number}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        isSelected ? 'text-white/75' : 'text-muted'
                      }`}
                    >
                      {study.practice}
                    </span>
                  </div>
                  <p className="font-semibold text-sm mt-1 truncate">
                    {study.shortTab}
                  </p>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Single Active Blueprint View (Animated on Switch) */}
        <Reveal delay={140} className="mt-6">
          <div aria-live="polite">
            <article
              key={activeStudy.id}
              className="bg-white rounded-2xl border border-ink/10 p-6 sm:p-8 lg:p-10 shadow-xs animate-panel"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column: Blueprint Specifications */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-ink text-cream">
                      {activeStudy.practice}
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {activeStudy.clientType}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-tight">
                    {activeStudy.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {activeStudy.summary}
                  </p>

                  {/* Challenge & Solution Breakdown (Nearform Narrative Format) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <p className="text-[11px] font-mono uppercase tracking-wider font-semibold text-amber-800">
                        The Challenge
                      </p>
                      <p className="text-xs text-ink/85 mt-1.5 leading-relaxed">
                        {activeStudy.challenge}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <p className="text-[11px] font-mono uppercase tracking-wider font-semibold text-emerald-800">
                        The Design Approach
                      </p>
                      <p className="text-xs text-ink/85 mt-1.5 leading-relaxed">
                        {activeStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architecture Specifications */}
                  <div className="pt-1 space-y-2.5">
                    <p className="text-xs uppercase tracking-wider text-ink font-semibold flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      <span>Blueprint Specifications</span>
                    </p>
                    <ul className="space-y-2">
                      {activeStudy.architecture.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-ink/85"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {activeStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 rounded-md bg-cream border border-ink/10 text-ink/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Design Characteristics Box */}
                <div className="lg:col-span-5 bg-cream rounded-xl p-6 sm:p-7 border border-ink/10 flex flex-col justify-between h-full space-y-5">
                  <div className="flex items-center justify-between border-b border-ink/10 pb-3.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Design Characteristics
                    </span>
                    <span className="font-mono text-xs font-medium text-muted">
                      CASE {activeStudy.number}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    {activeStudy.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-4 rounded-lg bg-white border border-ink/10"
                      >
                        <p className="text-2xl sm:text-3xl font-bold text-ink font-display">
                          {metric.value}
                        </p>
                        <p className="text-xs font-medium text-muted mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:underline rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
                    >
                      <span>Discuss this architecture with our team</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
