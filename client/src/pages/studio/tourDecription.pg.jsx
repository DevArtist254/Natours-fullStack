import { connect } from 'react-redux';
import { useState } from 'react';
import { setDescription } from './../../redux/studio/studio.actions';

function Description({ setDescription }) {
  const [tour, setTour] = useState({
    name: '',
    description: '',
    summary: '',
    duration: 0,
    maxGroupSize: 0,
    price: 0,
    difficulty: '',
    imageCover: '',
  });

  const [date, setDate] = useState([]);

  //setTheArray(oldArray => [...oldArray, newElement]);
  function handleDate(e) {
    //Storing value of the event
    const newDate = e.target.value;

    //adding new items to an array
    setDate((oldDates) => [...oldDates, newDate]);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setTour((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDescription(tour);
  }

  return (
    <form className="user-nav__decription" onSubmit={handleSubmit}>
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
          value={date}
          onChange={handleDate}
        />
      </div>
      <div>
        <label>Difficulty</label>
        <input
          type="text"
          name="difficulty"
          value={tour.difficulty}
          onChange={handleChange}
          placeholder="Please enter easy or medium or difficult"
          required
        />
      </div>
      <div>
        <label>Image Cover</label>
        <input
          type="text"
          name="imageCover"
          value={tour.imageCover}
          onChange={handleChange}
          placeholder="Please enter easy or medium or difficult"
          required
        />
      </div>

      <input type="submit" />
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setDescription: (description) => dispatch(setDescription(description)),
});

export default connect(null, mapDispatchToProps)(Description);
