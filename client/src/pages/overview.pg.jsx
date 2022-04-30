import React from 'react';
import Cards from '../components/cards.comp';

function Overview({ cards }) {
  return (
    <main>
      <Cards className="cards" cards={cards} />
    </main>
  );
}

export default Overview;
