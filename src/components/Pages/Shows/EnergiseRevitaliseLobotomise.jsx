import React from 'react';
import EternalImage from '../../../assets/posters/EternalImage.jpg'; 

const EnergiseRevitaliseLobotomise = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Energized, Revitalized, Lobotomized</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Eternal Inferno</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the imported image */}
        <img src={EternalImage} alt="Eternal Inferno" style={{ maxWidth: '45%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
       {/* Add your content here */}
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        We are Eternal Inferno, a theatre and filmmaking duo taking audiences through an odyssey of historical fables, exploring objectification, control, and silencing of women in patriarchal systems. Using comedy and surrealism to dismantle reality, we envision a future where everybody has political, psychological, and bodily autonomy.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6', marginBottom: '20px' }}>
        Eternal Inferno sets out to explore the commodification and objectification of the female body using a combination of surrealism and radical comedy. Throughout the process, we have engaged with a plethora of theatrical forms such as physical theatre, power dynamics, and experimental language. We aim to ask questions of the things that were taken from us and that continue to be taken throughout history. Utilizing our characterisation and physicality, we will emulate poignant eras and archetypes which have shaped the way women are simultaneously exploited and censored, subverting the canonical narrative and defining our own stories.
      </p>
    </div>
  );
};

export default EnergiseRevitaliseLobotomise;
