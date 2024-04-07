import React from 'react';

const Fckyou = () => {
  // Define the URL of the placeholder image for "F*ck You!"
  const placeholderImageUrl = 'https://via.placeholder.com/800x600'; // Example placeholder image URL

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>F*ck You!</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Alix Hunnam and Danielle Bradford</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the placeholder image from the online source */}
        <img src={placeholderImageUrl} alt="Placeholder" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Two can play at that Game
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Alix and Danielle are both Drama and Theatre Arts students in their final degree year at Goldsmiths, University of London. Alix has been involved with theatre throughout her adolescent years including musical theatre, dance, and music. She has studied Drama through her high school years and then pursued HND Musical Theatre at Edinburgh college. Danielle has been thoroughly involved with youth theatre including musicals, script work, and short student films. She has also studied Drama throughout secondary school and went on to achieve an A Level in the subject.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Jess and Mia have been in a toxic relationship for 6 months. Jess, realizing that she has been cheated on the night before, begins to plan her revenge. Bradford and Hunnam have created naturalistic work fusing elements of comedy while juggling some sensitive topics regarding dysfunctional relationships, inspired by Fleabag, Chewing Gum, Skins, That Face, Lungs, and The House of Bernarda Alba.
      </p>
    </div>
  );
};



export default Fckyou;