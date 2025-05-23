import { FC } from 'react';
import type { ProjectType } from '../../data/listWork';
import css from './DescrModal.module.css'

interface DescrModalProps {
  data: ProjectType[] | undefined
}

const DescrModal: FC<DescrModalProps> = ({data}) => {

  return (
    <div className={css.descrModal}>
      <div className={css.carouselWrap}>
        <div className={css.window}>
          <div className={css.carousel}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescrModal;
