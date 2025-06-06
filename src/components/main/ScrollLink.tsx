import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import css from './scrollLink.module.css'

const ScrollLink: FC = () => {

  const language = useAppSelector(state => state.activeLanguage.activeLanguage)

  return (
    <div className={css.scrollLink}>
      <a href="#next-section" className={`${css.scrollDown} ${css.pageLink}`}>
        <svg width="24" height="40" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="#fff" strokeWidth="2" fill="none"/>
          <polygon points="12,28 8,24 16,24" fill="#fff">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 8; 0 0"
              dur="2s"
              repeatCount="indefinite" />
          </polygon>
        </svg>
        <span className={css.scrollText}>
          {language === 'RU' ?
          <>Прокрутка<br/>Вниз</>:
          <>Scroll<br/>Down</>}
        </span>
      </a>
    </div>
  );
}

export default ScrollLink;