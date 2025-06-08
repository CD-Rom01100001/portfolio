import { FC } from 'react';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import { motion } from 'framer-motion';
import type { ProjectType } from '../../../data/listWork';
import Slider from './Slider';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setActiveBlock } from '../../../store/slices/activeBlockSlice';

import css from './DescrModal.module.css'

interface DescrModalProps {
  data: ProjectType[] | undefined
}

const DescrModal: FC<DescrModalProps> = ({data}) => {

  /* получаем имя активной карточки */
  const activeBlock = useAppSelector(state => state.activeBlock.activeBlock)
  const language = useAppSelector(state => state.activeLanguage.activeLanguage)

  const dispatch = useAppDispatch()

  // получаем существующие данные
  const existingData = data?.find(elem => elem.title.includes(activeBlock))
  
  /* на основании активной карточки формируем массив с объектами [{src: '/path/', id: 1}] */
  const activeBlockImages = existingData?.siteScreenshots.map((src, i) => ({src, id: i+1}))

  /* если нет данных или изображений — ничего не рендерим */
  if (!existingData || !activeBlockImages || activeBlockImages.length === 0) return null

  return (
    <motion.div
      className={css.descrModal}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={(e) => e.stopPropagation()}
    >

    <div className={css.descrModal}>
        <div className={css.crossWrap} onClick={()=>dispatch(setActiveBlock(''))}>
          <div className={css.cross}></div>
        </div>
        <Slider images={activeBlockImages ?? []}/>
        <div className={css.descrBlock}>
          <h2 className={css.modalTitle}>{existingData.title}</h2>
          <div className={css.description}>
            <p>
              {language === 'RU' ?
              existingData.description.ru:
              existingData.description.en}
            </p>
          </div>
          <div className={css.blockButton}>
            <a href={existingData.siteLink} 
              className={css.button} 
              target='_blank' 
              rel="noreferrer"
            >
              <Icon path={mdiOpenInNew} size={1} color="currentColor" /> 
              {language === 'RU' ?
              'просмотр сайта':
              'view site'}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
   
  );
}

export default DescrModal;
