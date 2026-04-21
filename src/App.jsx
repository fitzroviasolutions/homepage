import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      {/* <Work /> */}
      <Contact />
      <Footer />
    </div>
  )
}
