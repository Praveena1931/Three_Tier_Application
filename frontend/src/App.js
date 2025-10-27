
import React, { useEffect, useState } from 'react';

function App() {
  const [apiResponse, setApiResponse] = useState('Loading...');

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL || 'http://backend:3000/')
      .then(res => res.json())
      .then(data => setApiResponse(data.message))
      .catch(() => setApiResponse('Error connecting to backend'));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to the 3-Tier App 🚀</h1>
      <p>Frontend is working ✅</p>
      <p>Backend says: <b>{apiResponse}</b></p>
    </div>
  );
}

export default App;
