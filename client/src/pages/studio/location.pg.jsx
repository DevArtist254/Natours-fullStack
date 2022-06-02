import { connect } from 'react-redux';
import { setLocation } from './../../redux/studio/studio.actions';
import { useState } from 'react';

function Location({ setLocation }) {
  const [location, setLocations] = useState({
    latitude: 0,
    longitude: 0,
    address: '',
    description: '',
    day: 0,
  });

  function handleStartLocation(e) {
    const { name, value } = e.target;

    setLocations((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(location);
  }

  return (
    <form onSubmit={handleSubmit}>
      <>
        <label>Start Location</label>
        <p>latitude</p>
        <input
          type="number"
          name="latitude"
          onChange={handleStartLocation}
          placeholder="Please enter coordinates"
          value={location.latitude}
          required
        />
        <p>longitude</p>
        <input
          type="number"
          name="longitude"
          onChange={handleStartLocation}
          placeholder="Please enter coordinates"
          value={location.longitude}
          required
        />
        <p>Address</p>
        <input
          type="text"
          name="address"
          onChange={handleStartLocation}
          placeholder="Please enter a vaild address"
          value={location.address}
        />
        <p>Description</p>
        <input
          type="text"
          name="description"
          onChange={handleStartLocation}
          placeholder="Please enter a description of the place"
          value={location.description}
        />
        <p>Location Images</p>
        {/* <input type="file" onChange={uploadImage} /> */}
        <input type="submit" />
      </>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setLocation: (location) => dispatch(setLocation(location)),
});

export default connect(null, mapDispatchToProps)(Location);
