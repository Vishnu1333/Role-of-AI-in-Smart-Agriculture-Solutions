import { ExternalLink, Database, Gauge, Info } from 'lucide-react';
import './AccuracySummary.css';

type Result = {
  dataset: string; citation: string; year: number; model: string;
  metric: string; score: string; details: string; url: string;
  type: 'accuracy' | 'detection' | 'regression' | 'simulation';
};
const results: Result[] = [
 {dataset:'Plant-disease image database (Ferentinos study)',citation:'Ferentinos (2018) — foundational',year:2018,model:'CNN architectures',metric:'Classification accuracy',score:'99.53%',details:'87,848 images across 25 plant species and 58 plant/disease classes; result reported on 17,548 previously unseen images.',url:'https://doi.org/10.1016/j.compag.2018.01.009',type:'accuracy'},
 {dataset:'PlantVillage',citation:'Mohanty et al. (2016) — foundational',year:2016,model:'CNN classifier',metric:'Held-out classification accuracy',score:'99.35%',details:'54,306 images covering 14 crop species and 26 disease/healthy classes. Images were collected under controlled conditions.',url:'https://doi.org/10.3389/fpls.2016.01419',type:'accuracy'},
 {dataset:'Greenhouse tomato-virus images',citation:'Qi et al. (2022)',year:2022,model:'SE-YOLOv5',metric:'Test accuracy; mAP@0.5',score:'91.07% accuracy',details:'The same paper reports 94.10% mAP@0.5. Greenhouse images were taken with a mobile phone. Accuracy and mAP are different metrics.',url:'https://doi.org/10.1016/j.compag.2022.106780',type:'accuracy'},
 {dataset:'CottonWeedDet12',citation:'Dang et al. (2023)',year:2023,model:'YOLOv4 / YOLOv3-tiny',metric:'mAP@0.5 (object detection)',score:'95.22% / 88.14%',details:'5,648 field images, 12 weed classes and 9,370 bounding boxes. These values are detection mAP, not classification accuracy.',url:'https://doi.org/10.1016/j.compag.2023.107655',type:'detection'},
 {dataset:'Coffee-leaf biotic-stress images',citation:'Tassis et al. (2021)',year:2021,model:'U-Net / PSPNet / Mask R-CNN',metric:'mIoU; precision; recall',score:'94.25% mIoU',details:'U-Net mIoU = 94.25%; PSPNet mIoU = 93.54%. Mask R-CNN precision = 73.90% and recall = 71.90% for a separate instance-segmentation task.',url:'https://doi.org/10.1016/j.compag.2021.106191',type:'detection'},
 {dataset:'AppleDisease5',citation:'Sun et al. (2021)',year:2021,model:'MEAN-SSD lightweight detector',metric:'mAP (object detection)',score:'83.12% mAP',details:'The article also reports detection speed of 12.53 frames per second (FPS). mAP is not classification accuracy.',url:'https://doi.org/10.1016/j.compag.2021.106379',type:'detection'},
 {dataset:'Multi-source wheat-yield data (China)',citation:'Li et al. (2022)',year:2022,model:'Random Forest with NIRv / EVI',metric:'R² and RMSE (regression)',score:'R² = 0.74; RMSE = 758 kg/ha',details:'The EVI configuration reports R² = 0.73 and RMSE = 762 kg/ha. Regression metrics are not accuracy percentages.',url:'https://doi.org/10.1016/j.compag.2022.106790',type:'regression'},
 {dataset:'Paddy-rice irrigation-control simulation',citation:'Chen et al. (2021)',year:2021,model:'Deep Q-network (DQN)',metric:'Simulated resource-use outcome',score:'23 mm less irrigation',details:'The simulation also reports 21 mm less drainage without significant yield reduction in that simulated setting. This is not an accuracy metric or a guaranteed field saving.',url:'https://doi.org/10.1016/j.agwat.2021.106838',type:'simulation'},
];
const labels = {accuracy:'Classification accuracy',detection:'Detection / segmentation',regression:'Yield regression',simulation:'Simulation outcome'};

export default function AccuracySummary() {
 return (
  <section id="dataset-performance" className="section accuracy-summary" aria-label="Dataset performance and reported results">
   <div className="container">
    <header className="accuracy-summary__header reveal">
     <span className="section-label"><Gauge size={14} /> Dataset Results &amp; Metrics</span>
     <h2 className="accuracy-summary__title">How accurate are the <span className="gradient-text">published models?</span></h2>
     <p className="accuracy-summary__subtitle">Fieldwise AI is a research and visualisation project, not a model trained by this website. It has no single overall model-accuracy percentage. The values below are results reported by individual publications on their own datasets and evaluation settings.</p>
    </header>
    <div className="accuracy-summary__answer reveal">
     <Info size={20} />
     <div><strong>Suggested answer for your lecturer</strong>
      <p>“Our project does not train one model, so it has no single accuracy score. We compare published results—for example, 91.07% test accuracy for a tomato-virus detector and 99.35% held-out accuracy on PlantVillage. Other tasks use measures such as mAP, mIoU and R², so they cannot be treated as one common accuracy value.”</p>
     </div>
    </div>
    <div className="accuracy-summary__grid">
     {results.map((item,i)=>(
      <article key={item.dataset} className={`accuracy-summary__card reveal reveal-delay-${(i%5)+1}`}>
       <div className="accuracy-summary__card-top"><span className={`accuracy-summary__tag accuracy-summary__tag--${item.type}`}>{labels[item.type]}</span><span className="accuracy-summary__year">{item.year}</span></div>
       <p className="accuracy-summary__dataset"><Database size={15}/>{item.dataset}</p>
       <h3 className="accuracy-summary__score">{item.score}</h3>
       <p className="accuracy-summary__metric">{item.metric}</p>
       <p className="accuracy-summary__details"><strong>Model:</strong> {item.model}</p>
       <p className="accuracy-summary__details">{item.details}</p>
       <a className="accuracy-summary__source" href={item.url} target="_blank" rel="noopener noreferrer">{item.citation}<ExternalLink size={13}/></a>
      </article>
     ))}
    </div>
    <p className="accuracy-summary__note">The raw datasets are not bundled in this repository; this section presents selected results recorded from the literature. Studies use different datasets, splits, metrics and conditions. Foundational work from 2016 and 2018 is included for context, not as part of the 2021–2026 core window. Verify the original publication before quoting a value.</p>
   </div>
  </section>
 );
}
