import Nav from './components/Nav'
import Hero from './components/Hero'
import Way from './components/Way'
import Services from './components/Services'
import Work from './components/Work'
import People from './components/People'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md antialiased">
      <Nav />
      <Hero />
      <Way />
      <Services />
      <Work />
      <People />
      <Footer />
    </div>
  )
}
