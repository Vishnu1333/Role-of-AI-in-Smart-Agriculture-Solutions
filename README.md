# Fieldwise AI — Role of AI in Smart Agriculture Solutions

**A research-focused interactive website for exploring artificial intelligence and machine learning in smart agriculture.**

**Module:** PRG4206 — Machine Learning  
**Institution:** INTI International University  
**Programme:** BCSI  
**Project type:** Group literature review and research-exploration website  
**Deployment target:** Vercel (React + Vite)

---

## 1. Project Overview

Fieldwise AI explores how AI and machine learning can support smarter agricultural decision-making across production, monitoring, resource use, and deployment. It presents a curated catalogue of academic literature, selected source-linked findings, interactive visualisations, and a data-pipeline architecture.

The website is a **research and visualisation tool**, not a deployed farm-control system and not a model-training pipeline. It lets visitors explore what published studies report, compare approaches within an appropriate context, and see research limitations alongside the findings.

The project’s core question is:

> What role does AI play across the smart agriculture ecosystem, and how can machine learning address prediction, detection, monitoring, and optimisation problems in modern farming?

## 2. Application and Deployment

The presentation version is the **React + Vite web application deployed through Vercel**. This repository does not use Streamlit as its application interface.

- **Frontend:** React 18 with TypeScript
- **Build tool and development server:** Vite
- **Visualisations:** Recharts
- **Icons:** Lucide React
- **Styling:** CSS, CSS custom properties, responsive layouts, motion effects, and reduced-motion support
- **Research data:** TypeScript catalogue and chart-data modules
- **Hosting:** Vercel, connected to this GitHub repository

### Live website

After deployment, paste the Vercel production URL here:

**Fieldwise AI live site:** _Add your Vercel deployment URL after the first successful deployment._

## 3. Five Research Focus Areas

| Focus area | What the website explores |
|---|---|
| **1. Smart Agriculture Data & System Architecture** | Farm sensors, IoT, satellite and UAV data, data cleaning, edge/cloud processing, connectivity limitations, and digital twins. |
| **2. Crop & Livestock Production Prediction** | Yield and production forecasting, environmental features, model choice, and evaluation measures such as R² and RMSE. |
| **3. Monitoring & Detection** | Computer vision for plant disease, weed and crop monitoring, detection and segmentation models, image datasets, and field-deployment constraints. |
| **4. Resource & Operations Optimisation** | Irrigation decisions, water and input use, operating schedules, automation, and reinforcement-learning approaches. |
| **5. Deployment, Ethics & Future Trends** | Cost, rural connectivity, privacy, farmer adoption, access for smallholders, federated learning, robotics, and emerging systems. |

The site links these areas through a labelled data-pipeline diagram, selected case studies, a searchable literature explorer, and cross-cutting discussions of practical limitations.

## 4. Key Features

- **Research catalogue:** Browse 58 literature records: 55 core records from 2021–2026 and 3 separately marked foundational records.
- **Search and filters:** Find records by title, author, research focus, year, model family, dataset, metric, or research finding.
- **Interactive charts:** Explore selected source-linked results, a within-study wheat-yield comparison, detection and segmentation metrics, and the catalogue’s year/application/model-family distribution.
- **Research case studies:** Review examples involving wheat-yield prediction, tomato virus detection, and irrigation optimisation.
- **Data-pipeline architecture:** View the labelled stages that connect agricultural data collection to processing, modelling, inference, and farmer-facing decisions.
- **CSV export:** Export the filtered literature catalogue from the Research Explorer.
- **Limitations and evidence notes:** Distinguish source-specific results from estimates, synthetic examples, and details that have not been independently extracted from full text.
- **Responsive interface:** Editorial-style layouts and animations, with consideration for reduced-motion preferences.
- **Group presentation:** The repository includes [the Fieldwise AI group presentation](Fieldwise_AI_Smart_Agriculture_Group_Presentation.pptx).

## 5. Datasets and Research Data Used

### How data is implemented

The application uses catalogue metadata and a small selection of cited quantitative results to drive the visualisations. **It does not currently train a new ML model or include a downloadable package of raw training images, sensor readings, or farm records.** Dataset names below refer to datasets or study-specific data sources described by the literature represented in the catalogue and charts; they should not be read as a claim that the raw datasets are bundled in this repository.

### Named datasets and study data sources

| Dataset or source | Research task / use in the project | Important context |
|---|---|---|
| **PlantVillage** | Foundational plant-disease image-classification research. | The cited study describes 54,306 images across 14 crop species and 26 disease/healthy classes. Images were collected under controlled conditions, so the reported result is not a guarantee of field performance. |
| **AppleDisease5** | Apple-leaf disease detection; referenced with the MEAN-SSD study. | A five-disease apple-leaf image dataset. The chart presents a paper-reported result, not a re-run of training in this project. |
| **CottonWeedDet12** | Cotton-field weed detection; referenced in the selected detection findings. | The cited study description reports 5,648 field images, 12 weed classes, and 9,370 bounding boxes. |
| **Wheat-yield and environmental data for China** | Within-study comparison of Random Forest yield estimates using NIRv and EVI. | Multi-source satellite vegetation indices plus climate and soil variables, as described in the cited Li et al. study. |
| **Greenhouse tomato-virus image data** | Tomato virus-disease detection using SE-YOLOv5. | Study-specific images collected by mobile phone in greenhouse settings; not a general-purpose dataset shipped with this repository. |
| **Coffee-leaf smartphone image data** | Coffee-leaf disease/pest detection and semantic/instance segmentation. | Study-specific images captured in natural scenes with varying illumination and backgrounds. |
| **Paddy-rice weather and irrigation simulation data** | Research example for reinforcement-learning-based irrigation decisions. | Outcomes are tied to the cited study and its simulated/observational setting; they are not a prediction or control result generated by this website. |
| **European Commission JRC MARS Crop Yield Forecasting System** | Referenced in the catalogue for interpretability of crop-yield forecasting models. | Included as a literature-described research system, not an application dataset downloaded by this project. |

### Data and chart implementation files

- `src/data/papers.ts` — the 58-record literature catalogue, including titles, author fields, year, focus area, described dataset/scope, metric, findings, limitations, DOI, and publisher link.
- `src/data/chartData.ts` — selected chart records and computed catalogue summaries by application area, year, and model family.
- `src/data/images.ts` — image references used for the website presentation; these are visual assets, not ML training images.

### Selected quantitative examples

- **Wheat yield:** Li et al. report R² = 0.74 and RMSE = 758 kg/ha for the Random Forest configuration using NIRv, compared with R² = 0.73 and RMSE = 762 kg/ha using EVI in the same study.
- **Tomato virus detection:** The cited SE-YOLOv5 study reports 91.07% test-set accuracy and 94.10% mAP@0.5.
- **Coffee-leaf analysis:** The cited work reports U-Net mIoU of 94.25% and PSPNet mIoU of 93.54%; Mask R-CNN precision and recall are listed as separate metrics.
- **Synthetic irrigation chart:** The React website’s illustrative irrigation time series is **synthetic demonstration data**, not real sensor measurements or a claimed water-saving result.

References for these examples are linked in the application and should be checked against the original publication before academic use.

## 6. Technology Stack and Project Structure

### Main technologies

| Technology | Role |
|---|---|
| React 18 | Component-based user interface |
| TypeScript | Typed application and research-data definitions |
| Vite | Local development and production bundling |
| Recharts | Interactive data charts |
| Lucide React | Interface icons |
| CSS / CSS variables | Styling, visual themes, responsive layouts, and animations |
| GitHub | Version control and source repository |
| Vercel | Production hosting and deployment from GitHub |

### Main project structure

```text
.
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── data/
│   │   ├── papers.ts
│   │   ├── chartData.ts
│   │   └── images.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   └── animations.css
│   └── components/
│       ├── Nav.tsx
│       ├── Hero.tsx
│       ├── ResearchProof.tsx
│       ├── Applications.tsx
│       ├── DataVisualisation.tsx
│       ├── Architecture.tsx
│       ├── ResearchExplorer.tsx
│       ├── ChallengesFuture.tsx
│       ├── CaseStudies.tsx
│       ├── Methodology.tsx
│       ├── AboutSection.tsx
│       └── Footer.tsx
├── AUDIT_STATUS.md
└── Fieldwise_AI_Smart_Agriculture_Group_Presentation.pptx
```

## 7. Run Locally

### Prerequisites

- Node.js 18 or later (a current LTS release is recommended)
- npm
- Git

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions.git
cd Role-of-AI-in-Smart-Agriculture-Solutions
npm ci
```

Start the Vite development server:

```bash
npm run dev
```

Vite will print a local URL, normally `http://localhost:5173`.

Check the TypeScript project:

```bash
npm run typecheck
```

Build and preview the production version:

```bash
npm run build
npm run preview
```

The production build is written to `dist/`. The build must be run in a clean environment to verify the current source and dependencies; do not upload `node_modules/` or `dist/` as source files.

## 8. Deploy to Vercel

The repository is configured as a standard React + Vite application. Use the following settings in [Vercel](https://vercel.com/):

| Setting | Value |
|---|---|
| Git repository | `Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions` |
| Production branch | `main` |
| Framework preset | **Vite** |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `./` (repository root) |

### Deployment steps

1. Open [Vercel](https://vercel.com/) and sign in using GitHub.
2. Choose **Add New → Project**.
3. Import `Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions`.
4. Select the `main` branch and confirm the project root is the repository root.
5. Select **Vite** as the framework preset. Confirm the install command is `npm ci`, build command is `npm run build`, and output directory is `dist`.
6. Click **Deploy**.
7. After the build succeeds, copy the production URL into the **Live website** section near the top of this README.
8. Future commits pushed to `main` can trigger a new Vercel deployment when Git integration is enabled.

Official guide: [Deploying Vite projects on Vercel](https://vercel.com/docs/frameworks/frontend/vite).

## 9. Group Members

| No. | Member name | Student ID |
|---:|---|---|
| 1 | GAYATHRI SAI TAPASWINI IRAGAVARAPU | I26043735 |
| 2 | MOHAN MEKALA | I26043589 |
| 3 | Uma Maheshwari Srinivasan | I26044266 |
| 4 | Takunda Godwell Mushure | I25029962 |
| 5 | Vishnu Vardhan Chilakacharla | I26043592 |

## 10. Research Limitations and Academic Integrity

- **Curated literature catalogue:** 55 core records are dated 2021–2026 and three foundational records are marked separately. Catalogue counts reflect the current dataset structure; they are not evidence that every field was verified against each full text.
- **Source verification:** DOI/publisher links are provided as starting points. Before citing any exact number or methodological detail, read and verify the original publication.
- **Metrics are not interchangeable:** Accuracy, mAP, mIoU, precision, recall, R², and RMSE measure different aspects of different tasks. Do not combine them into a misleading common leaderboard.
- **Synthetic demonstration data:** The irrigation timeline in the React application is labelled as synthetic. It must not be described as an actual farm deployment, sensor feed, or demonstrated water saving.
- **Generalisation:** Results from controlled image datasets may not transfer directly to field conditions with different lighting, backgrounds, crop varieties, equipment, and sensor quality.
- **No model-training claim:** The repository’s main purpose is literature exploration and research visualisation. It does not claim to train or deploy a production ML model on the named datasets.
- **Academic integrity:** Group members should review the source papers, verify citations, write and understand their own critical analysis, acknowledge assistance according to the module’s policy, and check the final submission against the lecturer’s requirements.

## Evidence and Validation Status

See [AUDIT_STATUS.md](AUDIT_STATUS.md) for the catalogue and chart validation notes. The previous audit passed the direct TypeScript compiler check, but a clean production build was not conclusively verified in that environment. Validate locally or through the Vercel build before presenting the website as production-ready.
