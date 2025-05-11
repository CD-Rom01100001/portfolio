import { FC } from 'react';
import css from './main.module.css'
import ScrollLink from './ScrollLink';

const Main: FC = () => {

  return (
    <div className={css.main}>
      <h1 className={css.mainHeader}>
        Роман Чернышков
        <span className={css.subheading}>front-end developer</span>
      </h1>
      <ScrollLink/>
    </div>
  );
}

export default Main;