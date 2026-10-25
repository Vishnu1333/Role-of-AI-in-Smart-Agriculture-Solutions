// ============================================================
// FIELDWISE AI — Challenges & Future Directions Section
// Critical evaluation of deployment hurdles and emerging research paradigms
// ============================================================

import React from 'react'
import { AlertTriangle, Sparkles, WifiOff, Database, ShieldAlert, DollarSign, Users, Cpu, Orbit, Bot, Share2, Layers } from 'lucide-react'
import './ChallengesFuture.css'

interface ChallengeItem {
  icon: React.ReactNode
  title: string
  description: string
  impact: string
}

const CHALLENGES: ChallengeItem[] = [
  {
    icon: <Database size={18} />,
    title: 'Data Quality & Missing Measurements',
    description: 'Agricultural telemetry is notoriously noisy, interrupted by weather events, soil compaction, and sensor fouling. Unlabelled field photographs and missing sensor streams hinder model convergence.',
    impact: 'Missing or noisy measurements call for quality checks and carefully chosen handling methods suited to the sensor and task.',
  },
  {
    icon: <ShieldAlert size={18} />,
    title: 'Model Generalisability Across Regions',
    description: 'Models trained on a single farm or climatic zone suffer dramatic performance collapse under covariate shift — soil types, microclimates, seed varieties, and seasonal weather diverge sharply.',
    impact: 'Performance can change between controlled datasets and field settings; the size of that change is study- and dataset-specific.',
  },
  {
    icon: <WifiOff size={18} />,
    title: 'Rural Connectivity & Edge Constraints',
    description: 'Some remote farms have intermittent or limited network access. Edge processing can reduce dependence on continuous connectivity, although local power, device capability, maintenance, and communication conditions still matter.',
    impact: 'Lightweight models, efficient inference, and local buffering may help, but deployment needs should be measured for the target device and farm.',
  },
  {
    icon: <DollarSign size={18} />,
    title: 'Capital Cost & Hardware Lifecycle',
    description: 'Multispectral drone sensors, soil probe arrays, and autonomous tractors represent substantial capital outlays. Harsh weather, dust, and moisture degrade field hardware rapidly.',
    impact: 'Economic feasibility depends on purchase and maintenance cost, farm size, local service access, and benefits demonstrated in that setting.',
  },
  {
    icon: <Users size={18} />,
    title: 'Farmer Adoption & Human-Centric Design',
    description: 'Black-box algorithms offering probability scores without actionable agronomic context breed distrust. A recommendation to withhold irrigation must be interpretable to farm operators.',
    impact: 'Explainable AI (XAI) and local language advisory systems are essential for adoption.',
  },
]

interface FutureItem {
  icon: React.ReactNode
  title: string
  description: string
  promise: string
}

const FUTURE_DIRECTIONS: FutureItem[] = [
  {
    icon: <Share2 size={18} />,
    title: 'Federated Learning for Multi-Farm Collaboration',
    description: 'Federated learning can coordinate training across distributed datasets without centralising all raw farm records. Model updates can still leak information, so privacy safeguards and threat evaluation remain important.',
    promise: 'Preserves commercial privacy while breaking individual farm data scarcity.',
  },
  {
    icon: <Layers size={18} />,
    title: 'Agricultural Digital Twins & Physics-Informed ML',
    description: 'Connecting biophysical crop models with machine-learning components is an emerging way to explore scenarios and compare possible management decisions. Calibration and validation are needed for each use case.',
    promise: 'Blends biological domain physics with adaptive machine learning heuristics.',
  },
  {
    icon: <Bot size={18} />,
    title: 'Autonomous Robotics & Targeted Actuation',
    description: 'Computer vision can guide robotic weeding and variable-rate application so interventions are targeted rather than uniform. Any reduction in pesticide or fertiliser use must be measured against a stated baseline in the relevant field trial.',
    promise: 'Transitions precision agriculture from observation to real-time physical intervention.',
  },
  {
    icon: <Cpu size={18} />,
    title: 'Agricultural Foundation Models (Agri-LLMs & ViTs)',
    description: 'Pretrained models for agricultural imagery and text are an emerging research direction. Transfer to a new crop or region, data needs, compute requirements, and reliability require task-specific evaluation.',
    promise: 'Drastically reduces the volume of expert-labelled data required for new regions.',
  },
  {
    icon: <Orbit size={18} />,
    title: 'High-Cadence Satellite Constellations & Radar',
    description: 'Satellite optical and radar observations can complement one another when clouds or revisit intervals limit monitoring. Actual coverage, resolution, and revisit time depend on the sensor and satellite programme.',
    promise: 'Uninterrupted all-weather crop vigour and moisture monitoring at planetary scale.',
  },
]

export default function ChallengesFuture() {
  return (
    <section className="section challenges-future" aria-label="Challenges and Future Directions">
      <div className="container">
        {/* Section Header */}
        <div className="challenges-future__header reveal">
          <span className="section-label section-label--orange">
            <AlertTriangle size={14} />
            Critical Realities & Horizons
          </span>
          <h2 className="challenges-future__heading">
            Deployment bottlenecks & <span className="gradient-text">future frontiers</span>
          </h2>
          <p className="challenges-future__subtitle">
            Scaling AI in agriculture requires navigating rigorous real-world physical constraints while harnessing next-generation distributed, biophysical, and robotic systems.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="challenges-future__grid">
          {/* Column 1: Current Challenges */}
          <div className="challenges-col challenges-col--bottlenecks reveal">
            <div className="challenges-col__header">
              <span className="challenges-col__badge challenges-col__badge--orange">Current Bottlenecks</span>
              <h3 className="challenges-col__title">Core Deployment Hurdles</h3>
              <p className="challenges-col__desc">
                Engineering, economic, and behavioural barriers that prevent laboratory benchmarks from achieving commercial field impact.
              </p>
            </div>

            <div className="challenges-list">
              {CHALLENGES.map((item, index) => (
                <div key={index} className="challenge-card challenge-card--warning">
                  <div className="challenge-card__top">
                    <span className="challenge-card__icon challenge-card__icon--orange">{item.icon}</span>
                    <h4 className="challenge-card__title">{item.title}</h4>
                  </div>
                  <p className="challenge-card__body">{item.description}</p>
                  <div className="challenge-card__footer challenge-card__footer--orange">
                    <strong>Operational Impact:</strong> {item.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Future Directions */}
          <div className="challenges-col challenges-col--frontiers reveal reveal-delay-2">
            <div className="challenges-col__header">
              <span className="challenges-col__badge challenges-col__badge--green">
                <Sparkles size={12} /> Emerging Horizons
              </span>
              <h3 className="challenges-col__title">Next-Generation Paradigms</h3>
              <p className="challenges-col__desc">
                Pioneering architectures combining distributed machine learning, robotics, and multi-modal foundation models.
              </p>
            </div>

            <div className="challenges-list">
              {FUTURE_DIRECTIONS.map((item, index) => (
                <div key={index} className="challenge-card challenge-card--future">
                  <div className="challenge-card__top">
                    <span className="challenge-card__icon challenge-card__icon--green">{item.icon}</span>
                    <h4 className="challenge-card__title">{item.title}</h4>
                  </div>
                  <p className="challenge-card__body">{item.description}</p>
                  <div className="challenge-card__footer challenge-card__footer--green">
                    <strong>Research Promise:</strong> {item.promise}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
