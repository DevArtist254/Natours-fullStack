import { connect } from 'react-redux';
import { loadSearchItems } from './../redux/search/search.actions';
import { useState } from 'react';

const SearchByDuration = ({ loadSearchItems }) => {
  const [query, setQuery] = useState({
    duration: '',
    name: 'durationGte',
  });

  function handleSearch(e) {
    const { name, value } = e.target;

    setQuery((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    const { duration, name } = query;

    loadSearchItems(duration, name);
  }

  return (
    <>
      <form className="search-form" onSubmit={onSubmit}>
        <h2 className="tour__intro--footerSubHeader">Find by duration</h2>
        <div className="search-input-form">
          <input
            type="Number"
            placeholder="Enter your duration for your tour"
            className="seach-input"
            name="duration"
            value={query.duration}
            onChange={handleSearch}
          />
          <label className="search-label">Enter your desired tour name</label>
          <input type="submit" className="tri-btn" />
        </div>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadSearchItems: (tourName, name) =>
    dispatch(loadSearchItems(tourName, name)),
});

export default connect(null, mapDispatchToProps)(SearchByDuration);
