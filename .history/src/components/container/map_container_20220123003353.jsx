import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.50326772177081, 126.94777446345785),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    // 키워드 검색을 요청하는 함수입니다
    function searchPlaces() {
      var keyword = document.getElementById('keyword').value;

      if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
      }

      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      ps.keywordSearch(keyword, placesSearchCB);
    }

    const ps = new kakao.maps.services.Places();
    // 키워드로 장소 검색
    ps.keywordSearch(searchPlace, placesSearchCB);
    // 키워드 검색 완료 시, 호출되는 콜백함수
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);
      }
    }
    // 지도에 마커를 표시하는 함수
    function displayMarker(place) {
      let marker = new kakao.maps.Marker(
        {
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        },
        [searchPlace]
      );

      // 마커에 클릭이벤트를 등록함
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출함
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
