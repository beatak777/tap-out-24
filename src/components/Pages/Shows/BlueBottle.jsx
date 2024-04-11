import React from 'react';

const BlueBottle = () => {
  // Define the URL of the placeholder image for Blue Bottle
  const placeholderImageUrl = 'https://lh3.googleusercontent.com/pw/AP1GczO1zzQbNnRf69uR38EDC30v8K1re3JyvbYcDWzwy5aEpQlpkOAxu8rprtJw6Hb5tph6la0rxEWZ4G7ntnTq3h0WkARaUGapyjrlH2tS7kCVI6woDxEWxPuJFbWJIcwHSD0GRYXa8QQ_6AE4uWmuHpKAYMIOWee63YpsjKo-GsqlbuAmEqVk4bYo4hBv6nUXhkDnp7vpDQYbvYVqr6X0-TAFp3UQnVwZ72XFXC7J7TqvM4LjNA0QwJpeaLzPXhjw4bZDeE2mAh9oBMG3Af-j2VA6BLQalrT1wN0mxyR0Tf_J94wJUYKY-1eRHdTYrI88hkT8cscN62SW65eTsehbwtCB1lb_jSnopQMA5S_-JRcBJAKwTPnatV9aefmHuGY5LyDlcmQqDOmxhmvVoSm01a8QzO75T3tchc7f5Vkx1uFCpVNdcMBNZJ-SlrcFqtNiKpTPyk2wXe1iIHD94TSoDx6vEDDbhljUe7ucMeBqo_Q9Oil0P61ICJGPS625SWUSTc-P8xm7W2upTV42CjENdgIf1tOAxnZzOXTsQI67QFaTEnGNO41xvac7tZB5O0EM3Jpxo0hv1Ou63-hXRglzvaGn-jdUwRsRWlP2gh4xq6sjecf3svFMTMa7GitVdt6IJin_CZvXqhWpxpzbSlg529FnZ8QJg2CzJ5xgXkvnEjDivjNW0GlMqy6hARFfnAs7HtKxEcVNpZh6QOl0tLBNZcHmQ1zAINhWh3fcA6IfZJmHqZ_C4F5FIGZJaMfXRmtAYTgOq3EzHE0AJlkd-pk4-yt63e6cGhD602TF4um8784V3aKcZBri7p3ddEPu-zVc1YOxj8mDxi7R7ixpANGc3XoJwYJWHKCde9_6jJvIANqMcxUtbSPbASmHva3rtUPHeK_yzv9F8HU0Tmf-1ywzWSFFiX1pPXLd0OaK8XQsvWIH5Lnu-dBoXWu4XCW36OjGAzZPBU6ABpzm22T9MmsyZM1UWmUo7PFT1YAwPLk6jSj1WXDd7SvYMO_MaaKavWQ54Q=w854-h1390-s-no-gm?authuser=3'; // Example placeholder image URL

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Blue Bottle</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>By Nate Leather and Sofia Natoli</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* Display the placeholder image from the online source */}
        <img src={placeholderImageUrl} alt="Placeholder" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Never drink with the flies...
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        Nate Leather and Sofia Natoli are both performers and writers drawn to ordinary stories about the mundane realities of everyday struggles. Together, the duo presents work that questions the boundaries of reality through theatrical psychological drama, merging life experience with fiction. Targeted for mature audiences ready to be immersed in a chaotic and intimate world, the company aims to bring to you a slice of life seasoned with an encounter of freakish ambiguity.
      </p>

      <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
        A story about grief, longing, love, and addiction, Blue Bottle introduces us to Indie, who has lost everything he’s ever cared for, and slowly drowns himself within the chaos of mourning – until he meets Rosemary. Influenced by the erotic thriller genre, where black comedy and wit take center stage, this piece presents two characters who march through dysfunctional and absurd scenarios. Originally written by Nate Leather and co-devised and directed with Sofia Natoli, the duo brings together their personal life experiences and interest for everyday stories to create an intimate piece based on the tension between chaos and containment, questioning the balance between reality and illusion.
      </p>
    </div>
  );
};

export default BlueBottle;

