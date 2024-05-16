import React from 'react';

const About = () => {
  const paragraphStyle = {
    textAlign: 'justify',
    lineHeight: '1.1',
    marginBottom: '20px',
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="text-center mb-4">TAPOUT'24</h1>
          <p style={paragraphStyle}>
            Tap Out Festival is our annual showcase that celebrates the culmination of the Goldsmiths Theatre & Performance Degree and Performance, Politics and Society programs. The festival highlights the creative achievements and talents of final year students, presenting a diverse range of innovative and thought-provoking performances.
          </p>
          <p style={paragraphStyle}>
            As part of their degree, students engage in an intensive exploration of theatre-making, guided by a dynamic and diverse team of tutors. The programme is designed to nurture radical theatre-makers and thinkers, fostering adventurous and hands-on approaches to performance art.
          </p>
          <p style={paragraphStyle}>
            The Tap Out Festival serves as a platform for emerging artists to demonstrate their skills in various disciplines, including physical theater, solo comedy, film, and immersive performance. It reflects the program's commitment to blending theoretical insights with practical experience, producing graduates who are well-equipped to navigate the contemporary theatre landscape.
          </p>
          <p style={paragraphStyle}>
            Join us at Tap Out Festival to witness the next generation of theatre-makers as they showcase their innovative productions, demonstrating a complex understanding of theatre in our global society.
          </p>
          <p style={paragraphStyle}>
            The BA Drama and Theatre Arts programme & The BA Drama Performance, Politics and Society programme at Goldsmiths jointly aim to cultivate bold and versatile creatives who are socially, culturally, and politically engaged. Graduates emerge as complete theatre makers, ready to embark on their professional journeys in the performing arts industry.
          </p>

          <h1 className="text-center mb-4">SPECIAL THANKS TO:</h1>
          <p style={paragraphStyle}>
          Special thank you to our amazing tutors Alexa Reid, Marie-Gabrielle Rotie, Abigail Conway; to our tech tutors Chloe Kenward, Patrick Furness, Emily Mead, Molly Syrett, Nao Nagai; to our marketing tutors Adrian de La Court, Ashley Evenson; to our photographer Keiko Ikeuchi; to our  programming team Martha Stokes, June-Lallah Romantif and Rosanna Pike; to our technical coordinators Emily West, Joshua Silvani, Marks Zubulis and lastly to our marketing team Sofia Natoli, Francesca Short and Beata Konya.
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;
