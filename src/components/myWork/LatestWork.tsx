import { FC, useState  } from 'react';
import videoFile from '../../assets/video/video_demonstration.mp4'
import css from './latestWork.module.css'
import FadeInSection from '../../utils/FadeInSection';

const LatestWork: FC = () => {

  const [isZoomed, setIsZoomed] = useState(false);

  const handleVideoClick = () => {
    setIsZoomed(prev => !prev);
  };

  return (
    <div className={css.latestWork}>
      
      <div className={css.blockDescription}>
        <FadeInSection delay={0.2}>
          <p className={css.description}>Это мой проект, над которым я сейчас работаю.</p>
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <p className={css.description}>Это интерактивное клиентское приложение для прохождения тестов и тренировки знаний. Разработано с использованием современных технологий фронтенда: React, TypeScript, Redux Toolkit и React Router. Проект ориентирован на пользователей, которые хотят проверять и улучшать свои знания в формате тестирования.</p>
        </FadeInSection>
        <FadeInSection delay={0.4}>
          <p className={`${css.description} ${css.titleList}`}>Дальнейшие плапны для развития этого проета:</p>
          <ul className={css.description}>
            <li>Подключение бэкенда (например, Express + MongoDB) для хранения результатов и статистики пользователей.</li>
            <li>Авторизация и личные кабинеты.</li>
            <li>Панель администратора для добавления и редактирования тестов.</li>
          </ul>
        </FadeInSection>
      </div>
      <div className={`${css.blockVideo} ${isZoomed ? css.zoomed : ''}`}>
        <video 
          className={css.video} 
          src={videoFile} 
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