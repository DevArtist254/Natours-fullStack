import { connect } from 'react-redux';
import Cards from '../components/cards.comp';
import { Link, Outlet } from 'react-router-dom';
import image from '../img/search-bdg.jpg';

function Search({ searchedItems }) {
  return (
    <div>
      <div className="bdg" style={{ backgroundImage: `url(${image})` }}>
        <div className="search-content">
          <ul className="search-nav">
            <li>Find by &#8594</li>
            <li>
              <Link to="/search/by-name">Name </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="/search/by-price">Price</Link>{' '}
            </li>
            <li>
              <Link to="/search/by-duration">Duration </Link>{' '}
            </li>
            <li>
              <Link to="/search/by-difficulty">Difficulty </Link>
            </li>
          </ul>
          <Outlet />
        </div>
        <main>
          <Cards className="cards-searched" cards={searchedItems} />
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = ({ search }) => ({
  searchedItems: search.searchedItems,
});

export default connect(mapStateToProps)(Search);
