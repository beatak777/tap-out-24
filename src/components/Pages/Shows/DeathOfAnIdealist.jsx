import React from 'react';
// import IdealistImage from '../../../assets/posters/IdealistImage.png'; // Import the image

const DeathOfAnIdealist = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>The Death of an Idealist</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Yu&Dan</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the imported image */}
        <img src={IdealistImage} alt="The Death of an Idealist" style={{ maxWidth: '45%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        The world of dew is the world of dew. And yet, and yet- 
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Yu&Dan is a collaborative duo whose members have worked in performance, set design, costume design, and photography. In our story, failed relationships and the breakdown of the protagonist’s ideals lead her to rethink the meaning of life through dialogue with others and try to get out of her own chaotic state. All of this will be realized through live performances and digital materials. The ending of the story is open-ended; the future that the protagonist pursues is undefined and it will exist in the audience's exploration and imagination.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        The Death of An Idealist explores failed ideals, broken love, and the inability to find meaning in life. The show will use digital material and live performance to take the audience on a journey through time and space, reality and dream world. Melancholic and poetic, Yu&Dan’s performance sets a world where black and white and dull-colored images, imagination and floating consciousness, fill the lines of the narrative.
      </p>
    </div>
  );
};

export default DeathOfAnIdealist;
