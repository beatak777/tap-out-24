import React from 'react';
import EutonyImage from '../../../../src/assets/posters/EutonyImage.png';

const TheEutony = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>The Eutony</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Covet Collective</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the image imported from the local folder */}
        <img src={EutonyImage} alt="The Eutony" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        to happen, to keep, to hold
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        Covet Collective is a group of artists focused on the exploration of relationality and meditations on death, using non-linear storytelling methods to create work that distorts perceptions of time and space. This work is created for those who feel a sense of loss in their lives to find comfort in the fact that nothing makes sense; we make this specific style of fragmentary work because this is an experience we all relate to as a collective.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        The Eutony is a collaboratively devised piece centered around a microwave to reflect moments of tension in a relationship. A microwave is a liminal space, a place where time feels distinct, and the third performer in our piece. The style we have created utilizes surrealism, symbolism, and liveness; mirroring the poetics of Kae Tempest, the experimental nature of the Land of Cards, and the fragmentary style of Melancholy Play. Covet Collective is interested in creating work that amplifies themes of intimacy, liminality, and viscerality. We use anti-logic and feeling-driven devising to create and develop characters that feel uncomfortable to witness yet relatable in nature.
      </p>
    </div>
  );
};

export default TheEutony;
