import React from 'react';
import BoysAndToysImage from '../../../../src/assets/posters/BoysAndToysImage.png';

const BoysAndToys = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Boys & Toys</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By David Sashin</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the image imported from the local folder */}
        <img src={BoysAndToysImage} alt="Boys & Toys" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Mwah x
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        A gay man from South East London studying Politics, Performance & Society at Goldsmiths, Boys & Toys will be the first piece David Sashin has written and performed, with the hope of future ventures being rooted in his writing. The solo performer hopes through his work to bring joy and skepticism of modern issues through a queer lens, always leading with a smile.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        Boys & Toys invites you to take an adventure to the forest of fairies, the dingy bedroom of a bent bachelor… and the clap clinic. Part fairytale storytelling, part puppetry and full of nonsense, Boys & Toys is a cut up of short and sweet scenes taking you through modern gay life with charm, whimsy and a whole lot of magic. Written and performed by Goldsmiths’ ditsiest pixie, David Sashin, whose practice is rooted in play, queer liberation and the absurd, come and party in the forest with him. 
      </p>
    </div>
  );
};

export default BoysAndToys;
