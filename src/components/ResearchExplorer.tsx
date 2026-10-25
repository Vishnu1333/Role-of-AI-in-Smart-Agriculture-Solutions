// ============================================================
// FIELDWISE AI — Comparative Research Explorer
// Interactive searchable, filterable research paper database with CSV export
// ============================================================

import React, { useState, useMemo } from 'react'
import { Search, ChevronDown, ChevronUp, ExternalLink, Download, Filter, BookOpen } from 'lucide-react'
import { researchPapers, applicationCategories, modelFamilies, ResearchPaper } from '../data/papers'
import './ResearchExplorer.css'

export default function ResearchExplorer() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedApp, setSelectedApp] = useState('All')
  const [selectedModel, setSelectedModel] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Filtering
  const filteredPapers = useMemo(() => {
    return researchPapers.filter((paper) => {
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        q === '' ||
        paper.title.toLowerCase().includes(q) ||
        paper.authors.toLowerCase().includes(q) ||
        (paper.venue && paper.venue.toLowerCase().includes(q)) ||
        paper.tags.some((tag) => tag.toLowerCase().includes(q))

      const matchesApp = selectedApp === 'All' || paper.application === selectedApp
      const matchesModel = selectedModel === 'All' || paper.modelFamily === selectedModel
      
      let matchesYear = true
      if (selectedYear === 'All') {
        matchesYear = true
      } else if (selectedYear === '2021-2026') {
        matchesYear = !paper.isFoundational && paper.year >= 2021 && paper.year <= 2026
      } else if (selectedYear === 'Foundational') {
        matchesYear = !!paper.isFoundational
      } else {
        matchesYear = paper.year.toString() === selectedYear
      }

      return matchesSearch && matchesApp && matchesModel && matchesYear
    })
  }, [searchQuery, selectedApp, selectedModel, selectedYear])

  // Reset pagination on filter change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedApp, selectedModel, selectedYear])

  const totalPages = Math.ceil(filteredPapers.length / itemsPerPage) || 1
  const displayedPapers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredPapers.slice(start, start + itemsPerPage)
  }, [filteredPapers, currentPage])

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  // CSV Export
  const handleDownloadCSV = () => {
    const headers = ['ID', 'Title', 'Authors', 'Year', 'Venue', 'Application', 'Model Family', 'Dataset', 'Metric', 'Main Finding', 'Limitation', 'DOI URL', 'Is Foundational']
    const rows = filteredPapers.map((p) => [
      `"${p.id}"`,
      `"${p.title.replace(/"/g, '""')}"`,
      `"${p.authors.replace(/"/g, '""')}"`,
      p.year,
      `"${(p.venue || '').replace(/"/g, '""')}"`,
      `"${p.application.replace(/"/g, '""')}"`,
      `"${p.modelFamily.replace(/"/g, '""')}"`,
      `"${p.dataset.replace(/"/g, '""')}"`,
      `"${p.metric.replace(/"/g, '""')}"`,
      `"${p.mainFinding.replace(/"/g, '""')}"`,
      `"${p.limitation.replace(/"/g, '""')}"`,
      `"${p.url}"`,
      p.isFoundational ? 'Yes' : 'No',
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `fieldwise_ai_literature_catalogue_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const coreCount = researchPapers.filter(p => !p.isFoundational).length
  const foundationalCount = researchPapers.filter(p => p.isFoundational).length

  return (
    <section id="insights" className="section explorer" aria-label="Comparative Research Explorer">
      <div className="container">
        {/* Section Header */}
        <div className="explorer__header reveal">
          <span className="section-label">
            <BookOpen size={14} />
            Literature Explorer
          </span>
          <h2 className="explorer__heading">
            Comparative research <span className="gradient-text">database</span>
          </h2>
          <p className="explorer__subtitle">
            Browse and filter a curated literature catalogue across the 5 assignment areas. It contains <strong>{coreCount} core records dated 2021–2026</strong> plus <strong>{foundationalCount} foundational records</strong>. Publisher links support bibliographic checking; not every dataset, metric, finding, or limitation has been extracted from full text.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="explorer__controls reveal">
          <div className="explorer__search-wrapper">
            <Search size={18} className="explorer__search-icon" />
            <input
              type="text"
              className="explorer__search-input"
              placeholder="Search by title, author, journal, or keyword (e.g. YOLO, wheat, UAV, federated)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search research papers"
            />
            {searchQuery && (
              <button
                className="explorer__search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="explorer__filters">
            <div className="explorer__filter-item">
              <label htmlFor="app-filter" className="explorer__filter-label">
                <Filter size={12} /> Area:
              </label>
              <select
                id="app-filter"
                className="explorer__select"
                value={selectedApp}
                onChange={(e) => setSelectedApp(e.target.value)}
              >
                {applicationCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="explorer__filter-item">
              <label htmlFor="model-filter" className="explorer__filter-label">
                Model:
              </label>
              <select
                id="model-filter"
                className="explorer__select"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                {modelFamilies.map((mf) => (
                  <option key={mf} value={mf}>
                    {mf}
                  </option>
                ))}
              </select>
            </div>

            <div className="explorer__filter-item">
              <label htmlFor="year-filter" className="explorer__filter-label">
                Year:
              </label>
              <select
                id="year-filter"
                className="explorer__select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="All">All Records ({researchPapers.length})</option>
                <option value="2021-2026">Core 2021–2026 ({coreCount})</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="Foundational">Foundational Baselines ({foundationalCount})</option>
              </select>
            </div>

            <button
              className="explorer__download-btn"
              onClick={handleDownloadCSV}
              title="Download currently filtered research records as CSV"
              aria-label="Download CSV"
            >
              <Download size={15} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Counter Meta */}
        <div className="explorer__meta">
          <span>
            Showing <strong>{filteredPapers.length}</strong> of <strong>{researchPapers.length}</strong> catalogue records
          </span>
          {(searchQuery || selectedApp !== 'All' || selectedModel !== 'All' || selectedYear !== 'All') && (
            <button
              className="explorer__reset-btn"
              onClick={() => {
                setSearchQuery('')
                setSelectedApp('All')
                setSelectedModel('All')
                setSelectedYear('All')
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Responsive Table Card */}
        <div className="explorer__table-card reveal">
          <div className="explorer__table-responsive">
            <table className="explorer__table">
              <thead>
                <tr>
                  <th style={{ width: '4%' }}></th>
                  <th style={{ width: '38%' }}>Title & Authors</th>
                  <th style={{ width: '10%' }}>Year</th>
                  <th style={{ width: '18%' }}>Assignment Area</th>
                  <th style={{ width: '15%' }}>Model Family</th>
                  <th style={{ width: '15%' }}>Metric</th>
                </tr>
              </thead>
              <tbody>
                {displayedPapers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="explorer__empty">
                      No research papers matched your search criteria. Try clearing some filters.
                    </td>
                  </tr>
                ) : (
                  displayedPapers.map((paper: ResearchPaper) => {
                    const isExpanded = expandedId === paper.id
                    return (
                      <React.Fragment key={paper.id}>
                        <tr
                          className={`explorer__row ${isExpanded ? 'explorer__row--expanded' : ''}`}
                          onClick={() => toggleExpand(paper.id)}
                          tabIndex={0}
                          role="button"
                          aria-expanded={isExpanded}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              toggleExpand(paper.id)
                            }
                          }}
                        >
                          <td className="explorer__cell-toggle">
                            {isExpanded ? (
                              <ChevronUp size={16} className="explorer__chevron" />
                            ) : (
                              <ChevronDown size={16} className="explorer__chevron" />
                            )}
                          </td>
                          <td className="explorer__cell-title">
                            <span className="explorer__paper-title">{paper.title}</span>
                            <span className="explorer__paper-authors">{paper.authors}</span>
                            {paper.venue && (
                              <span className="explorer__paper-venue">{paper.venue}</span>
                            )}
                          </td>
                          <td className="explorer__cell-year">
                            <span className={`explorer__year-badge ${paper.isFoundational ? 'explorer__year-badge--foundational' : ''}`}>
                              {paper.year}
                              {paper.isFoundational && ' *'}
                            </span>
                          </td>
                          <td className="explorer__cell-app">{paper.application}</td>
                          <td className="explorer__cell-model">
                            <span className="explorer__model-tag">{paper.modelFamily}</span>
                          </td>
                          <td className="explorer__cell-metric">
                            <code className="explorer__metric-badge">{paper.metric}</code>
                          </td>
                        </tr>

                        {isExpanded && (
                          <tr className="explorer__expanded-row">
                            <td colSpan={6} className="explorer__expanded-cell">
                              <div className="explorer__details-grid">
                                <div className="explorer__detail-col">
                                  <h4 className="explorer__detail-heading">Methodology Summary</h4>
                                  <p className="explorer__detail-text">{paper.summary}</p>

                                  <h4 className="explorer__detail-heading">Dataset & Benchmark Setup</h4>
                                  <p className="explorer__detail-text">{paper.dataset}</p>

                                  <div className="explorer__tags">
                                    {paper.isFoundational && (
                                      <span className="explorer__tag explorer__tag--foundational">
                                        Foundational Pre-2021 Benchmark
                                      </span>
                                    )}
                                    {paper.tags.map((tag) => (
                                      <span key={tag} className="explorer__tag">
                                        #{tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div className="explorer__detail-col">
                                  <h4 className="explorer__detail-heading explorer__detail-heading--finding">
                                    Finding / Scope Note
                                  </h4>
                                  <p className="explorer__detail-finding">{paper.mainFinding}</p>

                                  <h4 className="explorer__detail-heading explorer__detail-heading--limitation">
                                    Reported or Noted Limitations
                                  </h4>
                                  <p className="explorer__detail-limitation">{paper.limitation}</p>

                                  <div className="explorer__doi-wrapper">
                                    <span className="explorer__doi-label">Publisher Source:</span>
                                    <a
                                      href={paper.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="explorer__doi-link"
                                      onClick={(e) => e.stopPropagation()}
                                      aria-label={`Open DOI ${paper.doi} in new tab`}
                                    >
                                      <span>{paper.doi}</span>
                                      <ExternalLink size={13} />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="explorer__pagination">
              <button
                className="explorer__page-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                Previous
              </button>
              <span className="explorer__page-info">
                Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
              </span>
              <button
                className="explorer__page-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
