
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar';
import { Contact, About, Home, Tickets } from './components/Pages';
import './App.css'
import Footer from './components/Footer/index'
import TheWake from './components/Pages/Shows/TheWake'
import Symposium from './components/Pages/Shows/Symposium';
import TheConvo from './components/Pages/Shows/TheConvo'
import BoysAndToys from './components/Pages/Shows/BoysAndToys';
import EnergiseRevitaliseLobotomise from './components/Pages/Shows/EnergiseRevitaliseLobotomise';
import Fckyou from './components/Pages/Shows/Fckyou';
import Frustration from './components/Pages/Shows/Frustration';
import BlueBottle from './components/Pages/Shows/BlueBottle'
import CaseAffliction from './components/Pages/Shows/CaseAffliction';
import Who from './components/Pages/Shows/Who';
import FeastBeast from './components/Pages/Shows/FeastBeast';
import DeathOfAnIdealist from './components/Pages/Shows/DeathOfAnIdealist';
import ThreadsOfEternity from './components/Pages/Shows/ThreadsOfEternity';
import LovelyLabels from './components/Pages/Shows/LovelyLabels';
import FullProgramme from './components/Pages/Shows/FullProgramme';
import TheEutony from './components/Pages/Shows/TheEutony';







function App() {

  return (
    <Router basename={``}>
      <MyNav />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='' element={<Home />} />
        <Route path='/thewake' element={<TheWake />} />
        <Route path='/symposium' element={<Symposium />} />
        <Route path='/theconvo' element={<TheConvo />} />
        <Route path='/boysandtoys' element={<BoysAndToys />} />
        <Route path='/energiserevitaliselobotomise' element={<EnergiseRevitaliseLobotomise />} />
        <Route path='/fckyou' element={<Fckyou />} />
        <Route path='/frustration' element={<Frustration />} />
      <Route path='/bluebottle' element={<BlueBottle />} />
      <Route path='/who' element={<Who />} />
      <Route path='/caseaffliction' element={<CaseAffliction />} />
      <Route path='/theeutony' element={<TheEutony />} />
      <Route path='/feastbeast' element={<FeastBeast/>} />
      <Route path='/deathofanidealist' element={<DeathOfAnIdealist/>} />
      <Route path='/threadsofeternity' element={<ThreadsOfEternity/>} />
      <Route path='/lovelylabels' element={<LovelyLabels/>} />
      <Route path='/fullprogramme' element={<FullProgramme/>} />

      </Routes>

      <Footer/>
    </Router>
  )
}

export default App
