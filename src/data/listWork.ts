export type ProjectType = {
  title: string;
  description: string;
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
    description: 'Momentum - аналог одноимённого приложения интернет-магазина Chrome. Приложение показывает время и имя пользователя. Фоновое изображение и приветствие меняются в зависимости от времени суток. В приложении есть часы, слайдер изображений, виджеты погоды, аудиоплеер, блок цитата дня, настройки. Для хранения имени пользователя и населённого пункта используется локальное хранилище - local storage',
    siteLink: 'https://rolling-scopes-school.github.io/roman270488-JSFEPRESCHOOL2022Q4/momentum/',
    siteScreenshots: getImage('momentum', 3),
    lang: 'JavaScript'
  },
  {
    title: 'Minesweeper',
    description: 'Minesweeper — это браузерная реализация классической логической игры "Сапёр", разработанная мной с нуля на чистом JavaScript (без использования фреймворков). Игра предлагает пользователю расставить флажки на все мины, не наткнувшись на них, используя числа-подсказки.',
    siteLink: 'https://rolling-scopes-school.github.io/roman270488-JSFE2023Q1/minesweeper/',
    siteScreenshots: getImage('minesweeper', 3),
    lang: 'JavaScript'
  },
  {
    title: 'Shelter',
    description: 'Shelter — это адаптивный лендинг для приюта домашних животных. Он создан в рамках образовательного курса Rolling Scopes School и демонстрирует навыки верстки, адаптивного дизайна и работы с JavaScript без фреймворков.',
    siteLink: 'https://rolling-scopes-school.github.io/roman270488-JSFE2023Q1/shelter/',
    siteScreenshots: getImage('shelter', 3),
    lang: 'JavaScript'
  },
  {
    title: 'Staff Test',
    description: 'Это интерактивное клиентское приложение для прохождения тестов и тренировки знаний. Разработано с использованием современных технологий фронтенда: React, TypeScript, Redux Toolkit и React Router. Проект ориентирован на пользователей, которые хотят проверять и улучшать свои знания в формате тестирования.',
    siteLink: 'https://tests-react-typescript-redux-usfo.vercel.app/',
    siteScreenshots: getImage('staff_test', 3),
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