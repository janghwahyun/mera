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
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
        />
        <button type="submit">
          <span>검색</span>
        </button>
      </form>
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;
