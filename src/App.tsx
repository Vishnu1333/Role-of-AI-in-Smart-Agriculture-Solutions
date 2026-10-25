import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ResearchProof from './components/ResearchProof'
import Applications from './components/Applications'
import DataVisualisation from './components/DataVisualisation'
import Architecture from './components/Architecture'
import ResearchExplorer from './components/ResearchExplorer'
import ChallengesFuture from './components/ChallengesFuture'
import CaseStudies from './components/CaseStudies'
import Methodology from './components/Methodology'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  // Intersection Observer for scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 120px 0px' }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))

    // Handle deep linking hash navigation on mount and hash change
    const scrollToHash = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    const timer = setTimeout(scrollToHash, 150)
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('hashchange', scrollToHash)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <ResearchProof />
        <Applications />
        <DataVisualisation />
        <Architecture />
        <ResearchExplorer />
        <ChallengesFuture />
        <CaseStudies />
        <Methodology />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
