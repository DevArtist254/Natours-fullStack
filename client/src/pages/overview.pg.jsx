import React from 'react';
import Cards from '../components/cards.comp';

function Overview({ cards, setTour }) {
  return (
    <main>
      <Cards cards={cards} setTour={setTour} />
    </main>
  );
}

export default Overview;
