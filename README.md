# Fieldwise AI — Role of AI in Smart Agriculture Solutions

**PRG4206 Machine Learning · INTI International University · Group Research Project**

Fieldwise AI is an interactive research website that explores how artificial intelligence (AI) and machine learning (ML) can support smarter agricultural decisions. It brings together a curated literature catalogue, selected source-linked research findings, interactive visualisations, and a system-architecture overview in one responsive React website.

The project is a **research and visualisation platform**. It does not currently train or serve a live ML model, connect to physical farm sensors, or include the raw source datasets from the publications.

## Contents

- [Project goals](#project-goals)
- [Five research focus areas](#five-research-focus-areas)
- [Features](#features)
- [Datasets and research data](#datasets-and-research-data)
- [Technology stack](#technology-stack)
- [Project structure](#project-structure)
- [Run locally](#run-locally)
- [Deploy the website](#deploy-the-website)
- [Group members](#group-members)
- [Research limitations and academic integrity](#research-limitations-and-academic-integrity)

## Project goals

Modern farming increasingly relies on information from soil and weather sensors, satellite and drone imagery, field records, and crop-monitoring systems. AI/ML techniques can use these sources to support tasks such as crop-yield estimation, disease and weed detection, irrigation planning, and farm-operation decisions.

Fieldwise AI is designed to help students and readers explore the research behind these uses. It emphasises the data and validation conditions behind each finding, rather than presenting results from different studies as if they were directly interchangeable.

The literature catalogue contains **55 core records dated 2021–2026** and **3 foundational records**. The five assignment focus areas each contain 11 core catalogue records. These are catalogue counts, not proof that every publication has been read in full or independently verified.

## Five research focus areas

| Focus area | Topics covered |
|---|---|
| **1. Smart Agriculture Data & System Architecture** | Sensor and IoT data, drones, satellite imagery, data ingestion, edge/cloud computing, digital twins, and rural connectivity. |
| **2. Crop & Livestock Production Prediction** | Crop-yield and quality prediction, climate and soil features, remote-sensing indicators, model selection, and evaluation metrics. |
| **3. Monitoring & Detection** | Plant-disease and weed detection, computer vision, image segmentation, sensor-based monitoring, and in-field deployment considerations. |
| **4. Resource & Operations Optimisation** | Irrigation and water management, resource scheduling, farm automation, and reinforcement-learning approaches described in the literature. |
| **5. Deployment, Ethics & Future Trends** | Cost and connectivity barriers, privacy, farmer adoption, access for smallholders, federated learning, robotics, and emerging systems. |

## Features

- **Responsive research website** with a dark, editorial visual style, agricultural imagery, and responsive hero composition.
- **Five interactive research visualisations** with tooltips, source details, and cautions where the underlying metrics or data are not directly comparable.
- **Searchable literature explorer** covering the catalogue records, including year and application metadata.
- **Filters and expandable record details** to browse authors, publication years, application areas, model families, dataset notes, metrics, findings, and limitations.
- **CSV export** for the filtered literature catalogue.
- **System architecture diagram** describing a proposed agricultural data pipeline from sensing and ingestion through processing, modelling, and decision support.
- **Selected case studies** that link specific findings to their source publications.
- **Evidence notes** that distinguish reported publication results from illustrative website elements and synthetic chart data.

## Datasets and research data

### Research datasets referenced in the literature catalogue

The website describes datasets and study settings reported by the cited publications. The original image, sensor, and farm-measurement datasets are **not bundled with this repository**, unless explicitly described as the synthetic demonstration data below.

| Dataset or study data | What the source describes | How Fieldwise AI uses it |
|---|---|---|
| **PlantVillage** | A foundational plant-disease image dataset with 54,306 images covering 14 crop species and 26 disease/healthy classes, as described by Mohanty et al. (2016). | Literature catalogue context for plant-disease image classification. The raw images are not included. |
| **Ferentinos (2018) plant-disease image corpus** | The publication reports 87,848 images spanning 25 plant species and 58 plant/disease classes. | Foundational literature context and source-linked reported result. The raw images are not included. |
| **CottonWeedDet12** | Field-image benchmark described in the catalogue with 5,648 images, 12 weed classes, and 9,370 bounding-box annotations. | Research explorer and selected literature context; the original benchmark is not bundled. |
| **Tomato virus disease images** | Study-specific greenhouse tomato images captured using a mobile phone, as described in the catalogue record for Qi et al. (2022). | Selected reported findings for the SE-YOLOv5 study; the full image dataset is not bundled. |
| **Coffee leaf segmentation/instance images** | Smartphone images captured in natural scenes with varied backgrounds and lighting, as described by Tassis et al. (2021). | Selected paper findings and discussion of segmentation metrics; raw images are not bundled. |
| **Wheat-yield and environmental data** | Multi-source crop-yield data described by Li et al. (2022), including remote-sensing vegetation indicators such as NIRv/EVI and environmental covariates. | A within-study comparison of two Random Forest configurations using the reported R² and RMSE. Raw data are not bundled. |
| **Paddy-rice irrigation simulation** | A study-specific reinforcement-learning irrigation simulation described by Chen et al. | A contextual case study of reported simulated irrigation and drainage outcomes; no simulation engine or field dataset is bundled. |
| **AppleDisease5** | Apple-leaf imagery covering five diseases, with simple and complex image backgrounds, as described in the catalogue. | Literature context for lightweight object detection; the original images are not bundled. |

### Data that is actually included in the application

- **Literature catalogue:** src/data/papers.ts contains the 58 catalogue records and their metadata, study notes, limitations, and DOI/publisher URLs.
- **Selected quantitative chart values:** src/data/chartData.ts stores a limited set of values attributed to selected publications. The source-specific tooltips and notes are intended to keep the task, dataset, and metric context visible.
- **Synthetic irrigation time series:** the irrigation visualisation in src/data/chartData.ts uses synthetic demonstration values. It is not a real farm measurement and must not be cited as evidence of actual water savings.
- **Illustrative hero sensor and crop-index values:** values such as soil moisture, temperature, humidity, and the sample crop index are visual examples for the website layout, not live sensor feeds or verified agronomic recommendations.

**Important:** This is a literature-exploration interface, not a dataset-training pipeline. The research datasets named above are referenced by the reviewed publications; the website does not claim to have downloaded, trained on, or independently reproduced every source dataset.

## Technology stack

- **React 18** — component-based website interface.
- **TypeScript** — typed research data and UI components.
- **Vite 6** — local development server and production bundling.
- **Recharts** — interactive chart components.
- **Lucide React** — interface icons.
- **Vanilla CSS** — layout, theme tokens, responsive behaviour, and animations.

## Project structure

    .
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── public/
    │   ├── favicon.svg
    │   └── fonts/
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── App.css
        ├── data/
        │   ├── papers.ts
        │   ├── chartData.ts
        │   └── images.ts
        ├── styles/
        │   ├── tokens.css
        │   └── animations.css
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

## Run locally

### Prerequisites

- Node.js 18 or later (a current LTS release is recommended)
- npm 9 or later

### Installation

Clone the repository and enter the project directory:

~~~bash
git clone https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions.git
cd Role-of-AI-in-Smart-Agriculture-Solutions
~~~

Install the locked dependency versions:

~~~bash
npm ci
~~~

Run the TypeScript check:

~~~bash
npm run typecheck
~~~

Start the development server:

~~~bash
npm run dev
~~~

Vite will print the local address, usually http://localhost:5173.

Build and preview the production bundle:

~~~bash
npm run build
npm run preview
~~~

The production bundle is written to dist/. The dist/ directory and node_modules/ should not be committed to GitHub.

## Deploy the website

The project is a standard React + Vite static website and can be deployed on **Vercel** or **Netlify**.

### Vercel

1. Open https://vercel.com/ and sign in with the GitHub account that can access this repository.
2. Import Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions.
3. Select **Vite** as the framework preset if it is not detected automatically.
4. Use these settings:
   - **Build command:** npm run build
   - **Output directory:** dist
   - **Install command:** npm ci
5. Deploy and open the generated website URL.

### Netlify

Create a new site from the same GitHub repository, set the build command to npm run build, and set the publish directory to dist.

No environment variables or API keys are required for the current static research website. A successful production deployment should still be confirmed by the hosting build logs before sharing the link.

## Group members

| No. | Name | Student ID |
|---:|---|---|
| 1 | GAYATHRI SAI TAPASWINI IRAGAVARAPU | I26043735 |
| 2 | MOHAN MEKALA | I26043589 |
| 3 | Uma Maheshwari Srinivasan | I26044266 |
| 4 | Takunda Godwell Mushure | I25029962 |
| 5 | Vishnu Vardhan Chilakacharla | I26043592 |

## Research limitations and academic integrity

- The catalogue includes 55 core records dated 2021–2026 and 3 foundational records. These counts describe the current catalogue and do not prove that every candidate paper was found or screened exhaustively.
- Publisher DOI links are included for checking the original publications. Not every dataset detail, metric, finding, and limitation in the catalogue has been independently verified against the full text of every paper.
- Reported values from different studies can use different datasets, tasks, test protocols, and metrics. For example, accuracy, mean average precision (mAP), mean intersection over union (mIoU), precision, recall, R², and RMSE are not interchangeable.
- Synthetic irrigation values and illustrative hero values are visual demo content only. Do not report them as observed farm data or measured water savings.
- This repository does not currently implement or deploy trained ML models, a live IoT sensor connection, or a live crop-monitoring service. It explains and visualises selected research evidence.
- Before submitting academic work, group members should read and verify the original sources for the claims they cite, make sure they understand the analysis, follow the course's citation requirements, and declare AI assistance in accordance with university policy.

## Selected source links

- Li et al. (2022), wheat-yield prediction: https://doi.org/10.1016/j.compag.2022.106790
- Qi et al. (2022), tomato virus detection: https://doi.org/10.1016/j.compag.2022.106780
- Tassis et al. (2021), coffee leaf segmentation/detection: https://doi.org/10.1016/j.compag.2021.106191
- Chen et al., paddy-rice irrigation reinforcement learning: https://doi.org/10.1016/j.agwat.2021.106838
- Ferentinos (2018), plant-disease image classification: https://doi.org/10.1016/j.compag.2018.01.009
- Mohanty et al. (2016), PlantVillage image classification: https://doi.org/10.3389/fpls.2016.01419

---

**Fieldwise AI** · PRG4206 Machine Learning · INTI International University
