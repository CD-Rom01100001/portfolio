import React, { useEffect } from 'react';

import Main from './components/main/Main';

import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import MyExperience from './components/myExperience/MyExperience';
import MyWork from './components/myWork/MyWork';
import FadeInSection from './utils/FadeInSection';

function App() {

  useEffect(() => {
  document.querySelector('a[href="#next-section"]')?.addEventListener('click', () => {
    console.log('Scroll link clicked');
  });
}, []);

  return (
    <div className="app">
      <AnimatedBackground />
      <header className='header'>
        <Main/>
      </header>
      <main>
        <section>
          <MyExperience/>
        </section>
        <section>
          <MyWork/>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
