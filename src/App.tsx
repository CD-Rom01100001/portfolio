import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AnimatedBackground from './components/AnimatedBackground';
import Main from './components/main/Main';
import MyExperience from './components/myExperience/MyExperience';
import MyWork from './components/myWork/MyWork';
import Contact from './components/contact/Contact';

import './App.css';

function App() {

  useEffect(() => {
    document.querySelector('a[href="#next-section"]')?.addEventListener('click', () => {
      console.log('Scroll link clicked');
    });
  }, []);

  return (
    <BrowserRouter>
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
          <section>
            <Contact/>
          </section>
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
