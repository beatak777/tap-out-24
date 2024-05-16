import React from 'react';
import FeastImage from '../../../assets/posters/FeastImage.png'; // Import the image

const FeastBeast = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Feast Beast</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Call for Anatomy</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the imported image */}
        <img src={FeastImage} alt="Feast Beast" style={{ maxWidth: '45%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        A special sensory experience.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Call for Anatomy refers to Yujie Wang, a solo performance artist and costume designer, who is performing to portray a critique against animal testing’s cruelty, valuing humans over animals. In order to evoke or awaken the audience’s empathy, whether pity or disgust towards animals’ mistreatment in labs and factories, Call for Anatomy explores the limits of transformation between human and animal bodies.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        Feast Beast is a boundary-breaking piece that creates the possibility of touching people's hearts through immersive interaction between actors and audience. This piece by Call for Anatomy uses sound and images to create a visual aesthetic hinting at a form of disturb or violence not suitable for all audiences, through a subtle yet aggressive style.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        <strong>Content warning:</strong> Contains violence, animal cruelty, blood and loud noise.
      </p>
    </div>
  );
};

export default FeastBeast;
