from pathlib import Path
import json
import pandas as pd
import streamlit as st

ROOT = Path(__file__).resolve().parent
DATA_PATH = ROOT / "streamlit_data" / "papers.json"

st.set_page_config(page_title="Fieldwise AI | Smart Agriculture Research", page_icon="🌱", layout="wide")
st.markdown("""
<style>
.block-container{padding-top:1.7rem;max-width:1480px}
.hero{padding:1.6rem 1.8rem;border-radius:18px;background:linear-gradient(120deg,#173f2b,#2b7046 58%,#6d9a53);color:#fff;margin-bottom:1rem}
.hero h1{color:#fff;margin:0 0 .35rem}.hero p{color:#eff9ed;margin:0;font-size:1.05rem}
.notice{background:#f3f7ee;color:#253b2d;border-left:4px solid #b7c98d;border-radius:4px;padding:.7rem 1rem;margin:.8rem 0 1rem}
</style>
""", unsafe_allow_html=True)

@st.cache_data
def load_catalogue():
    if not DATA_PATH.exists():
        raise FileNotFoundError(f"Missing catalogue: {DATA_PATH}")
    frame = pd.DataFrame(json.loads(DATA_PATH.read_text(encoding="utf-8")))
    frame["isFoundational"] = frame["isFoundational"].fillna(False).astype(bool)
    frame["year"] = pd.to_numeric(frame["year"], errors="coerce").fillna(0).astype(int)
    return frame

try:
    catalogue = load_catalogue()
except Exception as exc:
    st.error(f"Could not load catalogue: {exc}")
    st.stop()

core = catalogue[(~catalogue["isFoundational"]) & catalogue["year"].between(2021, 2026)].copy()
categories = sorted(catalogue["application"].dropna().unique().tolist())

st.markdown("""<div class="hero"><h1>🌱 Fieldwise AI</h1><p>Role of AI in Smart Agriculture Solutions</p><p style="font-size:.9rem;margin-top:.6rem">PRG4206 Machine Learning · INTI International University · Group Research Project</p></div>""", unsafe_allow_html=True)
st.markdown('<div class="notice"><strong>Important accuracy note:</strong> Fieldwise AI is a literature-review and visualisation platform, not a model trained by this application. It has no single overall model-accuracy percentage. The numbers below are selected findings from the cited studies and depend on their data, metric and test conditions.</div>', unsafe_allow_html=True)

results = [
 {"group":"Foundational","dataset":"Plant-disease image database (Ferentinos study)","year":2018,"model":"CNN architectures","metric":"Classification accuracy","score":"99.53%","detail":"87,848 images across 25 plant species and 58 classes; reported on 17,548 previously unseen images.","citation":"Ferentinos (2018)","url":"https://doi.org/10.1016/j.compag.2018.01.009"},
 {"group":"Foundational","dataset":"PlantVillage","year":2016,"model":"CNN classifier","metric":"Held-out classification accuracy","score":"99.35%","detail":"54,306 images, 14 crop species and 26 disease/healthy classes, under controlled image conditions.","citation":"Mohanty et al. (2016)","url":"https://doi.org/10.3389/fpls.2016.01419"},
 {"group":"Core","dataset":"Greenhouse tomato-virus images","year":2022,"model":"SE-YOLOv5","metric":"Test accuracy; mAP@0.5","score":"91.07% accuracy","detail":"The same paper reports 94.10% mAP@0.5. Greenhouse images were taken using a mobile phone; these are different metrics.","citation":"Qi et al. (2022)","url":"https://doi.org/10.1016/j.compag.2022.106780"},
 {"group":"Core","dataset":"CottonWeedDet12","year":2023,"model":"YOLOv4 / YOLOv3-tiny","metric":"mAP@0.5 (object detection)","score":"95.22% / 88.14%","detail":"5,648 field images, 12 weed classes and 9,370 bounding boxes; values are mAP@0.5, not classification accuracy.","citation":"Dang et al. (2023)","url":"https://doi.org/10.1016/j.compag.2023.107655"},
 {"group":"Core","dataset":"Coffee-leaf biotic-stress images","year":2021,"model":"U-Net / PSPNet / Mask R-CNN","metric":"mIoU; precision; recall","score":"94.25% mIoU","detail":"U-Net mIoU = 94.25%; PSPNet mIoU = 93.54%. Mask R-CNN precision = 73.90%, recall = 71.90% for a separate task.","citation":"Tassis et al. (2021)","url":"https://doi.org/10.1016/j.compag.2021.106191"},
 {"group":"Core","dataset":"AppleDisease5","year":2021,"model":"MEAN-SSD lightweight detector","metric":"mAP (object detection)","score":"83.12% mAP","detail":"The article also reports 12.53 frames per second (FPS); mAP is not classification accuracy.","citation":"Sun et al. (2021)","url":"https://doi.org/10.1016/j.compag.2021.106379"},
 {"group":"Core","dataset":"Multi-source wheat-yield data (China)","year":2022,"model":"Random Forest with NIRv / EVI","metric":"R² and RMSE (regression)","score":"R² = 0.74; RMSE = 758 kg/ha","detail":"The EVI configuration reports R² = 0.73 and RMSE = 762 kg/ha. Regression metrics are not accuracy percentages.","citation":"Li et al. (2022)","url":"https://doi.org/10.1016/j.compag.2022.106790"},
 {"group":"Core","dataset":"Paddy-rice irrigation-control simulation","year":2021,"model":"Deep Q-network (DQN)","metric":"Simulated resource-use outcome","score":"23 mm less irrigation","detail":"The simulation also reports 21 mm less drainage without significant yield reduction in that simulated setting; this is not an accuracy measure.","citation":"Chen et al. (2021)","url":"https://doi.org/10.1016/j.agwat.2021.106838"},
]

tab1, tab2, tab3, tab4 = st.tabs(["Overview", "Dataset Results & Accuracy", "Literature Explorer", "Team & Notes"])
with tab1:
    a,b,c,d = st.columns(4)
    a.metric("Core records (2021–2026)", len(core))
    b.metric("Foundational records", int(catalogue["isFoundational"].sum()))
    c.metric("Research focus areas", len(categories))
    d.metric("Selected result examples", len(results))
    lcol,rcol = st.columns(2)
    with lcol:
        st.subheader("Catalogue records by focus area")
        counts = core.groupby("application").size().rename("Records").sort_values(ascending=False)
        st.bar_chart(counts, height=320)
    with rcol:
        st.subheader("Core records by year")
        counts = core.groupby("year").size().reindex(range(2021,2027),fill_value=0).rename("Records")
        st.bar_chart(counts, height=320)
    st.caption("Catalogue counts are not accuracy scores or proof that every paper has been fully verified.")
    descriptions = {
      "Smart Agriculture Data & System Architecture":"IoT/sensor data, drone/satellite imagery, data pipelines, cloud/edge platforms and digital twins.",
      "Crop & Livestock Production Prediction":"Yield, quality, livestock health, feature selection and regression evaluation.",
      "Monitoring & Detection":"Crop disease, weeds, image segmentation, sensor fusion and edge inference.",
      "Resource & Operations Optimisation":"Irrigation, water, energy, farm scheduling, automation and reinforcement learning.",
      "Deployment, Ethics & Future Trends":"Connectivity, affordability, privacy, literacy, equity and emerging AI approaches."
    }
    st.subheader("Five research focus areas")
    for cat in categories:
        with st.expander(cat):
            st.write(f"{int((core['application']==cat).sum())} core catalogue records")
            st.write(descriptions.get(cat,""))

with tab2:
    st.subheader("Selected dataset-specific published results")
    st.write("There is no single accuracy score for the Fieldwise AI application itself. Each row belongs to a published study; raw source datasets are not bundled here.")
    group_filter = st.multiselect("Show study group", ["Core","Foundational"], default=["Core","Foundational"])
    shown = [x for x in results if x["group"] in group_filter]
    for start in range(0,len(shown),2):
        cols = st.columns(2)
        for col,item in zip(cols,shown[start:start+2]):
            with col.container(border=True):
                st.caption(f"{item['group']} · {item['year']} · {item['metric']}")
                st.subheader(item["dataset"])
                st.metric("Reported result",item["score"])
                st.write(f"**Model:** {item['model']}")
                st.write(item["detail"])
                st.markdown(f"[{item['citation']} ↗]({item['url']})")
    st.warning("Accuracy, mAP, mIoU, precision, recall, R², RMSE and simulated resource savings are different measurements. Do not present them as one shared accuracy score.")

with tab3:
    st.subheader("Searchable literature catalogue")
    with st.sidebar:
        st.header("Catalogue filters")
        query = st.text_input("Search titles, authors, datasets or findings",placeholder="e.g. irrigation, YOLO, digital twin")
        include_old = st.checkbox("Include foundational records (pre-2021)",value=False)
        source = catalogue.copy() if include_old else core.copy()
        y0,y1=int(source["year"].min()),int(source["year"].max())
        years=st.slider("Publication year",y0,y1,(y0,y1)) if y0<y1 else (y0,y1)
        selected_cats=st.multiselect("Focus areas",categories,default=categories)
    filtered=source[source["year"].between(years[0],years[1])&source["application"].isin(selected_cats)].copy()
    if query.strip():
        fields=["title","authors","dataset","modelFamily","metric","mainFinding","summary","tags"]
        match=filtered[fields].fillna("").astype(str).agg(" ".join,axis=1).str.contains(query.strip(),case=False,regex=False)
        filtered=filtered[match]
    st.write(f"Showing {len(filtered)} of {len(source)} records.")
    if filtered.empty:
        st.info("No matches. Try another search or widen the filters.")
    else:
        shown_df=filtered[["title","authors","year","application","modelFamily","dataset","metric","url"]].rename(columns={
          "title":"Title","authors":"Authors","year":"Year","application":"Focus area","modelFamily":"Model / approach",
          "dataset":"Dataset / scope","metric":"Reported metric / evaluation","url":"Publisher source"})
        st.dataframe(shown_df,use_container_width=True,hide_index=True,height=440,
          column_config={"Publisher source":st.column_config.LinkColumn("Publisher source",display_text="Open DOI ↗")})
        st.download_button("Download filtered catalogue as CSV",shown_df.to_csv(index=False).encode("utf-8-sig"),
          file_name="fieldwise_ai_literature_catalogue.csv",mime="text/csv")
        title=st.selectbox("Inspect one paper",filtered["title"].tolist())
        p=filtered.loc[filtered["title"]==title].iloc[0]
        st.markdown(f"### {p['title']}")
        st.write(f"**Authors:** {p['authors']} · **Year:** {p['year']} · **Venue:** {p.get('venue') or 'Not listed'}")
        left,right=st.columns(2)
        with left:
            st.markdown("**Dataset / scope**")
            st.write(p["dataset"])
            st.markdown("**Metric / evaluation**")
            st.write(p["metric"])
        with right:
            st.markdown("**Finding / scope note**")
            st.write(p["mainFinding"])
            st.markdown("**Limitation**")
            st.write(p["limitation"])
        st.markdown(f"[Open publisher / DOI record]({p['url']})")

with tab4:
    st.subheader("Group members")
    for name,sid in [
      ("GAYATHRI SAI TAPASWINI IRAGAVARAPU","I26043735"),
      ("MOHAN MEKALA","I26043589"),
      ("Uma Maheshwari Srinivasan","I26044266"),
      ("Takunda Godwell Mushure","I25029962"),
      ("Vishnu Vardhan Chilakacharla","I26043592"),
    ]:
        st.write(f"**{name}** — {sid}")
    st.subheader("Notes")
    st.write("PRG4206 Machine Learning · INTI International University · Group research project.")
    st.write("This repository contains both a React/Vite research website and a Python/Streamlit companion dashboard.")
    st.write("It does not train a new ML model or contain the raw source datasets from the cited papers.")
    st.write("Check publisher articles and follow the course's citation and AI-acknowledgement requirements.")
    st.markdown("[GitHub repository](https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions)")
    st.markdown("[Research audit status](https://github.com/Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions/blob/main/AUDIT_STATUS.md)")

st.divider()
st.caption("Fieldwise AI · Selected study-reported performance, not a score for this website.")
