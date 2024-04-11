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
    { href: './thewake', title: 'The Wake', imageUrl: 'URL_TO_THE_WAKE_IMAGE' },
    { href: './symposium', title: 'Symposium', imageUrl: 'URL_TO_SYMPOSIUM_IMAGE' },
    { href: './theconvo', title: 'The Convo', imageUrl: 'URL_TO_THE_CONVO_IMAGE' },
    { href: './boysandtoys', title: 'Boys + Toys', imageUrl: 'URL_TO_BOYS_TOYS_IMAGE' },
    { href: './energiserevitaliselobotomise', title: 'Energise, Revitalise, Lobotomise', imageUrl: 'URL_TO_ENERGISE_IMAGE' },
    { href: './frustration', title: 'Frustration', imageUrl: 'URL_TO_FRUSTRATION_IMAGE' },
    { href: './bluebottle', title: 'Blue Bottle', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO1zzQbNnRf69uR38EDC30v8K1re3JyvbYcDWzwy5aEpQlpkOAxu8rprtJw6Hb5tph6la0rxEWZ4G7ntnTq3h0WkARaUGapyjrlH2tS7kCVI6woDxEWxPuJFbWJIcwHSD0GRYXa8QQ_6AE4uWmuHpKAYMIOWee63YpsjKo-GsqlbuAmEqVk4bYo4hBv6nUXhkDnp7vpDQYbvYVqr6X0-TAFp3UQnVwZ72XFXC7J7TqvM4LjNA0QwJpeaLzPXhjw4bZDeE2mAh9oBMG3Af-j2VA6BLQalrT1wN0mxyR0Tf_J94wJUYKY-1eRHdTYrI88hkT8cscN62SW65eTsehbwtCB1lb_jSnopQMA5S_-JRcBJAKwTPnatV9aefmHuGY5LyDlcmQqDOmxhmvVoSm01a8QzO75T3tchc7f5Vkx1uFCpVNdcMBNZJ-SlrcFqtNiKpTPyk2wXe1iIHD94TSoDx6vEDDbhljUe7ucMeBqo_Q9Oil0P61ICJGPS625SWUSTc-P8xm7W2upTV42CjENdgIf1tOAxnZzOXTsQI67QFaTEnGNO41xvac7tZB5O0EM3Jpxo0hv1Ou63-hXRglzvaGn-jdUwRsRWlP2gh4xq6sjecf3svFMTMa7GitVdt6IJin_CZvXqhWpxpzbSlg529FnZ8QJg2CzJ5xgXkvnEjDivjNW0GlMqy6hARFfnAs7HtKxEcVNpZh6QOl0tLBNZcHmQ1zAINhWh3fcA6IfZJmHqZ_C4F5FIGZJaMfXRmtAYTgOq3EzHE0AJlkd-pk4-yt63e6cGhD602TF4um8784V3aKcZBri7p3ddEPu-zVc1YOxj8mDxi7R7ixpANGc3XoJwYJWHKCde9_6jJvIANqMcxUtbSPbASmHva3rtUPHeK_yzv9F8HU0Tmf-1ywzWSFFiX1pPXLd0OaK8XQsvWIH5Lnu-dBoXWu4XCW36OjGAzZPBU6ABpzm22T9MmsyZM1UWmUo7PFT1YAwPLk6jSj1WXDd7SvYMO_MaaKavWQ54Q=w854-h1390-s-no-gm?authuser=3' },
    { href: './fckyou', title: 'F*ck You!', imageUrl: 'URL_TO_FCK_YOU_IMAGE' },
    { href: './who', title: '我/Who', imageUrl: 'URL_TO_WHO_IMAGE' },
    { href: './caseaffliction', title: 'Case Affliction', imageUrl: 'URL_TO_CASE_AFFLICTION_IMAGE' },
    { href: './theeutony', title: 'The Eutony', imageUrl: 'URL_TO_THE_EUTONY_IMAGE' },
    { href: './feastbeast', title: 'Feast Beast', imageUrl: 'URL_TO_FEAST_BEAST_IMAGE' },
    { href: './deathofanidealist', title: 'Death Of An Idealist', imageUrl: 'URL_TO_DEATH_OF_AN_IDEALIST_IMAGE' },
    { href: './threadsofeternity', title: 'Threads Of Eternity', imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOqxaKVCTaB09l1gpo-jb9ksBdvvt_LRrIBjNaCygT0dswdzD7qL7lWKUPY_Go80cr_wfzg7GhQv6c7a0EjSkomkLjk7YH5O_XxRfJjpVI-jbf9glRcq-bAVNouPAPDnjhSn4aZ2kNfow-2ejrKGqeeWHnPkXwEUoGLC7gCHvRPY_oZBufeY-gjsSj6qebd5i_WPCHGVejc57fujtgz9BBgyAdHkxQQoJnv51NmC45-EtXafKqi8rWDyxM3U3o0vGAxZhQp3Xn8dNUW6eGZsV26uGLpq4jYV6K-U3QyAsQtDKmqDYeVzBfcxp1OQnhWB901qy-eOGM1iBz3VViKMH0Il5ZQisYj4_E6W-oamqt-iJg9XjPhwgBHIwW793qKwTqHu3Xh03TAj6AeyjQcH8fIJav_Jyn1FS9dchNtCl9gmV71DScnElNhunvNjAIY0YGxWQnlQMZXVjMB7bj35Rc_OYgzKr_DcuMPyMScm450MCSfBdU6c-M9MqCIa2piepybSC9O5-lnYxA8XOuJrfLvPtlU5Bq00vIIIrjv8YgB6afktW5peANz3Pz8KvP6rUUQKRF04dQRSFUm8Y9P7HuKzCw1YSiaH3-wGNct2KB-PM3esKA2MuR5q__ZJftvAPoTmxtZCyMJ4l5mqBbgV3OzyGTJ_cIacZCd5GUbL4QE6SWB8r_3wgjDa5NIesW3HVrsvXVAV54AotcSF0Gcu7nz9-dXAGgDaOBE33lf_HpphxP2_nrelr_gMbvXAFuxUSq7ixb5VG2tzc1ETVZgYK-to8--AOz2vatFVRPap2MBd-kKe3Ju8-OO68LCZ5dKN7fRfhBDGlOzvVAvTX5LtCq29RDh0Ig9b3QOKfGCMU7ty5c7YaeDo2rg0IJ8j89p8k-B13pEvNuImhym1D9Udf35vC2P3qg7whSEn69EhDpiqlV-cCiF6ZJQ8OvlvDpWFdny1PF0208ZstKCvDjZOHIMfFhFK7ExyvqRgjt5S0GP1XwMCHJkQUprbUulTuRDOA=w982-h1390-s-no-gm?authuser=3' },
    { href: './lovelylabels', title: 'Lovely Labels', imageUrl: 'URL_TO_LOVELY_LABELS_IMAGE' },
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
