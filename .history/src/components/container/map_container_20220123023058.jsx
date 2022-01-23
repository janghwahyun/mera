import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }
    // 현재 나의 위치
    const locationLoadSuccess = pos => {
      const currentPos = new kakao.maps.LatLng(
        pos.coords.latitude,
        pos.coords.longitude
      );
      map.panTo(currentPos);
    };
    navigator.geolocation.getCurrentPosition(locationLoadSuccess);

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(33.450701, 126.570667), // 위도, 경도 입력
    });

    marker.setMap(null);
    marker.setMap(map);
    function displayMarker(place) {
      let marker = new kakao.maps.Marker(
        {
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        },
        [searchPlace]
      );

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            '</div>'
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);

  return (
    <div
      id="myMap"
      style={{
        width: '500px',
        height: '500px',
      }}
    ></div>
  );
};

export default MapContainer;
