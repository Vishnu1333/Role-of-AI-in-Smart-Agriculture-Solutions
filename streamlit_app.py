from __future__ import annotations

import json
from pathlib import Path

import pandas as pd
import streamlit as st

ROOT = Path(__file__).resolve().parent
DATA_PATH = ROOT / "streamlit_data" / "papers.json"

st.set_page_config(
    page_title="Fieldwise AI | Smart Agriculture Research",
    page_icon="🌱",
    layout="wide",
    initial_sidebar_state="expanded",
)

st.markdown(
    """
    <style>
      .block-container {padding-top: 2rem; padding-bottom: 3rem; max-width: 1440px;}
      .hero {padding: 1.5rem 1.8rem; border-radius: 18px;
        background: linear-gradient(120deg, #173f2b 0%, #2b7046 58%, #6d9a53 100%);
        color: #fff; margin-bottom: 1rem;}
      .hero h1 {color: #fff; padding: 0; margin: 0 0 .35rem 0;}
      .hero p {color: #eff9ed; font-size: 1.08rem; margin: 0;}
      .muted-note {border-left: 4px solid #b7c98d; padding: .6rem .9rem;
        background: #f3f7ee; color: #253b2d; border-radius: 4px;}
      a {overflow-wrap: anywhere;}
    </style>
    """,
    unsafe_allow_html=True,
)


@st.cache_data
def load_papers() -> pd.DataFrame:
    if not DATA_PATH.exists():
        raise FileNotFoundError(
            f"Catalogue JSON not found: {DATA_PATH}. Make sure streamlit_data/papers.json is committed."
        )
    records = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    frame = pd.DataFrame(records)
    frame["isFoundational"] = frame["isFoundational"].fillna(False).astype(bool)
    frame["year"] = pd.to_numeric(frame["year"], errors="coerce").fillna(0).astype(int)
    return frame


try:
    all_papers = load_papers()
except Exception as exc:
    st.error(f"Could not load the literature catalogue: {exc}")
    st.stop()

categories = sorted(all_papers["application"].dropna().unique().tolist())
core = all_papers[
    (~all_papers["isFoundational"])
    & all_papers["year"].between(2021, 2026)
].copy()
foundational_count = int(all_papers["isFoundational"].sum())

st.markdown(
    """
    <div class="hero">
      <h1>🌱 Fieldwise AI</h1>
      <p>Role of AI in Smart Agriculture Solutions</p>
      <p style="font-size:.9rem;margin-top:.65rem">
        PRG4206 Machine Learning · INTI International University · Group Research Project
      </p>
    </div>
    """,
    unsafe_allow_html=True,
)
st.markdown(
    '<div class="muted-note"><strong>Evidence note:</strong> This is a curated literature catalogue and research dashboard, '
    'not a claim that every record field has been independently verified from full text. '
    'Check the original publication before using a study-specific result in academic work.</div>',
    unsafe_allow_html=True,
)

with st.sidebar:
    st.header("Explore the catalogue")
    query = st.text_input("Search titles, authors, models or findings", placeholder="e.g. irrigation, YOLO, digital twin")
    include_foundational = st.checkbox("Include foundational records (pre-2021)", value=False)
    base = all_papers.copy() if include_foundational else core.copy()
    minimum_year = int(base["year"].min()) if not base.empty else 2021
    maximum_year = int(base["year"].max()) if not base.empty else 2026
    if minimum_year == maximum_year:
        selected_years = (minimum_year, maximum_year)
        st.caption(f"Publication year: {minimum_year}")
    else:
        selected_years = st.slider(
            "Publication year range",
            min_value=minimum_year,
            max_value=maximum_year,
            value=(minimum_year, maximum_year),
        )
    selected_categories = st.multiselect("Research focus areas", options=categories, default=categories)
    st.caption("Source catalogue: src/data/papers.ts")

filtered = base[
    base["year"].between(selected_years[0], selected_years[1])
    & base["application"].isin(selected_categories)
].copy()

if query.strip():
    searchable = (
        filtered[["title", "authors", "modelFamily", "dataset", "metric", "mainFinding", "summary", "tags"]]
        .fillna("")
        .astype(str)
        .agg(" ".join, axis=1)
    )
    filtered = filtered[searchable.str.contains(query.strip(), case=False, regex=False)].copy()

tab_overview, tab_explorer, tab_findings, tab_team = st.tabs(
    ["Overview", "Literature Explorer", "Selected Findings", "Team & Notes"]
)

with tab_overview:
    c1, c2, c3, c4 = st.columns(4)
    c1.metric("Core records (2021–2026)", len(core))
    c2.metric("Foundational records", foundational_count)
    c3.metric("Research focus areas", len(categories))
    c4.metric("Currently filtered", len(filtered))

    left, right = st.columns(2)
    with left:
        st.subheader("Catalogue records by focus area")
        category_counts = (
            core.groupby("application", dropna=False)
            .size()
            .rename("Records")
            .reset_index()
            .rename(columns={"application": "Focus area"})
            .sort_values("Records", ascending=False)
        )
        st.bar_chart(category_counts.set_index("Focus area"), y="Records", height=330)
        st.caption("Counts describe the catalogue structure, not search completeness or evidence quality.")
    with right:
        st.subheader("Core records by publication year")
        year_counts = (
            core.groupby("year")
            .size()
            .reindex(range(2021, 2027), fill_value=0)
            .rename("Records")
            .rename_axis("Year")
            .reset_index()
        )
        st.bar_chart(year_counts.set_index("Year"), y="Records", height=330)
        st.caption("The core catalogue window is 2021–2026, as required by the assignment brief.")

    st.subheader("Five focus areas")
    for category in categories:
        with st.expander(category):
            n = int((core["application"] == category).sum())
            st.write(f"**{n} core catalogue records** in this focus area.")
            st.write({
                "Smart Agriculture Data & System Architecture": "Sensor, IoT, cloud/edge, data integration and digital-twin systems.",
                "Crop & Livestock Production Prediction": "Yield, quality, health and production forecasting; feature and validation choices.",
                "Monitoring & Detection": "Computer vision, disease/weed detection, sensor fusion and edge deployment.",
                "Resource & Operations Optimisation": "Irrigation, inputs, energy, automation, scheduling and reinforcement learning.",
                "Deployment, Ethics & Future Trends": "Connectivity, cost, privacy, equity, adoption and emerging approaches.",
            }.get(category, ""))

with tab_explorer:
    st.subheader("Search and filter the source catalogue")
    st.write(f"Showing **{len(filtered)}** of **{len(base)}** records matching the current filters.")
    if filtered.empty:
        st.info("No records match the current search. Try a shorter search phrase or widen the filters.")
    else:
        display = filtered[
            ["title", "authors", "year", "application", "modelFamily", "dataset", "metric", "url"]
        ].rename(columns={
            "title": "Title",
            "authors": "Authors",
            "year": "Year",
            "application": "Focus area",
            "modelFamily": "Model family",
            "dataset": "Dataset / scope",
            "metric": "Metric / evaluation",
            "url": "Publisher / DOI",
        })
        st.dataframe(
            display,
            use_container_width=True,
            hide_index=True,
            height=430,
            column_config={
                "Publisher / DOI": st.column_config.LinkColumn(
                    "Publisher / DOI", display_text="Open source ↗"
                )
            },
        )
        st.download_button(
            "Download filtered catalogue as CSV",
            data=display.to_csv(index=False).encode("utf-8-sig"),
            file_name="fieldwise_ai_filtered_literature.csv",
            mime="text/csv",
        )
        titles = filtered["title"].tolist()
        chosen = st.selectbox("Open an individual record", options=titles)
        record = filtered.loc[filtered["title"] == chosen].iloc[0]
        st.markdown("---")
        st.markdown(f"### {record['title']}")
        st.write(f"**Authors:** {record['authors']} · **Year:** {record['year']}")
        st.write(f"**Focus area:** {record['application']}")
        st.write(f"**Model / approach:** {record['modelFamily']}")
        st.write(f"**Venue:** {record.get('venue') or 'Not listed in catalogue'}")
        col_a, col_b = st.columns(2)
        with col_a:
            st.markdown("**Dataset / scope**")
            st.write(record["dataset"])
            st.markdown("**Metric / evaluation**")
            st.write(record["metric"])
        with col_b:
            st.markdown("**Main finding / scope note**")
            st.write(record["mainFinding"])
            st.markdown("**Limitation / caution**")
            st.write(record["limitation"])
        st.markdown(f"[Open publisher / DOI record]({record['url']})")
        with st.expander("Catalogue summary and tags"):
            st.write(record.get("summary", "No separate summary stored."))
            st.write("**Tags:** " + ", ".join(record.get("tags", [])))

with tab_findings:
    st.subheader("Selected source-linked quantitative findings")
    st.caption("These examples use study-specific metrics. Do not rank them against one another: tasks, datasets and metric definitions differ.")
    st.markdown("#### Wheat-yield prediction — one study, two configurations")
    st.write("Li et al. (2022) compared Random Forest configurations for wheat-yield prediction.")
    wheat = pd.DataFrame([
        {"Configuration": "RF with NIRv", "R²": 0.74, "RMSE (kg/ha)": 758},
        {"Configuration": "RF with EVI", "R²": 0.73, "RMSE (kg/ha)": 762},
    ])
    st.dataframe(wheat, hide_index=True, use_container_width=True)
    st.markdown("[Li et al. (2022), Computers and Electronics in Agriculture](https://doi.org/10.1016/j.compag.2022.106790)")
    st.markdown("#### Tomato virus detection")
    st.write("Qi et al. (2022) report 91.07% test-set accuracy and 94.10% mAP@0.5 for SE-YOLOv5. Accuracy and mAP@0.5 are different metrics.")
    st.markdown("[Qi et al. (2022), Computers and Electronics in Agriculture](https://doi.org/10.1016/j.compag.2022.106780)")
    st.markdown("#### Coffee leaf segmentation and detection")
    coffee = pd.DataFrame([
        {"Approach": "U-Net", "Reported metric": "mIoU", "Value (%)": 94.25},
        {"Approach": "PSPNet", "Reported metric": "mIoU", "Value (%)": 93.54},
        {"Approach": "Mask R-CNN", "Reported metric": "Precision", "Value (%)": 73.90},
        {"Approach": "Mask R-CNN", "Reported metric": "Recall", "Value (%)": 71.90},
    ])
    st.dataframe(coffee, hide_index=True, use_container_width=True)
    st.caption("Do not compare mIoU directly with precision or recall.")
    st.markdown("[Tassis et al. (2021), Computers and Electronics in Agriculture](https://doi.org/10.1016/j.compag.2021.106191)")
    st.markdown("#### Irrigation optimisation — simulation result")
    st.write("A Chen et al. study of DQN-based paddy-rice irrigation reports 23 mm less irrigation and 21 mm less drainage in its simulation, without significant yield reduction in that simulated setting. This is not a universal or guaranteed farm saving.")
    st.markdown("[Chen et al., Agricultural Water Management](https://doi.org/10.1016/j.agwat.2021.106838)")
    st.warning("This page intentionally avoids combining unlike metrics into a single performance leaderboard. Read the linked publication before citing a result.")

with tab_team:
    st.subheader("Group members")
    members = [
        ("GAYATHRI SAI TAPASWINI IRAGAVARAPU", "I26043735"),
        ("MOHAN MEKALA", "I26043589"),
        ("Uma Maheshwari Srinivasan", "I26044266"),
        ("Takunda Godwell Mushure", "I25029962"),
        ("Vishnu Vardhan Chilakacharla", "I26043592"),
    ]
    for name, student_id in members:
        st.write(f"**{name}** — {student_id}")
    st.subheader("Project and evidence notes")
    st.write("Course: PRG4206 Machine Learning · Session: August 2026 · Assignment: Role of AI in Smart Agriculture Solutions.")
    st.write("The dashboard is a companion research explorer. The main website remains the React/Vite application in this repository.")
    st.write("The irrigation time-series data shown in the React website is explicitly labelled as synthetic demonstration data. This Streamlit companion does not treat it as farm-measured evidence.")
    st.write("The catalogue is curated and useful for exploration, but not every paper’s dataset, result and limitation has been independently verified from full text. Review original articles before submitting claims.")
    st.markdown("[Main GitHub repository](https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions)")
    st.markdown("[Read the full catalogue audit status](https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions/blob/main/AUDIT_STATUS.md)")

st.divider()
st.caption("Fieldwise AI · Group research dashboard · Catalogue counts and selected metrics are labelled with their evidence boundaries.")
