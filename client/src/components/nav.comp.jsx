import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import triangle from './../img/triangle.svg';
import wishlist from './../img/wishlist.svg';
import x from './../img/x.png';
import UpLoadImg from './upLoadImg';

function Nav({ currentUser }) {
  const navRoute = useNavigate();

  return (
    <div className="nav">
      <Link to="/" className="nav__logo logo">
        Xplorer
      </Link>
      <ul className="nav__list">
        <li className="nav__items">
          <span className="nav__search">
            <h2 className="nav__header">Find your next adventure</h2>
            <Icon
              className="iconify"
              icon="fluent:globe-search-24-filled"
              style={{ color: '#000', fontSize: '3.5rem' }}
            />
          </span>
          <img src={triangle} alt="tri" className="triangle" />
          <div className="dropdown" style={{ left: '5%' }}>
            <h2 className="dropdown__header mt2">Find by</h2>

            <div
              className="dropdown__cta mt2"
              onClick={() => navRoute('/search/by-name')}
            >
              Name
            </div>
            <div
              className="dropdown__cta mt2"
              onClick={() => navRoute('/search/by-price')}
            >
              Price
            </div>
            <div
              className="dropdown__cta mt2"
              onClick={() => navRoute('/search/by-duration')}
            >
              Duration
            </div>
            <div
              className="dropdown__cta mt2"
              onClick={() => navRoute('/search/by-difficulty')}
            >
              Difficulty
            </div>
          </div>
        </li>
        <li className="nav__items">
          <span className="nav__search">
            <h2 className="nav__header">Bookings</h2>
            <a href="/nav.html" className="nav__link">
              <Icon
                className="iconify"
                icon="bi:handbag-fill"
                style={{ color: '#000', fontSize: '3.5rem' }}
              />
            </a>
          </span>
          <img src={triangle} alt="tri" className="triangle-2" />
          <div className="dropdown">
            <h2 className="dropdown__header">Tours</h2>
            <div className="dropdown__tours">
              <h4 className="dropdown__tours--header">Tour</h4>
              <p className="dropdown__tours--total">$200</p>
              <img src={x} alt="cancel" className="dropdown__tours--cancel" />
            </div>
            <div className="dropdown__tours">
              <h4 className="dropdown__tours--header">Tour</h4>
              <p className="dropdown__tours--total">$200</p>
              <img src={x} alt="cancel" className="dropdown__tours--cancel" />
            </div>
            <div className="dropdown__tours">
              <h4 className="dropdown__tours--header">Tour</h4>
              <p className="dropdown__tours--total">$200</p>
              <img src={x} alt="cancel" className="dropdown__tours--cancel" />
            </div>

            <p className="dropdown__p">Total : Total amount</p>
            <div className="dropdown__cta">Pay</div>
          </div>
        </li>
        <li className="nav__items">
          {!currentUser ? (
            <>
              <span className="nav__search">
                <h2 className="nav__header">you</h2>
                <Link to="/user" className="nav__link">
                  <Icon
                    className="iconify"
                    icon="healthicons:ui-user-profile"
                    style={{ color: '#000', fontSize: '3.5rem' }}
                  />
                </Link>
              </span>

              <img src={triangle} alt="tri" className="triangle-1" />
              <div className="dropdown" style={{ right: '0' }}>
                <div
                  className="dropdown__cta mt2"
                  onClick={() => navRoute('/login')}
                >
                  Login
                </div>
                <div
                  className="dropdown__cta mt2"
                  onClick={() => navRoute('/signup')}
                >
                  Sign up
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/user" className="nav__link">
                {!currentUser.photo ? (
                  <Icon
                    className="iconify"
                    icon="healthicons:ui-user-profile"
                    style={{ color: '#000', fontSize: '3.5rem' }}
                  />
                ) : (
                  <img
                    src={currentUser.photo}
                    alt="profile"
                    style={{ width: '35px' }}
                  />
                )}
              </Link>
              <img src={triangle} alt="tri" className="triangle-1" />
              <div className="dropdown" style={{ right: '0' }}>
                <h2 className="dropdown__header mt2">User Profile</h2>
                <h3 className="dropdown__header--sub mt2">Name</h3>
                <h3 className="dropdown__p">{currentUser.fullName}</h3>
                <h3 className="dropdown__header--sub mt2">Email</h3>
                <h3 className="dropdown__p">{currentUser.email}</h3>
                <h3 className="dropdown__header--sub mt2">Upload your image</h3>
                <UpLoadImg />
                {/* <div className="">Upload image</div> */}
                <div className="dropdown__cta mt2">Sign Out</div>
              </div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Nav);
