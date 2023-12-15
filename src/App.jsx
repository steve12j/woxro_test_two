import { faXmark } from "@fortawesome/free-solid-svg-icons"
import BannerSection from "./components/BannerSection"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import OurContributions from "./components/OurContribution"
import TopGames from "./components/TopGames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {

  return (
    <main>
      <button
        className="absolute text-2xl font-light text-white top-5 right-10  hover:[transform:rotate(720deg)] transition-all duration-500 origin-center"
      ><FontAwesomeIcon icon={faXmark} /></button>
      <BannerSection />
      <TopGames />
      <OurContributions />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App
