import { connect } from 'react-redux';
import Cards from '../components/cards.comp';
import { Icon } from '@iconify/react';
import { Link, Outlet } from 'react-router-dom';
import Spinner from './../components/withSpinner.comp';
import image from '../img/tours/tour-2-1.jpg';

const CardsWithSpinner = Spinner(Cards);

function Search({ searchedItems, loading }) {
  const searchStyle = true;
  return (
    <div>
      <div className="bdg" style={{ backgroundImage: `url(${image})` }}>
        <div className="search-content">
          <ul className="search-nav">
            <li>
              Find by{' '}
              <Icon
                icon="bytesize:arrow-right"
                style={{ color: '#fff', fontSize: '1.5rem' }}
              />
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none', color: '#fff' }}
                to="/search/by-name"
              >
                Name{' '}
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link
                style={{ textDecoration: 'none', color: '#fff' }}
                to="/search/by-price"
              >
                Price
              </Link>{' '}
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none', color: '#fff' }}
                to="/search/by-duration"
              >
                Duration{' '}
              </Link>{' '}
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none', color: '#fff' }}
                to="/search/by-difficulty"
              >
                Difficulty{' '}
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
      <h1 className="tour__intro--footerHeader search__footer ">
        Search Results
      </h1>
      <main className="search-results">
        <CardsWithSpinner
          isloading={loading}
          cardSearched={searchStyle}
          cards={searchedItems}
        />
      </main>
    </div>
  );
}

const mapStateToProps = ({ search }) => ({
  searchedItems: search.searchedItems,
  loading: search.isLoading,
});

export default connect(mapStateToProps)(Search);
