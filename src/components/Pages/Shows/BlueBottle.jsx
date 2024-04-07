import React from 'react';

const BlueBottle = () => {
  // Define the URL of the placeholder image for Blue Bottle
  const placeholderImageUrl = 'https://via.placeholder.com/800x600'; // Example placeholder image URL

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Blue Bottle</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Nate Leather and Sofia Natoli</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the placeholder image from the online source */}
        <img src={placeholderImageUrl} alt="Placeholder" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Never drink with the flies...
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Nate Leather and Sofia Natoli are both performers and writers drawn to ordinary stories about the mundane realities of everyday struggles. Together, the duo presents work that questions the boundaries of reality through theatrical psychological drama, merging life experience with fiction. Targeted for mature audiences ready to be immersed in a chaotic and intimate world, the company aims to bring to you a slice of life seasoned with an encounter of freakish ambiguity.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        A story about grief, longing, love, and addiction, Blue Bottle introduces us to Indie, who has lost everything he’s ever cared for, and slowly drowns himself within the chaos of mourning – until he meets Rosemary. Influenced by the erotic thriller genre, where black comedy and wit take center stage, this piece presents two characters who march through dysfunctional and absurd scenarios. Originally written by Nate Leather and co-devised and directed with Sofia Natoli, the duo brings together their personal life experiences and interest for everyday stories to create an intimate piece based on the tension between chaos and containment, questioning the balance between reality and illusion.
      </p>
    </div>
  );
};

export default BlueBottle;
