import { Outlet } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'
import Navbar from '@layout/Navbar/Navbar'
import Footer from '@layout/Footer/Footer'
import styles from './PageLayout.module.css'

// Elements to animate: semantic text + any container that opts in via data-animate.
// Excludes the home Hero (aria-label="Hero") and ServiceHero (data-hero) — those
// have their own CSS keyframe animations.
const ITEM_SEL =
  'section:not([aria-label="Hero"]):not([data-hero]) :is(h2, h3, h4, p, li, [data-animate])'

// Stagger delay between "rows" of elements (seconds)
const STAGGER = 0.12

// Group elements into rows by their vertical position.
// Elements within TOLERANCE px of each other share the same stagger delay
// — this makes 2-column layouts animate simultaneously.
function groupByRow(elements) {
  const TOLERANCE = 24
  const rects = elements.map(el => ({ el, top: el.getBoundingClientRect().top }))
  rects.sort((a, b) => a.top - b.top)

  const rows = []
  let row = [], rowTop = null
  for (const { el, top } of rects) {
    if (rowTop === null || top - rowTop <= TOLERANCE) {
      row.push(el)
      if (rowTop === null) rowTop = top
    } else {
      rows.push(row)
      row = [el]
      rowTop = top
    }
  }
  if (row.length) rows.push(row)
  return rows
}

export default function PageLayout() {
  // Build the list of animatable elements.
  // [data-animate] containers animate as a unit — their descendants are
  // excluded so we don't double-animate inner h2/p/li elements.
  function getAnimatables() {
    const all = [...document.querySelectorAll(ITEM_SEL)]
    const containers = new Set(document.querySelectorAll('[data-animate]'))
    return all.filter(el => {
      if (containers.has(el)) return true   // keep [data-animate] element itself
      let p = el.parentElement
      while (p && p.tagName !== 'SECTION') {
        if (containers.has(p)) return false // skip descendants of [data-animate]
        p = p.parentElement
      }
      return true
    })
  }

  // Synchronously before first paint — hide all animatables so there's
  // never a flash of visible content before the scroll animation fires.
  useLayoutEffect(() => {
    getAnimatables().forEach(el => { el.dataset.willReveal = '1' })
  }, [])

  // After paint — observe each element individually.
  // Elements that enter the viewport in the same animation frame are
  // batched and staggered by row, so 2-column sections sync naturally.
  useEffect(() => {
    let pendingBatch = []
    let batchRaf = null

    const flush = () => {
      groupByRow(pendingBatch).forEach((row, i) => {
        const delay = `${i * STAGGER}s`
        row.forEach(el => {
          delete el.dataset.willReveal
          el.style.animationDelay = delay
          el.classList.add('reveal-child')
        })
      })
      pendingBatch = []
      batchRaf = null
    }

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target
        if (el.classList.contains('reveal-child')) return
        obs.unobserve(el)
        pendingBatch.push(el)
      })
      if (pendingBatch.length && !batchRaf) {
        batchRaf = requestAnimationFrame(flush)
      }
    }, { threshold: 0, rootMargin: '0px 0px -80px 0px' })

    getAnimatables().forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
