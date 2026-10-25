# Fieldwise AI — Role of AI in Smart Agriculture Solutions

**PRG4206 Machine Learning · Group Research Project · INTI International University · August 2026**

Fieldwise AI is a research-oriented web platform and dashboard that explores how artificial intelligence (AI) and machine learning (ML) are being used across smart agriculture. The project organises a curated literature catalogue, summarises selected source-linked findings, and presents research through interactive charts and searchable records.

This repository contains **two companion applications**:
1. **React + Vite research website** — the interactive, visual public-facing research platform.
2. **Python + Streamlit dashboard** — a research catalogue and analysis interface with filtering, selected findings, and CSV export.

The project supports a critical literature review; it is **not a farm-control system, a trained predictive model, or a package of raw image/sensor datasets**. Performance figures shown in the apps are selected results reported by cited studies, not experiments independently trained or run by this application.

**Repository:** [Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions](https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions)

---

## Table of Contents

- [Project Purpose](#project-purpose)
- [Applications](#applications)
- [Five Research Focus Areas](#five-research-focus-areas)
- [Key Features](#key-features)
- [Research Catalogue and Datasets](#research-catalogue-and-datasets)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Run the React + Vite Website](#run-the-react--vite-website)
- [Run the Streamlit Dashboard](#run-the-streamlit-dashboard)
- [Deploy the Streamlit Dashboard](#deploy-the-streamlit-dashboard)
- [Group Members](#group-members)
- [Research Limitations and Academic Integrity](#research-limitations-and-academic-integrity)

---

## Project Purpose

Modern agriculture can produce data from soil-moisture sensors, weather stations, satellite and drone imagery, crop-management records, farm equipment, and livestock monitoring systems. AI/ML methods can help analyse these data for production forecasting, disease and weed detection, resource scheduling, and operational decision support.

Fieldwise AI makes this research landscape easier to explore. It aims to help readers:

- understand where AI/ML is applied across the agricultural value chain;
- inspect the data types, model families, reported metrics, and limitations described in selected publications;
- compare findings carefully while respecting differences in datasets, tasks, and evaluation methods;
- explore deployment issues such as connectivity, cost, privacy, fairness, and generalisation from controlled datasets to real farms.

The central research question is:

> **What role does AI play across the smart agriculture ecosystem, and how can machine learning models be designed to address prediction, detection, monitoring, and optimisation problems throughout modern farming operations?**

---

## Applications

### 1. React + Vite research website

The React website is the main visual research experience. It uses a designed editorial interface, responsive sections, animated transitions, interactive Recharts visualisations, an agricultural data-pipeline overview, selected case studies, and a searchable literature catalogue.

Useful features include model- and category-oriented chart filters, study-linked tooltips, expandable literature records, and CSV export of the catalogue results.

### 2. Python + Streamlit dashboard

The Streamlit companion is a separate Python application built for interactive catalogue exploration and research review. It includes four tabs:

- **Overview** — catalogue counts, category distribution, publication-year distribution, and explanations of the five focus areas.
- **Literature Explorer** — free-text search, year-range and category filters, individual paper details, publisher/DOI links, and CSV export of filtered records.
- **Selected Findings** — source-linked examples for wheat-yield prediction, tomato-virus detection, coffee-leaf analysis, and simulated irrigation optimisation, with cautions about comparing unlike metrics.
- **Team & Notes** — group roster, project context, evidence notes, and links to the repository audit information.

The Streamlit application reads the JSON export at `streamlit_data/papers.json`. The source catalogue used by the React application is `src/data/papers.ts`; keep the two files synchronised when modifying the catalogue.

---

## Five Research Focus Areas

The catalogue is organised around the five focus areas in the PRG4206 assignment brief.

| Focus area | Topics covered |
|---|---|
| **1. Smart Agriculture Data & System Architecture** | IoT and sensor data, remote sensing, data pipelines, cloud/edge computing, interoperability, digital twins, and rural connectivity. |
| **2. Crop & Livestock Production Prediction** | Crop-yield forecasting, production and quality estimates, environmental and climate variables, feature selection, model evaluation, and generalisation. |
| **3. Monitoring & Detection** | Plant disease and weed recognition, image-based detection and segmentation, field monitoring, sensor observations, and edge/mobile use. |
| **4. Resource & Operations Optimisation** | Irrigation and water management, fertigation, input efficiency, automation, robotic platforms, path planning, and reinforcement learning. |
| **5. Deployment, Ethics & Future Trends** | Adoption barriers, affordability, privacy, data governance, cybersecurity, fairness for smallholders, federated learning, and future agricultural technologies. |

The current catalogue contains **58 records**: 55 core records dated 2021–2026 and three older foundational records. These are catalogue counts, not evidence of exhaustive literature screening or full-text verification.

---

## Key Features

### React website
- Five interactive research visualisations using Recharts.
- Selected model-performance results with study, dataset, metric, year, and source details.
- A within-study wheat-yield comparison for Random Forest configurations using NIRv and EVI.
- Disease and weed detection examples that keep accuracy, mAP, mIoU, precision, and recall distinct.
- A clearly labelled synthetic irrigation time series for demonstrating how monitoring charts can work.
- A seven-stage smart-agriculture data-pipeline illustration with edge and cloud considerations.
- Searchable, filterable literature catalogue with expanded paper details and CSV export.
- Research case studies and discussion of technical, operational, ethical, and adoption challenges.

### Streamlit dashboard
- Catalogue and category summaries.
- Search by title, authors, model family, dataset description, metrics, findings, summary, or tags.
- Publication-year and research-focus filters.
- Individual record detail view with source links.
- Download filtered catalogue results as CSV.
- Group-member details and research-evidence warnings.

---

## Research Catalogue and Datasets

### What is included in this repository?

The project includes **literature metadata and selected reported results**, not the original raw training datasets from every paper. The catalogue stores publication information, application area, model family, dataset/scope notes, metric notes, main finding, limitation, DOI, source URL, and tags.

| Dataset or data source referenced in the literature | How it is used or discussed |
|---|---|
| **PlantVillage** | Foundational plant-disease image-classification benchmark; the catalogue describes 54,306 images across 14 crop species and 26 disease/healthy classes under controlled conditions, as reported by Mohanty et al. (2016). |
| **Ferentinos plant-disease image database** | Foundational image dataset described by Ferentinos (2018): 87,848 images across 25 plant species and 58 plant/disease classes. The catalogue describes the study database and does not treat its result as a field-deployment guarantee. |
| **CottonWeedDet12** | Cotton-weed object-detection dataset described in the catalogue as 5,648 field images, 12 weed classes, and 9,370 bounding boxes. Selected reported results are shown for YOLOv4 and YOLOv3-tiny. |
| **AppleDisease5** | Apple-leaf image dataset covering five diseases with simple and complex backgrounds; referenced by the MEAN-SSD detection study. |
| **Tomato virus-disease image dataset** | Study-specific images collected by mobile phone in greenhouse settings in Taigu County, Shanxi, China; referenced by the SE-YOLOv5 study. |
| **Coffee-leaf instance-segmentation dataset** | Study-specific smartphone images of coffee-tree portions collected in natural scenes with varied lighting and backgrounds; referenced by the U-Net, PSPNet, and Mask R-CNN comparison. |
| **Wheat-yield and environmental data for China** | Multi-source data described by Li et al. (2022), including satellite vegetation indices, climate variables, and soil properties. The displayed NIRv/EVI comparison comes from the same study. |
| **JRC MARS Crop Yield Forecasting System** | Named in one catalogue record about interpretability of crop-yield forecasting. |
| **Paddy-rice weather and meteorological data** | A study-specific record describes weather forecasts and observed meteorological data for paddy-rice growth near Nanchang, China, covering the 2012–2019 growing seasons, for an irrigation-decision study. |
| **Other study-specific sources** | The catalogue also describes spring-wheat UAV field trials, chickpea classification from climatic features, open-access global wheat-yield data, maize soil-moisture/canopy-cover observations, and stakeholder/adoption studies. For several of these, the precise data source or sample details still need to be extracted from the original paper. |

**Important:** these names identify datasets or data sources *discussed in the source literature*. They do not mean the raw images, sensor readings, training splits, model weights, or full benchmark files are bundled in this repository. For exact dataset versions, licence terms, splits, and reproducibility, consult the linked original publication or its official data repository.

### Selected research values used in charts

Examples of the selected source-linked values include:

- **Wheat yield — Li et al. (2022):** Random Forest with NIRv reports R² = 0.74 and RMSE = 758 kg/ha; the EVI configuration reports R² = 0.73 and RMSE = 762 kg/ha. Both rows are from the same study.
- **Tomato-virus detection — Qi et al. (2022):** SE-YOLOv5 reports 91.07% test-set accuracy and 94.10% mAP@0.5.
- **Coffee-leaf analysis — Tassis et al. (2021):** the catalogue reports mIoU values for U-Net and PSPNet, plus precision and recall for Mask R-CNN. These are different metrics and should not be ranked as if interchangeable.
- **Paddy-rice irrigation — Chen et al. study:** the literature notes reported reductions in irrigation and drainage in a simulation setting. These results are simulation-specific, not a promise of the same savings on a real farm.

Publisher links are provided next to selected findings so readers can inspect the source. Numbers are used for contextual illustration, not as one universal leaderboard across different tasks and datasets.

### Synthetic demonstration data

The React visualisation module, `src/data/chartData.ts`, includes an **illustrative synthetic irrigation time series** (soil-moisture values, irrigation events, rainfall, and evapotranspiration). It exists to demonstrate the chart interaction and should not be interpreted as measured data from a farm or as experimental evidence of water savings.

---

## Technology Stack

| Layer | Technology | Role |
|---|---|---|
| React website | React 18, TypeScript, Vite | Component-based application, development server, and production bundling. |
| Website charts | Recharts | Interactive research and landscape visualisations. |
| Website icons | Lucide React | Interface icons. |
| Website styling | CSS and custom design tokens | Responsive layout, gradients, animations, typography, and visual theme. |
| Streamlit dashboard | Python and Streamlit | Interactive research dashboard and browser-based filtering. |
| Dashboard data handling | pandas and JSON | Tabular filtering, summary aggregation, detail display, and CSV export. |
| Catalogue source | TypeScript data module and JSON export | Literature records used across the two applications. |
| Version control | Git and GitHub | Project source, documentation, and collaboration. |
| Deployment targets | Streamlit Community Cloud for the Streamlit companion; a static frontend host such as Vercel or Netlify can be used for the React website | Separate deployment paths for the two apps. |

---

## Project Structure

```text
.
├── index.html                       # React/Vite website HTML entry
├── package.json                     # React application scripts and dependencies
├── package-lock.json                # Locked JavaScript dependency tree
├── vite.config.ts                   # Vite and alias configuration
├── tsconfig.json                    # TypeScript compiler settings
├── requirements.txt                 # Streamlit runtime dependency
├── streamlit_app.py                 # Streamlit dashboard entry point
├── streamlit_data/
│   └── papers.json                  # JSON export used by the Streamlit dashboard
├── .streamlit/
│   └── config.toml                  # Streamlit theme settings
├── STREAMLIT_DEPLOYMENT.md           # Streamlit Community Cloud deployment guide
├── AUDIT_STATUS.md                   # Research catalogue audit and validation notes
└── src/
    ├── main.tsx                     # React application bootstrap
    ├── App.tsx                      # Main website layout
    ├── App.css                      # Base application layout
    ├── data/
    │   ├── papers.ts                # 58 literature records and catalogue metadata
    │   ├── chartData.ts             # Selected source-linked chart rows, synthetic irrigation series, and aggregates
    │   └── images.ts                # Centralised image references and alternative text
    ├── styles/
    │   ├── tokens.css               # Design tokens and global styles
    │   └── animations.css            # Motion and reduced-motion styles
    └── components/
        ├── Nav.tsx / Nav.css
        ├── Hero.tsx / Hero.css
        ├── ResearchProof.tsx / ResearchProof.css
        ├── Applications.tsx / Applications.css
        ├── DataVisualisation.tsx / DataVisualisation.css
        ├── Architecture.tsx / Architecture.css
        ├── ResearchExplorer.tsx / ResearchExplorer.css
        ├── ChallengesFuture.tsx / ChallengesFuture.css
        ├── CaseStudies.tsx / CaseStudies.css
        ├── Methodology.tsx / Methodology.css
        ├── AboutSection.tsx / AboutSection.css
        └── Footer.tsx / Footer.css
```

---

## Run the React + Vite Website

### Prerequisites
- Node.js 18 or later (a current LTS release is recommended).
- npm, which is installed with Node.js.

### macOS / Linux / Windows Terminal

From a terminal, clone the repository and enter its directory:

```bash
git clone https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions.git
cd Role-of-AI-in-Smart-Agriculture-Solutions

# Install dependencies from the lockfile
npm ci

# Run the local development server
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

To check the TypeScript project and build the production bundle:

```bash
npm run typecheck
npm run build
npm run preview
```

The preview command prints its local URL, commonly `http://localhost:4173`.

---

## Run the Streamlit Dashboard

The Streamlit app is independent of the React website. It reads the literature JSON export from `streamlit_data/papers.json`.

### Prerequisites
- Python 3.10 or a compatible version supported by the pinned Streamlit release.
- pip.

### macOS / Linux

From the repository root:

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
.venv\Scripts\Activate.ps1

python -m pip install --upgrade pip
python -m pip install -r requirements.txt

streamlit run streamlit_app.py
```

Streamlit will print a local address, normally `http://localhost:8501`. Keep `streamlit_data/papers.json` in place; the app expects this file relative to `streamlit_app.py`.

To stop either development server, press `Ctrl+C` in the terminal where it is running.

---

## Deploy the Streamlit Dashboard

The repository is configured for a **Streamlit Community Cloud companion app**. The app must be created and authorised in the repository owner's Streamlit account; a committed Python entry point does not by itself mean a public deployment is already live.

1. Open [Streamlit Community Cloud](https://share.streamlit.io/) and sign in with the GitHub account that can access the repository.
2. Select **Create app**.
3. Select the repository **`Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions`**.
4. Select branch **`main`**.
5. Set **Main file path** to **`streamlit_app.py`**.
6. Choose an available app URL and click **Deploy**.
7. Wait for dependency installation and app startup; then open the generated `*.streamlit.app` URL.

Deployment configuration files:

- [`streamlit_app.py`](streamlit_app.py) — app entry point.
- [`requirements.txt`](requirements.txt) — Python dependency declaration.
- [`streamlit_data/papers.json`](streamlit_data/papers.json) — catalogue data read by the app.
- [`STREAMLIT_DEPLOYMENT.md`](STREAMLIT_DEPLOYMENT.md) — deployment-specific notes.

Official guide: [Deploy an app on Streamlit Community Cloud](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/deploy).

### Hosting the React website

The React/Vite website is a separate frontend and can be deployed to a static frontend service such as Vercel or Netlify. Use the repository root as the project directory and the usual Vite build command, `npm run build`; the publish directory is `dist`. Streamlit Community Cloud hosts the Streamlit entry point, not the React app itself.

---

## Group Members

| No. | Group member | Student ID |
|---:|---|---|
| 1 | GAYATHRI SAI TAPASWINI IRAGAVARAPU | I26043735 |
| 2 | MOHAN MEKALA | I26043589 |
| 3 | Uma Maheshwari Srinivasan | I26044266 |
| 4 | Takunda Godwell Mushure | I25029962 |
| 5 | Vishnu Vardhan Chilakacharla | I26043592 |

---

## Research Limitations and Academic Integrity

- **Curated catalogue, not an exhaustive systematic review.** The 55 core records from 2021–2026 and three foundational records describe the current catalogue structure. They do not prove that a reproducible, exhaustive search or full-text screening of every relevant publication has been completed.
- **Check papers at the source.** Publisher DOI links are provided as research starting points. Not every field — such as the exact dataset, sample size, model configuration, metric, limitation, or claim — has been independently extracted from the full text of every paper. Review original sources before citing specific results.
- **No raw benchmark data or trained ML models are bundled.** Datasets such as PlantVillage, CottonWeedDet12, and AppleDisease5 are described or referenced in the literature catalogue, but their full raw data are not included in this repository. The apps display literature metadata and selected findings; they do not train a model on those datasets.
- **Metrics are not interchangeable.** Accuracy, precision, recall, mAP, mIoU, R², and RMSE measure different things. Avoid ranking values from different tasks or datasets as if they were direct alternatives.
- **Synthetic irrigation data are for demonstration only.** The irrigation time series in the React website is illustrative synthetic data, not a field measurement. It must not be cited as real measured performance or evidence of actual farm savings.
- **Deployment is separate from source upload.** A Streamlit app is live only after it is successfully created and deployed through Streamlit Community Cloud. The same is true of any separate React frontend hosting.
- **Responsible use of AI tools.** Group members should read and understand the original publications, confirm all claims, write and defend their own critical analysis, and acknowledge any AI assistance in line with the university's academic-integrity policy. Do not claim that unverified content has been fully validated.

For further audit context, see [AUDIT_STATUS.md](AUDIT_STATUS.md).

---

## Repository Links

- [GitHub repository](https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions)
- [React website source](src/)
- [Literature catalogue](src/data/papers.ts)
- [Selected chart data and demonstration data](src/data/chartData.ts)
- [Streamlit dashboard](streamlit_app.py)
- [Streamlit deployment instructions](STREAMLIT_DEPLOYMENT.md)
- [Research audit status](AUDIT_STATUS.md)
