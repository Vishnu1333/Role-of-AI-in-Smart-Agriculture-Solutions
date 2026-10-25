# Fieldwise AI — Role of AI in Smart Agriculture Solutions

**PRG4206 Machine Learning · INTI International University · Group Research Project**

Fieldwise AI is a two-part research project exploring how artificial intelligence (AI) and machine learning (ML) can support smarter agricultural decisions. It connects a responsive React research website with a companion Python/Streamlit dashboard for exploring a curated literature catalogue and reviewing study-specific performance results.

> **Project scope:** Fieldwise AI is a research and visualisation platform. It does not train a new ML model, does not compute its own overall model-accuracy score, and does not bundle the original image, sensor or farm datasets from the cited publications. Reported scores belong to the cited studies and their evaluation setups.

## Contents
- [Project overview](#project-overview)
- [Five research focus areas](#five-research-focus-areas)
- [Features](#features)
- [Datasets and reported results](#datasets-and-reported-results)
- [Technology stack](#technology-stack)
- [Project structure](#project-structure)
- [Run the React website](#run-the-react-website)
- [Run the Streamlit dashboard](#run-the-streamlit-dashboard)
- [Deploy the Streamlit dashboard](#deploy-the-streamlit-dashboard)
- [Deploy the React website](#deploy-the-react-website)
- [Group members](#group-members)
- [Research limitations and academic integrity](#research-limitations-and-academic-integrity)

## Project overview
Modern agriculture uses soil and weather sensors, drones, satellite imagery, field records, crop-monitoring tools and livestock data. AI/ML can help interpret these sources for yield prediction, disease and weed detection, irrigation planning and operational decisions.

Fieldwise AI brings the research together in an interactive interface. It presents selected publisher-linked results, explains evaluation metrics, outlines an agriculture data pipeline and supports literature exploration across the smart-agriculture ecosystem.

The literature catalogue contains **55 core records dated 2021–2026** and **3 foundational records**. The 55 core records are assigned across the five focus areas, with 11 entries per area. Counts describe catalogue structure, not exhaustive search coverage or complete full-text verification.

## Five research focus areas
| Focus area | Topics |
|---|---|
| **1. Smart Agriculture Data & System Architecture** | IoT and sensor data, drones, satellite imagery, data ingestion/cleaning, edge-cloud architecture, digital twins and rural connectivity. |
| **2. Crop & Livestock Production Prediction** | Crop yield and quality, livestock health, climate/soil features, remote-sensing indicators, model selection and regression metrics. |
| **3. Monitoring & Detection** | Plant disease and weed detection, computer vision, segmentation, sensor fusion and edge-device deployment. |
| **4. Resource & Operations Optimisation** | Irrigation, water and energy scheduling, input management, farm operations, automation and reinforcement learning. |
| **5. Deployment, Ethics & Future Trends** | Cost, connectivity, data privacy, digital literacy, equitable access, federated learning and agricultural robotics. |

## Features
### React + Vite research website
- Responsive, animated design with custom CSS and a visual research-first layout.
- Interactive Recharts visualisations with study context in the tooltips.
- Seven-stage agricultural data pipeline and edge/cloud architecture discussion.
- Searchable literature explorer with focus-area filters, expanded paper details and CSV export.
- Dataset Results & Metrics section with dataset names, model names, reported scores, metric types and DOI links.
- Case studies, methodology, deployment challenges, future trends and research evidence notes.

### Python + Streamlit dashboard
- Overview of catalogue counts, focus areas and publication-year distribution.
- Dataset Results & Accuracy tab with selected source-linked study results.
- Searchable, filterable research catalogue displaying dataset/scope and reported metric fields.
- CSV export of the filtered catalogue.
- Group member information and evidence/limitations notes.
- Separate companion UI; it is not a pixel-for-pixel copy of the React website.

## Datasets and reported results
The application records dataset names/descriptions and selected evaluation results from the cited publications. **Raw source datasets are not included in this repository.** Results below belong to the cited papers and are not accuracy scores for Fieldwise AI.

| Dataset / study data | Model | Reported result | Interpretation |
|---|---|---|---|
| Plant-disease image database in Ferentinos (2018): 87,848 images; 25 plant species; 58 classes; reported on 17,548 unseen images | CNN architectures | **99.53% accuracy** | Foundational image-classification benchmark, not live-farm accuracy. [Source](https://doi.org/10.1016/j.compag.2018.01.009) |
| PlantVillage: 54,306 images; 14 crop species; 26 disease/healthy classes | CNN classifier | **99.35% held-out accuracy** | Foundational benchmark using controlled images. [Source](https://doi.org/10.3389/fpls.2016.01419) |
| Greenhouse tomato-virus images captured by mobile phone | SE-YOLOv5 | **91.07% test accuracy** and **94.10% mAP@0.5** | Accuracy and mean average precision are different metrics. [Source](https://doi.org/10.1016/j.compag.2022.106780) |
| CottonWeedDet12: 5,648 field images, 12 weed classes and 9,370 bounding boxes | YOLOv4 / YOLOv3-tiny | **95.22% / 88.14% mAP@0.5** | Object-detection results, not classification accuracy. [Source](https://doi.org/10.1016/j.compag.2023.107655) |
| Coffee-leaf biotic-stress images captured in natural scenes | U-Net / PSPNet / Mask R-CNN | **94.25% / 93.54% mIoU**; Mask R-CNN precision **73.90%**, recall **71.90%** | Different segmentation/detection metrics should not be treated as interchangeable. [Source](https://doi.org/10.1016/j.compag.2021.106191) |
| AppleDisease5 | MEAN-SSD lightweight detector | **83.12% mAP**, **12.53 FPS** | Detection metric and speed, not classification accuracy. [Source](https://doi.org/10.1016/j.compag.2021.106379) |
| Multi-source wheat-yield data from China | Random Forest using NIRv / EVI | NIRv: **R² = 0.74, RMSE = 758 kg/ha**; EVI: **R² = 0.73, RMSE = 762 kg/ha** | Regression metrics, not accuracy percentages. Same study for both configurations. [Source](https://doi.org/10.1016/j.compag.2022.106790) |
| Paddy-rice irrigation control simulation | Deep Q-network (DQN) | **23 mm less irrigation** and **21 mm less drainage** in simulation | Simulated resource-use outcome, not accuracy or guaranteed field savings. [Source](https://doi.org/10.1016/j.agwat.2021.106838) |

### What is the accuracy of Fieldwise AI?
**There is no single overall model-accuracy score for Fieldwise AI.** It is a research website and catalogue, not one trained prediction model evaluated on one dataset. When asked about performance, report the relevant original study's score and dataset. Do not claim 99.53% or 99.35% as the accuracy of this project.

## Technology stack
| Area | Technology |
|---|---|
| Research website | React 18, TypeScript, Vite |
| Charts | Recharts; Lucide React icons; custom CSS |
| Catalogue / web chart data | TypeScript files in `src/data/` |
| Companion dashboard | Python, Streamlit, pandas |
| Streamlit catalogue snapshot | `streamlit_data/papers.json` |
| Version control | Git and GitHub |
| React hosting option | Vercel or another Vite-compatible static host |
| Dashboard hosting | Streamlit Community Cloud |

## Project structure
```text
.
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── vercel.json
├── README.md
├── requirements.txt
├── streamlit_app.py
├── streamlit_data/
│   └── papers.json
├── .streamlit/
│   └── config.toml
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── data/
    │   ├── papers.ts
    │   ├── chartData.ts
    │   └── images.ts
    ├── styles/
    │   ├── tokens.css
    │   └── animations.css
    └── components/
        ├── AccuracySummary.tsx
        ├── AccuracySummary.css
        ├── DataVisualisation.tsx
        ├── ResearchExplorer.tsx
        ├── Architecture.tsx
        ├── CaseStudies.tsx
        ├── ChallengesFuture.tsx
        ├── Methodology.tsx
        ├── Applications.tsx
        ├── ResearchProof.tsx
        ├── AboutSection.tsx
        ├── Nav.tsx
        └── Footer.tsx
```

## Run the React website
Prerequisites: Node.js 18+ and npm.

```bash
npm ci
npm run dev
```

The local Vite website normally opens at `http://localhost:5173`. To type-check and create a production build:

```bash
npm run typecheck
npm run build
npm run preview
```

## Run the Streamlit dashboard
Prerequisites: Python 3.10+ and pip.

macOS / Linux:
```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
streamlit run streamlit_app.py
```

Windows PowerShell:
```powershell
py -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
streamlit run streamlit_app.py
```

Streamlit normally opens at `http://localhost:8501`. It reads its catalogue snapshot from `streamlit_data/papers.json`. If `src/data/papers.ts` changes, update the JSON export so both applications stay in sync.

## Deploy the Streamlit dashboard
- **Repository:** `Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions`
- **Branch:** `main`
- **Main file path:** `streamlit_app.py`

Sign in at [Streamlit Community Cloud](https://share.streamlit.io/), select **Create app**, choose this repository, branch `main`, and entry point `streamlit_app.py`, then select **Deploy**. Pushes to the configured branch can trigger redeployment. Check app settings and build logs if deployment does not update. See the [official Streamlit deployment guide](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/deploy).

## Deploy the React website
The React/Vite website can be deployed separately. For example, import the repository into [Vercel](https://vercel.com/) with build command `npm run build` and output directory `dist`. The Vercel site and Streamlit dashboard are different applications hosted at different URLs.

## Group members
| No. | Name | Student ID |
|---:|---|---|
| 1 | GAYATHRI SAI TAPASWINI IRAGAVARAPU | I26043735 |
| 2 | MOHAN MEKALA | I26043589 |
| 3 | Uma Maheshwari Srinivasan | I26044266 |
| 4 | Takunda Godwell Mushure | I25029962 |
| 5 | Vishnu Vardhan Chilakacharla | I26043592 |

## Research limitations and academic integrity
- The catalogue is curated; it is not presented as an exhaustive systematic review with fully verified full-text extraction for every entry.
- The 55 core and 3 foundational records are catalogue counts, not proof that every result and reference field has been verified.
- Raw source datasets from the cited papers are not included; the applications show dataset descriptions and selected published findings.
- The React irrigation time series is explicitly synthetic demonstration data, not farm-measured data.
- Accuracy, mAP, mIoU, precision, recall, R² and RMSE measure different outcomes. Compare like-for-like metrics only when evaluation conditions allow it.
- Results from controlled image datasets may not transfer directly to real fields, different crops or seasons.
- Check original papers, cite sources consistently, and follow the assignment's rules for AI acknowledgements. The final analysis must reflect the group's own reading and understanding.
