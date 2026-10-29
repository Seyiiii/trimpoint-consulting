# TrimPoint Consulting — Complete Codebase Snapshot (v6)

This document contains the complete, consolidated source code for the **TrimPoint Consulting** website (React + Vite + Tailwind CSS v4).

---

## 1. Project Structure

```text
Trimpoint_Consulting/
├── public/
│   ├── favicon.svg
│   └── logo.jpg
├── src/
│   ├── components/
│   │   ├── Reveal.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Methodology.jsx
│   │   ├── Leadership.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── companyData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

## 2. Configuration & Entry Files

### `package.json`

```json
{
  "name": "trimpoint-consulting",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "lucide-react": "^1.55.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "tailwindcss": "^4.3.3"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "eslint": "^10.10.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.6",
    "globals": "^17.12.0",
    "vite": "^8.3.0"
  }
}
```

---

### `vite.config.js`

```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

### `public/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#141413" />
  <!-- T Letterform -->
  <path
    d="M14.5 19h17v4.8h-6v17.2h-5V23.8h-6V19z"
    fill="#FAF8F5"
  />
  <!-- P Letterform -->
  <path
    d="M33.5 19h11.5c3.6 0 6.5 2.6 6.5 6s-2.9 6-6.5 6H38.5v10h-5V19zm5 7.5h6.2c1.2 0 2-.8 2-1.5s-.8-1.5-2-1.5H38.5v3z"
    fill="#FAF8F5"
  />
  <!-- Amber Accent Underline -->
  <line x1="16" y1="46" x2="48" y2="46" stroke="#FCD34D" stroke-width="2.5" stroke-linecap="round" />
</svg>
```

---

### `index.html`

```html
<!doctype html>
<html lang="en" class="motion-safe:scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/logo.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#FAF8F5" />
    <link rel="canonical" href="https://www.trimpointconsulting.com.ng/" />

    <title>TrimPoint Consulting | Backend, Cloud &amp; Power Platform Engineering</title>
    <meta
      name="description"
      content="TrimPoint Consulting delivers MERN backend engineering, cloud reliability &amp; technical advisory, and Microsoft Power Platform automation for growing Nigerian and global teams."
    />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="TrimPoint Consulting" />
    <meta property="og:title" content="TrimPoint Consulting | Backend, Cloud &amp; Power Platform Engineering" />
    <meta
      property="og:description"
      content="Engineering-led technology consultancy specializing in Node.js/MERN backend systems, cloud reliability advisory, and Microsoft Power Platform automation."
    />
    <meta property="og:url" content="https://www.trimpointconsulting.com.ng/" />
    <meta property="og:image" content="https://www.trimpointconsulting.com.ng/logo.jpg" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="TrimPoint Consulting | Backend, Cloud &amp; Power Platform Engineering" />
    <meta
      name="twitter:description"
      content="Backend systems, cloud reliability, and workflow automation for growing Nigerian and global teams."
    />
    <meta name="twitter:image" content="https://www.trimpointconsulting.com.ng/logo.jpg" />

    <!-- Google Fonts (trimmed to used weights only) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700&display=swap"
      rel="stylesheet"
    />

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TrimPoint Consulting",
        "url": "https://www.trimpointconsulting.com.ng",
        "logo": "https://www.trimpointconsulting.com.ng/logo.jpg",
        "foundingDate": "2022",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressRegion": "Lagos State",
          "addressCountry": "NG"
        },
        "sameAs": [
          "https://www.linkedin.com/company/trimpointconsulting/"
        ]
      }
    </script>
  </head>
  <body class="antialiased selection:bg-ink selection:text-cream">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

### `src/index.css`

```css
@import "tailwindcss";

@theme {
  --color-cream: #FAF8F5;
  --color-stone: #F0ECE3;
  --color-ink: #141413;
  --color-slate: #1E1E1C;
  --color-muted: #5C5B57;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

@layer base {
  body {
    font-family: var(--font-sans);
    background-color: var(--color-cream);
    color: var(--color-ink);
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--font-display);
  }

  section[id],
  main[id],
  div[id] {
    scroll-margin-top: 5.5rem;
  }
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-panel {
  animation: fadeSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .animate-panel {
    animation: none;
  }
}
```

---

### `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

### `src/App.jsx`

```jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Methodology from './components/Methodology';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Services />
        <CaseStudies />
        <Methodology />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

---

## 3. Data Layer

### `src/data/companyData.js`

```javascript
export const companyInfo = {
  name: 'TrimPoint Consulting',
  founded: '2022',
  headquarters: 'Lagos, Nigeria',
  deliveryModel: 'Remote-First • Nigerian & Global Teams',
  linkedinUrl: 'https://www.linkedin.com/company/trimpointconsulting/',
  email: 'contact@trimpointconsulting.com.ng',
};

export const manifesto = [
  {
    number: '01',
    title: 'Senior-Led Execution',
    tagline: 'Co-Founder-Led Delivery',
    description:
      'Co-founder-led delivery from architecture through deployment. Every API contract, cloud landing zone, and workflow model is engineered and reviewed directly by our practice leads.',
  },
  {
    number: '02',
    title: 'Boring, Resilient Technology',
    tagline: 'Production-First Stacks',
    description:
      'We value operational stability over fragile tech fads. We build on battle-tested foundations (Node.js, MongoDB, Google Cloud, Microsoft Dataverse) that survive real traffic.',
  },
  {
    number: '03',
    title: 'Full-Lifecycle Cohesion',
    tagline: 'Build • Run • Automate',
    description:
      'We eliminate vendor fragmentation by uniting the complete stack: architecting the backend, governing cloud infrastructure, and automating manual enterprise processes.',
  },
];

export const stats = [
  {
    value: 'WAT / UTC+1',
    label: 'Lagos & Remote-First',
    detail: 'Overlaps West Africa, UK & European Hours',
  },
  {
    value: 'Scoped',
    label: 'Technical Discovery',
    detail: 'Direct Architecture Review with Leads',
  },
  {
    value: 'Flexible',
    label: 'Engagement Scope',
    detail: 'Fixed-Scope Builds, Retainers & Audits',
  },
  {
    value: 'End-to-End',
    label: 'Full-Lifecycle Delivery',
    detail: 'From Schema & Cloud Design to Handover',
  },
];

export const services = [
  {
    id: 'backend-mern',
    number: '01',
    lifecycleStage: 'Lifecycle Stage 01 // Build',
    category: 'Core Software & API Engineering',
    shortTitle: 'Backend & Full-Stack MERN',
    title: 'Backend Systems & Full-Stack MERN Architecture',
    heroSummary:
      'High-throughput Node.js & Express APIs, MongoDB aggregation pipelines, and responsive React operational portals.',
    description:
      'We architect and build resilient backend services, RESTful & event-driven APIs, and modern React web applications designed for scale, security, and long-term maintainability.',
    deliverables: [
      'Distributed Node.js & Express API Services',
      'MongoDB Schema Design, Indexing & Aggregations',
      'Authentication, RBAC, Rate-Limiting & API Security',
      'Interactive React Dashboards & Internal Tooling',
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'REST APIs', 'TypeScript', 'Redis', 'Docker'],
  },
  {
    id: 'cloud-advisory',
    number: '02',
    lifecycleStage: 'Lifecycle Stage 02 // Run',
    category: 'Cloud Architecture & Reliability',
    shortTitle: 'Cloud Strategy & Reliability',
    title: 'Enterprise Cloud Architecture & Technical Advisory',
    heroSummary:
      'Cloud landing zones, Kubernetes orchestration, SRE reliability governance, and FinOps cost optimization.',
    description:
      'Led by enterprise technical account management expertise, we guide organizations through cloud adoption, multi-region resilience, FinOps cost control, and operational excellence.',
    deliverables: [
      'Cloud Landing Zones & Multi-Environment Architecture',
      'Site Reliability Engineering (SRE) & SLA Governance',
      'Cloud Readiness Audits & Technical Roadmaps',
      'Container Orchestration (Kubernetes) & CI/CD Pipelines',
    ],
    techStack: ['Google Cloud (GCP)', 'Kubernetes', 'Terraform', 'Cloud Run', 'BigQuery', 'IAM & Security', 'Observability'],
  },
  {
    id: 'power-platform',
    number: '03',
    lifecycleStage: 'Lifecycle Stage 03 // Automate',
    category: 'Enterprise Process Automation',
    shortTitle: 'Power Platform & Automation',
    title: 'Microsoft Power Platform & Workflow Automation',
    heroSummary:
      'Custom Power Apps, Power Automate cloud flows, Microsoft Dataverse governance, and Power BI analytics.',
    description:
      'We eliminate manual operational bottlenecks by engineering governed enterprise applications, automated approval engines, and executive analytics across the Microsoft ecosystem.',
    deliverables: [
      'Custom Canvas & Model-Driven Power Apps',
      'Automated Multi-System Workflows (Power Automate)',
      'Microsoft Dataverse Architecture & CoE Governance',
      'Executive KPI Reporting & Analytics with Power BI',
    ],
    techStack: ['Power Apps', 'Power Automate', 'Microsoft Dataverse', 'Power BI', 'SharePoint', 'Azure Logic Apps', 'Copilot Studio'],
  },
];

export const engagementModels = [
  {
    title: 'Fixed-Scope Architecture & Build',
    timeline: '4 – 10 Weeks',
    description:
      'Ideal for greenfield API backends, custom Power Apps portals, or cloud migrations with clearly defined deliverables and milestone handovers.',
  },
  {
    title: 'Dedicated Engineering Retainer',
    timeline: 'Monthly Sprint Cadence',
    description:
      'Ongoing backend feature velocity, workflow automation expansion, and continuous cloud reliability improvements alongside your internal team.',
  },
  {
    title: 'Technical Advisory & Systems Audit',
    timeline: '1 – 3 Weeks',
    description:
      'Focused architecture reviews, MongoDB query & schema optimization, cloud FinOps cost audits, and Power Platform governance blueprints.',
  },
];

export const caseStudies = [
  {
    id: 'fintech-api-engine',
    number: '01',
    practice: 'Backend & MERN Engineering',
    shortTab: 'Transaction Ledger API',
    clientType: 'Reference Blueprint • Financial Ledger & APIs',
    title: 'High-Throughput Transaction Ledger & Settlement API',
    summary:
      'Reference Node.js and MongoDB backend architecture designed for concurrent merchant settlements, idempotent webhook processing, and real-time React reconciliation views.',
    challenge:
      'Preventing ledger race conditions during concurrent settlements, avoiding un-indexed MongoDB collection scans, and providing instantaneous dispute reconciliation views.',
    solution:
      'Designs an atomic, idempotent Node.js ledger service utilizing MongoDB compound index aggregations, cryptographic webhook verification, and modular React operations queues.',
    metrics: [
      { value: 'Sub-100ms', label: 'Target Indexed Query Design' },
      { value: 'Idempotent', label: 'Webhook & Ledger State Model' },
    ],
    architecture: [
      'Designs compound MongoDB indexes and aggregation pipelines for low-latency ledger lookups.',
      'Specifies JWT + HMAC request signing, role-based access control, and structured audit logging.',
      'Pairs the API layer with a modular React operations portal for live queue monitoring.',
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'REST API', 'JWT Security'],
  },
  {
    id: 'gcp-cloud-modernization',
    number: '02',
    practice: 'Cloud Advisory & Infrastructure',
    shortTab: 'Cloud Landing Zone',
    clientType: 'Reference Blueprint • Cloud Modernization',
    title: 'Multi-Environment Cloud Landing Zone & Reliability Governance',
    summary:
      'Reference cloud blueprint for migrating legacy workloads onto containerized infrastructure with automated CI/CD, observability SLIs/SLOs, and FinOps budget guardrails.',
    challenge:
      'Migrating multi-tenant applications without maintenance outages, eliminating uncontrolled cloud billing creep, and enforcing strict compliance boundaries.',
    solution:
      'Specifies a segmented Google Cloud landing zone using Terraform infrastructure-as-code, GKE container clusters, SRE uptime monitoring, and proactive FinOps quotas.',
    metrics: [
      { value: 'Multi-Zone', label: 'High-Availability Topology' },
      { value: 'FinOps', label: 'Automated Budget & Scaling Guardrails' },
    ],
    architecture: [
      'Specifies segmented VPC networking, least-privilege IAM policies, and containerized microservices.',
      'Defines incident response runbooks, synthetic uptime checks, and reliability review templates.',
      'Aligns autoscaling policies with peak traffic profiles and committed-use cost controls.',
    ],
    tags: ['Google Cloud', 'Kubernetes', 'Terraform', 'SRE', 'FinOps', 'Cloud Architecture'],
  },
  {
    id: 'enterprise-power-platform',
    number: '03',
    practice: 'Power Platform & Automation',
    shortTab: 'Procurement Automation',
    clientType: 'Reference Blueprint • Enterprise Operations',
    title: 'End-to-End Procurement & Compliance Automation Suite',
    summary:
      'Reference Microsoft Power Platform architecture replacing fragmented spreadsheet approvals with governed Dataverse security roles and live Power BI telemetry.',
    challenge:
      'Replacing un-audited spreadsheet approval chains, eliminating multi-day procurement review bottlenecks, and unifying cross-departmental vendor records.',
    solution:
      'Models a governed enterprise application suite featuring Model-Driven & Canvas Power Apps, automated Power Automate approval escalation flows, and live Power BI executive dashboards.',
    metrics: [
      { value: 'Automated', label: 'Multi-Stage Approval Routing' },
      { value: 'Centralized', label: 'Dataverse Audit & Role Security' },
    ],
    architecture: [
      'Combines Model-Driven and Canvas Power Apps over a normalized Microsoft Dataverse schema.',
      'Orchestrates vendor onboarding and SLA escalations via Power Automate cloud flows.',
      'Surfaces procurement cycle times and bottleneck analytics through Power BI dashboards.',
    ],
    tags: ['Power Apps', 'Power Automate', 'Dataverse', 'Power BI', 'Enterprise Governance'],
  },
];

export const methodology = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description:
      'We evaluate your existing architecture, data flows, and operational bottlenecks to establish clear technical scope.',
  },
  {
    step: '02',
    title: 'System Blueprinting',
    description:
      'Before writing production code, we define API contracts, database schemas, cloud boundaries, and governance rules.',
  },
  {
    step: '03',
    title: 'Iterative Engineering',
    description:
      'We build in structured sprints with continuous integration, automated testing, peer reviews, and regular demos.',
  },
  {
    step: '04',
    title: 'Hardening & Handover',
    description:
      'Every engagement concludes with load validation, telemetry setup, documentation, and team enablement.',
  },
];

export const leadership = [
  {
    name: 'Seyi Aina',
    role: 'Backend & MERN Stack Engineer',
    roleBadge: 'Co-Founder • Software Engineering Lead',
    practice: 'Software & API Engineering',
    bio: 'Designs scalable Node.js & Express backend architectures, high-performance MongoDB data models, secure RESTful APIs, and full-stack MERN web applications.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'React', 'API Architecture', 'System Design'],
    linkedin: 'https://www.linkedin.com/in/oluwaseyiaina/',
  },
  {
    name: 'Shina Aina',
    role: 'Technical Account Manager',
    roleBadge: 'Co-Founder • Cloud & Advisory Lead',
    practice: 'Cloud Strategy & Advisory',
    bio: 'Technical Account Manager with deep expertise in enterprise cloud architecture, infrastructure reliability, strategic technical advisory, and scalable cloud transformation.',
    skills: ['Cloud Architecture', 'Cloud Strategy', 'Enterprise TAM', 'SRE & Reliability', 'Infrastructure Governance'],
    linkedin: 'https://www.linkedin.com/in/ainashina/',
  },
  {
    name: 'Oluwasanmi Aina',
    role: 'Senior Power Platform Developer',
    roleBadge: 'Co-Founder • Automation Lead',
    practice: 'Business Applications & Automation',
    bio: 'Senior Power Platform Developer specializing in enterprise business process automation, custom Power Apps, Dataverse architecture, Power Automate workflows, and Power BI analytics.',
    skills: ['Power Apps', 'Power Automate', 'Dataverse', 'Power BI', 'Process Automation'],
    linkedin: 'https://www.linkedin.com/in/oluwasanmi-aina/',
  },
];
```

---

## 4. Components

### `src/components/Reveal.jsx`

```jsx
import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

---

### `src/components/Navbar.jsx`

```jsx
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
```

---

### `src/components/Hero.jsx`

```jsx
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
```

---

### `src/components/Services.jsx`

```jsx
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
```

---

### `src/components/CaseStudies.jsx`

```jsx
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
```

---

### `src/components/Methodology.jsx`

```jsx
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
```

---

### `src/components/Leadership.jsx`

```jsx
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
```

---

### `src/components/Contact.jsx`

```jsx
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
```

---

### `src/components/Footer.jsx`

```jsx
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
```

---
