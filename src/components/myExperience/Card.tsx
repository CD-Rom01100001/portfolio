import { FC } from 'react';
import Icon from '@mdi/react';
import css from './card.module.css'
import FadeInSection from '../../utils/FadeInSection';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  cName: string;
  icon: string;
  num: number
}

const Card: FC<CardProps> = ({title, subtitle, description, cName, icon, num}) => {

  return (
    <div className={css.cardWrap}>
      <FadeInSection delay={Number(`0.${num+1}`)}>
        <div className={css.card}>
          <div className={css.blockTitle}>
            <div className={css.iconWrap}>
              <Icon path={icon} size={5} color="#fff"/> 
            </div>
            <h3 className={css.titleCard}>
              <span className={`${css.titleCardTop} ${css[cName]}`}>{title}</span>
              <br/>
              {subtitle}
            </h3>
          </div>
          <p className={css.descriptionCard}>{description}</p>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Card;