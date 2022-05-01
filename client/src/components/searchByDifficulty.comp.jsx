import { connect } from 'react-redux';
import { loadSearchItems } from './../redux/search/search.actions';
import { useState } from 'react';

const SearchByDifficulty = ({ loadSearchItems }) => {
  const [query, setQuery] = useState({
    difficult: '',
    name: 'difficulty',
  });

  function handleSearch(e) {
    setQuery({
      difficult: e.target.value,
      name: 'difficulty',
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    const { difficult, name } = query;

    loadSearchItems(difficult, name);
  }

  return (
    <>
      <form className="search-form" onSubmit={onSubmit}>
        <h2 className="tour__intro--footerSubHeader">Find by difficult</h2>
        <div className="search-input-form">
          <select onChange={handleSearch}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
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

export default connect(null, mapDispatchToProps)(SearchByDifficulty);
