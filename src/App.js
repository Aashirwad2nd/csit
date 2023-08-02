import React, { useEffect, useState } from 'react';
import Animation from './Animation';
import CustomPage from './CustomPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the animation for a few seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the delay as needed
  }, []);

  return (
    <div>
      {isLoading ? (
        <Animation />
      ) : (
        <div><CustomPage /></div>
      )}
    </div>
  );
  
};

export default App;