import { FC } from 'react';
import LatestWork from './LatestWork';
import css from './myWork.module.css'
import FadeInSection from '../../utils/FadeInSection';
import AllWorks from './AllWorks';
import { useAppSelector } from '../../store/hooks';

const MyWork: FC = () => {

const language = useAppSelector(state => state.activeLanguage.activeLanguage)

  return (
    <div className={css.myWork}>
      <FadeInSection delay={0.2}>
        <h2 className={css.myWorkTitle}>
          {language === 'RU' ?
          'Мои работы' :
          'My Works'}
        </h2>
      </FadeInSection>
      <LatestWork/>
      <AllWorks/>
    </div>
  );
}

export default MyWork;