import { FC, useState  } from 'react';
import css from './latestWork.module.css'
import FadeInSection from '../../utils/FadeInSection';
import { useAppSelector } from '../../store/hooks';

const LatestWork: FC = () => {

  const language = useAppSelector(state => state.activeLanguage.activeLanguage)
  const [isZoomed, setIsZoomed] = useState(false);

  const handleVideoClick = () => {
    setIsZoomed(prev => !prev);
  };

  return (
    <div className={css.latestWork}>
      
      <div className={css.blockDescription}>
        <FadeInSection delay={0.2}>
          <p className={css.description}>
            {language === 'RU' ?
            'Это мой проект, над которым я сейчас работаю.':
            "This is my project that I'm working on right now."
            }
          </p>
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <p className={css.description}>
            {language === 'RU' ?
            'Это интерактивное клиентское приложение для прохождения тестов и тренировки знаний. Разработано с использованием современных технологий фронтенда: React, TypeScript, Redux Toolkit и React Router. Проект ориентирован на пользователей, которые хотят проверять и улучшать свои знания в формате тестирования.':
            'This is an interactive client application for taking tests and practicing knowledge. It is developed using modern frontend technologies: React, TypeScript, Redux Toolkit and React Router. The project is aimed at users who want to test and improve their knowledge in a testing format'
            }
          </p>
        </FadeInSection>
        <FadeInSection delay={0.4}>
          <p className={`${css.description} ${css.titleList}`}>
            {language === 'RU' ?
            'Дальнейшие плапны для развития этого проета:':
            'Further plapns for the development of this proet:'
            }
            </p>
          <ul className={css.description}>
            <li>
              {language === 'RU' ?
              'Подключение бэкенда (например, Express + MongoDB) для хранения результатов и статистики пользователей.':
              'Connecting a backend (e.g. Express + MongoDB) to store results and user statistics.'
              }
            </li>
            <li>
              {language === 'RU' ?
              'Авторизация и личные кабинеты.':
              'Authorization and personal accounts.'
              }
            </li>
            <li>
              {language === 'RU' ?
              'Панель администратора для добавления и редактирования тестов.':
              'Admin panel for adding and editing tests.'
              }
            </li>
          </ul>
        </FadeInSection>
      </div>
      <div className={`${css.blockVideo} ${isZoomed ? css.zoomed : ''}`}>
        <video 
          className={css.video} 
          src='/assets/video/video_demonstration.mp4' 
          autoPlay 
          loop 
          muted 
          playsInline 
          onClick={handleVideoClick}
        />
      </div>
    </div>
  );
}

export default LatestWork;