import { BookOpen, GraduationCap, Users, CalendarRange } from 'lucide-react';
import './AboutSection.css';

interface ModuleCard {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const moduleInfo: ModuleCard[] = [
  {
    icon: <BookOpen size={20} />,
    label: 'Module',
    value: 'PRG4206 — Machine Learning',
  },
  {
    icon: <GraduationCap size={20} />,
    label: 'Institution',
    value: 'INTI International University',
  },
  {
    icon: <Users size={20} />,
    label: 'Assignment Type',
    value: 'Research-based Group Assignment',
  },
  {
    icon: <CalendarRange size={20} />,
    label: 'Coverage',
    value: '55 Core Papers (2021–2026) + 3 Benchmarks',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section about-section" aria-label="About this project">
      <div className="container">
        <div className="about-section__layout">
          {/* Text content */}
          <div className="about-section__text reveal">
            <span className="section-label">
              <GraduationCap size={14} />
              About This Project
            </span>

            <h2 className="about-section__title">
              A <span className="gradient-text">PRG4206 Machine Learning</span>{' '}
              Research Project
            </h2>

            <p className="about-section__body">
              This website accompanies our group assignment for PRG4206 Machine Learning
              at INTI International University. It presents a research-based exploration
              of how artificial intelligence and machine learning are being applied to
              smart agriculture — from crop yield prediction and disease detection to
              resource optimisation and supply chain sustainability.
            </p>

            <p className="about-section__body">
              Our goal is to organise recent peer-reviewed research (2021–2026), present selected
              source-linked findings through interactive visualisations, and explain the
              opportunities and limitations of AI in modern agricultural systems. The
              group should verify each paper and quantitative claim before citing it in
              the formal report.
            </p>
          </div>

          {/* Module info cards */}
          <div className="about-section__info reveal reveal-delay-2">
            <div className="about-section__info-card">
              <div className="about-section__info-header">
                <span className="about-section__info-badge">Project Details</span>
              </div>

              <div className="about-section__info-grid">
                {moduleInfo.map((item) => (
                  <div key={item.label} className="about-section__info-item">
                    <span className="about-section__info-icon">{item.icon}</span>
                    <div>
                      <span className="about-section__info-label">{item.label}</span>
                      <span className="about-section__info-value">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="about-section__note">
                This website is a supplementary presentation tool. The formal academic
                deliverable is the accompanying research report.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
