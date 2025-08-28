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
            'Это интерактивное клиентское фулстэк-приложение для прохождения тестов и тренировки знаний. Разработано с использованием современных технологий.':
            'This is an interactive client application for taking tests and practicing knowledge. It is developed using modern technologies.'
            }
          </p>
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <div className={css.front}>
            <p className={`${css.description} ${css.titleList}`}>
              {language === 'RU' ?
              'Фронтенд:':
              'Frontend:'
              }
            </p>
            <ul className={css.description}>
              <li>React</li>
              <li>TypeScript</li>
              <li>Redux Toolkit</li>
              <li>React Router</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <div className={css.back}>
            <p className={`${css.description} ${css.titleList}`}>
              {language === 'RU' ?
              'Бэкенд:':
              'Backend:'
              }
            </p>
            <ul className={css.description}>
              <li>Node.js</li>
              <li>Express + MongoDB</li>
              <li>TypeScript</li>
              <li>JWT</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <p className={css.description}>
            {language === 'RU' ?
            'Проект предназначен для создания, управления и прохождения тестов, с акцентом на оценку профессиональной пригодности сотрудников юридических лиц, в том числе по навыкам работы с огнестрельным оружием и специальными средствами.':
            'The project is designed to create, conduct and pass tests focused on assessing the professional aptitude of employees of legal entities, including skills in handling firearms and special means.'
            }
          </p>
        </FadeInSection>
        <FadeInSection delay={0.4}>
          <p className={`${css.description} ${css.titleList}`}>
            {language === 'RU' ?
            'Основная функциональность:':
            'Main functionality:'
            }
            </p>
          <ul className={css.description}>
            <li>
              {language === 'RU' ?
              'Регистрация и авторизация пользователей с ролями "админ" и "пользователь".':
              'Registration and authorization of users with the roles "admin" and "user".'
              }
            </li>
            <li>
              {language === 'RU' ?
              'CRUD для тестов и вопросов (карточки с теоретическими и нормативными данными).':
              'CRUD for tests and questions (cards with theoretical and regulatory data).'
              }
            </li>
            <li>
              {language === 'RU' ?
              'Прохождение тестов с мгновенной проверкой и сохранением результатов.':
              'Passing tests with instant verification and saving of results.'
              }
            </li>
            <li>
              {language === 'RU' ?
              'Управление доступом к разделам платформы через роли и права.':
              'Managing access to platform sections through roles and permissions.'
              }
            </li>
            <li>
              {language === 'RU' ?
              'Защищённый REST API с валидацией входящих данных.':
              'Secure REST API with incoming data validation.'
              }
            </li>
          </ul>
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
              'Покрытие бэкенда юнит-тестами.':
              'Backend coverage with unit tests.'
              }
            </li>
            <li>
              {language === 'RU' ?
              'Проработка дизайна приложения.':
              'Work on the application design.'
              }
            </li>
          </ul>
        </FadeInSection>
      </div>
      
    </div>
  );
}

export default LatestWork;