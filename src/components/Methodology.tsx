// ============================================================
// FIELDWISE AI — Methodology & FAQ Section
// Academic review protocol and working interactive FAQ accordion
// ============================================================

import React, { useState } from 'react'
import { FileText, ChevronDown, HelpCircle, Search, Calendar, Filter, Database, Scale, AlertCircle } from 'lucide-react'
import './Methodology.css'

interface Step {
  num: string
  icon: React.ReactNode
  title: string
  description: string
  detail: string
}

const METHODOLOGY_STEPS: Step[] = [
  {
    num: '01',
    icon: <Search size={18} />,
    title: 'Literature Search Strategy',
    description: 'The catalogue links to publisher and bibliographic records for papers across the assignment focus areas.',
    detail: 'For a reproducible final report, the group should record the databases searched, complete query strings, search dates, screening counts, and reasons for excluding papers. Those details are not fully documented in this website dataset.',
  },
  {
    num: '02',
    icon: <Calendar size={18} />,
    title: 'Publication Temporal Window (2021–2026)',
    description: 'The core catalogue is intended to cover publications from 2021 through 2026, with older foundational papers kept separately.',
    detail: 'Earlier papers (e.g., PlantVillage seminal works) were included only when serving as universal baseline benchmarks still standard in current evaluations.',
  },
  {
    num: '03',
    icon: <Filter size={18} />,
    title: 'Inclusion & Exclusion Criteria',
    description: 'The catalogue includes empirical papers, review articles, and conceptual or governance papers where relevant to the five assignment areas.',
    detail: 'A paper’s inclusion in the catalogue is not proof that every reported value has been extracted. Review and conceptual papers are marked as not applicable for empirical dataset/metric fields where appropriate.',
  },
  {
    num: '04',
    icon: <Database size={18} />,
    title: 'Data Extraction & Attribute Normalisation',
    description: 'The catalogue records application area, model family, dataset notes, metric notes, findings, and limitations where the source text supports them.',
    detail: 'Not every full text was available for field-by-field extraction in this audit. Metrics used in the charts are limited to specific values located in linked publisher/source text; other record fields are marked as not reported or not independently extracted.',
  },
  {
    num: '05',
    icon: <Scale size={18} />,
    title: 'Comparative Integrity & Non-Equivalence',
    description: 'The website avoids treating results from different crops, regions, datasets, and metrics as a single ranked leaderboard.',
    detail: 'R², RMSE, accuracy, mAP, mIoU, precision, and recall measure different things. Read each value with its dataset, task, metric definition, and evaluation setting.',
  },
  {
    num: '06',
    icon: <AlertCircle size={18} />,
    title: 'Academic Review Limitations',
    description: 'This is a curated undergraduate research catalogue, not an exhaustive systematic review or a formal meta-analysis.',
    detail: 'The catalogue contains 55 core records dated 2021–2026 and 3 foundational records. Record counts and active DOIs do not independently validate every dataset description, model detail, or finding; full-paper review remains necessary before citing claims in the final report.',
  },
]

interface FAQItem {
  id: string
  question: string
  answer: string
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is smart agriculture and how does it differ from traditional farming?',
    answer:
      'Smart agriculture uses tools such as IoT sensors, remote sensing, farm records, automation, and machine learning to support agricultural decisions. Depending on the system and data available, these tools can help monitor variation within a field, identify risks, forecast outcomes, or guide targeted interventions. Benefits depend on data quality, local conditions, and how the system is deployed.',
  },
  {
    id: 'faq-2',
    question: 'Why is machine learning uniquely suited for agricultural decision support?',
    answer:
      'Agricultural systems combine biological, soil, management, and weather effects. Machine learning methods such as Random Forest, Gradient Boosting, LSTMs, or CNNs can model patterns in historical and multi-source data, but their usefulness depends on data quality, validation design, and whether evaluation conditions match the intended deployment setting.',
  },
  {
    id: 'faq-3',
    question: 'Why do machine learning models perform differently across different farms?',
    answer:
      'Agricultural data suffers from severe domain shift and covariate shift. A model trained on loamy soil in Iowa will encounter vastly different clay-heavy soil, drainage characteristics, rainfall patterns, seed varieties, and solar irradiance when deployed in Australia or Kenya. Furthermore, local agricultural management practices (tillage, crop rotation, irrigation methods) fundamentally alter the feature distribution, necessitating local re-calibration or domain-adaptation techniques.',
  },
  {
    id: 'faq-4',
    question: 'What is the operational difference between cloud and edge computing on farms?',
    answer:
      'Cloud computing can provide scalable storage and compute for training and analysing large datasets. Edge computing processes data on or near the farm device, which can reduce dependence on continuous connectivity and lower communication needs. The trade-off depends on device capability, model size, power, maintenance, and the latency required by the use case; edge deployment does not automatically work fully offline.',
  },
  {
    id: 'faq-5',
    question: 'Why can reported accuracy figures in agricultural AI papers be misleading?',
    answer:
      'High scores on curated image datasets do not guarantee the same performance in real fields. Field imagery can differ in lighting, background, camera quality, disease severity, and class balance. A careful review should inspect how the test set was collected, whether it is independent of training data, and which metrics were reported. Precision, recall, F1-score, and class-wise results may reveal errors that overall accuracy hides.',
  },
  {
    id: 'faq-6',
    question: 'What are the primary barriers preventing smallholder farmers from adopting AI?',
    answer:
      'Potential barriers include hardware and connectivity costs, unreliable power, limited technical support, language and usability issues, data ownership, and a mismatch between tools and local farming practices. Affordable devices, local-language advice, training, interoperable systems, and cooperative service models may help, but solutions should be evaluated with the farmers and regions they are intended to serve.',
  },
]

export default function Methodology() {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1'])

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="section methodology" aria-label="Research Methodology and FAQ">
      <div className="container">
        {/* Part 1: Methodology Header */}
        <div className="methodology__header reveal">
          <span className="section-label">
            <FileText size={14} />
            Research Methodology
          </span>
          <h2 className="methodology__heading">
            How this catalogue was <span className="gradient-text">assembled</span>
          </h2>
          <p className="methodology__subtitle">
            A transparent summary of the catalogue scope, comparison rules, and limits of the evidence currently extracted.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="methodology__steps-grid">
          {METHODOLOGY_STEPS.map((step) => (
            <div key={step.num} className="step-card reveal">
              <div className="step-card__top">
                <span className="step-card__num">{step.num}</span>
                <span className="step-card__icon">{step.icon}</span>
              </div>
              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__desc">{step.description}</p>
              <div className="step-card__detail">
                <strong>Protocol Note:</strong> {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: FAQ Accordion */}
        <div className="faq-section reveal">
          <div className="faq-section__header">
            <span className="section-label section-label--orange">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </span>
            <h3 className="faq-section__heading">
              Key concepts & <span className="gradient-text">common misconceptions</span>
            </h3>
            <p className="faq-section__subtitle">
              Clear, research-grounded answers addressing smart agriculture terminology, model deployment, and real-world edge trade-offs.
            </p>
          </div>

          <div className="faq-accordion" role="region" aria-label="Frequently Asked Questions Accordion">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openIds.includes(item.id)
              return (
                <div key={item.id} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                  <button
                    className="faq-item__trigger"
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="faq-item__question">{item.question}</span>
                    <span className={`faq-item__arrow ${isOpen ? 'faq-item__arrow--rotated' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`faq-answer-${item.id}`} className="faq-item__answer-box" role="region">
                      <p className="faq-item__answer-text">{item.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
