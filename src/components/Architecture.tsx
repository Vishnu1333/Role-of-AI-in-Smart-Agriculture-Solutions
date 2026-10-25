import { useEffect, useRef } from 'react'
import {
  Radio,
  Download,
  Filter,
  Layers,
  Cpu,
  TrendingUp,
  Monitor,
  ChevronRight,
  Server,
  Cloud,
} from 'lucide-react'
import './Architecture.css'

/* ------------------------------------------------------------------ */
/*  Pipeline stage data                                                */
/* ------------------------------------------------------------------ */
interface PipelineStage {
  icon: React.ElementType
  title: string
  items: string[]
  accent: string
  accentRgb: string
}

const STAGES: PipelineStage[] = [
  {
    icon: Radio,
    title: 'Data Sources',
    items: ['Farm Sensors', 'Drones/UAV', 'Satellite Imagery', 'Farm Records', 'Weather APIs'],
    accent: '#60a5fa',
    accentRgb: '96,165,250',
  },
  {
    icon: Download,
    title: 'Data Ingestion',
    items: ['IoT Gateway', 'API Connectors', 'Batch Upload', 'Stream Processing'],
    accent: '#8b5cf6',
    accentRgb: '139,92,246',
  },
  {
    icon: Filter,
    title: 'Cleaning & QA',
    items: ['Missing Value Handling', 'Outlier Detection', 'Calibration', 'Validation'],
    accent: '#8b5cf6',
    accentRgb: '139,92,246',
  },
  {
    icon: Layers,
    title: 'Feature Engineering',
    items: ['NDVI Calculation', 'Temporal Features', 'Spatial Aggregation', 'Data Fusion'],
    accent: '#8b5cf6',
    accentRgb: '139,92,246',
  },
  {
    icon: Cpu,
    title: 'Model Training',
    items: ['Random Forest', 'XGBoost', 'CNN', 'LSTM', 'Cross-validation'],
    accent: '#f97316',
    accentRgb: '249,115,22',
  },
  {
    icon: TrendingUp,
    title: 'Prediction & Optimisation',
    items: ['Yield Forecast', 'Disease Alert', 'Irrigation Schedule', 'Resource Planning'],
    accent: '#f97316',
    accentRgb: '249,115,22',
  },
  {
    icon: Monitor,
    title: 'Farmer Dashboard',
    items: ['Mobile Alerts', 'Web Dashboard', 'SMS Notifications', 'Decision Support'],
    accent: '#22c55e',
    accentRgb: '34,197,94',
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function Architecture() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 120px 0px' },
    )

    const revealEls = section.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => {
      revealEls.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section
      id="architecture"
      className="section architecture"
      ref={sectionRef}
      aria-label="System Architecture"
    >
      <div className="container">
        {/* ---- Header ---- */}
        <div className="architecture__header reveal">
          <span className="section-label">System Architecture</span>
          <h2 className="architecture__heading">
            From field sensors to farm&nbsp;decisions
          </h2>
          <p className="architecture__subtitle">
            A typical smart agriculture ML pipeline integrates multiple data
            sources, processing stages, and delivery channels.
          </p>
        </div>

        {/* ---- Pipeline Diagram ---- */}
        <div className="pipeline reveal reveal-delay-1" role="img" aria-label="Smart agriculture ML pipeline diagram showing 7 stages from data sources to farmer dashboard">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon
            return (
              <div className="pipeline__step" key={stage.title}>
                {/* Arrow connector (not before first) */}
                {idx > 0 && (
                  <div className="pipeline__arrow" aria-hidden="true">
                    <span className="pipeline__arrow-line" />
                    <ChevronRight size={18} className="pipeline__arrow-icon" />
                  </div>
                )}

                {/* Stage card */}
                <div
                  className="pipeline__card"
                  style={{
                    '--stage-accent': stage.accent,
                    '--stage-accent-rgb': stage.accentRgb,
                  } as React.CSSProperties}
                >
                  <div className="pipeline__card-top">
                    <div className="pipeline__icon-wrap">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="pipeline__stage-num">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="pipeline__title">{stage.title}</h3>
                  <ul className="pipeline__items">
                    {stage.items.map((item) => (
                      <li key={item} className="pipeline__item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* ---- Annotation Boxes ---- */}
        <div className="architecture__annotations reveal reveal-delay-2">
          <div className="annotation annotation--edge">
            <div className="annotation__icon">
              <Server size={20} />
            </div>
            <div className="annotation__content">
              <h4 className="annotation__title">Edge Computing</h4>
              <p className="annotation__text">
                Stages 1–3 (Data Sources → Cleaning &amp; QA) can run on local
                hardware for low-latency, offline-capable operation. This is
                essential for farms with intermittent connectivity, where
                real-time sensor readings must be processed without cloud
                round-trips.
              </p>
            </div>
          </div>

          <div className="annotation annotation--cloud">
            <div className="annotation__icon">
              <Cloud size={20} />
            </div>
            <div className="annotation__content">
              <h4 className="annotation__title">Cloud Infrastructure</h4>
              <p className="annotation__text">
                Stages 4–6 (Feature Engineering → Prediction) typically require
                cloud GPU/CPU resources for model training at scale. Cloud
                platforms provide elastic compute for hyperparameter tuning,
                cross-validation, and serving predictions via APIs.
              </p>
            </div>
          </div>
        </div>

        {/* ---- Challenge paragraph ---- */}
        <p className="architecture__challenges reveal reveal-delay-3">
          Real-world deployments face challenges including intermittent rural
          connectivity, sensor noise, missing data, and the need to serve
          predictions on low-power edge devices. The architecture must balance
          model accuracy against computational constraints and network
          reliability.
        </p>
      </div>
    </section>
  )
}
