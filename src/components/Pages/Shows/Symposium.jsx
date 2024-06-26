import React from 'react';
import SymposiumImage from '../../../../src/assets/posters/SymposiumImage.png';

const Symposium = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Symposium</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By jiNX ensemble</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the image imported from the local folder */}
        <img src={SymposiumImage} alt="Symposium" style={{ maxWidth: '45%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        “all it takes is a magic jinx.” - THE GUARDIAN (2020)
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        jiNX ënsemble is an artists' collective led by synesthesia, using experimental performance to digest contemporary conventions and the presumed absolutes of time and space. jiNX houses chaos, cut-up culture and proxemics in stylized performances to transgress modern panic and make new narratives. jiNX mythologizes what is next, revealing the seemingly expressionless in eccentric enchantments to invent fresh eyes.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Symposium presents a family of four bizarre characters; an eccentric aunt, her two washed-up show-girls, and their father, Kurt Cobain. As they journey on a boat, scrambling to make sense of what is left after the information rapture, the family tries to find a new meaning by playing games.
        <br /><br />
        Symposium is a theatrical experiment in search of what ‘meaning’ means and what constitutes the contemporary. Using postmodern techniques of pastiche to form an absurd narrative through time, we present the intersections of the cultural landscape through popular culture references. Symposium speaks to Frederic Jameson's notion of postmodernist ‘nostalgia,’ “Jameson calls this the longing to return to a ‘world of darkness that our modern age has lost, where the gap between worlds and things disappears and existence unfolds before us.” Symposium explicitly jibs society's preoccupation with recycling the past and its fear of looking forward, perhaps because the future screams of horror, but we want to answer the question of how to make new art in the flexible language of the past.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
      <strong>Performers: </strong> <br />
       Lola Blackman <br /> Amelie Asha-Johnson <br /> Freddie McGovern <br /> Ariela Vine <br />



      <strong>Director: </strong> <br />
      Anouska Manion
      </p>

    </div>
  );
};

export default Symposium;
