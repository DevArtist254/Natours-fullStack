import { connect } from 'react-redux';
import { loadSearchItems } from './../redux/search/search.actions';
import { useState } from 'react';

const SearchByPrice = ({ loadSearchItems }) => {
  const [query, setQuery] = useState({
    price: '',
    name: 'price',
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

    const { price, name } = query;

    loadSearchItems(price, name);
  }

  return (
    <>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="Enter your desired tour name"
          className="seach-input"
          name="price"
          value={query.price}
          onChange={handleSearch}
        />
        <label className="search-label">Enter your desired tour name</label>
        <input type="submit" className="sec-btn" />
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadSearchItems: (tourName, name) =>
    dispatch(loadSearchItems(tourName, name)),
});

export default connect(null, mapDispatchToProps)(SearchByPrice);
