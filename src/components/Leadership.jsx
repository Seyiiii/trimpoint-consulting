import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { leadership, manifesto } from '../data/companyData';
import Reveal from './Reveal';

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 lg:py-24 bg-stone border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Engineering Principles &amp; Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Led by practicing engineers &amp; technical advisors.
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md leading-relaxed">
            Every TrimPoint engagement is architected and overseen directly by our co-founders across MERN backend systems, cloud infrastructure, and Microsoft Power Platform.
          </p>
        </Reveal>

        {/* Engineering Manifesto Grid */}
        <Reveal delay={60} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {manifesto.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-2xl bg-white/75 border border-ink/10 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-amber-800">
                      PRINCIPLE // {item.number}
                    </span>
                    <span className="text-[11px] font-medium text-muted">
                      {item.tagline}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-ink mt-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Co-Founders Header */}
        <Reveal delay={100} className="mt-14 pt-8 border-t border-ink/10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Practice Co-Founders
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1">
              Direct engineering involvement from day one.
            </h3>
          </div>
          <span className="font-mono text-xs text-muted">
            3 Functional Pillars • Co-Founder-Led Delivery
          </span>
        </Reveal>

        {/* Leadership Cards Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {leadership.map((member, idx) => (
            <Reveal key={member.name} delay={idx * 80}>
              <div className="h-full bg-white rounded-2xl border border-ink/10 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-ink/30 hover:-translate-y-1 transition-all duration-300">
                <div>
                  {/* Avatar / Headshot + Practice Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    {member.avatarUrl ? (
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        width="52"
                        height="52"
                        className="w-13 h-13 rounded-2xl object-cover border border-ink/10"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="w-13 h-13 rounded-2xl bg-gradient-to-br from-ink to-slate text-cream flex items-center justify-center font-display font-bold text-base tracking-wider shadow-xs ring-4 ring-stone"
                      >
                        {getInitials(member.name)}
                      </div>
                    )}
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-stone text-ink/85">
                      {member.practice}
                    </span>
                  </div>

                  {/* Name & Exact Functional Title */}
                  <h3 className="text-xl font-bold text-ink">{member.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-ink/80">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Core Domains */}
                  <div className="mt-5 pt-5 border-t border-ink/10">
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs px-2.5 py-0.5 rounded bg-cream border border-ink/10 text-ink/85"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dynamic Role Badge & LinkedIn Profile Link */}
                <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{member.roleBadge}</span>
                  </span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn Profile`}
                    className="group inline-flex items-center gap-1 text-xs font-semibold text-ink hover:underline rounded px-1 py-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40 shrink-0"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
