import Card from './card.comp';

function Cards({ cards, cardSearched }) {
  return (
    <div className={cardSearched ? 'cards-searched' : 'cards'}>
      {cards.map((cur) => (
        <Card key={cur._id} data={cur} />
      ))}
    </div>
  );
}

export default Cards;
