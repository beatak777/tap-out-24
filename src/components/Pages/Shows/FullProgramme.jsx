import React from 'react';
import { Link } from 'react-router-dom';

const FullProgramme = () => {
  const shows = [
    { title: 'The Wake', path: '/thewake' },
    { title: 'Symposium', path: '/symposium' },
    { title: 'The Convo', path: '/theconvo' },
    { title: 'Boys & Toys', path: '/boysandtoys' },
    { title: 'Energize, Revitalize, Lobotomize', path: '/energiserevitaliselobotomise' },
    { title: 'F*ck You!', path: '/fckyou' },
    { title: 'Frustration', path: '/frustration' },
    { title: 'Blue Bottle', path: '/bluebottle' },
    { title: '我/who', path: '/who' },
    { title: 'Case Affliction', path: '/caseaffliction' },
    { title: 'The Eutony', path: '/theeutony' },
    { title: 'Feast Beast', path: '/feastbeast' },
    { title: 'The Death of an Idealist', path: '/deathofanidealist' },
    { title: 'Threads of Eternity', path: '/threadsofeternity' },
    { title: 'Lovely Labels', path: '/lovelylabels' }
  ];

  return (
    <div className="full-programme-container">
      <h1>The Full Programme</h1>
      <p></p>
      <div className="show-grid">
        {shows.map((show, index) => (
          <Link to={show.path} key={index} className="show-card">
            <img
              src={`https://via.placeholder.com/800x600?text=${show.title}`} // Placeholder image URL with title as text
              alt={show.title}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <h2>{show.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FullProgramme;
