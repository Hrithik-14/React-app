import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const appStyle = {
    backgroundColor: isDarkTheme ? 'black' : 'white',
    color: isDarkTheme ? '#white' : 'black',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={appStyle}>
      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default App;