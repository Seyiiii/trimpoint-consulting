import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Blueprints', href: '#case-studies' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'Leadership', href: '#leadership' },
];

const sectionIds = [...navLinks.map((link) => link.href.slice(1)), 'contact'];

function useScrollState(ids) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = null;
      let best = -Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= line && top > best) {
          best = top;
          current = id;
        }
      }
      setScrolled((prev) => (prev ? window.scrollY > 8 : window.scrollY > 48));
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids]);

  return { scrolled, activeId };
}

function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ transform: 'scaleX(0)' }}
      className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-ink motion-reduce:hidden"
    />
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const linkRefs = useRef([]);
  const barRef = useRef(null);
  const menuButtonRef = useRef(null);

  const { scrolled, activeId } = useScrollState(sectionIds);
  const activeIndex = navLinks.findIndex((link) => link.href === `#${activeId}`);
  const targetIndex = hoveredIndex ?? (activeIndex >= 0 ? activeIndex : null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useLayoutEffect(() => {
    const updateBar = () => {
      const bar = barRef.current;
      const el = targetIndex === null ? null : linkRefs.current[targetIndex];
      if (!bar) return;
      if (!el) {
        bar.style.opacity = '0';
        return;
      }
      const first = !bar.dataset.ready;
      if (first) bar.style.transition = 'none';
      const isScaled = hoveredIndex !== null && hoveredIndex === targetIndex;
      const scaleFactor = isScaled ? 1.06 : 1;
      const width = el.offsetWidth * scaleFactor;
      const left = el.offsetLeft - (width - el.offsetWidth) / 2;

      bar.style.transform = `translateX(${left}px)`;
      bar.style.width = `${width}px`;
      bar.style.opacity = '1';
      if (first) {
        bar.getBoundingClientRect();
        bar.style.transition = '';
        bar.dataset.ready = '1';
      }
    };

    updateBar();
    document.fonts?.ready.then(updateBar);
    window.addEventListener('resize', updateBar);
    return () => window.removeEventListener('resize', updateBar);
  }, [targetIndex, hoveredIndex]);

  return (
    <>
      <div aria-hidden="true" className="h-20" />
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-cream/95 backdrop-blur-md border-b transition-all duration-300 ${
          hoveredIndex !== null || scrolled ? 'border-ink/20 shadow-xs' : 'border-ink/10'
        }`}
      >
        {/* Skip to Main Content Link for Keyboard Users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:bg-ink focus:text-cream focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <div
          className={`max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          {/* Crisp Vector Brand Wordmark */}
          <a
            href="#"
            aria-label="TrimPoint Consulting Home"
            className="inline-flex flex-col items-center rounded-lg p-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40 group"
          >
            <svg
              width="184"
              height="42"
              viewBox="0 0 184 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            >
              <text
                x="92"
                y="19"
                textAnchor="middle"
                fill="#141413"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="700"
                fontSize="16"
                letterSpacing="0.28em"
              >
                TRIMPOINT
              </text>
              <line x1="20" y1="32" x2="46" y2="32" stroke="#5C5B57" strokeWidth="1" />
              <text
                x="92"
                y="35"
                textAnchor="middle"
                fill="#5C5B57"
                fontFamily="'Inter', sans-serif"
                fontWeight="400"
                fontSize="8.5"
                letterSpacing="0.22em"
              >
                CONSULTING
              </text>
              <line x1="138" y1="32" x2="164" y2="32" stroke="#5C5B57" strokeWidth="1" />
            </svg>
          </a>

          {/* Desktop Nav: Scroll-Spy + Spotlight Pop-Out + Gliding Black Underline */}
          <nav
            aria-label="Primary Navigation"
            onPointerLeave={(e) => {
              if (e.pointerType === 'mouse') setHoveredIndex(null);
            }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setHoveredIndex(null);
              }
            }}
            className="hidden md:flex items-center gap-8 relative py-2"
          >
            {/* Gliding Black Underline */}
            <span
              ref={barRef}
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0.5 left-0 h-[2.5px] w-0 opacity-0 rounded-full bg-ink transition-[transform,width,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            />

            {navLinks.map((link, index) => {
              const isHovered = hoveredIndex === index;
              const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
              const isActive = activeIndex === index;

              return (
                <a
                  key={link.name}
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  onPointerEnter={(e) => {
                    if (e.pointerType === 'mouse') setHoveredIndex(index);
                  }}
                  onFocus={(e) => {
                    if (e.currentTarget.matches(':focus-visible')) {
                      setHoveredIndex(index);
                    }
                  }}
                  className={`relative z-10 inline-block text-sm font-semibold py-1.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40 ${
                    isHovered
                      ? 'text-ink -translate-y-0.5 scale-[1.06]'
                      : isDimmed
                        ? 'text-ink/60 scale-[0.98]'
                        : isActive
                          ? 'text-ink'
                          : 'text-ink/75'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-ink text-cream px-5 py-2.5 text-sm font-medium rounded-full hover:bg-ink/85 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2.5 text-ink rounded-lg hover:bg-ink/5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Smooth Animated Mobile Dropdown (Mounts once, animates height in & out) */}
        <div
          className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
            mobileMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <nav
            id="mobile-navigation"
            aria-label="Mobile Navigation"
            inert={!mobileMenuOpen || undefined}
            className="overflow-hidden bg-cream"
          >
            <div className="border-t border-ink/10 px-6 py-5 space-y-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-medium text-ink/85 hover:text-ink py-2.5 rounded focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
              <div className="pt-2 border-t border-ink/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-ink text-cream px-5 py-3 text-sm font-medium rounded-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink/40"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Scroll Progress Line */}
        <ScrollProgress />
      </header>
    </>
  );
}