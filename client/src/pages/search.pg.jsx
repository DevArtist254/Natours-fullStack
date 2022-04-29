import { Link, Outlet } from 'react-router-dom';
import image from '../img/search-bdg.jpg';

function Search() {
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
              <Link to="/search">Price</Link>{' '}
            </li>
            <li>
              <Link to="/search">Duration </Link>{' '}
            </li>
            <li>
              <Link to="/search">Difficulty </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Search;
