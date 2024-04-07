import React from 'react';

const CaseAffliction = () => {
  // Define the URL of the placeholder image for Case Affliction
  const placeholderImageUrl = 'https://via.placeholder.com/800x600'; // Example placeholder image URL

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Case Affliction</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By SMB</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the placeholder image from the online source */}
        <img src={placeholderImageUrl} alt="Placeholder" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Explore the unknown before the unknown finds you. </p>

        <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        SMB is a group that uses symbolism and mysticism in immersive performance, aiming to achieve these elements by utilising grotesque use of body movements as well as creating a mysterious, stimulating environment that is in confusion with the unknown – going against typical censorship of perfromance. We do this for an audience who enjoys visually stimulating but also challenging performances and, despite any unease, are willing to immerse themselves in the performance by getting involved. 

      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
      SMB’s show entails a performance that will keep the audience on edge. Fully immersing them into an environment that possesses a terrifying unknown, this – unpredictable – performance will keep the audience guessing. Predominantly, this performance is influenced by the practices and methodologies of Antonin Artaud in conflation with Lovecraftian aspects. These influences culminate into a performance that entails gothic horror that may stimulate paranoia within oneself. SMB have been deeply passionate about Antonin Artaud’s methodologies from the exposition of the performance-making process and wish to continue pursuing this avenue of creating a stimulating and immersive performance further. 
      </p>
    </div>
  );
};

export default CaseAffliction;
