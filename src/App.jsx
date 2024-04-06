
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar';
import { Contact, About, Home, Tickets } from './components/Pages';
import './App.css'
import Footer from './components/Footer/index'

function App() {

  return (
    <Router basename={``}>
      <MyNav />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='' element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
