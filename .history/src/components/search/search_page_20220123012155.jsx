import React, { useState } from 'react';
import MapContainer from '../container/map_container';

const SearchPlace = () => {
  const [inputText, setInputText] = useState('');
  const [place, setPlace] = useState('');

  const onChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPlace(inputText);
    setInputText('');
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
        />
        <button type="submit">SEARCH</button>
      </form>
      <MapContainer searchPlace={searchPlace} />
    </>
  );
};

export default SearchPlace;
