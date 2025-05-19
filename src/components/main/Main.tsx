import { FC } from 'react';
import css from './main.module.css'
import ScrollLink from './ScrollLink';
import FadeInSection from '../../utils/FadeInSection';

const Main: FC = () => {

  return (
    <div className={css.main}>
      <div className={css.blockHeader}>
        <FadeInSection>
        <h1 className={css.mainHeader}>
          Роман Чернышков
            <span className={css.subheading}>front-end developer</span>
        </h1>
        </FadeInSection>
      </div>
      <ScrollLink/>
    </div>
  );
}

export default Main;