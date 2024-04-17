import React from 'react';
import { Link } from 'react-router-dom';

const FullProgramme = () => {
  const shows = [
    { 
      title: 'The Wake', 
      path: '/thewake', 
      imageUrl: 'URL_TO_THE_WAKE_IMAGE' 
    },
    { 
      title: 'Symposium', 
      path: '/symposium', 
      imageUrl: 'URL_TO_SYMPOSIUM_IMAGE' 
    },
    { 
      title: 'The Convo', 
      path: '/theconvo', 
      imageUrl: 'URL_TO_THE_CONVO_IMAGE' 
    },
    { 
      title: 'Boys & Toys', 
      path: '/boysandtoys', 
      imageUrl: '' 
    },
    { 
      title: 'Energize, Revitalize, Lobotomize', 
      path: '/energiserevitaliselobotomise', 
      imageUrl: 'URL_TO_ENERGIZE_IMAGE' 
    },
    { 
      title: 'F*ck You!', 
      path: '/fckyou', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/FuckYouImage.a071790b.png' 
    },
    { 
      title: 'Frustration', 
      path: '/frustration', 
      imageUrl: 'URL_TO_FRUSTRATION_IMAGE' 
    },
    { 
      title: 'Blue Bottle', 
      path: '/bluebottle', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/BlueBottleImage.770e69fc.png' 
    },
    { 
      title: '我/who', 
      path: '/who', 
      imageUrl: 'URL_TO_WHO_IMAGE' 
    },
    { 
      title: 'Case Affliction', 
      path: '/caseaffliction', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/CaseAfflictionImage.6f627ec2.png' 
    },
    { 
      title: 'The Eutony', 
      path: '/theeutony', 
      imageUrl: 'URL_TO_THE_EUTONY_IMAGE' 
    },
    { 
      title: 'Feast Beast', 
      path: '/feastbeast', 
      imageUrl: 'URL_TO_FEAST_BEAST_IMAGE' 
    },
    { 
      title: 'The Death of an Idealist', 
      path: '/deathofanidealist', 
      imageUrl: 'URL_TO_DEATH_IDEALIST_IMAGE' 
    },
    { 
      title: 'Threads of Eternity', 
      path: '/threadsofeternity', 
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNFj5i_DDDrCsPfhMEDGliKtd4SObMNv2AlnY_2nRy3pIIOS24EXwkw66q-SlAbJkPXiN1N4BLqYs76eqGuvEvSrya3Ds4Wb4WtGNe_nIFKm1B_eK2c22Dntzwlq_H_UoO9QXkUlh4HR3oc57QPLcw=w982-h1390-s-no-gm?authuser=0' 
    },
    { 
      title: 'Lovely Labels', 
      path: '/lovelylabels', 
      imageUrl: 'URL_TO_LOVELY_LABELS_IMAGE' 
    }
  ];

  return (
    <div className="full-programme-container">
      <h1>The Full Programme</h1>
      <div className="show-grid">
        {shows.map((show, index) => (
          <Link to={show.path} key={index} className="show-card">
            <img
              src={show.imageUrl}
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
