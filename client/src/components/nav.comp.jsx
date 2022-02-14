import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Logo from './../img/logo-white.png';
import user from './../img/users/default.jpg';

function Nav({ currentUser }) {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav__el">
          All tours
        </Link>
        <form className="nav__search">
          <button className="nav__search-btn">
            <Icon icon="bi:search" color="white" />
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
        <div className="header__logo">
          <img src={Logo} alt="Natours logo" />
        </div>
        <nav className="nav nav--user">
          <Link to="/bookings" className="nav__el">
            My bookings
          </Link>
          {currentUser ? (
            <Link to="/me" className="nav__el">
              <img src={user} alt="Me" className="nav__user-img" />
              <span>{currentUser.fullName}</span>
            </Link>
          ) : (
            <div>
              <Link to="/login" className="nav__el">
                Log in
              </Link>
              <Link to="/signup" className="nav__el nav__el--cta">
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </nav>
    </header>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Nav);
