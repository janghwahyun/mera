import React, { useState } from 'react';
import MapContainer from './container/MapContainer';

function SearchPlace() {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const onChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  );
}

export default SearchPlace;
