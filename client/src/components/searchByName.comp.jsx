import React, { useState } from 'react';
import axios from 'axios';

const SearchByName = () => {
  const [query, setQuery] = useState('');

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios({
        method: 'GET',
        url: `http://localhost:2540/natours/v1/tours?name=${query}`,
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your desired tour name"
          className="seach-input"
          onChange={handleSearch}
        />
        <label className="search-label">Enter your desired tour name</label>
        <input type="submit" className="sec-btn" />
      </form>
    </>
  );
};

export default SearchByName;
