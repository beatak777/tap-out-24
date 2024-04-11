import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MapLocationImage from '../../assets/MapLocationImage.png'; // Import the map location image

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
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
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
              <strong>Email:</strong> tapoutgoldsmiths@gmail.com
            </p>
          </div>
        </Col>
      </Row>
      {/* Instagram images section */}
      <Row className="justify-content-center mt-5">
        {instagramImages.map((imageUrl, index) => (
          <Col key={index} xs={6} sm={4} md={2} className="mb-3 d-flex justify-content-center">
            <img src={imageUrl} alt={`Instagram Post ${index}`} className="img-fluid rounded" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Contact;
