import React from 'react';
import TheConvoImage from '../../../../src/assets/posters/TheConvoImage.png';

const TheConvo = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>The Convo</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By HER</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the image imported from the local folder */}
        <img src={TheConvoImage} alt="The Convo" style={{ maxWidth: '45%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Join three black women holding on to one another as they navigate a world on fire.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        Through compelling storytelling and captivating performances, June-Lallah Romatif, Brianna Williams, and Leanne Baza aim to stir emotions, provoke thought, and intertwine past and present history. As the only black people in a majority white learning environment, June-Lallah, Brianna, and Leanne were drawn to one another by common understandings of societal points of views and experiences navigating unfamiliar spaces. Through conversations on current events happening in their community, shared struggles, and cultural knowledge, inspiration for “The Convo” naturally came to be.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        “Our mission is to inspire change in the perception/detachment the western world feels towards black women and shed light on the reality of the black experience in the 21st century”.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        In this witfully heart-warming play, Lyric, Jasmine, and Maya unite to share their diverse experiences, celebrating sisterhood, stereotype breaking, and cultural heritage. Through raw conversation, storytelling, and authentic connection, their voices resonate unapologetically. Inspired by Ntozake Shange’s “For Colored Girls”, Ryan Calais Cameron’s “For Black Boys”, and dialogues/speeches by Nikki Giovanni, James Baldwin, Toni Morrison, Maya Angelou, and Tupac Shakur, they incorporate hip-hop culture, dance theater, and spoken word in their conversation-based performance.
      </p>


      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
      <strong>Devised and performed by:</strong>  <br />
      June-Lallah Romatif <br /> Leanne Baza <br /> Brianna Williams 
    
      
      </p>
    </div>
  );
};

export default TheConvo;
