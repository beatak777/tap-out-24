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
      imageUrl: 'URL_TO_BOYS_TOYS_IMAGE' 
    },
    { 
      title: 'Energize, Revitalize, Lobotomize', 
      path: '/energiserevitaliselobotomise', 
      imageUrl: 'URL_TO_ENERGIZE_IMAGE' 
    },
    { 
      title: 'F*ck You!', 
      path: '/fckyou', 
      imageUrl: 'URL_TO_FCK_YOU_IMAGE' 
    },
    { 
      title: 'Frustration', 
      path: '/frustration', 
      imageUrl: 'URL_TO_FRUSTRATION_IMAGE' 
    },
    { 
      title: 'Blue Bottle', 
      path: '/bluebottle', 
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO1zzQbNnRf69uR38EDC30v8K1re3JyvbYcDWzwy5aEpQlpkOAxu8rprtJw6Hb5tph6la0rxEWZ4G7ntnTq3h0WkARaUGapyjrlH2tS7kCVI6woDxEWxPuJFbWJIcwHSD0GRYXa8QQ_6AE4uWmuHpKAYMIOWee63YpsjKo-GsqlbuAmEqVk4bYo4hBv6nUXhkDnp7vpDQYbvYVqr6X0-TAFp3UQnVwZ72XFXC7J7TqvM4LjNA0QwJpeaLzPXhjw4bZDeE2mAh9oBMG3Af-j2VA6BLQalrT1wN0mxyR0Tf_J94wJUYKY-1eRHdTYrI88hkT8cscN62SW65eTsehbwtCB1lb_jSnopQMA5S_-JRcBJAKwTPnatV9aefmHuGY5LyDlcmQqDOmxhmvVoSm01a8QzO75T3tchc7f5Vkx1uFCpVNdcMBNZJ-SlrcFqtNiKpTPyk2wXe1iIHD94TSoDx6vEDDbhljUe7ucMeBqo_Q9Oil0P61ICJGPS625SWUSTc-P8xm7W2upTV42CjENdgIf1tOAxnZzOXTsQI67QFaTEnGNO41xvac7tZB5O0EM3Jpxo0hv1Ou63-hXRglzvaGn-jdUwRsRWlP2gh4xq6sjecf3svFMTMa7GitVdt6IJin_CZvXqhWpxpzbSlg529FnZ8QJg2CzJ5xgXkvnEjDivjNW0GlMqy6hARFfnAs7HtKxEcVNpZh6QOl0tLBNZcHmQ1zAINhWh3fcA6IfZJmHqZ_C4F5FIGZJaMfXRmtAYTgOq3EzHE0AJlkd-pk4-yt63e6cGhD602TF4um8784V3aKcZBri7p3ddEPu-zVc1YOxj8mDxi7R7ixpANGc3XoJwYJWHKCde9_6jJvIANqMcxUtbSPbASmHva3rtUPHeK_yzv9F8HU0Tmf-1ywzWSFFiX1pPXLd0OaK8XQsvWIH5Lnu-dBoXWu4XCW36OjGAzZPBU6ABpzm22T9MmsyZM1UWmUo7PFT1YAwPLk6jSj1WXDd7SvYMO_MaaKavWQ54Q=w854-h1390-s-no-gm?authuser=3' 
    },
    { 
      title: '我/who', 
      path: '/who', 
      imageUrl: 'URL_TO_WHO_IMAGE' 
    },
    { 
      title: 'Case Affliction', 
      path: '/caseaffliction', 
      imageUrl: 'URL_TO_CASE_AFFLICTION_IMAGE' 
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
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOqxaKVCTaB09l1gpo-jb9ksBdvvt_LRrIBjNaCygT0dswdzD7qL7lWKUPY_Go80cr_wfzg7GhQv6c7a0EjSkomkLjk7YH5O_XxRfJjpVI-jbf9glRcq-bAVNouPAPDnjhSn4aZ2kNfow-2ejrKGqeeWHnPkXwEUoGLC7gCHvRPY_oZBufeY-gjsSj6qebd5i_WPCHGVejc57fujtgz9BBgyAdHkxQQoJnv51NmC45-EtXafKqi8rWDyxM3U3o0vGAxZhQp3Xn8dNUW6eGZsV26uGLpq4jYV6K-U3QyAsQtDKmqDYeVzBfcxp1OQnhWB901qy-eOGM1iBz3VViKMH0Il5ZQisYj4_E6W-oamqt-iJg9XjPhwgBHIwW793qKwTqHu3Xh03TAj6AeyjQcH8fIJav_Jyn1FS9dchNtCl9gmV71DScnElNhunvNjAIY0YGxWQnlQMZXVjMB7bj35Rc_OYgzKr_DcuMPyMScm450MCSfBdU6c-M9MqCIa2piepybSC9O5-lnYxA8XOuJrfLvPtlU5Bq00vIIIrjv8YgB6afktW5peANz3Pz8KvP6rUUQKRF04dQRSFUm8Y9P7HuKzCw1YSiaH3-wGNct2KB-PM3esKA2MuR5q__ZJftvAPoTmxtZCyMJ4l5mqBbgV3OzyGTJ_cIacZCd5GUbL4QE6SWB8r_3wgjDa5NIesW3HVrsvXVAV54AotcSF0Gcu7nz9-dXAGgDaOBE33lf_HpphxP2_nrelr_gMbvXAFuxUSq7ixb5VG2tzc1ETVZgYK-to8--AOz2vatFVRPap2MBd-kKe3Ju8-OO68LCZ5dKN7fRfhBDGlOzvVAvTX5LtCq29RDh0Ig9b3QOKfGCMU7ty5c7YaeDo2rg0IJ8j89p8k-B13pEvNuImhym1D9Udf35vC2P3qg7whSEn69EhDpiqlV-cCiF6ZJQ8OvlvDpWFdny1PF0208ZstKCvDjZOHIMfFhFK7ExyvqRgjt5S0GP1XwMCHJkQUprbUulTuRDOA=w982-h1390-s-no-gm?authuser=3' 
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
