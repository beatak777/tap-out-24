import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
              src="https://lh3.googleusercontent.com/pw/AP1GczPxFWXBeNFFX-hVQT1SaFTy4R0qiocATxj-NTbuDAhUg9BufldnaYSInD84A7_NS2gBBQh2_KepNXWtfg1jl9aZRw3MkhPz8wYlrPhfx3-4MVYfQqbLFcxDkqpRQfOAnUZzBJ80oWz4aPJTJRQVY3JQsQbtgtNQivwYWqEbL43iEP-XHqO7iCoR4gYW7EsHLQK3NWLUwbM1jIoYv20jGnoaTtugecR4vqL-CUU2HiC970H4CALvtWGlrm8KQSy7SabEYLMokEiTPrutc2aecWUPniUCwDpOqaQka853057K5s8s-1o4eQhkMO-DPyi6daoxhRXoyWSsnWwrljfJhP-gvjOXThrAvslFbmglULQgaQ6ke2QPWFpWkemYiMPT0Wx-iW3p_HU0NcmZJ0sqXHwy5WbziGBuVcc4WXnRebZgV3QU5EcM7c6DbTHgxlVBrzB70rb_os9b4Cyy7MoSd9HIB98kzU3dKuryxpQ6DqAz0ofLroKcphmsidu5hH8rXUy7R7IdCBFniZn_YsNsGo-JSWmpWiXwq4ZnLyxNhBMJ1dc97ajfsPQ1d4SirOMfiDddtDslaa1G9vRv-nnPXytGSfvo8Fud3IgE3wV6VqL2t3lWlG2CmvuFoADWFqu5vCsTkR6dF5p1Gnd6zfY8jI3E79s9U6LHDEzfChZsbf1Prv82kRYmXHtzA6WOHPMIQyQ5trJxYMZb1oJuFslj38lH9Q1KZI7ORyuBr6JDTSJqL7tHtYxNz9V8NaMOVexAwdRTUhf7pHGIViuNJx2EqH_-cY0xTQzEKtxQFhtI1gKJrt-2C33DGFSWmax0dsIbhuWz-BudG2ltg8w9vTSXFqNqfAd4CYhY90L-PD4omHpN7TdJwTSLgvdl-YFYEk1ElIViLy7M1ueALhtDWUQhM5xDfKX4Jom9WaCPtOBzWL-7f_W-wIuYXcn6fCMQIV9ZQXsHbt1V1o7A_F4yRqiYxJXbAqMol8NY-EpiztAErR3xIU1smwM4Wmc1kQJ5MauU=w2808-h1130-s-no-gm?authuser=3" // Replace with your map image URL
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




