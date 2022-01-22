import React, { useState } from 'react';
import MapContainer from '../container/map_container';

function LandingPage() {
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
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="주소를 입력하세요..."
          onChange={onChange}
          value={InputText}
        />
        <input
          placeholder="회사 이름을 입력하세요..."
          onChange={onChange}
          value={InputText}
        />
        <input
          placeholder="상세주소를 입력하세요..."
          onChange={onChange}
          value={InputText}
        />
        <input
          placeholder="배송 시 유의사항을 입력하세요..."
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  );
}

export default LandingPage;
