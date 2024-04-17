import React from 'react';
import WhoImage from '../../../../src/assets/posters/WhoImage.png';

const Who = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>我/Who</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Guo Wen</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the image imported from the local folder */}
        <img src={WhoImage} alt="我/Who" style={{ maxWidth: '45%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Exploring Drama’s Power for Change
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Guo Wen, a Goldsmiths student, crafts contemporary dance performance to explore and unravel the intricacies of self and societal identity. Her solo works confront gender constructs, harnessing drama to inspire introspection and to engage audiences in a dialogue for change.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        我/Who is a solo dance odyssey by Guo Wen, a reflective exploration of personal identity interwoven with societal influences, weaving through layers of self with a blend of movement and multimedia narrative. Guo Wen fuses contemporary dance with profound inquiries into identity, using performance as a mirror to society. The work embodies contemporary dance's power to question and communicate the complexities of identity.
      </p>
    </div>
  );
};

export default Who;
