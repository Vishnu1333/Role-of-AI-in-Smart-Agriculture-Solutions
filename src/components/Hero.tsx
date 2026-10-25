import React from 'react';
import { BarChart3 } from 'lucide-react';
import { images } from '../data/images';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" aria-label="Hero introduction">
      {/* Animated mesh gradient blobs */}
      <div className="hero__mesh" aria-hidden="true">
        <div className="hero__mesh-blob hero__mesh-blob--1" />
        <div className="hero__mesh-blob hero__mesh-blob--2" />
        <div className="hero__mesh-blob hero__mesh-blob--3" />
        <div className="hero__mesh-blob hero__mesh-blob--4" />
      </div>

      <div className="container hero__inner">
        {/* ---- Left: Content ---- */}
        <div className="hero__content">
          <span className="hero__label">
            <span className="hero__label-dot" aria-hidden="true" />
            Fieldwise AI Research
          </span>

          <h1 className="hero__headline">
            Smarter{' '}
            <span className="hero__headline-accent">farming.</span>
            <br />
            Clearer{' '}
            <span className="hero__headline-accent">decisions.</span>
          </h1>

          <p className="hero__subtext">
            Explore how machine learning transforms agricultural data into
            insights for production prediction, disease detection, resource
            optimisation, and sustainable farming.
          </p>

          <div className="hero__ctas">
            <button
              className="hero__btn hero__btn--primary"
              onClick={() => scrollTo('applications')}
              aria-label="Explore the research — scroll to applications section"
            >
              <span>Explore the Research</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="fj-spin-star" aria-hidden="true">
                <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
              </svg>
            </button>

            <button
              className="hero__btn hero__btn--secondary"
              onClick={() => scrollTo('data-models')}
              aria-label="View data insights — scroll to data models section"
            >
              <BarChart3 className="hero__btn-icon" aria-hidden="true" />
              <span>View Data Insights</span>
            </button>
          </div>

          <div className="hero__proof" aria-label="Key research statistics">
            <span className="hero__proof-pill">
              <span className="hero__proof-dot hero__proof-dot--violet" aria-hidden="true" />
              5 Research Focus Areas
            </span>
            <span className="hero__proof-pill">
              <span className="hero__proof-dot hero__proof-dot--orange" aria-hidden="true" />
              2021–2026 Coverage
            </span>
            <span className="hero__proof-pill">
              <span className="hero__proof-dot hero__proof-dot--green" aria-hidden="true" />
              55 Core Records Listed (2021–2026)
            </span>
          </div>
        </div>

        {/* ---- Right: Visual Composition ---- */}
        <div className="hero__visual" aria-hidden="true">
          {/* Main hero image */}
          <div className="hero__main-card">
            <img
              className="hero__main-img"
              src={images.hero.url}
              alt={images.hero.alt}
              loading="eager"
              style={{ backgroundColor: images.hero.fallbackColor }}
            />
          </div>

          {/* Floating keyword pills */}
          <span className="hero__keyword hero__keyword--predict">Predict</span>
          <span className="hero__keyword hero__keyword--detect">Detect</span>
          <span className="hero__keyword hero__keyword--monitor">Monitor</span>
          <span className="hero__keyword hero__keyword--optimise">Optimise</span>

          {/* Sensor Data card */}
          <div className="hero__float-card hero__sensor-card">
            <div className="hero__sensor-title">
              <span className="hero__sensor-icon" />
              Illustrative Sensor Values
            </div>
            <div className="hero__sensor-row">
              <span className="hero__sensor-label">
                <span className="hero__sensor-dot hero__sensor-dot--blue" />
                Soil Moisture
              </span>
              <span className="hero__sensor-value">42%</span>
            </div>
            <div className="hero__sensor-row">
              <span className="hero__sensor-label">
                <span className="hero__sensor-dot hero__sensor-dot--orange" />
                Temperature
              </span>
              <span className="hero__sensor-value">28°C</span>
            </div>
            <div className="hero__sensor-row">
              <span className="hero__sensor-label">
                <span className="hero__sensor-dot hero__sensor-dot--teal" />
                Humidity
              </span>
              <span className="hero__sensor-value">65%</span>
            </div>
          </div>

          {/* Crop Health card */}
          <div className="hero__float-card hero__health-card">
            <div className="hero__health-header">
              <span className="hero__health-title">Illustrative Crop Index</span>
              <span className="hero__health-badge">
                <span className="hero__health-badge-dot" />
                Demo
              </span>
            </div>
            <div className="hero__health-ndvi">
              <span className="hero__health-ndvi-label">Sample NDVI</span>
              <span className="hero__health-ndvi-value">0.82</span>
            </div>
            <div className="hero__health-bar">
              <div className="hero__health-bar-fill" />
            </div>
          </div>

          {/* Mini bar chart card */}
          <div className="hero__float-card hero__chart-card">
            <div className="hero__chart-title">Model Families</div>
            <div className="hero__mini-chart">
              <div className="hero__mini-bar-group">
                <div className="hero__mini-bar hero__mini-bar--rf" />
                <span className="hero__mini-bar-label">RF</span>
              </div>
              <div className="hero__mini-bar-group">
                <div className="hero__mini-bar hero__mini-bar--xgb" />
                <span className="hero__mini-bar-label">XGB</span>
              </div>
              <div className="hero__mini-bar-group">
                <div className="hero__mini-bar hero__mini-bar--cnn" />
                <span className="hero__mini-bar-label">CNN</span>
              </div>
              <div className="hero__mini-bar-group">
                <div className="hero__mini-bar hero__mini-bar--svm" />
                <span className="hero__mini-bar-label">SVM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="hero__fade" aria-hidden="true" />
    </section>
  );
};

export default Hero;
