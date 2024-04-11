import React from 'react';

const ThreadsOfEternity = () => {
  // Updated image URL for "Threads of Eternity"
  const imageUrl = 'https://lh3.googleusercontent.com/pw/AP1GczNFj5i_DDDrCsPfhMEDGliKtd4SObMNv2AlnY_2nRy3pIIOS24EXwkw66q-SlAbJkPXiN1N4BLqYs76eqGuvEvSrya3Ds4Wb4WtGNe_nIFKm1B_eK2c22Dntzwlq_H_UoO9QXkUlh4HR3oc57QPLcw=w982-h1390-s-no-gm?authuser=0';

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Threads of Eternity</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Beata Konya</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the updated image */}
        <img src={imageUrl} alt="Threads of Eternity" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Beata Konya is a student from Hungary, currently studying Drama and Theatre Arts at Goldsmiths University. As a final-year student and solo performance maker, Beata is thrilled to invite you to the screening of her short film project. It will be showcased at the Cinema in the Richard Hoggard Building during the TAPOUT 24’ Festival.
        <br /><br />
        Threads of Eternity follows Ilona, the protagonist unravelling past lives through meditation, spurred by a mysterious symbol. Three pivotal memories emerge, marked by a diminishing red thread, symbolizing hope and interconnectedness. The film blends elements of mystery and self-discovery, drawing inspiration from the red thread legend and spiritual beliefs around it. Visual storytelling intertwines with themes of reincarnation, personal transformation, and hope. Threads of Eternity showcases Beata Konya's creative vision and research into folklore, delving into the premises of past lives and their connection to the present.
      </p>
    </div>
  );
};

export default ThreadsOfEternity;
