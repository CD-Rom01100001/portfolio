import { mdiReact, mdiMonitor, mdiLanguageCss3 } from '@mdi/js';

type CardType = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  cName: string;
  id: number
}

export const myExperienceList: CardType[] = [
  {
    title: 'Software',
    subtitle: 'Development',
    description: 'Опыт разработки фронтенд технологий. JavaScript, TypeScript.',
    icon: mdiMonitor,
    cName: 'one',
    id: 1
  },
  {
    title: 'Frontend Dev',
    subtitle: 'React',
    description: 'Применяю UI/UX-подход. Более 2 лет опыта разработки на HTML, CSS, JS и 1 год разработки на React + TS + Redux.',
    icon: mdiReact,
    cName: 'two',
    id: 2
  },
  {
    title: 'Web Design',
    subtitle: 'CSS3, Figma',
    description: 'Умение создавать и проектировать визуальные эффекты и анимацию с помощью CSS3. В рамках разных проектов разрабатывал UI-макеты в Figma.',
    icon: mdiLanguageCss3,
    cName: 'three',
    id: 3
  },
]