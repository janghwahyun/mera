import React, { useRef, useState } from 'react';
import MapContainer from '../container/map_container';

function LandingPage() {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const inputRef = useRef();

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const onChange = e => {
    setInputText(e.target.value);
  };

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          placeholder="주소를 입력하세요..."
          type="search"
          onKeyPress={onkeypress}
          value={InputText}
        />

        <button type="submit" onClick={onclick}>
          검색
        </button>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  );
}

export default LandingPage;
