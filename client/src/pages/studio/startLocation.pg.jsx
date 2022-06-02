import { connect } from 'react-redux';
import { useState } from 'react';
import { setStartLocation } from './../../redux/studio/studio.actions';

function StartLocation({ setStartLocation }) {
  const [startLocation, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    address: '',
    description: '',
  });

  function handleStartLocation(e) {
    const { name, value } = e.target;

    setLocation((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStartLocation(startLocation);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Start Location</label>
      <p>latitude</p>
      <input
        type="number"
        name="latitude"
        onChange={handleStartLocation}
        placeholder="Please enter coordinates"
        value={startLocation.latitude}
        required
      />
      <p>longitude</p>
      <input
        type="number"
        name="longitude"
        onChange={handleStartLocation}
        placeholder="Please enter coordinates"
        value={startLocation.longitude}
        required
      />
      <p>Address</p>
      <input
        type="text"
        name="address"
        onChange={handleStartLocation}
        placeholder="Please enter a vaild address"
        value={startLocation.address}
      />
      <p>Description</p>
      <input
        type="text"
        name="description"
        onChange={handleStartLocation}
        placeholder="Please enter a description of the place"
        value={startLocation.description}
      />
      <p>Location Images</p>
      {/* <input type="file" onChange={uploadImage} /> */}
      <input type="submit" />
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setStartLocation: (location) => dispatch(setStartLocation(location)),
});

export default connect(null, mapDispatchToProps)(StartLocation);
