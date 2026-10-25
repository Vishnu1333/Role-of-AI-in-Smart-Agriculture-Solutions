# Fieldwise AI — Role of AI in Smart Agriculture Solutions

**PRG4206 Machine Learning · INTI International University · Group Research Project**

Fieldwise AI is a research and data-exploration project about how artificial intelligence (AI) and machine learning (ML) can support modern agriculture. The repository contains two companion applications: a **React + Vite research website** and a **Python + Streamlit research dashboard**. Both explore a curated literature catalogue, selected study-specific findings, and the opportunities and limitations of AI in farming.

> **Evidence note:** The catalogue contains 55 core records dated 2021–2026 and 3 foundational records. A DOI or catalogue entry does not imply that every field has been independently checked against the paper's full text. The named datasets below are described in cited publications; the original image datasets and farm-measurement datasets are not bundled unless explicitly labelled as demo data.

## Contents

- [Project Overview](#project-overview)
- [Applications in This Repository](#applications-in-this-repository)
- [Five Research Focus Areas](#five-research-focus-areas)
- [Key Features](#key-features)
- [Datasets and Research Data](#datasets-and-research-data)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Run the React + Vite Website](#run-the-react--vite-website)
- [Run the Python + Streamlit Dashboard](#run-the-python--streamlit-dashboard)
- [Deploy the React Website on Vercel](#deploy-the-react-website-on-vercel)
- [Deploy the Streamlit Dashboard](#deploy-the-streamlit-dashboard)
- [Group Members](#group-members)
- [Research Limitations and Academic Integrity](#research-limitations-and-academic-integrity)

## Project Overview

Agriculture increasingly uses data from IoT sensors, weather stations, satellite and drone imagery, crop-management records, and monitoring systems. AI/ML methods can help interpret these sources for production forecasting, disease and weed detection, resource scheduling, and decision support. However, strong laboratory results do not automatically guarantee performance on a different farm, crop, season, sensor, or region.

**Fieldwise AI makes this landscape easier to explore.** It organises literature by application area, shows selected source-linked results, visualises the catalogue structure, and highlights constraints such as data quality, rural connectivity, cost, model generalisability, privacy, and equitable access.

The React website is the primary presentation of the project: it uses a dark, violet-led creative-tech design with coral accents, responsive layouts, animations, and interactive research visualisations. The Streamlit app is a separate, simpler Python-native research dashboard for catalogue exploration; it does **not** reproduce the React website pixel-for-pixel. To preserve the original website UI, deploy the React/Vite app on Vercel or Netlify.

### Project objectives

1. Explore how AI/ML contributes to prediction, monitoring, detection, and optimisation across smart agriculture.
2. Organise papers across five research areas rather than limiting the work to a single crop problem.
3. Compare selected research results only in their published context, preserving the meaning of reported metrics.
4. Make the catalogue searchable and exportable for further review.
5. Distinguish published study findings from synthetic demonstration values and unverified details.

## Applications in This Repository

### 1. React + Vite Research Website

The main website is a client-side interactive research experience presenting the project scope, application examples, architecture pipeline, charts, selected case studies, literature catalogue, limitations, and methodology.

Features include:
- Five Recharts-based data visualisations.
- A searchable literature catalogue with expandable record details and CSV export.
- System architecture and edge-versus-cloud discussion.
- Selected publisher-linked findings with metric-specific caveats.
- Responsive styling, animations, and reduced-motion support.

### 2. Python + Streamlit Research Dashboard

The Streamlit dashboard is a companion app, not a replacement for the React website. It uses the same catalogue through a JSON export and provides:
- Overview statistics and catalogue charts.
- Search across titles, authors, model approaches, datasets, and findings.
- Publication-year and research-focus filters.
- Individual record details and publisher/DOI links.
- CSV export of the filtered catalogue.
- A selected-findings page and group-member list.

The two applications live in the same repository but use separate entry points and runtimes.

## Five Research Focus Areas

| Focus area | What the project examines |
|---|---|
| **1. Smart Agriculture Data & System Architecture** | IoT/sensor data, data integration, cloud and edge computing, data pipelines, digital twins, and rural-connectivity constraints. |
| **2. Crop & Livestock Production Prediction** | Crop-yield and production prediction, feature selection, missing/noisy data, evaluation metrics, and model generalisability. |
| **3. Monitoring & Detection** | Computer vision and sensor-based monitoring, plant disease and weed detection, dataset preparation, and edge/mobile deployment. |
| **4. Resource & Operations Optimisation** | Irrigation and water scheduling, input and energy management, operational optimisation, automation, and reinforcement learning. |
| **5. Deployment, Ethics & Future Trends** | Adoption cost, privacy, data quality, connectivity, digital literacy, smallholder access, federated learning, robotics, and traceability. |

The catalogue assigns 11 core records to each focus area. This is a catalogue classification count, not proof of exhaustive screening or full-text validation.

## Key Features

- **Interactive charts:** selected published metrics and catalogue counts by focus area, year, and model family.
- **Literature search:** browse 58 records — 55 core records (2021–2026) and 3 separately marked foundational records.
- **Filters:** search terms, publication-year range, foundational-record toggle, and focus-area selection in Streamlit.
- **Individual paper details:** authors, year, approach, dataset/scope, metric, finding, limitation, and publisher/DOI URL where listed.
- **CSV export:** download filtered catalogue records from the Streamlit explorer; the React explorer also supports catalogue export.
- **System pipeline:** a labelled, seven-stage smart-agriculture data-pipeline illustration.
- **Selected study findings:** preserve original metric names and study context; unlike metrics are not treated as a single performance ranking.
- **Evidence labels:** the irrigation time-series demo is explicitly synthetic and is not represented as real sensor data.
- **Group information:** team members and student IDs are available in the Streamlit dashboard.

## Datasets and Research Data

The repository contains a **curated literature catalogue and selected chart values**, rather than the original image collections or farm-measurement datasets used in every cited publication.

### Data files implemented in this project

| Data source | Location | Contents | Important boundary |
|---|---|---|---|
| **Fieldwise AI Research Literature Catalogue** | `src/data/papers.ts` | 58 structured records: 55 core papers dated 2021–2026 and 3 foundational papers. Fields include title, authors, year, focus area, model family, dataset/scope, metric, finding, limitation, DOI/URL, summary, and tags. | Curated catalogue; not a claim that every field is independently verified from full text. |
| **Streamlit Catalogue JSON Export** | `streamlit_data/papers.json` | JSON copy of the same research catalogue, loaded by the Streamlit app. | Keep it in sync with `src/data/papers.ts` when modifying records; it is not an independent dataset. |
| **Selected Research Chart Data** | `src/data/chartData.ts` | Selected reported values and context for wheat-yield prediction, tomato-virus detection, coffee-leaf segmentation/detection, cotton-weed detection, and foundational plant-disease classification. | Values are study-specific. Accuracy, RMSE, R², mAP, mIoU, precision, and recall are different metrics and must not be combined into one leaderboard. |
| **Synthetic 30-Day Irrigation Demonstration Series** | `src/data/chartData.ts` | Illustrative soil-moisture, irrigation, rainfall, and evapotranspiration readings used by the irrigation chart. | **Synthetic demo values, not real field measurements.** They do not demonstrate actual irrigation savings. |

### Named datasets discussed by the cited literature

These datasets are **reported or used by cited publications**, not all raw datasets included in this repository.

| Dataset / study data | How it relates to this project | Source |
|---|---|---|
| **CottonWeedDet12** | Reported field-image dataset with 5,648 images, 12 weed classes, and 9,370 annotations/boxes; used as context for cotton-weed detector results. | [Study DOI](https://doi.org/10.1016/j.compag.2023.107655) |
| **PlantVillage** | Plant-disease image dataset reported with 54,306 images, 14 crop species, and 26 disease/healthy classes; discussed in a foundational CNN classification study. | [Mohanty et al. (2016)](https://doi.org/10.3389/fpls.2016.01419) |
| **Ferentinos plant-disease image collection** | Study dataset reported with 87,848 images, 25 plant species, and 58 classes. | [Ferentinos (2018)](https://doi.org/10.1016/j.compag.2018.01.009) |
| **Wheat-yield study data** | Multi-source environmental/vegetation-index inputs used for a within-study Random Forest comparison with NIRv and EVI; selected R² and RMSE values are shown in the charts. | [Li et al. (2022)](https://doi.org/10.1016/j.compag.2022.106790) |
| **Tomato-virus image data** | Smartphone-captured tomato-virus images used in an SE-YOLOv5 study; reported accuracy and mAP@0.5 are displayed as distinct metrics. | [Qi et al. (2022)](https://doi.org/10.1016/j.compag.2022.106780) |
| **Coffee-leaf image data** | Smartphone images of coffee leaves used in segmentation/detection comparisons involving U-Net, PSPNet, and Mask R-CNN. | [Tassis et al. (2021)](https://doi.org/10.1016/j.compag.2021.106191) |
| **Paddy-rice irrigation simulation** | Reinforcement-learning irrigation study used to discuss simulated irrigation and drainage outcomes; the result applies to that study's simulated setting. | [Chen et al., Agricultural Water Management](https://doi.org/10.1016/j.agwat.2021.106838) |

**Raw-data note:** the repository does not package the original image folders, private farm records, complete sensor streams, or training splits from these publications. These are research examples, not datasets that have all been downloaded and implemented as model-training inputs. No production model is included that autonomously makes farm decisions.

## Technology Stack

| Area | Technologies |
|---|---|
| Main website | React 18, TypeScript, Vite |
| Website charts | Recharts |
| Website icons | Lucide React |
| Website styling | Vanilla CSS, design tokens, responsive layouts, CSS animations |
| Research dashboard | Python, Streamlit |
| Streamlit data handling | Pandas and JSON |
| Catalogue source | TypeScript catalogue and JSON export |
| Version control | Git and GitHub |
| Streamlit hosting target | Streamlit Community Cloud |

## Project Structure

```text
Role-of-AI-in-Smart-Agriculture-Solutions/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── requirements.txt
├── README.md
├── AUDIT_STATUS.md
├── STREAMLIT_DEPLOYMENT.md
├── streamlit_app.py              # Streamlit dashboard entry point
├── streamlit_data/
│   └── papers.json               # Streamlit catalogue export
├── .streamlit/
│   └── config.toml               # Streamlit theme
├── public/
│   ├── favicon.svg
│   └── fonts/
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── App.css
    ├── data/
    │   ├── papers.ts             # Literature catalogue
    │   ├── chartData.ts          # Selected findings + synthetic irrigation demo
    │   └── images.ts             # Remote image references and alt text
    ├── styles/
    │   ├── tokens.css            # Design tokens and theme
    │   └── animations.css
    └── components/               # Website sections and their CSS
```

## Run the React + Vite Website

### Requirements

- Node.js 18 or later (a current LTS release is recommended).
- npm 9 or later.

From the repository root:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, usually [http://localhost:5173](http://localhost:5173).

To check the TypeScript project and build the website:

```bash
npm run typecheck
npm run build
npm run preview
```

The production preview usually runs at [http://localhost:4173](http://localhost:4173). Build in the target environment; do not commit `node_modules/` or generated `dist/` files.

## Run the Python + Streamlit Dashboard

### Requirements

- Python 3.10 or later recommended.
- Dependencies listed in `requirements.txt`.

### macOS or Linux

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
streamlit run streamlit_app.py
```

### Windows PowerShell

```powershell
py -m venv .venv
.\\.venv\\Scripts\\Activate.ps1
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
streamlit run streamlit_app.py
```

Streamlit prints a local address, usually [http://localhost:8501](http://localhost:8501). Stop the server with `Ctrl+C` in the terminal. Keep `.venv/` local; do not upload it to GitHub.

## Deploy the React Website on Vercel

**Recommended when you want the original Fieldwise AI website UI.** The React/Vite website is a static front-end app. Vercel supports deploying Vite projects from a Git repository and can detect the Vite framework automatically ([Vite's deployment guide](https://vite.dev/guide/static-deploy#vercel)).

This repository includes `vercel.json` with the build configuration.

1. Open [Vercel](https://vercel.com/new) and sign in with GitHub.
2. Select **Add New → Project**, then import `Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions`.
3. Keep the project root as `./` (repository root).
4. Confirm the settings below. The committed `vercel.json` supplies the install, build, and output settings automatically; check them during import.

| Vercel setting | Value |
|---|---|
| Git repository | `Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions` |
| Production branch | `main` |
| Framework preset | `Vite` (automatic detection) |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `./` |

5. Click **Deploy**. When the build succeeds, Vercel provides a live `.vercel.app` URL. Future pushes to `main` can trigger production redeployments through the Git integration, while other branches can create preview deployments.

If the build fails, check the deployment logs, run `npm ci`, `npm run typecheck`, and `npm run build` locally, then push any fix to GitHub. Do not upload `node_modules/` or commit generated `dist/` output.

## Deploy the Streamlit Dashboard

The repository is prepared for Streamlit Community Cloud. **A live Streamlit URL exists only after the app owner signs in and completes deployment.**

1. Open [Streamlit Community Cloud](https://share.streamlit.io/) and sign in using the GitHub account that can access the repository.
2. Select **Create app**.
3. Choose the repository, branch, and entry point below.
4. Select **Deploy** and wait for the build to finish.

| Setting | Value |
|---|---|
| Repository | `Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions` |
| Branch | `main` |
| Main file path | `streamlit_app.py` |
| Dependency file | `requirements.txt` |

See [STREAMLIT_DEPLOYMENT.md](STREAMLIT_DEPLOYMENT.md) or the [official Streamlit deployment documentation](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/deploy) for details.

**Deployment distinction:** Streamlit hosts the Python companion dashboard. The React/Vite website is a separate app and would normally be hosted on a static/web platform such as Vercel or Netlify.

## Group Members

| No. | Group member | Student ID |
|---:|---|---|
| 1 | GAYATHRI SAI TAPASWINI IRAGAVARAPU | I26043735 |
| 2 | MOHAN MEKALA | I26043589 |
| 3 | Uma Maheshwari Srinivasan | I26044266 |
| 4 | Takunda Godwell Mushure | I25029962 |
| 5 | Vishnu Vardhan Chilakacharla | I26043592 |

## Research Limitations and Academic Integrity

- **Curated catalogue:** 58 records is a catalogue size, not proof of an exhaustive systematic review. Check the bibliographic record and original paper for every claim used in a submission.
- **Study-specific evaluation:** accuracy, R², RMSE, mAP, mIoU, precision, and recall measure different things. Do not compare them without explaining task and evaluation conditions.
- **No raw benchmark packs:** the original image datasets and private farm/sensor datasets discussed in the literature are not bundled in this repository.
- **Synthetic irrigation demo:** the time series is synthetic and illustrates the chart only. It is not a sensor dataset and does not prove water savings.
- **Generalisation:** controlled image datasets and simulated environments may not represent real farms, different seasons, regions, devices, or crop conditions.
- **No production model:** this is a research browsing and visualisation project, not an end-to-end model trained and validated for autonomous farm decisions.
- **Responsible academic use:** read and cite original sources, verify quantitative findings, write the final analysis in the group's own words, and follow the module's AI-use and acknowledgement requirements. Any acknowledgement should accurately describe the tools and assistance actually used.

### Evidence and validation

The site includes selected source-linked values and transparent caveats, but not every field in every catalogue record has been independently re-extracted from full text. See [AUDIT_STATUS.md](AUDIT_STATUS.md) for the audit summary and outstanding verification needs.

## Repository

[GitHub — Role of AI in Smart Agriculture Solutions](https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions)
