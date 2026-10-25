# Fieldwise AI — Role of AI in Smart Agriculture Solutions

> **PRG4206 — Machine Learning · Group Research Project**  
> **Institution:** INTI International University  
> **Research window:** 2021–2026, with three separately marked foundational sources  
> **Technology:** Streamlit research dashboard + React/Vite interactive website

Fieldwise AI explores how artificial intelligence and machine learning can support smart agriculture through crop and livestock prediction, computer-vision monitoring, resource optimisation, connected farm systems, and responsible deployment.

This repository contains **two interfaces for the same research project**:

- **Streamlit dashboard (Python):** a research-focused app for exploring the literature catalogue, filtering by year and focus area, reviewing selected study findings, and downloading filtered catalogue data as CSV.
- **React/Vite website (TypeScript):** an interactive visual research website with architecture diagrams, research visualisations, application examples, case studies, a searchable literature explorer, and project methodology.

The Streamlit app is a companion interface—not a conversion of the React website. Both interfaces use the Fieldwise AI research catalogue and communicate the limits of the evidence clearly.

---

## 🌱 What the project includes

- **Five assignment focus areas:** smart-agriculture data and system architecture; crop and livestock production prediction; monitoring and detection; resource and operations optimisation; deployment, ethics, and future trends.
- **Research catalogue:** 55 core catalogue records dated 2021–2026 and three foundational records (58 records total). These are curated catalogue records, not a claim that every field in every paper has been verified against the full text.
- **Streamlit literature dashboard:** searchable and filterable records, focus-area and publication-year summaries, individual paper details, and filtered CSV export.
- **Source-linked findings:** selected quantitative examples from cited studies. Metrics such as accuracy, mAP, mIoU, precision, recall, R², and RMSE are not interchangeable and should not be ranked as one universal leaderboard.
- **Research visualisations:** the React website includes charts with source/context notes. Its irrigation time series is synthetic demonstration data, not measured farm data.
- **Deployment and ethics discussion:** rural connectivity, data quality, model generalisability, farmer adoption, affordability, privacy, and equitable access.
- **Academic transparency:** publisher links are included for checking. DOI presence does not by itself verify every author, title, dataset, metric, result, or limitation.

---

## 🚀 Run the Streamlit dashboard

### Requirements

- Python 3.10 or later recommended
- pip
- The dependencies listed in **requirements.txt**

### Install and start locally

**macOS / Linux**

```bash
git clone https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions.git
cd Role-of-AI-in-Smart-Agriculture-Solutions

python3 -m venv .venv
source .venv/bin/activate

python -m pip install --upgrade pip
pip install -r requirements.txt

streamlit run streamlit_app.py
```

**Windows PowerShell**

```powershell
git clone https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions.git
cd Role-of-AI-in-Smart-Agriculture-Solutions

py -m venv .venv
.\\.venv\\Scripts\\Activate.ps1

python -m pip install --upgrade pip
pip install -r requirements.txt

streamlit run streamlit_app.py
```

Streamlit will show a local URL in the terminal, usually localhost port 8501.

### Deploy on Streamlit Community Cloud

1. Sign in at [Streamlit Community Cloud](https://share.streamlit.io/) using the GitHub account with access to this repository.
2. Choose **Create app**.
3. Set the repository to **Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions**.
4. Choose branch **main**.
5. Set **Main file path** to **streamlit_app.py**.
6. Select **Deploy** and wait for the build to finish.

Deployment guide: [Streamlit Community Cloud documentation](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/deploy).

**Deployment status:** this repository contains the Streamlit entry point and configuration. A live Streamlit URL should only be shared after the app has been deployed successfully from the project owner's Streamlit account.

---

## 🖥️ Run the React/Vite website

The original interactive website remains available separately from the Streamlit dashboard.

### Requirements

- Node.js 18 or later (a current LTS release is recommended)
- npm 9 or later

```bash
npm ci
npm run dev
```

Vite normally serves the website at localhost port 5173.

Useful additional commands:

```bash
npm run typecheck
npm run build
npm run preview
```

The production build has not been certified by this README alone. Run the commands in your target environment and address any errors returned by the build.

---

## 🧭 Streamlit dashboard guide

The Python dashboard is in **streamlit_app.py** and has four main tabs:

1. **Overview** — catalogue counts, focus areas, and records by publication year.
2. **Literature Explorer** — keyword search, year and category filters, full catalogue fields, source links, and CSV download.
3. **Selected Findings** — selected source-linked study results with cautions about metric and dataset comparability.
4. **Team & Notes** — project context, group member details, and research evidence notes.

The source catalogue is exported to **streamlit_data/papers.json** for the Streamlit app. The React website uses **src/data/papers.ts**. When the catalogue changes, keep these two data sources synchronised.

---

## 🧭 Research scope and marking-criteria alignment

| Assignment focus area | Where it is covered | Main questions |
|---|---|---|
| Smart Agriculture Data & System Architecture | Streamlit catalogue, React Architecture section | How do sensors, IoT, cloud/edge systems, drones, and farm records become usable model inputs? |
| Crop & Livestock Production Prediction | Streamlit Selected Findings, React Applications and Data Visualisation | How are production outcomes predicted, which metrics are used, and how well do results generalise? |
| Monitoring & Detection | Streamlit Selected Findings, React case studies and catalogue | How are disease, weeds, and crop conditions detected with vision or sensor data? |
| Resource & Operations Optimisation | Streamlit Selected Findings, React visualisations and case studies | How can ML support irrigation, inputs, scheduling, and farm operations? |
| Deployment, Ethics & Future Trends | Streamlit Team & Notes, React Challenges & Future section | What limits adoption, fairness, privacy, affordability, and field deployment? |

---

## 📁 Repository structure

```text
.
├── streamlit_app.py                 # Python/Streamlit research dashboard
├── requirements.txt                 # Streamlit dependency
├── streamlit_data/
│   └── papers.json                  # Catalogue data read by Streamlit
├── .streamlit/
│   └── config.toml                  # Streamlit theme configuration
├── STREAMLIT_DEPLOYMENT.md          # Community Cloud deployment notes
├── index.html                       # React/Vite website entry point
├── package.json                     # JavaScript dependencies and scripts
├── package-lock.json                # Locked JavaScript dependency tree
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── public/                          # Icons and web-font assets
└── src/
    ├── main.tsx                     # React bootstrap
    ├── App.tsx                      # Main website layout
    ├── data/
    │   ├── papers.ts                # React literature catalogue
    │   ├── chartData.ts             # Source-linked chart records and summaries
    │   └── images.ts                # Website image references
    ├── styles/                      # Design tokens and animations
    └── components/                  # Website sections and visualisations
```

---

## 📚 Evidence quality and academic integrity

- The catalogue contains 55 core records dated 2021–2026 and three foundational records, for 58 records in total. The core catalogue has 11 entries assigned to each of the five focus areas; this is a structural count, not proof of exhaustive screening or full-text validation.
- Publisher DOI links are provided to help readers check original sources. Verify the original paper before citing any study-specific statement.
- Review articles and conceptual papers do not receive invented empirical scores. Where study details have not been independently extracted, the catalogue says so.
- The wheat-yield example compares two configurations reported in one study. Other model metrics may refer to different tasks or datasets and should not be treated as directly comparable.
- The React irrigation time series is **synthetic demonstration data**, not farm-measured evidence. It must not be described as actual farm performance or proven water savings.
- Before academic submission, the group should read and verify the primary papers used in the final report and ensure all claims are correctly cited.
- Use AI tools only within the course's responsible-AI policy. Acknowledge assistance accurately and make sure the group understands and can explain the work.

---

## 👥 Group members

- **GAYATHRI SAI TAPASWINI IRAGAVARAPU** — I26043735
- **MOHAN MEKALA** — I26043589
- **Uma Maheshwari Srinivasan** — I26044266
- **Takunda Godwell Mushure** — I25029962
- **Vishnu Vardhan Chilakacharla** — I26043592

---

## 🔗 Project resources

- [GitHub repository](https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions)
- [Streamlit Community Cloud](https://share.streamlit.io/)
- [Streamlit deployment documentation](https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/deploy)
- [Research audit status](AUDIT_STATUS.md)
- [Group presentation](Fieldwise_AI_Smart_Agriculture_Group_Presentation.pptx)
- [Streamlit deployment notes](STREAMLIT_DEPLOYMENT.md)
