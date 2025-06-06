import { mdiReact, mdiMonitor, mdiLanguageCss3 } from '@mdi/js';

type langType = {
  ru: string;
  en: string
}

type CardType = {
  title: langType;
  subtitle: langType;
  description: langType;
  icon: string;
  cName: string;
  id: number
}

export const myExperienceList: CardType[] = [
  {
    title: {
      ru: 'Software',
      en: 'Software'
    },
    subtitle: {
      ru: 'Development',
      en: 'Development'
    },
    description: {
      ru: 'Опыт разработки фронтенд технологий. JavaScript, TypeScript.',
      en: 'Experience in frontend technology development. JavaScript, TypeScript.'
    },
    icon: mdiMonitor,
    cName: 'one',
    id: 1
  },
  {
    title: {
      ru: 'Frontend Dev',
      en: 'Frontend Dev'
    },
    subtitle: {
      ru: 'React',
      en: 'React'
    },
    description: {
      ru: 'Применяю UI/UX-подход. Более 2 лет опыта разработки на HTML, CSS, JS и 1 год разработки на React + TS + Redux.',
      en: 'I apply UI/UX approach. More than 2 years of development experience in HTML, CSS, JS and 1 year of development in React + TS + Redux.'
    },
    icon: mdiReact,
    cName: 'two',
    id: 2
  },
  {
    title: {
      ru: 'Web Design',
      en: 'Web Design'
    },
    subtitle: {
      ru: 'CSS3, Figma',
      en: 'CSS3, Figma'
    },
    description: {
      ru: 'Умение создавать и проектировать визуальные эффекты и анимацию с помощью CSS3. В рамках разных проектов разрабатывал UI-макеты в Figma.',
      en: 'Ability to create and design visual effects and animations using CSS3. I have developed UI layouts in Figma within different projects.'
    },
    icon: mdiLanguageCss3,
    cName: 'three',
    id: 3
  },
]