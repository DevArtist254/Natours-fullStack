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
      <h3 className="nav__logo logo">Xplorer</h3>
      <ul className="nav__list">
        <li className="nav__items">
          <span className="nav__search">
            <input className="nav__search--input" />
            <Icon
              className="iconify"
              icon="fluent:globe-search-24-filled"
              style={{ color: '#000', fontSize: '3.5rem' }}
            />
          </span>
          <img src={triangle} alt="tri" className="triangle" />
          <div className="dropdown">
            <h2 className="dropdown__header mt2">Filters</h2>

            <div className="dropdown__diff mt2">
              <div className="dropdown__diff--input">
                <input type="checkbox" />
                <h3 className="dropdown__diff--header">Difficulty</h3>
              </div>
              <div className="dropdown__diff--input">
                <input type="checkbox" />
                <h3 className="dropdown__diff--header">Medium</h3>
              </div>
              <div className="dropdown__diff--input">
                <input type="checkbox" />
                <h3 className="dropdown__diff--header">Easy</h3>
              </div>
            </div>

            <div className="dropdown__range mt2">
              <h3 className="dropdown__range--header">Range</h3>

              <div className="dropdown__range--inputs">
                <input type="text" className="dropdown__range--input" />
                <p className="dropdown__range--p">to</p>
                <input type="text" className="dropdown__range--input" />
              </div>
            </div>

            <div className="dropdown__location mt2">
              <span
                className="iconify"
                icon="entypo:location"
                style={{ color: 'white', fontSize: '3.5rem' }}
              />
              <p className="dropdown__location--header">Close to me</p>
            </div>

            <div className="dropdown__cta mt2">Submit</div>
          </div>
        </li>
        <li className="nav__items">
          {!currentUser ? (
            <>
              <Link to="/user" className="nav__link">
                <Icon
                  className="iconify"
                  icon="healthicons:ui-user-profile"
                  style={{ color: '#000', fontSize: '3.5rem' }}
                />
              </Link>
              <img src={triangle} alt="tri" className="triangle-1" />
              <div className="dropdown">
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
              <div className="dropdown">
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
        <li className="nav__items">
          <a href="/nav.html" className="nav__link">
            <Icon
              className="iconify"
              icon="bi:handbag-fill"
              style={{ color: '#000', fontSize: '3.5rem' }}
            />
          </a>
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
          <img src={wishlist} alt="wish list" style={{ width: '110px' }} />
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Nav);
