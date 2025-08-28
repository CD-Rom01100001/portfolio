type langType = {
  ru: string;
  en: string
}

export type ProjectType = {
  title: string;
  description: langType;
  siteLink: string;
  siteScreenshots: string[];
  lang: string
}

type ListWorkType = {
  language: string;
  path: string;
  projects: ProjectType[]
}

const basePath = '/assets/images/site_screenshots/'

const getImage = (prefix: string, count: number): string[] => {
  const arr: string[] = []
  for (let i = 1; i <= count; i++) {
    arr.push(`${basePath}${prefix}${i}.png`)
  }
  return arr
}

export const allProjects: ProjectType[] = [
  {
    title: 'Momentum',
    description: {
      ru: 'Momentum - аналог одноимённого приложения интернет-магазина Chrome. Приложение показывает время и имя пользователя. Фоновое изображение и приветствие меняются в зависимости от времени суток. В приложении есть часы, слайдер изображений, виджеты погоды, аудиоплеер, блок цитата дня, настройки. Для хранения имени пользователя и населённого пункта используется локальное хранилище - local storage. Создано в рамках обучения в онлайн школе программирования RS School.',
      en: "Momentum is an analog of the Chrome Web Store app of the same name. The app shows the time and the user's name. The background image and greeting change depending on the time of day. The app has a clock, image slider, weather widgets, audio player, quote of the day block, and settings. Local storage - local storage is used to store username and locality. Created as part of the training at the online programming school RS School."
    },
    siteLink: 'https://rolling-scopes-school.github.io/roman270488-JSFEPRESCHOOL2022Q4/momentum/',
    siteScreenshots: getImage('momentum', 3),
    lang: 'JavaScript'
  },
  {
    title: 'Minesweeper',
    description: {
      ru: 'Minesweeper — это браузерная реализация классической логической игры "Сапёр", разработанная мной с нуля на чистом JavaScript (без использования фреймворков). Игра предлагает пользователю расставить флажки на все мины, не наткнувшись на них, используя числа-подсказки. Создано в рамках обучения в онлайн школе программирования RS School.',
      en: 'Minesweeper is a browser-based implementation of the classic logic game “Minesweeper”, developed by me from scratch in pure JavaScript (without using frameworks). The game asks the user to place checkboxes on all mines without bumping into them, using number hints. Created as part of RS School online programming school training.'
    },
    siteLink: 'https://rolling-scopes-school.github.io/roman270488-JSFE2023Q1/minesweeper/',
    siteScreenshots: getImage('minesweeper', 3),
    lang: 'JavaScript'
  },
  {
    title: 'Shelter',
    description: {
      ru: 'Shelter — это адаптивный лендинг для приюта домашних животных. Он создан в рамках образовательного курса Rolling Scopes School и демонстрирует навыки верстки, адаптивного дизайна и работы с JavaScript без фреймворков. Создано в рамках обучения в онлайн школе программирования RS School.',
      en: "Shelter is an adaptive webpage for a pet shelter. It was created as part of the Rolling Scopes School educational course and demonstrates layout, responsive design and JavaScript skills without frameworks. Created as part of RS School's online programming school training."
    },
    siteLink: 'https://rolling-scopes-school.github.io/roman270488-JSFE2023Q1/shelter/',
    siteScreenshots: getImage('shelter', 3),
    lang: 'JavaScript'
  },
  {
    title: 'Staff Test',
    description: {
      ru: 'Это интерактивное клиентское приложение для прохождения тестов и тренировки знаний. Разработано с использованием современных технологий фронтенда: React, TypeScript, Redux Toolkit и React Router и бэкенда: Node.js, Express + MongoDB, TypeScript, JWT. Проект предназначен для создания, управления и прохождения тестов, с акцентом на оценку профессиональной пригодности сотрудников юридических лиц, в том числе по навыкам работы с огнестрельным оружием и специальными средствами.',
      en: 'This is an interactive client application for testing and training knowledge. It was developed using modern front-end technologies: React, TypeScript, Redux Toolkit, and React Router, and back-end technologies: Node.js, Express + MongoDB, TypeScript, and JWT. The project is designed to create, manage, and take tests, with an emphasis on assessing the professional suitability of legal entity employees, including their skills in handling firearms and special equipment.'
    },
    siteLink: 'https://tests-react-typescript-redux-client.onrender.com/',
    siteScreenshots: getImage('staff_test', 3),
    lang: 'React TS'
  },
  {
    title: 'My Portfolio',
    description: {
      ru: 'Это одностраничное приложение, развернутое на собственном домене — https://www.romancherdev.ru. Проект служит визитной карточкой, демонстрируя навыки, опыт и реализованные кейсы в области фронтенд-разработки. Данный проект разработан с использыванием React, TypeScript, Redux Toolkit и React Router. Так-же были использованы CSS-модули и современные CSS-анимации для изолированного стиля и плавных переходов.',
      en: 'This is a one-page application deployed on its own domain — https://www.romancherdev.ru. The project serves as a business card, demonstrating skills, experience, and completed projects in the field of front-end development. This project was developed using React, TypeScript, Redux Toolkit, and React Router. CSS modules and modern CSS animations were also used for isolated styling and smooth transitions.'
    },
    siteLink: 'https://www.romancherdev.ru/',
    siteScreenshots: getImage('portfolio', 3),
    lang: 'React TS'
  }
]

export const listWork: ListWorkType[] = [
  {
    language: 'All',
    path: '/',
    projects: allProjects
  },
  {
    language: 'JavaScript',
    path: '/js',
    projects: allProjects.filter(elem => elem.lang.includes('JavaScript'))
  },
  {
    language: 'React',
    path: '/react',
    projects: allProjects.filter(elem => elem.lang.includes('React TS'))
  }
]