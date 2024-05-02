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
      'https://lh3.googleusercontent.com/pw/AP1GczOzcZZiOo829TKcoN1b9JIAK0IoHaMGx4BRZ0u6EoFN_hLeQwd70GQGAmD-yYODGv63hXDnKXNpslz9IJN6C_KpfsMPsvugapkFwDj2oxkzy-RSnuchH_9l-Df7Kum0CjT0Zm_uC3zO_kRsmCys6IQ3-I-WTKfbTMzCcu3V3VbTr60DGNTPWKkG3OLFs_NJySXTwbnDQssdTlZZ8qm0E3ZE0kZTLH7DRd2hBZQu9CM1F69v-mUEzLS1FN-CSa903xSl6Wy-Ao1KbdJsGkyhif8ihu6E1VmQm4dYwsOpcpq59KMMIlIXQSm5bVNw4ogZoSB3Al-pJIT-66j1DrOjbqeYaB7AFi6ErzpsmK_c-uZjLndAJLd5TtaDBW59JlvQVev-y8VwwhSwZ0Xk1wrYvFwAWwtftjN1YsPOUf9RktDntuAkCOEOtCUJV_jdCrMjSEOWc3QfUv0iuAyjVDm2y52chn9VU21g1h96vJRsmqnjbZH1O0hYkC2MiFh6B9BaZW6pCiu5HAJA1MvdzJ_uDU7wkDSEEY2n7bkHHLmChyW2wfe3ISo5JiPGP4iRYx9UN5tX5nH43uApkYr0ZzzX0QCremvfL-ClIBVqt13YMV4fke5tfxvF6VJ8s0LjOPIBew5Q2wGMUs_hn7r4skemLy8olyDNeQFR0t1C6hsqETsB_4yn7DNAuMRFOBKdtdaiPK3twnJTahlNMt683TPEtG0rBCyFIyOXd3-rdqRjvmAnOphnqnMW6YFDRxscjITHlD_DomXHrTTyHCiPw1HYtHOH1H0yLRldNZRPm6mY3fZpPunt6qWvNnSWzxmGNITnPA4VuN0Y9eGD7-BrlUneIhq05-Bcbm4aDkx14TxeurqQSNqyfJ8uYl7lLbYDTkt3Au5dofdQ9pEyumbzZDTbVNVr2iAoxIGKP3DQ9P1xNgdzOP_3jqnTQ1GLYPEHAZFoRQ8IEWpcw0-H6EuEoTB2XNUPEgPmpSCSQRgre5Clt7Hq4P2VnYNeybJ7Iedbr_z3EA=w852-h852-s-no-gm?authuser=0',
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
