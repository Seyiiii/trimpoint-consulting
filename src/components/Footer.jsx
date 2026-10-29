import { useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { companyInfo, services } from '../data/companyData';

export default function Footer() {
  const dialogRef = useRef(null);

  return (
    <footer className="bg-ink text-cream border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block">
              <p className="font-display text-2xl font-bold tracking-[0.28em] text-white uppercase">
                TRIMPOINT
              </p>
              <div className="flex items-center gap-3 mt-1">
                <span className="h-[1px] w-8 bg-white/50" />
                <span className="font-mono text-[11px] tracking-[0.25em] text-white/75 uppercase">
                  CONSULTING
                </span>
                <span className="h-[1px] w-8 bg-white/50" />
              </div>
            </div>

            <p className="text-sm text-white/75 max-w-sm leading-relaxed">
              Engineering-led IT services and technology consulting firm specializing in Backend &amp; MERN systems, cloud architecture advisory, and Microsoft Power Platform automation.
            </p>

            <p className="font-mono text-xs text-white/70">
              HQ: {companyInfo.headquarters} • Est. {companyInfo.founded}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-white/70">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="#capabilities"
                  className="hover:text-white transition-colors rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Core Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="hover:text-white transition-colors rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Reference Architectures
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="hover:text-white transition-colors rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Delivery Process
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  className="hover:text-white transition-colors rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Leadership &amp; Practice Leads
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Start a Conversation
                </a>
              </li>
            </ul>
          </div>

          {/* Practices (Deep-linked to each practice card ID) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-white/70">
              Practices &amp; Connect
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="hover:text-white transition-colors rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a
                href={companyInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-300 hover:underline rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <span>LinkedIn // TrimPoint Consulting</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Native Dialog Trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => dialogRef.current?.showModal()}
              className="underline hover:text-white cursor-pointer rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Privacy Policy
            </button>
            <span className="font-mono">{companyInfo.headquarters}</span>
          </div>
        </div>
      </div>

      {/* Native Accessible HTML <dialog> Modal */}
      <dialog
        ref={dialogRef}
        aria-labelledby="privacy-policy-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
        className="backdrop:bg-ink/80 backdrop:backdrop-blur-xs m-auto max-w-lg w-[calc(100%-2rem)] rounded-2xl p-0 bg-cream text-ink border border-ink/15 shadow-2xl"
      >
        <div className="space-y-4 p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-ink/10 pb-4">
            <h2 id="privacy-policy-title" className="text-lg font-bold text-ink">
              Privacy &amp; Data Protection Notice
            </h2>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close Privacy Policy"
              className="p-1.5 rounded-lg text-muted hover:text-ink hover:bg-ink/5 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="text-xs sm:text-sm text-muted space-y-3 leading-relaxed">
            <p>
              <strong className="text-ink">1. Data We Collect &amp; Purpose:</strong> When you submit an inquiry through our contact form, we collect your name, work email address, organization name, and project scope details solely to evaluate your technical requirements and respond to your request.
            </p>
            <p>
              <strong className="text-ink">2. Data Processing &amp; Sharing:</strong> Form submissions are processed via Formspree and delivered to our team inbox. TrimPoint Consulting never sells, rents, or trades your personal data.
            </p>
            <p>
              <strong className="text-ink">3. Retention &amp; Your Rights (NDPA):</strong> We retain inquiry records for up to 12 months. You may request access to, correction of, or deletion of your inquiry records at any time by contacting our data privacy lead at{' '}
              <a href={`mailto:${companyInfo.email}`} className="underline text-ink">
                {companyInfo.email}
              </a>
              .
            </p>
          </div>
          <div className="pt-3 border-t border-ink/10 flex justify-end">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="bg-ink text-cream px-5 py-2 rounded-full text-xs font-semibold cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </footer>
  );
}
