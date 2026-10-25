# Fieldwise AI — Role of AI in Smart Agriculture Solutions

> **Flowjam-inspired Research Web Platform**  
> **Course:** PRG4206 — Machine Learning  
> **Institution:** INTI International University  
> **Project Type:** Research-Based Machine Learning Group Assignment (2021–2026 Literature Synthesis)

---

## 🌾 Project Overview

**Fieldwise AI** is an interactive, creative-tech research web platform exploring how machine learning transforms agricultural data into actionable insights for production prediction, disease detection, resource optimisation, and sustainable farming.

Inspired by the visual design direction of [Flowjam](https://www.flowjam.com/), this platform combines:
- **Bold Editorial Aesthetics**: Deep violet/dark indigo backgrounds, saturated purple mesh gradients, warm coral/orange accents, and oversized display typography (`Gelica` + `Craftworkgrotesk` webfonts).
- **Interactive Data Storytelling**: 5 interactive Recharts-based research visualisations with tooltips, dynamic task filters, explicit non-equivalence caveats, and a clearly labelled synthetic irrigation series.
- **Comparative Research Explorer**: A searchable, filterable catalogue of 55 core records dated 2021–2026 plus 3 foundational records (58 total), with expandable notes and CSV export. Inclusion and DOI presence do not imply every study-specific field has been verified from full text.
- **System Architecture**: Labelled 7-stage data pipeline diagram contrasting edge computing with cloud infrastructure under real-world rural connectivity constraints.
- **Evidence handling**: chart metrics are restricted to specific values located in linked publisher/source text; unsupported values are omitted or marked as not independently extracted. Synthetic irrigation readings are disclosed, and unlike metrics are not presented as one leaderboard.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or later (use a current LTS release)
- **npm**: v9.0.0 or later

### Installation & Run

```bash
# 1. Install exactly the dependencies recorded in the lockfile
npm ci

# 2. Start the local development server (with HMR)
npm run dev

# 3. Build for production (TypeScript check + Vite bundle)
npm run build

# 4. Preview the production build locally
npm run preview
```

The application will be served at `http://localhost:5173/` (dev) or `http://localhost:4173/` (preview).

---

## 🏛️ Project Architecture & Marking Criteria Alignment

The application directly addresses the 5 core assignment marking areas specified for **PRG4206 Machine Learning**:

| Assignment Section | Web Component | Academic Focus |
|---|---|---|
| **1. Smart Agriculture Data & System Architecture** | [`src/components/Architecture.tsx`](src/components/Architecture.tsx) | Multi-source ingestion (IoT, UAV, Sentinel-2), edge vs. cloud computing, rural bandwidth constraints, data cleaning & feature engineering. |
| **2. Crop & Livestock Production Prediction** | [`src/components/Applications.tsx`](src/components/Applications.tsx) & [`src/components/DataVisualisation.tsx`](src/components/DataVisualisation.tsx) | A within-study comparison of Random Forest wheat-yield results using NIRv and EVI (R² and RMSE; both rows cite the same Li et al. study). |
| **3. Monitoring & Detection** | [`src/components/Applications.tsx`](src/components/Applications.tsx) & [`src/components/CaseStudies.tsx`](src/components/CaseStudies.tsx) | CNNs and YOLOv5 drone pest detection. Discussion of potential lab-to-field generalisation limits under different backgrounds, lighting, and field conditions; no single universal drop percentage is asserted. |
| **4. Resource & Operations Optimisation** | [`src/components/DataVisualisation.tsx`](src/components/DataVisualisation.tsx) | Smart irrigation scheduling from soil moisture sensors & evapotranspiration models (clearly labelled synthetic demonstration data). |
| **5. Deployment, Ethics, & Future Trends** | [`src/components/ChallengesFuture.tsx`](src/components/ChallengesFuture.tsx) & [`src/components/ResearchExplorer.tsx`](src/components/ResearchExplorer.tsx) | Federated learning for multi-farm collaboration without raw data pooling, agricultural digital twins, robotics, and smallholder adoption hurdles. |

---

## 📊 Interactive Data Visualisations

1. **Selected Published Metrics**: Horizontal bars show individual results with source details. The R² row is scaled for display; each tooltip states the true metric, and cross-task values are not a leaderboard.
2. **Crop Yield Prediction**: A same-study comparison of Random Forest wheat-yield results using NIRv and EVI; RMSE is shown only where the cited record provides it.
3. **Plant Disease & Pest Detection**: Bars show source-specific reported metrics such as mAP, mIoU, precision, recall, and accuracy. These measures are not interchangeable and should not be ranked together.
4. **Smart Irrigation Monitoring**: Multi-axis time-series chart showing soil moisture dynamics, rainfall events, evapotranspiration rates, and automated irrigation triggers (*clearly designated with a prominent synthetic demo banner*).
5. **Research Landscape Trio**: Dynamic breakdown of catalogue records by agricultural application, publication year, and model family; counts are not a measure of full-text verification.

---

## 📂 Project Structure

```
.
├── index.html                     # HTML5 entry with Flowjam typography (Gelica, Craftworkgrotesk)
├── package.json                   # Dependencies: React 18, Recharts, Lucide-React
├── vite.config.ts                 # Vite bundler configuration with @ alias
├── tsconfig.json                  # Strict TypeScript compiler options
└── src/
    ├── main.tsx                   # Application bootstrap
    ├── App.tsx                    # Master layout with IntersectionObserver reveals & hash navigation
    ├── App.css                    # Base layout container rules
    ├── data/
    │   ├── papers.ts              # 55 core records dated 2021–2026 + 3 foundational records (58 total; citation fields should be checked at the publisher source before use)
    │   ├── chartData.ts           # Dynamic landscape aggregation & grounded empirical benchmarks
    │   └── images.ts              # Centralized high-res image registry with fallbacks
    ├── styles/
    │   ├── tokens.css             # Flowjam-inspired CSS custom properties & design tokens
    │   └── animations.css         # Keyframes (meshFloat, pulseGlow, reveals) + prefers-reduced-motion
    └── components/
        ├── Nav.tsx (.css)         # Sticky blurred header with active scroll spy & rotating star CTA
        ├── Hero.tsx (.css)        # High-impact hero with floating telemetry & mini CSS charts
        ├── ResearchProof.tsx (.css) # Editorial statistic callouts with publisher links
        ├── Applications.tsx (.css)# Alternating 5-application showcase cards
        ├── DataVisualisation.tsx (.css) # 5 Recharts data visualisations (dynamic counts + synthetic-data banner)
        ├── Architecture.tsx (.css)# Labelled 7-stage ML pipeline & edge/cloud breakdown
        ├── ResearchExplorer.tsx (.css) # Searchable table, filter pills, expandable rows & CSV export
        ├── ChallengesFuture.tsx (.css) # 2-column deployment hurdles vs. emerging frontiers
        ├── CaseStudies.tsx (.css) # 3 in-depth study-specific case studies with publisher links
        ├── Methodology.tsx (.css) # 6-step review protocol & 6-item interactive FAQ
        ├── AboutSection.tsx (.css)# PRG4206 assignment context & INTI International University info
        └── Footer.tsx (.css)      # Academic copyright, quick links, and citation disclaimer
```

---

## 📜 Citations, Bibliographic Verification & Academic Integrity

- **55 Core Catalogue Records (2021–2026)**: The current catalogue has 11 records assigned to each of the 5 module syllabus areas. This is a category count, not proof that every study-specific finding or metric has been verified from full text:
  1. *Smart Agriculture Data & System Architecture* (11 records)
  2. *Crop & Livestock Production Prediction* (11 records)
  3. *Monitoring & Detection* (11 records)
  4. *Resource & Operations Optimisation* (11 records)
  5. *Deployment, Ethics, & Future Trends* (11 records)
- **3 Foundational Benchmark Papers**: Seminal historical baselines (Ferentinos 2018, Mohanty et al. 2016, Liakos et al. 2018) are separately identified (`isFoundational: true`) and excluded from the 2021–2026 quota.
- **Bibliographic verification status**: Publisher DOI links are supplied for catalogue follow-up. This archive does not claim every author/title/year/venue field, dataset description, model detail, metric, finding, and limitation has been independently verified from each full text. Check the original publisher record and paper before using a claim in the final report.
- **Synthetic Data Transparency**: The 30-day irrigation time-series is explicitly flagged as illustrative synthetic demonstration data with prominent warning banners to maintain strict scientific transparency.
- **No Inappropriate Leaderboards**: Cross-dataset comparisons are strictly contextualized with original experimental boundaries and data sources rather than artificial single-ranking leaderboards.

## Evidence and Validation Status

- The research explorer contains **55 core catalogue records dated 2021–2026 and 3 foundational records**. The current assignment-area distribution of the 55 core records is 11 per area. These counts are catalogue metadata only, not a claim of exhaustive screening or full-text verification.
- Publisher DOI links are provided as starting points for checking bibliographic metadata. This count does not certify every abstract summary, dataset, model-family label, metric, finding, or limitation. Where details were not extracted, the record should say so rather than fill the gap with an estimate.
- The chart dataset includes a small, explicitly selected set of quantitative findings traceable to publisher/source text. Cross-study values use different tasks and metrics and must not be compared as one leaderboard.
- The irrigation time series is synthetic demonstration data, not a farm measurement.
- Before academic submission, the group should inspect each full paper it cites, record search/screening details, and verify every empirical claim used in the report.
- Build status for this archive is environment-dependent. Use `npm ci` followed by `npm run build` in the target environment; do not rely on a pre-packed `node_modules` directory.
