import { connect } from 'react-redux';
import StartLocation from '../studio/startLocation.pg';
import Description from '../studio/tourDecription.pg';
import Location from '../studio/location.pg';
export const Studio = () => {
  return (
    <div className="user-nav__content">
      <h1>Studio</h1>
      <div className="user-nav__decription">
        <Description />
      </div>
      <div className="user-nav__startLocatuin">
        <StartLocation />
      </div>
      <div>
        <Location />
      </div>
      <div className="user-nav__overview">
        {/* <h1>{tour.name}</h1>
          <h2>{tour.summary}</h2>
          <p>{tour.description}</p>
          <p>Price: {tour.price} ksh</p>
          <p>Max Group Size: {tour.maxGroupSize} people</p>
          <p>Start date : {date}</p>
          <p>Difficulty: {tour.difficulty}</p>
          <img
            src={tour.imageCover}
            alt="tour cover"
            style={{ width: '360px', height: '720px' }}
          /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Studio);
