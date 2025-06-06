import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AnimatedBackground from './components/AnimatedBackground';
import Main from './components/main/Main';
import MyExperience from './components/myExperience/MyExperience';
import MyWork from './components/myWork/MyWork';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';

import { useAppSelector, useAppDispatch } from './store/hooks';
import { setActiveLanguage } from './store/slices/languageSlice';

import './App.css';

function App() {

  const language = useAppSelector(state => state.activeLanguage.activeLanguage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    document.querySelector('a[href="#next-section"]')?.addEventListener('click', () => {
      console.log('Scroll link clicked');
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">

        <div className="contentWrap">

          <div className="language" onClick={()=>dispatch(setActiveLanguage())}>{language}</div>
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
        </div>

        <footer>
          <Footer/>
        </footer>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
