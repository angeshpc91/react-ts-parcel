import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@hooks/useRedux';
import { MapContainer, MapRef, SuperAwesomePin } from './Maps.style';

interface IMap {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
  lat: number;
  lng: number;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

// const Marker: React.FC<{ lat: number, lng: number }> = (props) => {
//   return <SuperAwesomePin className='mapMarker' >hello asdasd</SuperAwesomePin>
// }

const Maps: React.FC<IMap> = ({
  mapTypeControl = false,
  mapType,
  lat,
  lng
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [themeChange, setThemeChange] = useState(0);
  const theme = useAppSelector((state) => state.user.theme);

  useEffect(() => {
    setThemeChange(themeChange + 1);
    defaultMapStart();
  }, [theme]);

  const [map, setMap] = useState<GoogleMap>();
  const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
    if (ref.current) {
      const mapX = new google.maps.Map(ref.current, {
        zoom: zoomLevel,
        center: address,
        mapTypeControl, // boolean
        streetViewControl: false,
        rotateControl: false,
        scaleControl: true,
        fullscreenControl: false,
        panControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative',
        mapTypeId: mapType, //  ROADMAP, SATELLITE, TERRAIN or HYBRID
        draggableCursor: 'pointer',
        styles: theme === 'light'
          ? []
          : [
              {
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#242f3e'
                  }
                ]
              },
              {
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#746855'
                  }
                ]
              },
              {
                elementType: 'labels.text.stroke',
                stylers: [
                  {
                    color: '#242f3e'
                  }
                ]
              },
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#d59563'
                  }
                ]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#d59563'
                  }
                ]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#263c3f'
                  }
                ]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#6b9a76'
                  }
                ]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#38414e'
                  }
                ]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [
                  {
                    color: '#212a37'
                  }
                ]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9ca5b3'
                  }
                ]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#746855'
                  }
                ]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                  {
                    color: '#1f2835'
                  }
                ]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#f3d19c'
                  }
                ]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#2f3948'
                  }
                ]
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#d59563'
                  }
                ]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#17263c'
                  }
                ]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#515c6d'
                  }
                ]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [
                  {
                    color: '#17263c'
                  }
                ]
              }
            ]
      });

      setTimeout(() => setMap(mapX));
    }
  };

  new google.maps.Marker({
    position: { lat, lng },
    map
  });

  const defaultMapStart = (): void => {
    const defaultAddress = new google.maps.LatLng(lat, lng);
    initMap(19, defaultAddress);
  };

  useEffect(() => {
    if (!map) {
      defaultMapStart();
    }
  }, [map, themeChange]);

  return (
    <MapContainer className="map-container">
      <MapRef ref={ref} className="map-container__map">
        <SuperAwesomePin > lets see</SuperAwesomePin>
      </MapRef>
    </MapContainer >
  );
};

export default Maps;
