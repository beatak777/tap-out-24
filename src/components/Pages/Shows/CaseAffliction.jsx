import React from 'react';
import CaseAfflictionImage from '../../../assets/posters/CaseAfflictionImage.png'; // Import the image

const CaseAffliction = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Case Affliction</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By SMB</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the imported image */}
        <img src={CaseAfflictionImage} alt="Case Affliction" style={{ maxWidth: '45%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Explore the unknown before the unknown finds you. 
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        SMB is a group that uses symbolism and mysticism in immersive performance, aiming to achieve these elements by utilizing grotesque use of body movements as well as creating a mysterious, stimulating environment that is in confusion with the unknown – going against typical censorship of performance. We do this for an audience who enjoys visually stimulating but also challenging performances and, despite any unease, are willing to immerse themselves in the performance by getting involved.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        SMB’s show entails a performance that will keep the audience on edge. Fully immersing them into an environment that possesses a terrifying unknown, this – unpredictable – performance will keep the audience guessing. Predominantly, this performance is influenced by the practices and methodologies of Antonin Artaud in conflation with Lovecraftian aspects. These influences culminate into a performance that entails gothic horror that may stimulate paranoia within oneself. SMB have been deeply passionate about Antonin Artaud’s methodologies from the exposition of the performance-making process and wish to continue pursuing this avenue of creating a stimulating and immersive performance further.
      </p>
    </div>
  );
};

export default CaseAffliction;
