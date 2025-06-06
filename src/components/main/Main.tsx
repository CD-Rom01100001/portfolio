import { FC } from 'react';

import ScrollLink from './ScrollLink';
import FadeInSection from '../../utils/FadeInSection';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
// import { setActiveLanguage } from '../../store/slices/languageSlice';

import css from './main.module.css'

const Main: FC = () => {

    const language = useAppSelector(state => state.activeLanguage.activeLanguage)
    // const dispatch = useAppDispatch()

  return (
    <div className={css.main}>
      {/* <div className={css.language} onClick={()=>dispatch(setActiveLanguage())}>{language}</div> */}
      <div className={css.blockHeader}>
        <FadeInSection>
        <h1 className={css.mainHeader}>
          {language === 'RU' ?
          'Роман Чернышков' :
          'Roman Chernyshkov'}
            <span className={css.subheading}>
              {language === 'RU' ? 
              'фронтенд-разработчик' : 
              'front-end developer'}
            </span>
        </h1>
        </FadeInSection>
      </div>
      <ScrollLink/>
    </div>
  );
}

export default Main;