import { ExternalLink, FlaskConical } from 'lucide-react';
import './ResearchProof.css';

interface StatCard {
  headline: string;
  subtext: string;
  citation: string;
  link: string;
}

const stats: StatCard[] = [
  {
    headline: 'R² = 0.74',
    subtext: 'Random Forest with NIRv and environmental covariates for wheat-yield prediction in China; RMSE was 758 kg/ha.',
    citation: 'Li et al. (2022)',
    link: 'https://doi.org/10.1016/j.compag.2022.106790',
  },
  {
    headline: '99.53%',
    subtext: 'Best reported classification accuracy in Ferentinos’s foundational plant-disease image study; controlled benchmark, not field-wide performance.',
    citation: 'Ferentinos (2018) — foundational',
    link: 'https://doi.org/10.1016/j.compag.2018.01.009',
  },
  {
    headline: '23 mm',
    subtext: 'Irrigation water saved in the study’s paddy-rice DQN simulation; drainage also fell by 21 mm without significant yield reduction in that simulation.',
    citation: 'Chen et al. (2021)',
    link: 'https://doi.org/10.1016/j.agwat.2021.106838',
  },
  {
    headline: '94.10%',
    subtext: 'Reported mAP@0.5 for SE-YOLOv5 tomato virus-disease detection. The same paper reports 91.07% test-set accuracy.',
    citation: 'Qi et al. (2022)',
    link: 'https://doi.org/10.1016/j.compag.2022.106780',
  },
  {
    headline: '94.25%',
    subtext: 'Reported mean intersection over union (mIoU) for U-Net semantic segmentation of coffee-leaf biotic stress in natural-scene smartphone images.',
    citation: 'Tassis et al. (2021)',
    link: 'https://doi.org/10.1016/j.compag.2021.106191',
  },
  {
    headline: '95.22%',
    subtext: 'Reported mAP@0.5 for YOLOv4 on CottonWeedDet12, a 5,648-image, 12-class cotton-field weed dataset.',
    citation: 'Dang et al. (2023)',
    link: 'https://doi.org/10.1016/j.compag.2023.107655',
  },
];

export default function ResearchProof() {
  return (
    <section id="research" className="section research-proof" aria-label="Research evidence and statistics">
      <div className="container">
        <div className="research-proof__header reveal">
          <span className="section-label">
            <FlaskConical size={14} />
            Research Evidence
          </span>
          <h2 className="research-proof__title">
            Selected findings from <span className="gradient-text">published studies</span>
          </h2>
          <p className="research-proof__subtitle">
            These are study-specific examples linked to their publication records. Metrics describe different tasks, datasets, and test conditions; they are not a universal leaderboard or a guarantee of field performance.
          </p>
        </div>
        <div className="research-proof__grid">
          {stats.map((stat, i) => (
            <article key={stat.citation} className={`research-proof__card reveal reveal-delay-${(i % 5) + 1}`}>
              <div className="research-proof__value gradient-text">{stat.headline}</div>
              <p className="research-proof__desc">{stat.subtext}</p>
              <a className="research-proof__cite" href={stat.link} target="_blank" rel="noopener noreferrer" aria-label={`Read ${stat.citation} — opens in a new tab`}>
                {stat.citation}<ExternalLink size={12} />
              </a>
            </article>
          ))}
        </div>
        <p className="research-proof__disclaimer reveal">
          Values are reproduced from publisher abstracts or source text located for the linked studies. Verify the full article and test conditions before using a result in the written report; metrics from different tasks are not directly comparable.
        </p>
      </div>
    </section>
  );
}
