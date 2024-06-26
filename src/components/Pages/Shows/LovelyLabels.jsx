import React from 'react';
import LovelyLabelsImage from '../../../../src/assets/posters/LovelyLabelsImage.png';

const LovelyLabels = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Lovely Labels</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Oliver Ferman</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the image imported from the local folder */}
        <img src={LovelyLabelsImage} alt="Lovely Labels" style={{ maxWidth: '45%', height: 'auto' }} />
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

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        <strong>Content warning:</strong> Contains scenes of simulated drug use, suicidal ideation, and frequent references to mental health conditions which are portrayed stereotypically.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        <strong>Cast:</strong> <br />
        Oscar Jones/Dr Marlowe - Oliver Ferman <br />
Graham - Gary Ferman <br />
Lovely Labels members: <br />
Danielle Bradford <br />
Alix Hunnam <br />
<br />

<strong>Written by:</strong> 
Oliver Ferman

 <br />
 <br />
<strong>Edited by: </strong> Beata Konya <br />
<br />
        <strong>Special thanks to:</strong> <br />
        Beata Konya,
Maja Nowakowska,
Jonathan Ferman,

Alexa Reid, Abigail Conway, Marie-Gabrielle Rotie,

The Theatre and Performance staff at Goldsmiths University,

The Drama and Theatre Arts and PPS class of 2024
      </p>
    </div>
  );
};

export default LovelyLabels;
