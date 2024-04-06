import React from 'react';
import comingGif from '../../assets/hero/coming.gif';


const Home = () => {
  return (
    <div className="hero-section">
      {/* Render the comingGif only on the home page */}
      <img src={comingGif} alt="Coming GIF" className="img-fluid" />
      <h1>Welcome to TAP OUT FESTIVAL!</h1>
    </div>
  );
};

export default Home;
