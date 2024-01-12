import AccessSection from './components/AccessSection'
import Facilities from './components/Facilities'
import Footer from './components/Footer'
import GymManagement from './components/GymManagement'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import RewriteSection from './components/RewriteSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Facilities />
      <AccessSection />
      <GymManagement />
      <RewriteSection />
      <Partners />
      <Footer />
    </div>
  )
}

export default App