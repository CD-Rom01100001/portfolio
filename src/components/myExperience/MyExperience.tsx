import { FC } from 'react';
import { myExperienceList } from '../../data/myExperienceList';
import Card from './Card';
import HtmlCodeBlock from './HtmlCodeBlock';
import { useAppSelector } from '../../store/hooks';
import FadeInSection from '../../utils/FadeInSection';

import css from './myExperience.module.css'

const MyExperience: FC = () => {

const language = useAppSelector(state => state.activeLanguage.activeLanguage)

  return (
    <div className={css.myExperience} >
      <h2 id='next-section' className={css.experienceTitle}>
        {language === 'RU' ?
        'Мой опыт' :
        'My experience'}
      </h2>

      <div className={css.wrapWorkHistory}>
        {myExperienceList.map((card, num) => {
          return (
            <Card 
              title={language === 'RU' ? card.title.ru : card.title.en}
              subtitle={language === 'RU' ? card.subtitle.ru : card.subtitle.en}
              description={language === 'RU' ? card.description.ru : card.description.en}
              icon={card.icon}
              cName={card.cName}
              num={num}
              key={card.id}
            />
          )
        })}
        
        <div className={css.jokeBlock}>
          <FadeInSection delay={0.4}>
            <p>
              {language === 'RU' ? 
              (
                <>Ой.<br/>Не хватило блоков!🤷‍♂️</>
              ) : 
              (
                <>Oops.<br/>Not enough blocks!🤷‍♂️</>
              )
              }
            </p>
          </FadeInSection>
        </div>
        
        <HtmlCodeBlock/>
      </div>
    </div>
  );
}

export default MyExperience;