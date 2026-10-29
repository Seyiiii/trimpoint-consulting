# TrimPoint Consulting

> Engineering-led IT & technology consultancy specializing in high-throughput backend systems, enterprise cloud reliability, and Microsoft Power Platform workflow automation.

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-141413)](#)

---

## 🏛️ Practice Areas

1. **Backend & Full-Stack MERN Architecture**
   - High-throughput Node.js & Express API services
   - Scalable MongoDB data schemas, indexing & aggregations
   - Authentication, RBAC, HMAC signing & API security
   - React operational dashboards and internal tooling

2. **Enterprise Cloud Architecture & Technical Advisory**
   - Google Cloud (GCP) & multi-cloud landing zones
   - Kubernetes container orchestration & CI/CD automation
   - Site Reliability Engineering (SRE), uptime SLIs/SLOs
   - FinOps budget guardrails & cloud cost optimization

3. **Microsoft Power Platform & Workflow Automation**
   - Custom Model-Driven & Canvas Power Apps
   - Multi-stage approval escalation flows (Power Automate)
   - Microsoft Dataverse architecture & Center of Excellence (CoE) governance
   - Executive telemetry & analytics with Power BI

---

## 🌿 Branching & Deployment Strategy

This repository implements a structured Git workflow designed for safe, auditable delivery:

| Branch | Purpose | Environment |
| :--- | :--- | :--- |
| **`deploy`** | **Production branch** — Contains production-verified code. Triggered by deployment platforms (Vercel, Cloudflare, etc.) to serve the live site. | Live Production |
| **`staging`** | **Testing & QA branch** — Used for staging previews, client review, and QA verification before promotion to production. | Staging / Preview |
| **`main`** | **Development integration** — Base trunk for feature branches and integration sprints. | Development |

### Promotion Workflow

```bash
# 1. Test and verify in staging
git checkout staging
git merge main
git push origin staging

# 2. Promote verified release to live deployment
git checkout deploy
git merge staging
git push origin deploy
```

---

## 🛠️ Local Development

### Prerequisites

- **Node.js**: v20+ recommended
- **npm**: v10+

### Setup

```bash
# 1. Clone repository
git clone https://github.com/Seyiiii/trimpoint-consulting.git
cd trimpoint-consulting

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env with your Formspree endpoint (optional for local dev)

# 4. Start local development server
npm run dev
```

### Build & Lint

```bash
# Production bundle
npm run build

# Code style and syntax audit
npm run lint

# Preview production build locally
npm run preview
```

---

## 🔒 Security & Privacy

- All contact inquiries are processed through Formspree over TLS with client-side CRLF header sanitization.
- In-memory data handling complies with Nigeria Data Protection Act (NDPA) retention principles.
- No client credentials or private endpoints are tracked in Git; deployment targets utilize platform environment variables.

---

## 📄 License

&copy; 2022–2026 TrimPoint Consulting. All rights reserved.
