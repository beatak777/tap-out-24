import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import comingGif from './assets/coming.gif';


function App() {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <img src={comingGif} alt="Coming GIF" className="img-fluid" />
      </div>
      {/* Add other components */}
      <Footer />
    </>
  );
}

export default App;

