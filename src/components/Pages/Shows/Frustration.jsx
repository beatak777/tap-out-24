import React from 'react';
import FrustrationImage from '../../../../src/assets/posters/FrustrationImage.png';

const Frustration = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Frustration</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Sungwon Jo</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the image imported from the local folder */}
        <img src={FrustrationImage} alt="Frustration" style={{ maxWidth: '45%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Sungwon Jo is a student from South Korea studying Drama and Theatre Arts at Goldsmiths University. A solo performance maker in his final year, Jo is excited to show his personal story on stage to share his love of theatre during this TAPOUT Festival.
        <br /><br />
        Sungwon Jo’s performance is a heartfelt monologue detailing the difficulties one can have speaking English as an additional language and the frustrations which language barrier causes. Communication lying at the heart of connections and missing aspects of what is being said and not being able to fully articulate, leads to a challenging disconnection that can often leave one feeling embarrassed and alone. Jo aims to create an emotional engagement with the audience to hopefully make them empathize with his feelings of isolation and homesickness, despite the different circumstances everyone lives in. Through Frustration, Jo would like the audience to get an insight into his personal daily struggles and internal conflict with expressing himself in English.
      </p>
    </div>
  );
};

export default Frustration;
