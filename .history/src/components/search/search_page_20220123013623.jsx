import React, { useRef, useState } from 'react';
import MapContainer from '../container/map_container';

const SearchPlace = ({ onSearch }) => {
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
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <>
      <form className="inputForm">
        <input
          ref={inputRef}
          type="search"
          placeholder="Search..."
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          SEARCH
        </button>
      </form>

      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;
