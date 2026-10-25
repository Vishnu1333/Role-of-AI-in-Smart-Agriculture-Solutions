// ============================================================
// FIELDWISE AI — Research chart data with explicit evidence boundaries
// PRG4206 Machine Learning — INTI International University
// ============================================================
// Quantitative chart rows below are limited to values identifiable in the
// linked publication record/abstract or source text reviewed for this audit.
// A catalogue record count does not mean every paper field is independently
// verified. Cross-study metrics below are contextual, not a leaderboard.

import { researchPapers } from './papers';

export interface ModelPerformanceRow {
  model: string;
  task: string;
  metric: string;
  value: number;
  unit: string;
  dataset: string;
  year: number;
  source: string;
  doi: string;
  comparable: boolean;
  displayValue: string;
}

// For visual display, R² is multiplied by 100 where indicated. The actual
// statistic is written in displayValue/tooltips to avoid changing its meaning.
export const modelPerformanceData: ModelPerformanceRow[] = [
  {
    model: 'Random Forest with NIRv and environmental covariates',
    task: 'Wheat Yield Prediction',
    metric: 'R² (×100 for display)',
    value: 74,
    unit: '% display scale',
    dataset: 'Multi-source environmental data for wheat in China',
    year: 2022,
    source: 'Li et al. (2022)',
    doi: 'https://doi.org/10.1016/j.compag.2022.106790',
    comparable: false,
    displayValue: 'R² = 0.74; RMSE = 758 kg/ha. Bar displays R² × 100.',
  },
  {
    model: 'SE-YOLOv5',
    task: 'Tomato Virus Disease Detection',
    metric: 'mAP@0.5',
    value: 94.10,
    unit: '%',
    dataset: 'Greenhouse tomato virus images collected using a mobile phone',
    year: 2022,
    source: 'Qi et al. (2022)',
    doi: 'https://doi.org/10.1016/j.compag.2022.106780',
    comparable: false,
    displayValue: 'mAP@0.5 = 94.10%; reported test-set accuracy = 91.07%.',
  },
  {
    model: 'U-Net semantic segmentation',
    task: 'Coffee Leaf Biotic-Stress Segmentation',
    metric: 'mIoU',
    value: 94.25,
    unit: '%',
    dataset: 'Coffee leaf images collected in natural scenes by smartphone',
    year: 2021,
    source: 'Tassis et al. (2021)',
    doi: 'https://doi.org/10.1016/j.compag.2021.106191',
    comparable: false,
    displayValue: 'U-Net mIoU = 94.25%; PSPNet mIoU = 93.54%.',
  },
  {
    model: 'YOLOv4',
    task: 'Cotton Weed Detection',
    metric: 'mAP@0.5',
    value: 95.22,
    unit: '%',
    dataset: 'CottonWeedDet12: 5,648 field images, 12 weed classes, 9,370 boxes',
    year: 2023,
    source: 'Dang et al. (2023)',
    doi: 'https://doi.org/10.1016/j.compag.2023.107655',
    comparable: false,
    displayValue: 'YOLOv4 mAP@0.5 = 95.22% within the CottonWeedDet12 benchmark.',
  },
  {
    model: 'YOLOv3-tiny',
    task: 'Cotton Weed Detection',
    metric: 'mAP@0.5',
    value: 88.14,
    unit: '%',
    dataset: 'CottonWeedDet12: 5,648 field images, 12 weed classes, 9,370 boxes',
    year: 2023,
    source: 'Dang et al. (2023)',
    doi: 'https://doi.org/10.1016/j.compag.2023.107655',
    comparable: false,
    displayValue: 'YOLOv3-tiny mAP@0.5 = 88.14% within the same benchmark.',
  },
  {
    model: 'CNN architectures reported by the study',
    task: 'Plant Disease Classification (Foundational)',
    metric: 'Accuracy',
    value: 99.53,
    unit: '%',
    dataset: '87,848 images spanning 25 plant species and 58 classes',
    year: 2018,
    source: 'Ferentinos (2018) — foundational',
    doi: 'https://doi.org/10.1016/j.compag.2018.01.009',
    comparable: false,
    displayValue: 'Reported best classification accuracy = 99.53% on the study test set.',
  },
  {
    model: 'CNN classifier',
    task: 'Plant Disease Classification (Foundational)',
    metric: 'Accuracy',
    value: 99.35,
    unit: '%',
    dataset: 'PlantVillage: 54,306 images, 14 crop species and 26 classes',
    year: 2016,
    source: 'Mohanty et al. (2016) — foundational',
    doi: 'https://doi.org/10.3389/fpls.2016.01419',
    comparable: false,
    displayValue: 'Reported held-out test accuracy = 99.35% on PlantVillage.',
  },
  {
    model: 'MEAN-SSD lightweight object detector',
    task: 'Apple Leaf Disease Detection (Foundational Data Study)',
    metric: 'mAP',
    value: 83.12,
    unit: '%',
    dataset: 'AppleDisease5 image dataset',
    year: 2021,
    source: 'Sun et al. (2021)',
    doi: 'https://doi.org/10.1016/j.compag.2021.106379',
    comparable: false,
    displayValue: 'Reported mAP = 83.12%; reported speed = 12.53 FPS.',
  },
];

export interface YieldRow {
  study: string;
  crop: string;
  model: string;
  rmse?: number;
  unit?: string;
  r2: number;
  year: number;
  doi: string;
  notes: string;
}

// Values from the same Li et al. (2022) wheat-yield study. Keeping the chart
// within one publication avoids creating a leaderboard across unlike studies.
export const yieldData: YieldRow[] = [
  {
    study: 'Li et al. (2022)',
    crop: 'Wheat (China)',
    model: 'Random Forest with NIRv',
    rmse: 758,
    unit: 'kg/ha',
    r2: 0.74,
    year: 2022,
    doi: 'https://doi.org/10.1016/j.compag.2022.106790',
    notes: 'The paper reports that RF with NIRv and other covariates achieved R² = 0.74 and RMSE = 758 kg/ha.',
  },
  {
    study: 'Li et al. (2022)',
    crop: 'Wheat (China)',
    model: 'Random Forest with EVI',
    rmse: 762,
    unit: 'kg/ha',
    r2: 0.73,
    year: 2022,
    doi: 'https://doi.org/10.1016/j.compag.2022.106790',
    notes: 'The paper reports R² = 0.73 and RMSE = 762 kg/ha for the RF model using EVI.',
  },
];

export interface DiseaseRow {
  study: string;
  model: string;
  task: string;
  metric: string;
  value: number;
  dataset: string;
  year: number;
  doi: string;
  notes: string;
}

// Each bar is the specific metric reported in its own paper. These metrics
// (mAP, mIoU, precision, recall, accuracy) are not interchangeable.
export const diseaseData: DiseaseRow[] = [
  {
    study: 'Qi et al. (2022)', model: 'SE-YOLOv5', task: 'Tomato Virus Disease Detection',
    metric: 'mAP@0.5', value: 94.10,
    dataset: 'Greenhouse tomato virus images collected using a mobile phone', year: 2022,
    doi: 'https://doi.org/10.1016/j.compag.2022.106780',
    notes: 'The article also reports 91.07% test-set accuracy.',
  },
  {
    study: 'Qi et al. (2022)', model: 'SE-YOLOv5', task: 'Tomato Virus Disease Detection',
    metric: 'Accuracy', value: 91.07,
    dataset: 'Greenhouse tomato virus images collected using a mobile phone', year: 2022,
    doi: 'https://doi.org/10.1016/j.compag.2022.106780',
    notes: 'Test-set accuracy reported by the article.',
  },
  {
    study: 'Tassis et al. (2021)', model: 'U-Net', task: 'Coffee Leaf Semantic Segmentation',
    metric: 'mIoU', value: 94.25,
    dataset: 'Coffee leaf images captured using smartphones in natural scenes', year: 2021,
    doi: 'https://doi.org/10.1016/j.compag.2021.106191',
    notes: 'PSPNet mIoU was reported as 93.54% in the same study.',
  },
  {
    study: 'Tassis et al. (2021)', model: 'PSPNet', task: 'Coffee Leaf Semantic Segmentation',
    metric: 'mIoU', value: 93.54,
    dataset: 'Coffee leaf images captured using smartphones in natural scenes', year: 2021,
    doi: 'https://doi.org/10.1016/j.compag.2021.106191',
    notes: 'U-Net mIoU was reported as 94.25% in the same study.',
  },
  {
    study: 'Tassis et al. (2021)', model: 'Mask R-CNN', task: 'Coffee Leaf Instance Segmentation',
    metric: 'Precision', value: 73.90,
    dataset: 'Coffee leaf images captured using smartphones in natural scenes', year: 2021,
    doi: 'https://doi.org/10.1016/j.compag.2021.106191',
    notes: 'Precision for the instance-segmentation task; not the same metric as mIoU.',
  },
  {
    study: 'Tassis et al. (2021)', model: 'Mask R-CNN', task: 'Coffee Leaf Instance Segmentation',
    metric: 'Recall', value: 71.90,
    dataset: 'Coffee leaf images captured using smartphones in natural scenes', year: 2021,
    doi: 'https://doi.org/10.1016/j.compag.2021.106191',
    notes: 'Recall for the instance-segmentation task; not the same metric as mIoU.',
  },
  {
    study: 'Dang et al. (2023)', model: 'YOLOv4', task: 'Cotton Weed Detection',
    metric: 'mAP@0.5', value: 95.22,
    dataset: 'CottonWeedDet12: 5,648 field images, 12 weed classes, 9,370 boxes', year: 2023,
    doi: 'https://doi.org/10.1016/j.compag.2023.107655',
    notes: 'Highest mAP@0.5 reported in the benchmark among the compared models.',
  },
  {
    study: 'Dang et al. (2023)', model: 'YOLOv3-tiny', task: 'Cotton Weed Detection',
    metric: 'mAP@0.5', value: 88.14,
    dataset: 'CottonWeedDet12: 5,648 field images, 12 weed classes, 9,370 boxes', year: 2023,
    doi: 'https://doi.org/10.1016/j.compag.2023.107655',
    notes: 'Lowest mAP@0.5 reported among the detector range quoted in the article.',
  },
  {
    study: 'Ferentinos (2018)', model: 'CNN architectures reported by the study', task: 'Plant Disease Classification (Foundational)',
    metric: 'Accuracy', value: 99.53,
    dataset: '87,848 images spanning 25 plant species and 58 classes', year: 2018,
    doi: 'https://doi.org/10.1016/j.compag.2018.01.009',
    notes: 'Foundational controlled image-classification benchmark; not a field deployment result.',
  },
  {
    study: 'Mohanty et al. (2016)', model: 'CNN classifier', task: 'Plant Disease Classification (Foundational)',
    metric: 'Accuracy', value: 99.35,
    dataset: 'PlantVillage: 54,306 images, 14 crop species and 26 classes', year: 2016,
    doi: 'https://doi.org/10.3389/fpls.2016.01419',
    notes: 'Held-out accuracy on PlantVillage; this controlled dataset is not directly comparable with field imagery.',
  },
];

// Chart 4: all values are synthetic illustrative readings, not real farm data.
export interface IrrigationPoint {
  day: string;
  soilMoisture: number;
  irrigationMM: number;
  rainfallMM: number;
  etMM: number;
}
export const irrigationData: IrrigationPoint[] = [
  { day: 'Day 1', soilMoisture: 42, irrigationMM: 0, rainfallMM: 0, etMM: 4.2 },
  { day: 'Day 3', soilMoisture: 38, irrigationMM: 0, rainfallMM: 0, etMM: 4.5 },
  { day: 'Day 5', soilMoisture: 33, irrigationMM: 18, rainfallMM: 0, etMM: 4.3 },
  { day: 'Day 7', soilMoisture: 46, irrigationMM: 0, rainfallMM: 0, etMM: 4.8 },
  { day: 'Day 9', soilMoisture: 40, irrigationMM: 0, rainfallMM: 12, etMM: 3.1 },
  { day: 'Day 11', soilMoisture: 48, irrigationMM: 0, rainfallMM: 0, etMM: 4.6 },
  { day: 'Day 13', soilMoisture: 41, irrigationMM: 0, rainfallMM: 0, etMM: 5.0 },
  { day: 'Day 15', soilMoisture: 35, irrigationMM: 20, rainfallMM: 0, etMM: 4.7 },
  { day: 'Day 17', soilMoisture: 50, irrigationMM: 0, rainfallMM: 0, etMM: 4.4 },
  { day: 'Day 19', soilMoisture: 44, irrigationMM: 0, rainfallMM: 8, etMM: 3.5 },
  { day: 'Day 21', soilMoisture: 48, irrigationMM: 0, rainfallMM: 0, etMM: 4.2 },
  { day: 'Day 23', soilMoisture: 42, irrigationMM: 0, rainfallMM: 0, etMM: 4.6 },
  { day: 'Day 25', soilMoisture: 36, irrigationMM: 16, rainfallMM: 0, etMM: 4.9 },
  { day: 'Day 27', soilMoisture: 47, irrigationMM: 0, rainfallMM: 0, etMM: 4.3 },
  { day: 'Day 29', soilMoisture: 41, irrigationMM: 0, rainfallMM: 5, etMM: 3.8 },
];

export interface LandscapeRow { category: string; count: number; label: string }
const corePapers = researchPapers.filter((p) => !p.isFoundational && p.year >= 2021 && p.year <= 2026);

const applicationLabels: Record<string, string> = {
  'Smart Agriculture Data & System Architecture': 'Architecture',
  'Crop & Livestock Production Prediction': 'Prediction',
  'Monitoring & Detection': 'Monitoring',
  'Resource & Operations Optimisation': 'Resource Opt.',
  'Deployment, Ethics & Future Trends': 'Ethics & Trends',
};
const appCounts = new Map<string, number>();
corePapers.forEach((p) => appCounts.set(p.application, (appCounts.get(p.application) ?? 0) + 1));
export const papersByApplication: LandscapeRow[] = Object.entries(applicationLabels).map(([category, label]) => ({
  category, label, count: appCounts.get(category) ?? 0,
}));

const yearCounts = new Map<number, number>();
corePapers.forEach((p) => yearCounts.set(p.year, (yearCounts.get(p.year) ?? 0) + 1));
export const papersByYear: LandscapeRow[] = Array.from({ length: 6 }, (_, i) => 2021 + i).map((year) => ({
  category: String(year), label: String(year), count: yearCounts.get(year) ?? 0,
}));

// Heuristic taxonomy used only to make the model-family distribution readable.
// It groups catalogue labels; it is not an empirical taxonomy claim from papers.
function modelGroup(modelFamily: string): string {
  const m = modelFamily.toLowerCase();
  if (/review|synthesis/.test(m)) return 'Reviews / synthesis';
  if (/conceptual|position paper|data governance|sociotechnical|adoption|qualitative/.test(m)) return 'Conceptual / sociotechnical';
  if (/federated/.test(m)) return 'Federated learning';
  if (/reinforcement|deep q-network|q-learning/.test(m)) return 'Reinforcement learning';
  if (/iot|edge|digital twin|system architecture|sustainability monitoring/.test(m)) return 'IoT / systems / digital twins';
  if (/yolo|cnn|deep learning|mask r-cnn|u-net|unet|resnet|ssd|object detection|segmentation|vision transformer|attention/.test(m)) return 'Computer vision / deep learning';
  if (/svr|support vector|random forest|svm|lstm|gradient|regression|prediction|machine learning|ensemble|assimilation|optimization|optimisation/.test(m)) return 'Conventional ML / forecasting';
  return 'Other / mixed methods';
}
const modelCounts = new Map<string, number>();
corePapers.forEach((p) => {
  const group = modelGroup(p.modelFamily);
  modelCounts.set(group, (modelCounts.get(group) ?? 0) + 1);
});
export const papersByModel: LandscapeRow[] = Array.from(modelCounts.entries())
  .map(([category, count]) => ({ category, count, label: category }))
  .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
