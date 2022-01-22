import React, { useRef, useState } from 'react';
import MapContainer from '../container/map_container';

function LandingPage({ onSearch }) {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const inputRef = useRef();

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
      <form>
        <input
          ref={inputRef}
          placeholder="주소를 입력하세요..."
          type="search"
          onKeyPress={onKeyPress}
          value={InputText}
        ></input>

        <button type="submit" onClick={onClick}>
          SEARCH
        </button>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  );
}

export default LandingPage;
