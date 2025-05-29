import { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { listWork, allProjects } from '../../data/listWork';
import WorkFilter from './WorkFilter';
import SelectedWork from '../../pages/SelectedWork';
import FadeInSection from '../../utils/FadeInSection';
import DescrModal from './ModalWindow/DescrModal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setActiveBlock } from '../../store/slices/activeBlockSlice';
import css from './allWorks.module.css';

const AllWorks: FC = () => {

  const activeBlock = useAppSelector(state => state.activeBlock.activeBlock)
  const dispatch = useAppDispatch()

  const location = useLocation();
  const selectedWork = listWork.find(elem => elem.path.includes(location.pathname))?.projects;

  return (
    <div className={css.allWorks}>
      <FadeInSection delay={0.2}>
        <nav className={css.navigateWork}>
          {listWork.map(link => (
            <WorkFilter path={link.path} nameLink={link.language} key={link.path} />
          ))}
        </nav>
      </FadeInSection>

      {/* 🔥 Оборачиваем Routes в AnimatePresence с key */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<SelectedWork data={allProjects} key="all" />} />
          <Route path="/js" element={<SelectedWork data={selectedWork} key="js" />} />
          <Route path="/react" element={<SelectedWork data={selectedWork} key="react" />} />
        </Routes>
      </AnimatePresence>
<AnimatePresence>
  {activeBlock && (
    <motion.div
      className={css.overlay}
      onClick={() => dispatch(setActiveBlock(''))}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <DescrModal data={selectedWork} />
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default AllWorks;