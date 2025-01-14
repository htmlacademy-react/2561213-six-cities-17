import 'leaflet/dist/leaflet.css';
import { Icon, Marker, layerGroup } from 'leaflet';
import React, { useEffect, useRef } from 'react';

import { useMap } from '../../hooks';

export type TCity = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type TPoint = {
  title: string;
  lat: number;
  lng: number;
};

export type TMap = {
  city: TCity;
  points: TPoints;
  selectedPoint: TPoint | undefined;
};

export type TPoints = TPoint[];

const defaultCustomIcon = new Icon({
  iconUrl: '../../../public/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: '../../../public/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function OfferMap(props: TMap): React.ReactElement {
  const { city, points, selectedPoint } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
      ref={mapRef}
    />
  );
}

export default OfferMap;
