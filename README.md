# Fieldwise AI — Role of AI in Smart Agriculture Solutions

**Fieldwise AI** is a group research project for **PRG4206 — Machine Learning** at **INTI International University**. It explores how artificial intelligence (AI) and machine learning (ML) can support modern agriculture through production prediction, crop monitoring, disease detection, resource optimisation, and data-informed farm decisions.

The repository contains two connected project experiences:

- **React + Vite research website** — an interactive, visual overview of the smart-agriculture research landscape.
- **Streamlit research dashboard** — a Python companion app for searching, filtering, exploring, and exporting records from the literature catalogue.

Both interfaces are intended to help the group organise and explain research evidence. They are research and learning tools, not a production farm-control system, and they do not directly control agricultural equipment.

## Project at a glance

| Item | Details |
|---|---|
| Project | Role of AI in Smart Agriculture Solutions |
| Project name | Fieldwise AI |
| Module | PRG4206 — Machine Learning |
| Institution | INTI International University |
| Main website stack | React, TypeScript, Vite, Recharts and CSS |
| Research dashboard stack | Python, Streamlit and Pandas |
| Literature catalogue | 58 records: 55 core records dated 2021–2026 and 3 foundational records |
| Main research scope | Five smart-agriculture focus areas |

## Why this project matters

Agriculture produces data from many different sources, including soil and weather sensors, farm records, satellite and drone imagery, crop inspections, and livestock-monitoring systems. AI/ML methods can help turn these different data sources into useful predictions, detections, and recommendations. However, a model that performs well on one dataset is not automatically reliable on another farm, crop, season, or operating environment.

Fieldwise AI brings together a structured research catalogue and an interactive explanation of this landscape. The project focuses not only on potential benefits, but also on evaluation metrics, evidence quality, deployment costs, connectivity, generalisability, privacy, and fair access to technology.

## Research focus areas

The literature catalogue is organised around the five focus areas in the PRG4206 assignment brief:

1. **Smart Agriculture Data & System Architecture** — IoT and sensor data, data pipelines, cloud and edge computing, connected systems, and digital twins.
2. **Crop & Livestock Production Prediction** — crop yield, production outcomes, quality, and livestock-related prediction approaches.
3. **Monitoring & Detection** — computer vision and sensor-based approaches for identifying plant disease, weeds, and other agricultural conditions.
4. **Resource & Operations Optimisation** — irrigation and input management, scheduling, automation, and resource-use decisions.
5. **Deployment, Ethics & Future Trends** — connectivity and cost barriers, farmer adoption, data privacy, equity, federated learning, robotics, and emerging approaches.

The catalogue currently contains 55 core records from 2021–2026 and 3 older foundational records. The five focus areas each contain 11 core records in the present catalogue. These counts describe the catalogue structure; they do not mean that every paper has been exhaustively screened or every full-text result independently verified.

## What is included?

### 1. React + Vite research website

The main website presents the project through visual storytelling and interactive research components.

- **Research overview:** introduces the project and its main questions.
- **Agricultural applications:** explains uses of AI/ML across production, monitoring, resource management, and farm operations.
- **Interactive charts:** presents selected source-linked metrics and catalogue breakdowns.
- **System architecture:** illustrates a proposed agricultural data pipeline and the roles of edge and cloud computing.
- **Literature explorer:** allows users to search and filter catalogue records and export relevant records as CSV.
- **Case studies:** highlights selected study-specific findings with links to source publications.
- **Challenges and future directions:** discusses field deployment, robustness, connectivity, privacy, and adoption.
- **Evidence notes:** distinguishes selected reported research findings from synthetic demonstration data.

The website uses **React 18, TypeScript, Vite, Recharts, Lucide React, and CSS**. It is a client-side research interface; it is not a trained model service or a live farm sensor platform.

### 2. Streamlit research dashboard

The Streamlit app provides a Python-based companion for exploring the same literature catalogue. It is useful for research review, demonstrations, and filtering records during a presentation.

- **Overview tab:** summary counts and charts showing records by focus area and publication year.
- **Literature Explorer tab:** search titles, authors, model approaches, datasets, metrics, findings, and summaries.
- **Filters:** narrow the catalogue by year and research focus area, with an option to include foundational records.
- **Record details:** inspect the scope, dataset, reported metric, finding, limitation, venue, and publisher/DOI link for a selected record.
- **CSV export:** download the currently filtered catalogue.
- **Selected Findings tab:** view a small set of source-linked examples with warnings where reported metrics are not directly comparable.
- **Team & Notes tab:** displays the group member list and project evidence notes.

The Streamlit app reads the catalogue snapshot in `streamlit_data/papers.json`. When updating research records, keep this JSON file aligned with the source catalogue in `src/data/papers.ts`.

> **Deployment status:** the repository includes a Streamlit entry point and deployment instructions. A public live Streamlit URL should only be added here after deployment has completed successfully.

## Research evidence and limitations

This is a **curated literature catalogue and research presentation**, not a formal exhaustive systematic review or a clinical/field validation of an agricultural ML system.

- **Source checking:** publisher DOI links are supplied as starting points. Not every author/title/year field, dataset detail, model description, metric, finding, or limitation has been independently checked against the full text of every paper.
- **Interpret metrics in context:** accuracy, precision, recall, mean average precision (mAP), mean intersection over union (mIoU), (R^2), and root mean squared error (RMSE) describe different aspects of different tasks. They should not be combined into one cross-study performance leaderboard.
- **Selected findings:** the interfaces display a limited set of quantitative examples that were located in the source material reviewed for this project. Open the cited source before using a result in an academic submission.
- **Synthetic irrigation data:** the irrigation time-series shown on the React website is synthetic illustrative data, not real sensor readings or proof of water savings.
- **Generalisability:** a result on a controlled image dataset does not guarantee equivalent performance under field lighting, new crops, different devices, or unfamiliar locations.
- **No live ML prediction service:** this repository does not include a deployed model API that predicts an individual farm's outcomes. Charts and catalogue exploration are for research communication.

These caveats are intentional: the project aims to communicate what selected sources report without presenting uncertain or illustrative information as verified field evidence.

## Technology stack

| Component | Technologies |
|---|---|
| Main website | React 18, TypeScript, Vite |
| Charts | Recharts |
| Icons | Lucide React |
| Website styling | CSS, design tokens, responsive layout and animations |
| Companion dashboard | Python, Streamlit, Pandas |
| Catalogue source | TypeScript data in `src/data/papers.ts` |
| Streamlit data snapshot | JSON in `streamlit_data/papers.json` |
| Version control | Git and GitHub |

## Run the React website locally

### Requirements

- Node.js 18 or later (a current LTS release is recommended)
- npm

### Commands

Clone the repository and enter the project directory:

```bash
git clone https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions.git
cd Role-of-AI-in-Smart-Agriculture-Solutions
```

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Vite prints the local development URL in the terminal, usually `http://localhost:5173/`.

Run a TypeScript check:

```bash
npm run typecheck
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

A successful local build should be confirmed in the environment used before publishing the website.

## Run the Streamlit dashboard locally

From the same repository directory, install Python dependencies and launch the Streamlit app:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
streamlit run streamlit_app.py
```

On Windows, activate the virtual environment with:

```powershell
.venv\Scripts\Activate.ps1
```

Streamlit prints a local URL in the terminal, commonly `http://localhost:8501`.

## Deploy the Streamlit dashboard

The Streamlit companion can be deployed independently from the React website using **Streamlit Community Cloud**.

1. Open [Streamlit Community Cloud](https://share.streamlit.io/) and sign in with the GitHub account that can access this repository.
2. Create a new app.
3. Select repository `Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions`.
4. Select branch `main`.
5. Set the main file path to `streamlit_app.py`.
6. Start deployment and check the app logs if the build reports an error.

Detailed steps are documented in [STREAMLIT_DEPLOYMENT.md](STREAMLIT_DEPLOYMENT.md). The Streamlit deployment is separate from the React website; publishing one does not automatically deploy the other.

## Repository structure

```text
.
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── streamlit_app.py                 # Streamlit dashboard entry point
├── requirements.txt                 # Python dashboard dependencies
├── STREAMLIT_DEPLOYMENT.md          # Streamlit deployment steps
├── streamlit_data/
│   └── papers.json                  # Streamlit literature data snapshot
├── .streamlit/
│   └── config.toml                  # Streamlit theme configuration
├── public/
│   ├── favicon.svg
│   └── fonts/
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── App.css
    ├── data/
    │   ├── papers.ts                # Literature catalogue (58 records)
    │   ├── chartData.ts             # Selected chart data and summaries
    │   └── images.ts                # Image references and alt text
    ├── styles/
    │   ├── tokens.css
    │   └── animations.css
    └── components/                  # Research sections, explorer and charts
```

## Group members

| Name | Student ID |
|---|---|
| GAYATHRI SAI TAPASWINI IRAGAVARAPU | I26043735 |
| MOHAN MEKALA | I26043589 |
| Uma Maheshwari Srinivasan | I26044266 |
| Takunda Godwell Mushure | I25029962 |
| Vishnu Vardhan Chilakacharla | I26043592 |

## Academic integrity and acknowledgements

This repository supports a group research assignment. All team members should read and understand the findings they present, check important claims against the original sources, and follow the lecturer's requirements for citations, similarity, and responsible AI use. Acknowledge AI-assisted work accurately in the submitted report or presentation as required by the course.

Do not treat a citation being present in the catalogue as proof that the entire paper has been independently verified. Before final submission, check the original publication and ensure that each claim is supported by the cited source.

## Useful links

- [GitHub repository](https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions)
- [Streamlit deployment guide](STREAMLIT_DEPLOYMENT.md)
- [Research audit status](AUDIT_STATUS.md)
- [PRG4206 group presentation](Fieldwise_AI_Smart_Agriculture_Group_Presentation.pptx)

---

**Fieldwise AI** — exploring how machine learning can support smarter, more sustainable, and more evidence-informed agriculture.
