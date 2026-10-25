// ============================================================
// FIELDWISE AI — Data & Models Visualisation Section
// Interactive Recharts-based research visualisations
// ============================================================

import { useState, useMemo } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Line, ComposedChart, Area,
  Cell
} from 'recharts'
import {
  modelPerformanceData, yieldData, diseaseData,
  irrigationData, papersByApplication, papersByYear, papersByModel
} from '../data/chartData'
import './DataVisualisation.css'

// ---- Shared chart theme ----
const COLORS = {
  violet: '#8b5cf6',
  orange: '#f97316',
  teal: '#2dd4bf',
  blue: '#60a5fa',
  green: '#22c55e',
}

const AXIS_STYLE = { fill: '#8b7fb8', fontSize: 12 }
const GRID_STYLE = { strokeDasharray: '3 3', stroke: 'rgba(255,255,255,0.06)' }

// ---- Custom tooltip ----
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  )
}

// ---- Chart 1: Model Performance tooltip ----
const ModelPerfTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{d.model}</p>
      <p style={{ color: COLORS.violet }}>Task: {d.task}</p>
      <p style={{ color: COLORS.orange }}>
        {d.displayValue || `${d.metric}: ${d.value}${d.unit}`}
      </p>
      <p style={{ color: COLORS.teal }}>Dataset: {d.dataset}</p>
      <p style={{ color: '#8b7fb8' }}>Year: {d.year}</p>
      <p style={{ color: '#8b7fb8' }}>Source: {d.source}</p>
      <a href={d.doi} target="_blank" rel="noopener noreferrer" style={{ color: '#c4b5fd' }}>Open source ↗</a>
    </div>
  )
}

// ---- Chart 2: Yield tooltip ----
const YieldTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{d.study}</p>
      <p style={{ color: COLORS.violet }}>Crop: {d.crop}</p>
      <p style={{ color: COLORS.orange }}>Model: {d.model}</p>
      <p style={{ color: COLORS.teal }}>R²: {d.r2.toFixed(2)}</p>
      {d.rmse !== undefined && <p style={{ color: COLORS.green }}>RMSE: {d.rmse} {d.unit || ''}</p>}
      <p style={{ color: '#8b7fb8' }}>{d.notes}</p>
      <p style={{ color: '#8b7fb8' }}>Year: {d.year}</p>
      <a href={d.doi} target="_blank" rel="noopener noreferrer" style={{ color: '#c4b5fd' }}>Open source ↗</a>
    </div>
  )
}

// ---- Chart 3: Disease tooltip ----
const DiseaseTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  const d = payload[0]?.payload
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      <p style={{ color: '#8b7fb8' }}>Study: {d?.study}</p>
      <p style={{ color: '#8b7fb8' }}>Model: {d?.model}</p>
      <p style={{ color: '#8b7fb8' }}>Task: {d?.task}</p>
      <p style={{ color: COLORS.orange }}>{d?.metric}: {d?.value}%</p>
      <p style={{ color: '#8b7fb8' }}>Dataset: {d?.dataset}</p>
      <p style={{ color: '#8b7fb8' }}>{d?.notes}</p>
      {d?.doi && <a href={d.doi} target="_blank" rel="noopener noreferrer" style={{ color: '#c4b5fd' }}>Open source ↗</a>}
    </div>
  )
}

// ---- Chart 4: Irrigation tooltip ----
const IrrigationTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }}>
          {p.name}: {p.value}
          {p.name === 'Soil Moisture' ? '%' : ' mm'}
        </p>
      ))}
    </div>
  )
}

// ============================================================
// Component
// ============================================================
export default function DataVisualisation() {
  // ---- Filters ----
  const [perfFilter, setPerfFilter] = useState('All')
  const [diseaseFilter, setDiseaseFilter] = useState('All')

  // ---- Unique task groups for Chart 1 ----
  const perfTasks = useMemo(() => {
    const tasks = Array.from(new Set(modelPerformanceData.map(d => d.task)))
    return ['All', ...tasks]
  }, [])

  // ---- Filtered + mapped Chart 1 data ----
  const perfChartData = useMemo(() => {
    const filtered = perfFilter === 'All'
      ? modelPerformanceData
      : modelPerformanceData.filter(d => d.task === perfFilter)

    // Find max value per task group
    const maxByTask: Record<string, number> = {}
    modelPerformanceData.forEach(d => {
      if (!maxByTask[d.task] || d.value > maxByTask[d.task]) {
        maxByTask[d.task] = d.value
      }
    })

    return filtered.map(d => ({
      name: `${d.model} — ${d.task}`,
      value: d.value,
      plotValue: d.value,
      metric: d.metric,
      dataset: d.dataset,
      year: d.year,
      source: d.source,
      doi: d.doi,
      unit: d.unit,
      model: d.model,
      task: d.task,
      displayValue: d.displayValue,
      isMax: d.value === maxByTask[d.task],
    }))
  }, [perfFilter])

  // ---- Unique disease tasks for Chart 3 ----
  const diseaseTasks = useMemo(() => {
    const tasks = Array.from(new Set(diseaseData.map(d => d.task)))
    return ['All', ...tasks]
  }, [])

  // ---- Filtered Chart 3 data ----
  const diseaseChartData = useMemo(() => {
    const filtered = diseaseFilter === 'All'
      ? diseaseData
      : diseaseData.filter(d => d.task === diseaseFilter)
    return filtered.map(d => ({
      name: `${d.study}: ${d.model} — ${d.metric}`,
      value: d.value,
      metric: d.metric,
      model: d.model,
      study: d.study,
      task: d.task,
      dataset: d.dataset,
      year: d.year,
      doi: d.doi,
      notes: d.notes,
    }))
  }, [diseaseFilter])

  // ---- Chart 2: Yield data mapped ----
  const yieldChartData = useMemo(() => {
    return yieldData.map(d => ({
      name: `${d.model} (${d.crop})`,
      r2: d.r2,
      study: d.study,
      crop: d.crop,
      model: d.model,
      rmse: d.rmse,
      unit: d.unit,
      notes: d.notes,
      doi: d.doi,
      year: d.year,
    }))
  }, [])

  // Model family colours for yield chart
  const yieldBarColor = (model: string) => {
    if (model.includes('Random Forest')) return COLORS.violet
    if (model.includes('XGBoost')) return COLORS.orange
    if (model.includes('LSTM')) return COLORS.teal
    return COLORS.blue
  }

  return (
    <section id="data-models" className="section data-vis" aria-label="Data and Models — Interactive Research Visualisations">
      <div className="container">
        {/* ---- Header ---- */}
        <div className="data-vis__header reveal">
          <span className="section-label">Data &amp; Models</span>
          <h2 className="data-vis__heading">
            Interactive research <span className="accent-text">visualisations</span>
          </h2>
          <p className="data-vis__subtitle">
            Explore selected published findings through interactive charts. Hover for source and task details.
            Each quantitative row is limited to a metric located in the linked source text; other catalogue fields may need full-text checking.
          </p>
        </div>

        {/* ============================================================
           CHART 1 — Model Performance Comparison
           ============================================================ */}
        <div className="chart-card reveal" aria-label="Model Performance Comparison Chart">
          <div className="chart-card__header">
            <div>
              <h3 className="chart-card__title">Selected Published Metrics Across Agricultural Tasks</h3>
              <p className="chart-card__subtitle">
                Each row represents a result from a specific study, dataset, and metric.
                R² is shown ×100 solely to fit the display scale; the tooltip provides its actual value. Rows are not directly comparable.
              </p>
            </div>
            <select
              className="chart-filter"
              value={perfFilter}
              onChange={e => setPerfFilter(e.target.value)}
              aria-label="Filter by task"
            >
              {perfTasks.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <ResponsiveContainer width="100%" height={Math.max(350, perfChartData.length * 52)}>
            <BarChart
              data={perfChartData}
              layout="vertical"
              margin={{ top: 8, right: 30, left: 180, bottom: 8 }}
            >
              <CartesianGrid {...GRID_STYLE} horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={AXIS_STYLE}
                axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                label={{ value: 'Metric display scale (actual measure in tooltip)', position: 'insideBottom', offset: -2, fill: '#8b7fb8', fontSize: 11 }}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: '#c4b5fd', fontSize: 11 }}
                width={175}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ModelPerfTooltip />} cursor={{ fill: 'rgba(139,92,246,0.06)' }} />
              <Bar dataKey="value" name="Reported measure (see tooltip)" radius={[0, 6, 6, 0]} maxBarSize={28}>
                {perfChartData.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={entry.isMax ? COLORS.orange : COLORS.violet}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="chart-warning">
            ⚠️ Values are from different datasets and evaluation conditions.
            Direct comparison across rows is not appropriate.
          </div>
        </div>

        {/* ============================================================
           CHART 2 — Crop Yield R² Comparison
           ============================================================ */}
        <div className="chart-card reveal" aria-label="Crop Yield Prediction Comparison Chart">
          <div className="chart-card__header">
            <div>
              <h3 className="chart-card__title">Wheat Yield Prediction — Results Within One Study</h3>
              <p className="chart-card__subtitle">
                Compares Random Forest variants reported by Li et al. (2022) in the same wheat-yield study. R² values are specific to that dataset.
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={yieldChartData}
              margin={{ top: 16, right: 30, left: 20, bottom: 8 }}
            >
              <CartesianGrid {...GRID_STYLE} />
              <XAxis
                dataKey="name"
                tick={{ fill: '#c4b5fd', fontSize: 11 }}
                axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                angle={-12}
                textAnchor="end"
                height={60}
              />
              <YAxis
                tick={AXIS_STYLE}
                domain={[0, 1]}
                axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                label={{ value: 'R² Score', angle: -90, position: 'insideLeft', fill: '#8b7fb8', fontSize: 11 }}
              />
              <Tooltip content={<YieldTooltip />} cursor={{ fill: 'rgba(139,92,246,0.06)' }} />
              <Legend wrapperStyle={{ color: '#8b7fb8', fontSize: 12 }} />
              <Bar dataKey="r2" name="R² Score" radius={[6, 6, 0, 0]} maxBarSize={56}>
                {yieldChartData.map((entry, idx) => (
                  <Cell key={idx} fill={yieldBarColor(entry.model)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="chart-warning">
            Source: Li et al. (2022). Random Forest with NIRv reports R² = 0.74 and RMSE = 758 kg/ha; the EVI variant reports R² = 0.73 and RMSE = 762 kg/ha. See the tooltips for the DOI.
          </div>
        </div>

        {/* ============================================================
           CHART 3 — Disease Detection Performance
           ============================================================ */}
        <div className="chart-card reveal" aria-label="Disease and Pest Detection Performance Chart">
          <div className="chart-card__header">
            <div>
              <h3 className="chart-card__title">Reported Detection Metrics by Study</h3>
              <p className="chart-card__subtitle">
                Each bar represents the particular metric reported by its source. mAP, mIoU, precision, recall, and accuracy are different measures and must not be ranked as one metric.
              </p>
            </div>
            <select
              className="chart-filter"
              value={diseaseFilter}
              onChange={e => setDiseaseFilter(e.target.value)}
              aria-label="Filter by detection task"
            >
              {diseaseTasks.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <ResponsiveContainer width="100%" height={Math.max(380, diseaseChartData.length * 42)}>
            <BarChart
              data={diseaseChartData}
              layout="vertical"
              margin={{ top: 12, right: 30, left: 230, bottom: 18 }}
            >
              <CartesianGrid {...GRID_STYLE} horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={AXIS_STYLE}
                axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                label={{ value: 'Reported metric value (%) — see tooltip for metric type', position: 'insideBottom', offset: -8, fill: '#8b7fb8', fontSize: 11 }}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: '#c4b5fd', fontSize: 10 }}
                width={220}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<DiseaseTooltip />} cursor={{ fill: 'rgba(139,92,246,0.06)' }} />
              <Bar dataKey="value" name="Reported metric (%)" fill={COLORS.violet} radius={[0, 4, 4, 0]} maxBarSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ============================================================
           CHART 4 — Irrigation Time-Series (Synthetic)
           ============================================================ */}
        <div className="chart-card reveal" aria-label="Smart Irrigation Monitoring Chart — Synthetic Data">
          <div className="chart-card__header">
            <div>
              <h3 className="chart-card__title">Smart Irrigation Monitoring — <span className="accent-text">SYNTHETIC DEMONSTRATION DATA</span></h3>
              <p className="chart-card__subtitle">
                Illustrative dashboard layout only; these generated values do not estimate real farm water use or savings.
              </p>
            </div>
          </div>

          <div className="chart-warning chart-warning--prominent">
            ⚠️ SYNTHETIC DATA — These are illustrative readings, NOT real farm observations.
          </div>

          <ResponsiveContainer width="100%" height={380}>
            <ComposedChart
              data={irrigationData}
              margin={{ top: 16, right: 30, left: 20, bottom: 8 }}
            >
              <CartesianGrid {...GRID_STYLE} />
              <XAxis
                dataKey="day"
                tick={{ fill: '#c4b5fd', fontSize: 11 }}
                axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
              />
              <YAxis
                yAxisId="left"
                tick={AXIS_STYLE}
                domain={[0, 60]}
                axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                label={{ value: 'Soil Moisture (%)', angle: -90, position: 'insideLeft', fill: '#8b7fb8', fontSize: 11 }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={AXIS_STYLE}
                domain={[0, 25]}
                axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                label={{ value: 'mm', angle: 90, position: 'insideRight', fill: '#8b7fb8', fontSize: 11 }}
              />
              <Tooltip content={<IrrigationTooltip />} cursor={{ fill: 'rgba(139,92,246,0.06)' }} />
              <Legend wrapperStyle={{ color: '#8b7fb8', fontSize: 12 }} />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="soilMoisture"
                name="Soil Moisture"
                fill="rgba(139,92,246,0.15)"
                stroke={COLORS.violet}
                strokeWidth={2}
              />
              <Bar
                yAxisId="right"
                dataKey="irrigationMM"
                name="Irrigation"
                fill={COLORS.orange}
                radius={[4, 4, 0, 0]}
                maxBarSize={24}
              />
              <Bar
                yAxisId="right"
                dataKey="rainfallMM"
                name="Rainfall"
                fill={COLORS.blue}
                radius={[4, 4, 0, 0]}
                maxBarSize={24}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="etMM"
                name="Evapotranspiration"
                stroke={COLORS.green}
                strokeWidth={2}
                strokeDasharray="6 3"
                dot={{ r: 3, fill: COLORS.green, strokeWidth: 0 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* ============================================================
           CHART 5 — Research Landscape (3 mini charts)
           ============================================================ */}
        <div className="chart-card reveal" aria-label="Research Landscape Charts">
          <div className="chart-card__header">
            <div>
              <h3 className="chart-card__title">Research Landscape — Catalogue Records</h3>
              <p className="chart-card__subtitle">
                Distribution of catalogue records by application, year, and model family; record counts do not indicate full-text verification.
              </p>
            </div>
          </div>

          <div className="chart-card__trio">
            {/* Papers by Application */}
            <div className="chart-card__trio-item">
              <h4 className="chart-card__trio-title">By Application</h4>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={papersByApplication}
                  margin={{ top: 8, right: 8, left: 0, bottom: 8 }}
                >
                  <CartesianGrid {...GRID_STYLE} horizontal={false} />
                  <XAxis
                    dataKey="label"
                    tick={{ fill: '#c4b5fd', fontSize: 10 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                    interval={0}
                    angle={-20}
                    textAnchor="end"
                    height={45}
                  />
                  <YAxis
                    tick={AXIS_STYLE}
                    allowDecimals={false}
                    axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(139,92,246,0.06)' }} />
                  <Bar dataKey="count" name="Papers" fill={COLORS.violet} radius={[4, 4, 0, 0]} maxBarSize={32} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Papers by Year */}
            <div className="chart-card__trio-item">
              <h4 className="chart-card__trio-title">By Year</h4>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={papersByYear}
                  margin={{ top: 8, right: 8, left: 0, bottom: 8 }}
                >
                  <CartesianGrid {...GRID_STYLE} horizontal={false} />
                  <XAxis
                    dataKey="label"
                    tick={{ fill: '#c4b5fd', fontSize: 10 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                  />
                  <YAxis
                    tick={AXIS_STYLE}
                    allowDecimals={false}
                    axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(249,115,22,0.06)' }} />
                  <Bar dataKey="count" name="Papers" fill={COLORS.orange} radius={[4, 4, 0, 0]} maxBarSize={32} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Papers by Model Family */}
            <div className="chart-card__trio-item">
              <h4 className="chart-card__trio-title">By Model Family</h4>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={papersByModel}
                  margin={{ top: 8, right: 8, left: 0, bottom: 8 }}
                >
                  <CartesianGrid {...GRID_STYLE} horizontal={false} />
                  <XAxis
                    dataKey="label"
                    tick={{ fill: '#c4b5fd', fontSize: 10 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                  />
                  <YAxis
                    tick={AXIS_STYLE}
                    allowDecimals={false}
                    axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(45,212,191,0.06)' }} />
                  <Bar dataKey="count" name="Papers" fill={COLORS.teal} radius={[4, 4, 0, 0]} maxBarSize={32} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
