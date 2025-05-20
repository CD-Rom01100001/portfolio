import { FC } from 'react';
import css from './selectedWork.module.css'

type ProjectType = {
  title: string;
  description: string;
  siteLink: string;
  siteScreenshots: string[];
  lang: string
}


interface SelectedWorkProps {
  data: ProjectType[] | undefined
}

const SelectedWork: FC<SelectedWorkProps> = ({data}) => {

  return (
    <div className={css.selectedWork}>
      {data?.map((p, i) => (
        <div className={css.project} key={i}>
          <div className={css.blockImage}>
            <img src={p.siteScreenshots[0]} alt={p.title} className={css.image} />
          </div>

          <div className={css.blockNameProject}>
            <h3 className={css.nameProject}>{p.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectedWork;