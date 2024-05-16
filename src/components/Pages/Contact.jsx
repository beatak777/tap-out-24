import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MapLocationImage from '../../assets/MapLocationImage.png'; // Import the map location image
import Image from '../../assets/insta/2.png';

const Contact = () => {
  const [instagramImages, setInstagramImages] = useState([]);

  // Simulated function to fetch Instagram images
  const fetchInstagramImages = () => {
    // Mock data for demonstration (replace with actual API call)
    const images = [
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://lh3.googleusercontent.com/pw/AP1GczO4ONBo6v5bs5BpOzCEZ2sQT2C4Agj0xdRYyP8HIY551XP6Q7erJgtepYnBnRJzUvLCwS1HeAdGk6Y26YuMplqufeOX6vFIMsmGku0lBmcm3LIRj2sremu1j83jTDEYX7V0YlTXLOhuJSufHExP4dLDPRwsJ0j061cDKXYw725ogZHtS1K_kTgEABkjvP3a1UX8UNkexqwcG542tbYpMG26JfXVN_8vRTNctZMoZBbeYHQDMifZpKiLxH91-J_bp1ef6F-xFu78hJ3CYNH8eAULjHjTrgelDT1R_nZl8CTbEmlwiGtJvadonml3kd7KsDCyQebmeBKYIExKjDEPWCqG38BzrObbwqLP27BychIy4mXAuHuSL9NhoBPpkuK50fRd3vtq1qCKnYeCxLqaXvpMK2HEMVE9Z-1o5qfBR3NlfvMyaEoE5sGjvd7ioqJB1tJxWpRuPZppuxqHxejhLTCS7Tf4cplZ-4P6zkuBz-wVHjdr71HNdrqtKa_Jb9KMYzPaRIzxo9bpeQ8SIVTYnzwj2tJsb6L6qAcQFnrqeByrEiHdxI85dS59Ki6OAJXNWjjcORpGfarK2s-jfyiOcqoTNgVXzul_JYENURptWLSas3zfkCFH_nQeKCUuMT4I0Mg2bfyey2iQ_KU7A4bXffJbKzTWB3EsrRpAHTihEfv6UYHw5OIBH9LLVRg3-JGU_KrgpYhf_MGL7f77s7Gdki_F48Ap30y09DxKvJ5nsVZh6Mncb4hqI8ijzNV6yByGsuWZl54t18BCFzxcT1nshZjF1uUUpXV5gIsrTgDhGRMemEVefKOeaEAlWJEI3xndBbVPOc-YiZMN9WSXZEZ9P7086tc4lhv6EO3xvTRz26VXjAUihjqwO5p4aButb3fqdkeA-MHSeyDDrSXebJ1alBB6f_Tpodt6a01zv0aYuRAg2XMEhZti-PY-rNPo7iLqt_Rq6n0M9AL8taKDttVtg5kB5icq3H5BS3mgQiYDaoym4hmDA0yw6KfcIMd72-Sfnw=w852-h852-s-no-gm?authuser=0',
      'https://tapoutgoldsmiths24.com/assets/coming.66ba8a29.gif',
    ];
    setInstagramImages(images);
  };

  useEffect(() => {
    // Fetch Instagram images when component mounts
    fetchInstagramImages();
  }, []);

  const openInstagramProfile = () => {
    window.open('https://www.instagram.com/tapoutfest24', '_blank');
  };

  return (
    <Container className="mt-5">
      {/* Map image with link to Google Maps */}
      <Row className="justify-content-center mb-4">
        <Col xs={12}>
          <a
            href="https://www.google.com/maps/place/Goldsmiths/@51.4744852,-0.0355944,17z/data=!3m1!5s0x487602f81635903d:0x9cee6aa0451bebd8!4m6!3m5!1s0x487602f81f1bd2cf:0xeb2cff5d2300d7f8!8m2!3d51.4742772!4d-0.035417!16zL20vMDE1d3lf?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={MapLocationImage} // Use the imported map location image
              alt="Location Map"
              className="img-fluid rounded"
              style={{ width: '100%' }}
            />
          </a>
        </Col>
      </Row>
      {/* Connect with Us and Contact Information section */}
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1 className="mb-4">Connect with Us</h1>
          <p className="lead mb-4">Follow us on Instagram for festival updates and highlights!</p>
          <Button variant="primary" onClick={openInstagramProfile}>
            Visit Instagram
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <div>
            <h2>Contact Information</h2>
            <p>
              <strong>Address:</strong> 8 Lewisham Way, London SE14 6NW
              <br />
              <strong>Email:</strong> goldtapout24@gmail.com
            </p>
          </div>
        </Col>
      </Row>
      {/* Instagram images section */}
      <Row className="justify-content-center mt-5">
        {instagramImages.map((imageUrl, index) => (
          <Col key={index} xs={6} sm={4} md={2} className="mb-3 d-flex justify-content-center">
            <a href="https://www.instagram.com/tapoutfest24" target="_blank" rel="noopener noreferrer" onClick={openInstagramProfile}>
              <img src={imageUrl} alt={`Instagram Post ${index}`} className="img-fluid rounded" />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Contact;
