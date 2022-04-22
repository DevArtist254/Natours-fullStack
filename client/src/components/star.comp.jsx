import React from 'react';
import { Icon } from '@iconify/react';
import { v4 as uuidv4 } from 'uuid';

function Stars({ rateAv }) {
  const stars = () => {
    const rate = Math.floor(rateAv);

    if (rate === 1) {
      return ['a'];
    } else if (rate === 2) {
      return ['a', 'b'];
    } else if (rate === 3) {
      return ['a', 'b', 'c'];
    } else if (rate === 4) {
      return ['a', 'b', 'c', 'd'];
    } else if (rate === 5) {
      return ['a', 'b', 'c', 'd', 'e'];
    }
  };

  return (
    <div>
      {stars().map((el, arr, i) => (
        <Icon
          key={uuidv4()}
          className="iconify"
          icon="bxs:star"
          style={{ color: '#ffd365', fontSize: '3rem' }}
        />
      ))}
    </div>
  );
}

export default Stars;
