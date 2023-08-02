import React, { useState, useEffect } from 'react';
import './LocationDisplay.css';

const LocationDisplay = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
    }
  }, []);

  return (
    <div>
      {location ? (
        <p>
            <div className="latitude">LATI: {location.latitude} °</div>
            <div className="longitude">LONG: {location.longitude} °</div>
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationDisplay;