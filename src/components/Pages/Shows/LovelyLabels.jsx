import React from 'react';

const LovelyLabels = () => {
  // Define the URL of the placeholder image for Lovely Labels
  const placeholderImageUrl = 'https://via.placeholder.com/800x600'; // Example placeholder image URL

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Lovely Labels</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Oliver Ferman</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the placeholder image from the online source */}
        <img src={placeholderImageUrl} alt="Placeholder" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Who am I? </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Oliver Ferman, a third-year student studying Drama and Theatre Arts at Goldsmiths University, is a writer and performer in his short solo film Lovely Labels.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        What is it about?
        Would you want to be a painfully single agoraphobic playwright? Oscar certainly doesn’t. So, he joins Lovely Labels, a subscription service which offers its members ‘lovely’ labels they can make a reality with positive thinking. Oscar finds money, romance, and happiness, but his positive labels quickly become negative causing dangerous behaviours that seriously threaten his wellbeing, as his contract may last a hell of a long time. Oliver Ferman’s black comedy is loosely inspired by Dr Faustus by Christopher Marlowe, whose titular character receives short-lived powers in exchange for his soul.

      </p>
    </div>
  );
};

export default LovelyLabels;
