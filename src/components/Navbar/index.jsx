import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// Reusable component for NavDropdown.Item with logo
const NavItemWithLogo = ({ href, title, logoText }) => {
  const placeholderUrl = `https://via.placeholder.com/50?text=${logoText}`;

  return (
    <NavDropdown.Item href={href}>
      <img src={placeholderUrl} alt={title} style={{ marginRight: '10px', width: '30px', height: '30px' }} />
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
    { href: './thewake', title: 'The Wake', logoText: 'TW' },
    { href: './symposium', title: 'Symposium', logoText: 'SY' },
    { href: './theconvo', title: 'The Convo', logoText: 'TC' },
    { href: './boysandtoys', title: 'Boys + Toys', logoText: 'BT' },
    { href: './energiserevitaliselobotomise', title: 'Energise, Revitalise, Lobotomise', logoText: 'ERL' },
    { href: './frustration', title: 'Frustration', logoText: 'FR' },
    { href: './bluebottle', title: 'Blue Bottle', logoText: 'BB' },
    { href: './fckyou', title: 'F*ck You!', logoText: 'FU' },
    { href: './who', title: '我/Who', logoText: 'W' },
    { href: './caseaffliction', title: 'Case Affliction', logoText: 'CA' },
    { href: './theeutony', title: 'The Eutony', logoText: 'TE' },
    { href: './feastbeast', title: 'Feast Beast', logoText: 'FB' },
    { href: './deathofanidealist', title: 'Death Of An Idealist', logoText: 'DI' },
    { href: './threadsofeternity', title: 'Threads Of Eternity', logoText: 'TE' },
    { href: './lovelylabels', title: 'Lovely Labels', logoText: 'LL' },
  ];

  const [dropdownItems, setDropdownItems] = useState(initialDropdownItems);

  useEffect(() => {
    // Shuffle dropdown items when component mounts
    setDropdownItems(shuffleArray(initialDropdownItems));
  }, []); // Empty dependency array ensures effect runs only once on component mount

  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Container className="d-flex flex-column align-items-center">
        <Navbar.Brand href="#">TAP OUT 24'</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./about">About</Nav.Link>
            <Nav.Link href="./contact">Contact</Nav.Link>
            <Nav.Link href="./tickets">Tickets</Nav.Link>
            <NavDropdown title="Programme" id="basic-nav-dropdown">
              {dropdownItems.map((item, index) => (
                <NavItemWithLogo key={index} href={item.href} title={item.title} logoText={item.logoText} />
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

