import React from 'react';

import Main from './components/Main';

import './App.css';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Main/>
      <div className="xxx">
        {Array.from({ length: 100 }).map((_, i) => (
          <p key={i}>Прокручиваемый элемент {i + 1}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
