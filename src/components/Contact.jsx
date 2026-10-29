import { useState } from 'react';
import {
  MapPin,
  Mail,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Send,
} from 'lucide-react';
import { companyInfo, services } from '../data/companyData';
import Reveal from './Reveal';

const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    practice: services[0].shortTitle,
    timeline: 'Immediate (Next 2 – 4 weeks)',
    budget: 'Flexible / To be determined',
    message: '',
    _gotcha: '', // Honeypot field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sanitizeHeader = (val) => String(val || '').replace(/[\r\n]+/g, ' ').trim();

  const buildMailtoHref = () => {
    const cleanPractice = sanitizeHeader(formData.practice);
    const cleanName = sanitizeHeader(formData.name) || 'Prospective Client';
    const cleanOrg = sanitizeHeader(formData.organization) || 'N/A';
    const cleanTimeline = sanitizeHeader(formData.timeline);
    const cleanBudget = sanitizeHeader(formData.budget);

    const subject = encodeURIComponent(
      `[${cleanPractice}] Technical Inquiry from ${cleanName}`
    );
    const body = encodeURIComponent(
      `Name: ${cleanName}\nEmail: ${sanitizeHeader(formData.email)}\nOrganization: ${cleanOrg}\nPractice Area: ${cleanPractice}\nTarget Timeline: ${cleanTimeline}\nBudget: ${cleanBudget}\n\nProject Scope & Success Criteria:\n${formData.message}`
    );
    return `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData._gotcha) {
      return;
    }

    setStatus('sending');

    try {
      if (!FORM_ENDPOINT) {
        throw new Error('Form endpoint not configured');
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          organization: formData.organization.trim(),
          practice: formData.practice,
          timeline: formData.timeline,
          budget: formData.budget,
          message: formData.message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Discovery Process & Lagos HQ Info */}
          <Reveal className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Start a Conversation
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                Discuss your system architecture with us.
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Connect directly with our practice leads to review your backend engineering, cloud roadmap, or Power Platform automation goals.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-3.5">
              <div className="p-5 rounded-2xl bg-stone/80 border border-ink/10 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-ink text-cream shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink">How We Start</h3>
                  <ol className="text-xs sm:text-sm text-muted mt-1.5 space-y-1 list-decimal list-inside leading-relaxed">
                    <li>Share your project objectives using the intake form.</li>
                    <li>Receive a scoped technical architecture &amp; delivery roadmap.</li>
                    <li>Begin iterative execution with milestone reviews.</li>
                  </ol>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-stone/80 border border-ink/10 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-ink text-cream shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink">Headquarters &amp; Delivery</h3>
                  <p className="text-sm text-muted mt-0.5">
                    {companyInfo.headquarters}
                  </p>
                  <p className="font-mono text-xs text-muted mt-0.5">
                    {companyInfo.deliveryModel}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-stone/80 border border-ink/10 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-ink text-cream shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink">Direct Email &amp; LinkedIn</h3>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm text-muted hover:text-ink underline mt-0.5 block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40 rounded"
                  >
                    {companyInfo.email}
                  </a>
                  <a
                    href={companyInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-ink mt-1.5 hover:underline rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
                  >
                    <span>Official LinkedIn Company Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <Reveal delay={100} className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-ink/10 p-6 sm:p-8 shadow-xs">
              {status === 'success' ? (
                <div className="py-10 text-center space-y-4 animate-panel" role="status" aria-live="polite">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">
                    Inquiry Sent Successfully
                  </h3>
                  <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-ink">{formData.name}</strong>. Your inquiry for the{' '}
                    <strong className="text-ink">{formData.practice}</strong> practice ({formData.timeline}) has been received. Our practice leads will review your criteria and respond with a tailored delivery roadmap shortly.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          name: '',
                          email: '',
                          organization: '',
                          practice: services[0].shortTitle,
                          timeline: 'Immediate (Next 2 – 4 weeks)',
                          budget: 'Flexible / To be determined',
                          message: '',
                          _gotcha: '',
                        });
                        setStatus('idle');
                      }}
                      className="text-xs font-mono uppercase tracking-wider underline text-ink cursor-pointer rounded px-2 py-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-ink/10 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-ink">Tell us about your project</h3>
                    <p className="text-xs text-muted mt-1">Takes about two minutes • Reviewed directly by practice leads</p>
                  </div>

                  {/* Honeypot field hidden from screen readers and visual users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_gotcha">Do not fill this field</label>
                    <input
                      id="_gotcha"
                      name="_gotcha"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData._gotcha}
                      onChange={handleChange}
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-ink space-y-2 animate-panel"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm space-y-1.5">
                          <p className="font-semibold text-ink">
                            We couldn&apos;t send this automatically.
                          </p>
                          <p className="text-muted">
                            Your details are still filled in below. Use this link to email us directly instead:
                          </p>
                          <a
                            href={buildMailtoHref()}
                            className="inline-flex items-center gap-1.5 font-semibold text-ink underline pt-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40 rounded"
                          >
                            <span>Open pre-filled email to {companyInfo.email}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-sm text-ink focus:outline-hidden focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/40"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1.5"
                      >
                        Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-sm text-ink focus:outline-hidden focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1.5"
                    >
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      autoComplete="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Company Ltd."
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-sm text-ink focus:outline-hidden focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/40"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="practice"
                        className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1.5"
                      >
                        Target Practice Area *
                      </label>
                      <select
                        id="practice"
                        name="practice"
                        value={formData.practice}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-sm text-ink focus:outline-hidden focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/40"
                      >
                        {services.map((service) => (
                          <option key={service.id} value={service.shortTitle}>
                            {service.shortTitle}
                          </option>
                        ))}
                        <option value="Full-Scope Technical Advisory">
                          Full-Scope Technical Advisory
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1.5"
                      >
                        Engagement Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-sm text-ink focus:outline-hidden focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/40"
                      >
                        <option value="Immediate (Next 2 – 4 weeks)">Immediate (Next 2 – 4 weeks)</option>
                        <option value="Upcoming (1 – 3 months)">Upcoming (1 – 3 months)</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1.5"
                    >
                      Approximate Budget (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-sm text-ink focus:outline-hidden focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/40"
                    >
                      <option value="Flexible / To be determined">Flexible / To be determined</option>
                      <option value="< $5,000 (Focused Audit / Sprint)">&lt; $5,000 (Focused Audit / Sprint)</option>
                      <option value="$5,000 – $15,000 (Fixed-Scope Build)">$5,000 – $15,000 (Fixed-Scope Build)</option>
                      <option value="$15,000+ (Multi-Pillar / Retainer)">$15,000+ (Multi-Pillar / Retainer)</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold uppercase tracking-wider text-ink"
                      >
                        What does success look like for this project? *
                      </label>
                      <span className="font-mono text-[11px] text-muted">
                        Max 1500 chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={1500}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your system architecture goals, key deliverables, constraints, or current bottlenecks..."
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border border-ink/15 text-sm text-ink focus:outline-hidden focus:border-ink focus-visible:ring-2 focus-visible:ring-ink/40"
                    />
                  </div>

                  <p className="text-xs text-muted leading-relaxed">
                    Submissions are processed by Formspree and delivered to our team inbox ({companyInfo.email}) solely to respond to your inquiry. We retain inquiry records for up to 12 months and never sell your data.
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-ink text-cream px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-ink/85 disabled:opacity-60 transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2"
                  >
                    <span>
                      {status === 'sending' ? 'Sending Inquiry...' : 'Send Technical Inquiry'}
                    </span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
