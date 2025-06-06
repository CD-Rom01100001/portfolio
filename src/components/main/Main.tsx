import { FC } from 'react';

import ScrollLink from './ScrollLink';
import FadeInSection from '../../utils/FadeInSection';
import { useAppSelector } from '../../store/hooks';

import css from './main.module.css'

const Main: FC = () => {

  const language = useAppSelector(state => state.activeLanguage.activeLanguage)

  return (
    <div className={css.main}>
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