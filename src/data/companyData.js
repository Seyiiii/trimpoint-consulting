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