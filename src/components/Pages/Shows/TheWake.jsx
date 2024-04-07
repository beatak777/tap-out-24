import React from 'react';

const TheWake = () => {
  // Define the URL of the placeholder image
  const placeholderImageUrl = 'https://via.placeholder.com/800x600'; // Example placeholder image URL

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>The Wake</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>by Eclipse Collective</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the placeholder image from the online source */}
        <img src={placeholderImageUrl} alt="Placeholder" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        A myth for the modern world. </p> 
        <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        The Eclipse Collective is a group of 8 creatives, who share experience in devising, performance and design. The group includes students on Drama and Theatre Arts, Performance Politics and Society and Erasmus programs. Eclipse Collective investigates the place of nature and ritual in the modern world through devised physical theatre performance.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
      “The land has always existed. It just is. It needs no help from us. In every speck of its being it is fully present, fully manifested. The choice is ours whether we wish to engage with it in a meaningful way or merely accept it as a backdrop to our lives.” - Manchán Magan
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
      The Wake is a physical theatre performance that explores how we might reawaken our connection to the land, the myths and the histories around it by embracing natural life cycles and forgotten ritual. Taking inspiration from artists such as Pina Bausch and Sasha Waltz, Eclipse Collective, a group of 8 theatre-makers, presents a devised physical theatre performance that comes together with adapted text from T.S.Eliot and Samuel Beckett to present a myth for the modern world, where decay is embraced to make way for a new order. 
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        <strong>Content warning:</strong> The Wake contains themes of loss and death, use of haze.
      </p>
    </div>
  );
};

export default TheWake;
