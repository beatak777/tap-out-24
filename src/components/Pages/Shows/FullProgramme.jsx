import React from 'react';
import { Link } from 'react-router-dom';

const FullProgramme = () => {
  const shows = [
    { 
      title: 'The Wake', 
      path: '/thewake', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/WakeImage.cb1e7538.png' 
    },
    { 
      title: 'Symposium', 
      path: '/symposium', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/SymposiumImage.1953acf2.png' 
    },
    { 
      title: 'The Convo', 
      path: '/theconvo', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/TheConvoImage.e908d68d.png' 
    },
    { 
      title: 'Boys & Toys', 
      path: '/boysandtoys', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/BoysAndToysImage.19084753.png' 
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
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/FrustrationImage.856c4f9e.png' 
    },
    { 
      title: 'Blue Bottle', 
      path: '/bluebottle', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/BlueBottleImage.9d0fd037.png' 
    },
    { 
      title: '我/who', 
      path: '/who', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/WhoImage.f653abfe.png' 
    },
    { 
      title: 'Case Affliction', 
      path: '/caseaffliction', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/CaseAfflictionImage.6f627ec2.png' 
    },
    { 
      title: 'The Eutony', 
      path: '/theeutony', 
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/EutonyImage.2bc789f1.png' 
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
      imageUrl: 'https://tapoutgoldsmiths.netlify.app/assets/LovelyLabelsImage.f017caf6.png' 
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
