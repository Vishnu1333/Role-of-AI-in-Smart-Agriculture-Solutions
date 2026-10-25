import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { images } from '../data/images'
import './Applications.css'

/* ------------------------------------------------------------------ */
/*  Application card data                                              */
/* ------------------------------------------------------------------ */
interface AppCard {
  image: keyof typeof images
  title: string
  description: string
  models: string[]
  metrics: string[]
  linkLabel: string
  linkTarget: string
}

const CARDS: AppCard[] = [
  {
    image: 'cropField',
    title: 'Crop & Livestock Production Prediction',
    description:
      'Machine learning models estimate crop yields, livestock growth rates, and produce quality by learning from historical production records, weather patterns, soil conditions, and satellite imagery. Techniques range from classical regression and random forests to deep learning approaches like LSTMs for temporal patterns.',
    models: ['Random Forest', 'XGBoost', 'LSTM', 'Gradient Boosting'],
    metrics: ['RMSE', 'R²', 'MAE'],
    linkLabel: 'View yield prediction data',
    linkTarget: '#data-models',
  },
  {
    image: 'disease',
    title: 'Plant Disease & Pest Detection',
    description:
      'Computer vision enables automated identification of plant diseases and pest infestations from leaf images, drone footage, and field photographs. Convolutional neural networks and object detection models like YOLO can classify dozens of disease types, though the gap between lab accuracy and real-field performance remains a critical challenge.',
    models: ['CNN', 'YOLO', 'ResNet', 'Transfer Learning'],
    metrics: ['Accuracy', 'F1-Score', 'mAP', 'Precision/Recall'],
    linkLabel: 'View detection benchmarks',
    linkTarget: '#data-models',
  },
  {
    image: 'soilSensor',
    title: 'Smart Irrigation & Resource Optimisation',
    description:
      'IoT soil-moisture sensors combined with weather forecasts and evapotranspiration models enable precision irrigation scheduling. ML algorithms can support irrigation scheduling by combining sensor readings and forecasts. Published outcomes are site-specific, so water-use or yield changes should be cited with the original study and its baseline.',
    models: ['SVM', 'Regression', 'Decision Trees'],
    metrics: ['Water use (study-specific)', 'RMSE', 'Scheduling metric'],
    linkLabel: 'View irrigation data',
    linkTarget: '#data-models',
  },
  {
    image: 'drone',
    title: 'Agricultural IoT & Edge Computing',
    description:
      'Modern smart farms integrate data from soil sensors, weather stations, drones, satellites, and livestock wearables. Edge computing enables real-time inference on low-power devices deployed in the field, while cloud infrastructure handles model training and large-scale analytics. Connectivity remains a key challenge in rural deployments.',
    models: ['Random Forest', 'Vision Transformer', 'Lightweight CNNs'],
    metrics: ['Inference latency', 'Overall Accuracy', 'Kappa'],
    linkLabel: 'View system architecture',
    linkTarget: '#architecture',
  },
  {
    image: 'satellite',
    title: 'Supply Chains & Sustainable Farming',
    description:
      'AI-powered traceability systems improve food safety and quality assurance across agricultural supply chains. Blockchain integration, federated learning for privacy-preserving collaboration, and resource-efficiency optimisation contribute to more sustainable farming practices — though adoption barriers including cost, technical literacy, and regulatory challenges persist.',
    models: ['Federated Learning', 'ML + Blockchain'],
    metrics: ['Framework criteria', 'Communication rounds'],
    linkLabel: 'View sustainability research',
    linkTarget: '#insights',
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function Applications() {
  const sectionRef = useRef<HTMLElement>(null)

  /* Scroll-reveal observer */
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

  const handleLinkClick = (target: string) => {
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="applications"
      className="section applications"
      ref={sectionRef}
      aria-label="Research Applications"
    >
      <div className="container">
        {/* ---- Header ---- */}
        <div className="applications__header reveal">
          <span className="section-label">Research Applications</span>
          <h2 className="applications__heading">
            Five frontiers of agricultural&nbsp;AI
          </h2>
          <p className="applications__subtitle">
            From farm to fork, machine learning is reshaping how we grow,
            monitor, and manage food production.
          </p>
        </div>

        {/* ---- Cards ---- */}
        <div className="applications__grid">
          {CARDS.map((card, idx) => {
            const img = images[card.image]
            const reversed = idx % 2 === 1 // Cards 2, 4 → image RIGHT

            return (
              <article
                key={card.title}
                className={`app-card reveal reveal-delay-${(idx % 5) + 1}${reversed ? ' app-card--reversed' : ''}`}
                aria-label={card.title}
              >
                {/* Image */}
                <div
                  className="app-card__image-wrap"
                  style={{ backgroundColor: img.fallbackColor }}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="app-card__image"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="app-card__content">
                  <h3 className="app-card__title">{card.title}</h3>
                  <p className="app-card__desc">{card.description}</p>

                  {/* Model pills */}
                  <div className="app-card__pills" aria-label="Model families">
                    {card.models.map((m) => (
                      <span key={m} className="app-card__pill app-card__pill--model">
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Metric pills */}
                  <div className="app-card__pills" aria-label="Evaluation metrics">
                    {card.metrics.map((m) => (
                      <span key={m} className="app-card__pill app-card__pill--metric">
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={card.linkTarget}
                    className="app-card__link"
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(card.linkTarget)
                    }}
                  >
                    {card.linkLabel} <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
