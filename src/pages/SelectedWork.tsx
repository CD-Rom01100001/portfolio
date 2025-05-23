import { FC } from 'react';
import type { ProjectType } from '../data/listWork';
import { motion } from 'framer-motion';
import css from './selectedWork.module.css';

interface SelectedWorkProps {
  data: ProjectType[] | undefined;
}

// Контейнер
const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

// Элементы
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: i * 0.1, // поочерёдное появление
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    scale: 0.9,
    y: 30,
    transition: {
      duration: 0.2,
      delay: i * 0.1, // поочерёдное исчезновение
    },
  }),
};

const SelectedWork: FC<SelectedWorkProps> = ({ data }) => {
  return (
    <motion.div
      className={css.selectedWork}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {data?.map((p, i) => (
        <motion.div
          className={css.project}
          key={p.title}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          layout
        >
          <div className={css.card} onClick={()=>console.log(p.title)}>
            <div className={css.blockImage}>
              <img src={p.siteScreenshots[0]} alt={p.title} className={css.image} />
            </div>
            <div className={css.blockNameProject}>
              <h3 className={css.nameProject}>{p.title}</h3>
              <p className={css.language}>{p.lang}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SelectedWork;
