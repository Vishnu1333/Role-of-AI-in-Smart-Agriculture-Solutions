// ============================================================
// FIELDWISE AI — Research Case Studies Section
// Case studies use study-specific findings and preserve limitations.
// ============================================================

import React from 'react'
import { Microscope, ExternalLink, Activity, Satellite, Droplets, CheckCircle2 } from 'lucide-react'
import './CaseStudies.css'

interface CaseStudy {
  id: string
  accentColor: string
  icon: React.ReactNode
  tag: string
  title: string
  problem: string
  context: string
  dataSource: string
  modelApproach: string
  evaluation: string
  limitations: string
  citation: string
  doi: string
  keyStat: { label: string; value: string; note: string }
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    accentColor: '#22c55e',
    icon: <Satellite size={20} />,
    tag: 'Remote Sensing & Yield Prediction',
    title: 'Multi-source environmental data for wheat-yield prediction',
    problem: 'Crop-yield estimation combines remote-sensing signals with meteorological and soil variables. The usefulness of a predictor depends on the data available and the crop/region used for evaluation.',
    context: 'Wheat-yield prediction in China using multi-source environmental information.',
    dataSource: 'The study combined vegetation-index information with climate and soil covariates; NIRv during jointing to heading was identified as an important predictor.',
    modelApproach: 'The paper compared machine-learning models, including Random Forest and Support Vector Machine approaches, with different vegetation-index inputs.',
    evaluation: 'The Random Forest model using NIRv and other covariates reported R² = 0.74 and RMSE = 758 kg/ha. The paper reports better performance for RF with NIRv than models using NDVI and EVI.',
    limitations: 'These values belong to the study’s wheat data and validation setup. They should not be interpreted as a universal yield-prediction score for other crops or regions.',
    citation: 'Li et al. (2022)',
    doi: 'https://doi.org/10.1016/j.compag.2022.106790',
    keyStat: { label: 'Reported R²', value: '0.74', note: 'RF with NIRv; RMSE 758 kg/ha' },
  },
  {
    id: 'case-2',
    accentColor: '#f97316',
    icon: <Activity size={20} />,
    tag: 'Plant Disease Detection / Computer Vision',
    title: 'SE-YOLOv5 for tomato virus-disease recognition',
    problem: 'Plant-disease recognition is sensitive to image quality, disease appearance, background, and the conditions in which training and test images are collected.',
    context: 'Tomato virus-disease recognition using images collected in greenhouses with a mobile phone.',
    dataSource: 'The researchers collected greenhouse tomato-disease images with a mobile phone and expanded the collected image set for model development.',
    modelApproach: 'The authors proposed an improved YOLOv5 model that adds a squeeze-and-excitation (SE) attention module to help extract salient visual features.',
    evaluation: 'The article reports 91.07% test-set accuracy and 94.10% mAP@0.5 for SE-YOLOv5. These are two separate metrics for this particular test set.',
    limitations: 'The result is tied to the collected greenhouse image set and the paper’s test design. It does not by itself establish performance across other crops, regions, or open-field conditions.',
    citation: 'Qi et al. (2022)',
    doi: 'https://doi.org/10.1016/j.compag.2022.106780',
    keyStat: { label: 'Reported mAP@0.5', value: '94.10%', note: 'Test-set accuracy: 91.07%' },
  },
  {
    id: 'case-3',
    accentColor: '#8b5cf6',
    icon: <Droplets size={20} />,
    tag: 'Reinforcement Learning / Irrigation',
    title: 'Weather-forecast-aware irrigation decisions for paddy rice',
    problem: 'Irrigation scheduling has to balance soil and crop water needs with uncertain rainfall forecasts. Unnecessary irrigation can increase water use and drainage.',
    context: 'Paddy-rice irrigation near Nanchang, China, using historical weather and irrigation information from 2012–2019.',
    dataSource: 'The research used weather forecasts and meteorological observations to evaluate conventional irrigation decisions against a Deep Q-Network (DQN) strategy.',
    modelApproach: 'A reinforcement-learning approach learned from earlier irrigation experience and weather-forecast uncertainty to select irrigation decisions.',
    evaluation: 'Simulation results reported 23 mm less irrigation water, 21 mm less drainage, and one fewer irrigation timing on average, without significant yield reduction in the study simulation.',
    limitations: 'These are simulation results for a particular paddy-rice setting, not a measured universal saving. Transfer to other soils, climates, crop systems, and on-farm controllers requires separate validation.',
    citation: 'Chen et al. (2021)',
    doi: 'https://doi.org/10.1016/j.agwat.2021.106838',
    keyStat: { label: 'Simulated irrigation saved', value: '23 mm', note: 'Drainage reduced by 21 mm in the reported simulation' },
  },
]

export default function CaseStudies() {
  return (
    <section className="section case-studies" aria-label="Research Case Studies">
      <div className="container">
        <div className="case-studies__header reveal">
          <span className="section-label"><Microscope size={14} /> Research Case Studies</span>
          <h2 className="case-studies__heading">Study-level <span className="gradient-text">evidence</span></h2>
          <p className="case-studies__subtitle">
            Three examples of published agricultural ML research. Each result remains tied to its original crop, dataset, metric, and evaluation conditions.
          </p>
        </div>
        <div className="case-studies__list">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.id} className="case-card reveal" style={{ '--case-accent': cs.accentColor } as React.CSSProperties}>
              <div className="case-card__sidebar">
                <div className="case-card__icon-badge">{cs.icon}</div>
                <span className="case-card__tag">{cs.tag}</span>
                <div className="case-card__stat-box">
                  <span className="case-card__stat-val">{cs.keyStat.value}</span>
                  <span className="case-card__stat-label">{cs.keyStat.label}</span>
                  <span className="case-card__stat-note">{cs.keyStat.note}</span>
                </div>
                <div className="case-card__citation-box">
                  <span className="case-card__cite-label">Source:</span>
                  <span className="case-card__cite-text">{cs.citation}</span>
                  <a href={cs.doi} target="_blank" rel="noopener noreferrer" className="case-card__doi-btn">
                    <span>Read Paper (DOI)</span><ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="case-card__content">
                <h3 className="case-card__title">{cs.title}</h3>
                <div className="case-card__grid">
                  <div className="case-card__block"><h4 className="case-card__subhead">The Agronomic Challenge</h4><p className="case-card__text">{cs.problem}</p></div>
                  <div className="case-card__block"><h4 className="case-card__subhead">Deployment Context</h4><p className="case-card__text">{cs.context}</p></div>
                  <div className="case-card__block"><h4 className="case-card__subhead">Data & Benchmark Setup</h4><p className="case-card__text">{cs.dataSource}</p></div>
                  <div className="case-card__block"><h4 className="case-card__subhead">Model Approach</h4><p className="case-card__text">{cs.modelApproach}</p></div>
                </div>
                <div className="case-card__callout case-card__callout--eval"><h4 className="case-card__callout-title"><CheckCircle2 size={16} /> Reported Findings</h4><p className="case-card__callout-text">{cs.evaluation}</p></div>
                <div className="case-card__callout case-card__callout--limit"><h4 className="case-card__callout-title">Limitations & Context</h4><p className="case-card__callout-text">{cs.limitations}</p></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
