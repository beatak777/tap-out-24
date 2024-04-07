import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

function MyNav() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Container className="d-flex flex-column align-items-center"> {/* Add flexbox utilities */}
        <Navbar.Brand href="#">TAP OUT 24'</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./about">About</Nav.Link>
            <Nav.Link href="./contact">Contact</Nav.Link>
            <Nav.Link href="./tickets">Tickets</Nav.Link>
            <NavDropdown title="Programme" id="basic-nav-dropdown">
              <NavItemWithLogo href="./thewake" title="The Wake" logoText="TW" />
              <NavItemWithLogo href="./symposium" title="Symposium" logoText="SY" />
              <NavItemWithLogo href="./theconvo" title="The Convo" logoText="TC" />
              <NavItemWithLogo href="./boysandtoys" title="Boys + Toys" logoText="BT" />
              <NavItemWithLogo href="./energiserevitaliselobotomise" title="Energise, Revitalise, Lobotomise" logoText="ERL" />
              <NavItemWithLogo href="./frustration" title="Frustration" logoText="FR" />
              <NavItemWithLogo href="./bluebottle" title="Blue Bottle" logoText="BB" />
              <NavItemWithLogo href="./fckyou" title="F*ck You!" logoText="FU" />
              <NavItemWithLogo href="./who" title="我/Who" logoText="W" />
              <NavItemWithLogo href="./caseaffliction" title="Case Affliction" logoText="CA" />
              <NavItemWithLogo href="./theeutony" title="The Eutony" logoText="TE" />
              <NavItemWithLogo href="./feastbeast" title="Feast Beast" logoText="FB" />
              <NavItemWithLogo href="./deathofanidealist" title="Death Of An Idealist" logoText="DI" />
              <NavItemWithLogo href="./threadsofeternity" title="Threads Of Eternity" logoText="TE" />
              <NavItemWithLogo href="./lovelylabels" title="Lovely Labels" logoText="LL" />
              <NavDropdown.Divider />
              <NavDropdown.Item href="./fullprogramme">
                Full Programme 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
