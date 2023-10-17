import React from 'react';

function FlagPage() {
  return (
    <div className="FlagPage">
      <div className="p-4 bg-white text-teal-500">
        <p>
          My name is Camille. I am a peaceful soul.
          I dream of living in a peaceful world.
          A peaceful world where kindness and charity prevail among our brothers and sisters, who are born here and live here together on this beautiful earth.
          When the 9-11 attack happened I said to myself, 'The people of our earth need a flag! We need a flag of peace that belongs to every person who lives on this beautiful planet. We need an “International Flag of Peace”!'
          And a voice spoke to me in my mind and said, 'Why not? It’s up to you.'
          And at that moment I embarked on the journey to create the 'International Flag of Peace'.
        </p>
        <img src={process.env.PUBLIC_URL + '/Asset/Camille Yogi - Flag - Int Flag of Peace.png'} alt="Flag" />
      </div>
    </div>
  );
}

export default FlagPage;
