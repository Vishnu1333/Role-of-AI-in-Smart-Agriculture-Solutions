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
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

      :root {
        --fw-bg: #0a0618;
        --fw-surface: #130d2e;
        --fw-surface-2: #1b143f;
        --fw-violet: #625df5;
        --fw-magenta: #d52dff;
        --fw-coral: #ff623d;
        --fw-text: #fdfcfb;
        --fw-muted: #b4abcF;
        --fw-border: rgba(255,255,255,.12);
      }

      html, body, [class*="css"], [data-testid="stMarkdownContainer"] {
        font-family: 'DM Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      }

      [data-testid="stAppViewContainer"] {
        background:
          radial-gradient(ellipse 70% 35% at 12% 0%, rgba(98,93,245,.19), transparent 70%),
          radial-gradient(ellipse 55% 32% at 100% 18%, rgba(213,45,255,.11), transparent 72%),
          var(--fw-bg);
        color: var(--fw-text);
      }
      [data-testid="stHeader"] {background: rgba(10,6,24,.82);}
      [data-testid="stMainBlockContainer"], .block-container {
        max-width: 1440px;
        padding-top: 2.1rem;
        padding-bottom: 3.2rem;
      }
      [data-testid="stSidebar"] {
        background: linear-gradient(180deg, rgba(15,11,36,.98), rgba(19,13,46,.98));
        border-right: 1px solid var(--fw-border);
      }
      [data-testid="stSidebar"] > div:first-child {background: transparent;}
      [data-testid="stSidebar"] h1, [data-testid="stSidebar"] h2,
      [data-testid="stSidebar"] h3 {font-family: 'Space Grotesk', sans-serif; color: var(--fw-text);}
      [data-testid="stSidebar"] label, [data-testid="stSidebar"] p,
      [data-testid="stSidebar"] .stCaption {color: #d5cfee;}

      .hero {
        position: relative;
        overflow: hidden;
        isolation: isolate;
        padding: clamp(1.7rem, 4vw, 3.2rem);
        border: 1px solid rgba(213,45,255,.26);
        border-radius: 26px;
        background:
          radial-gradient(circle at 85% 13%, rgba(255,98,61,.17), transparent 25%),
          radial-gradient(circle at 7% 100%, rgba(213,45,255,.18), transparent 32%),
          linear-gradient(125deg, #0e091d 0%, #151036 53%, #21154b 100%);
        box-shadow: 0 22px 65px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.05);
        color: var(--fw-text);
        margin-bottom: 1.2rem;
      }
      .hero:before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        opacity: .32;
        background-image:
          linear-gradient(rgba(167,139,250,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(167,139,250,.08) 1px, transparent 1px);
        background-size: 38px 38px;
        mask-image: linear-gradient(100deg, black, transparent 90%);
      }
      .hero-orbit {
        position: absolute;
        z-index: -1;
        width: 280px;
        height: 280px;
        right: -72px;
        bottom: -155px;
        border: 1px solid rgba(255,98,61,.36);
        border-radius: 50%;
        box-shadow: 0 0 0 34px rgba(213,45,255,.035), 0 0 0 72px rgba(213,45,255,.025);
      }
      .hero-kicker {
        display: inline-flex;
        align-items: center;
        gap: .55rem;
        border: 1px solid rgba(167,139,250,.34);
        border-radius: 999px;
        background: rgba(98,93,245,.12);
        color: #d5caff;
        padding: .4rem .82rem;
        font-size: .76rem;
        font-weight: 700;
        letter-spacing: .12em;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
      .pulse-dot {
        display: inline-block;
        width: 7px; height: 7px;
        border-radius: 50%;
        background: var(--fw-coral);
        box-shadow: 0 0 13px rgba(255,98,61,.7);
      }
      .hero h1 {
        font-family: 'Space Grotesk', 'DM Sans', sans-serif;
        font-size: clamp(2.65rem, 6vw, 5rem);
        font-weight: 700;
        letter-spacing: -.055em;
        line-height: 1.02;
        color: var(--fw-text);
        padding: 0;
        margin: 0 0 .8rem 0;
      }
      .hero .accent {
        color: var(--fw-coral);
        background: linear-gradient(120deg, #ff8566 8%, #d52dff 88%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hero .hero-subtitle {
        color: #e0daf7;
        font-size: clamp(1.05rem, 2vw, 1.35rem);
        font-weight: 500;
        margin: 0 0 .5rem 0;
      }
      .hero .hero-description {
        max-width: 760px;
        color: #bdb3dd;
        font-size: 1rem;
        line-height: 1.7;
        margin: 0;
      }
      .hero-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: .55rem;
        margin-top: 1.35rem;
        color: #d6cdee;
        font-size: .88rem;
      }
      .hero-meta .meta-pill {
        border: 1px solid rgba(255,255,255,.13);
        background: rgba(255,255,255,.045);
        border-radius: 999px;
        padding: .35rem .7rem;
      }

      .muted-note {
        border: 1px solid rgba(167,139,250,.22);
        border-left: 4px solid var(--fw-coral);
        padding: .85rem 1rem;
        background: linear-gradient(100deg, rgba(19,13,46,.9), rgba(27,20,63,.72));
        color: #d7d0ef;
        border-radius: 12px;
        line-height: 1.65;
        margin: 1rem 0 1.15rem;
      }

      [data-testid="stMetric"] {
        background: linear-gradient(145deg, rgba(27,20,63,.82), rgba(19,13,46,.82));
        border: 1px solid var(--fw-border);
        border-radius: 16px;
        padding: 1rem 1.1rem;
        box-shadow: 0 10px 25px rgba(0,0,0,.12);
      }
      [data-testid="stMetricLabel"] {color: #bdb3dd; font-size: .86rem;}
      [data-testid="stMetricValue"] {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 700;
        color: #fff;
      }
      [data-testid="stTabs"] [role="tab"] {
        color: #bdb3dd;
        font-weight: 600;
        border-radius: 9px 9px 0 0;
      }
      [data-testid="stTabs"] [role="tab"][aria-selected="true"] {
        color: #ff8566;
        border-bottom-color: var(--fw-coral);
      }
      [data-testid="stTabs"] [role="tab"]:hover {color: #fff;}
      [data-testid="stExpander"] {
        background: rgba(19,13,46,.58);
        border: 1px solid var(--fw-border);
        border-radius: 12px;
      }
      [data-testid="stDataFrame"], [data-testid="stTable"] {
        border: 1px solid var(--fw-border);
        border-radius: 12px;
        overflow: hidden;
      }
      [data-testid="stTextInput"] input,
      [data-testid="stNumberInput"] input,
      [data-testid="stDateInput"] input {
        background: #130d2e;
        color: #fdfcfb;
        border-color: rgba(167,139,250,.25);
        border-radius: 10px;
      }
      [data-testid="stMultiSelect"] [data-baseweb="select"] > div,
      [data-testid="stSelectbox"] [data-baseweb="select"] > div {
        background: #130d2e;
        border-color: rgba(167,139,250,.25);
        border-radius: 10px;
      }
      [data-testid="stAlert"] {background: rgba(27,20,63,.82); border: 1px solid var(--fw-border);}
      hr {border-color: rgba(255,255,255,.12);}
      p, li {line-height: 1.65;}
      h1, h2, h3 {font-family: 'Space Grotesk', 'DM Sans', sans-serif; letter-spacing: -.025em;}
      a {color: #ff8566; overflow-wrap: anywhere;}
      a:hover {color: #d52dff;}
      .stCaption, [data-testid="stCaptionContainer"] {color: #a99fc9;}
      button[kind="primary"] {
        background: linear-gradient(115deg, #ff623d, #d52dff);
        color: #fff;
        border: 0;
        border-radius: 999px;
      }
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
      <div class="hero-orbit"></div>
      <div class="hero-kicker"><span class="pulse-dot"></span> Smart agriculture / research intelligence</div>
      <h1>Fieldwise <span class="accent">AI.</span></h1>
      <p class="hero-subtitle">Role of AI in Smart Agriculture Solutions</p>
      <p class="hero-description">
        A critical research explorer for data-driven farming — from crop prediction and
        computer vision to resource optimisation, deployment barriers and ethical adoption.
      </p>
      <div class="hero-meta">
        <span class="meta-pill">PRG4206 Machine Learning</span>
        <span class="meta-pill">INTI International University</span>
        <span class="meta-pill">58 catalogue records</span>
        <span class="meta-pill">5 research focus areas</span>
      </div>
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
    if not selected_categories:
        st.caption("No focus areas selected — showing all focus areas.")
    st.caption("Source catalogue: src/data/papers.ts")

# Treat an empty category selection as "all areas" rather than returning zero rows.
# This avoids a misleading 0 count when the user clears the multiselect.
category_mask = (
    base["application"].isin(selected_categories)
    if selected_categories
    else pd.Series(True, index=base.index)
)
filtered = base[
    base["year"].between(selected_years[0], selected_years[1])
    & category_mask
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
