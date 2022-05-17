import { connect } from 'react-redux';
import { setTour } from './../redux/tour/tour.actions';
import { addItemsToCart } from './../redux/cart/cart.actions';
import { useNavigate } from 'react-router-dom';
//import { useMemo } from 'react';
//import { Icon } from '@iconify/react';
//import formatDate from './../utils/formatDate';
import { Link } from 'react-router-dom';
import Stars from './star.comp';

function Card({ data, setTour, addItemsToCart }) {
  const navigate = useNavigate();

  const navTours = (data) => {
    setTour(data);

    navigate('/tour');
  };

  return (
    <div className="card-full">
      <div
        className="card-full__picture"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${data.imageCover})`,
        }}
      >
        <h3
          className="card-full__header card-header"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${data.imageCover})`,
          }}
        >
          {data.name}
        </h3>
        <div className="card-full__picture--sub-header">
          <p className="card-price"> Only ${data.price}</p>
          <h4 className="card-full__subHeader card-subHeader">{data.name}</h4>
          <div className="stars">
            <Stars rateAv={data.ratingsAverage} />
          </div>
          <p
            className="card-addToCart-btn"
            onClick={() => addItemsToCart(data)}
          >
            Add to cart
          </p>
        </div>
      </div>
      <div className="card-full__link">
        <p onClick={() => navTours(data)} className="nav-link">
          Details
        </p>
        <Link to="/" className="link-sec">
          Memories
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setTour: (id) => dispatch(setTour(id)),
  addItemsToCart: (item) => dispatch(addItemsToCart(item)),
});

export default connect(null, mapDispatchToProps)(Card);
