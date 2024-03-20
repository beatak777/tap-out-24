import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white p-1 fixed-bottom"> {/* Add the fixed-bottom class */}
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            Goldsmiths Theatre and Performance + Performance, Politics and Society Year 2024
            {/* Add social media links/icons */}
            <a href="https://example.com" className="text-white me-2"><i className="fab fa-facebook-f"></i></a>
            <a href="https://example.com" className="text-white me-2"><i className="fab fa-twitter"></i></a>
            <a href="https://example.com" className="text-white me-2"><i className="fab fa-instagram"></i></a>
            <a href="https://example.com" className="text-white me-2"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
