import Nav from './components/Nav'
import Hero from './components/Hero'
import Way from './components/Way'
import Services from './components/Services'
import About from './components/About'
import People from './components/People'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md antialiased">
      <Nav />
      <Hero />
      <Way />
      <Services />
      <About />
      <People />
      <Footer />
    </div>
  )
}
