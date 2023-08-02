import React, { useState, useEffect } from 'react';
import './TimeAndDateDisplay.css';

const TimeAndDateDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
    };
    return time.toLocaleTimeString([], options);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <div>
      <div className="time">{formatTime(currentTime)}</div>
      <div className="date">{formatDate(currentTime)}</div>
    </div>
  );
};

export default TimeAndDateDisplay;