import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Intro from './Intro.jsx'
import Menu from './Menu.jsx'
import Experience from './Experience.jsx'
import Gallery from './Gallery.jsx'
import Events from './Events.jsx'
import { LanguageProvider } from './data/LanguageContext.jsx'
import Reservation from './Reservation.jsx'
import Contact from './Contact.jsx'
import PageProgress from './PageProgress.jsx'

function App() {
  return (
    <LanguageProvider>
      <PageProgress />
      <main>
        <Navbar />
        <Hero />
        <Intro />
        <Menu />
        <Experience />
        <Gallery />
        <Events />
        <Reservation />
        <Contact />
      </main>
    </LanguageProvider>
  )
}

export default App