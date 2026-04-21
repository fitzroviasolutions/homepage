import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <svg className="fixed inset-0 w-full h-full z-[9999] pointer-events-none opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      <Nav />
      <Hero />
      {/* <Work /> */}
      <Contact />
      <Footer />
    </div>
  )
}
