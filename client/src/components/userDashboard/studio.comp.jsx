import { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

export const Studio = ({ token }) => {
  const [tour, setTour] = useState({
    name: '',
    description: '',
    summary: '',
    duration: 0,
    maxGroupSize: 0,
    price: 0,
    startDates: 0,
    difficulty: '',
  });

  // async function getGeoLocation() {
  //   //const location = 'Nakuru';

  //   try {
  //     const response = await axios.get(
  //       'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBDvqGaFIdywqZcIabp4SihpaA6LfHWrJ8'
  //     );

  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  function handleChange(e) {
    const { name, value } = e.target;

    setTour((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:2540/natours/v1/tours',
        tour,
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }

    console.log(tour);
  }

  return (
    <div className="user-nav__content">
      <h1>Studio</h1>
      <form onSubmit={onSubmit}>
        <div className="user-nav__decription">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={tour.name}
              onChange={handleChange}
              placeholder="Please enter the tour name"
              required
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={tour.description}
              onChange={handleChange}
              placeholder="Please enter the tour description"
              required
            />
          </div>
          <div>
            <label>Summary</label>
            <input
              type="text"
              name="summary"
              value={tour.summary}
              onChange={handleChange}
              placeholder="Please enter the tour summary"
              required
            />
          </div>
          <div>
            <label>Duration</label>
            <input
              type="number"
              name="duration"
              value={tour.duration}
              onChange={handleChange}
              placeholder="Please enter the tour duration"
              required
            />
          </div>
          <div>
            <label>Max Group Size</label>
            <input
              type="number"
              name="maxGroupSize"
              value={tour.maxGroupSize}
              onChange={handleChange}
              placeholder="Please enter the tour max group size"
              required
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={tour.price}
              onChange={handleChange}
              placeholder="Please enter the tour price"
              required
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              name="startDates"
              value={tour.startDates}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Difficulty</label>
            <input
              type="type"
              name="difficulty"
              value={tour.difficulty}
              onChange={handleChange}
              placeholder="Please enter easy or medium or difficult"
              required
            />
          </div>
        </div>
        {/* <div className="user-nav__memories">
          <button onClick={() => getGeoLocation()}>Load location</button>
        </div> */}
        <div className="user-nav__overview">
          <h1>{tour.name}</h1>
          <h2>{tour.summary}</h2>
          <p>{tour.description}</p>
          <p>Price: {tour.price} ksh</p>
          <p>Max Group Size: {tour.maxGroupSize} people</p>
          <p>Start date : {tour.startDates}</p>
          <p>Difficulty: {tour.difficulty}</p>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Studio);
