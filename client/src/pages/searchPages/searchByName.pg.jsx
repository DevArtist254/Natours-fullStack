import { connect } from 'react-redux';
import { loadSearchItems } from './../../redux/search/search.actions';
import { useState } from 'react';

const SearchByName = ({ loadSearchItems }) => {
  const [query, setQuery] = useState({
    tourName: '',
    name: 'tourName',
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

    const { tourName, name } = query;

    loadSearchItems(tourName, name);
  }

  return (
    <>
      <form className="search-form" onSubmit={onSubmit}>
        <h2 className="tour__intro--footerSubHeader">Find by name</h2>
        <div className="search-input-form">
          <input
            type="text"
            placeholder="Enter your desired tour name"
            className="seach-input"
            name="tourName"
            value={query.tourName}
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

export default connect(null, mapDispatchToProps)(SearchByName);
