import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MapboxMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-43.9371484, -19.9332786], // PUC Minas coordinates
      zoom: 15,
    });

    // Add navigation controls to the map
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => map.remove(); // Limpar o mapa ao desmontar o componente
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default MapboxMap;
