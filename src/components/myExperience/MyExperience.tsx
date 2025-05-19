import { FC } from 'react';
import { myExperienceList } from '../../data/myExperienceList';
import Card from './Card';
import HtmlCodeBlock from './HtmlCodeBlock';

import css from './myExperience.module.css'
import FadeInSection from '../../utils/FadeInSection';

const MyExperience: FC = () => {

  return (
    <div className={css.myExperience} >
      <h2 id='next-section' className={css.experienceTitle}>Мой опыт</h2>

      <div className={css.wrapWorkHistory}>
        {myExperienceList.map((card, num) => {
          return (
            <Card 
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              icon={card.icon}
              cName={card.cName}
              num={num}
              key={card.id}
            />
          )
        })}
        <HtmlCodeBlock/>
      </div>
    </div>
  );
}

export default MyExperience;