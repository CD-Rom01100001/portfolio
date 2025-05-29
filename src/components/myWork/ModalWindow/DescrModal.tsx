import { FC } from 'react';
import type { ProjectType } from '../../../data/listWork';
import css from './DescrModal.module.css'
import { useAppSelector } from '../../../store/hooks';
import Slider from './Slider';

interface DescrModalProps {
  data: ProjectType[] | undefined
}

const DescrModal: FC<DescrModalProps> = ({data}) => {

  /* получаем имя активной карточки */
  const activeBlock = useAppSelector(state => state.activeBlock.activeBlock)
  
  /* на основании активной карточки формируем массив с объектами [{src: '/path/', id: 1}] */
  const activeBlockImages = data?.find((elem, i) => 
    elem.title.includes(activeBlock))
    ?.siteScreenshots.map((src, i) => ({src, id: i+1}))

  /* если нет изображений, не рендерим модалку */
  if (!activeBlockImages || activeBlockImages.length === 0) return null

  return (
    <div className={css.descrModal}>
      {/* слайдер */}
      <Slider images={activeBlockImages ?? []}/>
    </div>
  );
}

export default DescrModal;
