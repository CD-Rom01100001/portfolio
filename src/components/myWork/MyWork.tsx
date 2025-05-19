import { FC } from 'react';
import LatestWork from './LatestWork';
import css from './myWork.module.css'
import FadeInSection from '../../utils/FadeInSection';

const MyWork: FC = () => {

  return (
    <div className={css.myWork}>
      <FadeInSection delay={0.2}>
        <h2 className={css.myWorkTitle}>My Works</h2>
      </FadeInSection>
      <LatestWork/>
    </div>
  );
}

export default MyWork;