import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


// Reusable component for NavDropdown.Item with logo
const NavItemWithLogo = ({ href, title, imageUrl }) => {
  return (
    <NavDropdown.Item href={href}>
      <img src={imageUrl} alt={title} style={{ marginRight: '10px', width: '20px', height: '25px' }} />
      {title}
    </NavDropdown.Item>
  );
};

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function MyNav() {
  const initialDropdownItems = [
    { href: './thewake', title: 'The Wake', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/WakeImage.cb1e7538.png' },
    { href: './symposium', title: 'Symposium', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/SymposiumImage.1953acf2.png' },
    { href: './theconvo', title: 'The Convo', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/TheConvoImage.e908d68d.png' },
    { href: './boysandtoys', title: 'Boys + Toys', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/BoysAndToysImage.19084753.png' },
    { href: './energiserevitaliselobotomise', title: 'Energise, Revitalise, Lobotomise', imageUrl: '' },
    { href: './frustration', title: 'Frustration', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/FrustrationImage.856c4f9e.png' },
    { href: './bluebottle', title: 'Blue Bottle', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/BlueBottleImage.9d0fd037.png' },
    { href: './fckyou', title: 'F*ck You!', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/FuckYouImage.a071790b.png' },
    { href: './who', title: '我/Who', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/WhoImage.f653abfe.png' },
    { href: './caseaffliction', title: 'Case Affliction', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/CaseAfflictionImage.6f627ec2.png' },
    { href: './theeutony', title: 'The Eutony', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/EutonyImage.2bc789f1.png' },
    { href: './feastbeast', title: 'Feast Beast', imageUrl: '' },
    { href: './deathofanidealist', title: 'Death Of An Idealist', imageUrl: '' },
    { href: './threadsofeternity', title: 'Threads Of Eternity', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNFj5i_DDDrCsPfhMEDGliKtd4SObMNv2AlnY_2nRy3pIIOS24EXwkw66q-SlAbJkPXiN1N4BLqYs76eqGuvEvSrya3Ds4Wb4WtGNe_nIFKm1B_eK2c22Dntzwlq_H_UoO9QXkUlh4HR3oc57QPLcw=w982-h1390-s-no-gm?authuser=0' },
    { href: './lovelylabels', title: 'Lovely Labels', imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/LovelyLabelsImage.f017caf6.png' },
  ];

  const [dropdownItems, setDropdownItems] = useState(initialDropdownItems);

  useEffect(() => {
    // Shuffle dropdown items when component mounts
    setDropdownItems(shuffleArray(initialDropdownItems));
  }, []); // Empty dependency array ensures effect runs only once on component mount

  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Container className="d-flex flex-column align-items-center">
        <Navbar.Brand href="#">TAP OUT '24</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./about">About</Nav.Link>
            <Nav.Link href="./contact">Contact</Nav.Link>
            <Nav.Link href="./tickets">Tickets</Nav.Link>
            <NavDropdown title="Programme" id="basic-nav-dropdown">
              {dropdownItems.map((item, index) => (
                <NavItemWithLogo key={index} href={item.href} title={item.title} imageUrl={item.imageUrl} />
              ))}
            </NavDropdown>
            <Nav.Link href="./fullprogramme">Full Programme</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
