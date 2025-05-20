import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { listWork } from '../../data/listWork';
import WorkFilter from './WorkFilter';

import css from './allWorks.module.css'

const AllWorks: FC = () => {

console.log(listWork[0].projects[0].siteScreenshots[0])

  return (
    <div className={css.allWorks}>
      <ul>
        {listWork.map(link => {
          return (
            <WorkFilter path={link.path} nameLink={link.language}/>
          )
        })}
      </ul>
    </div>
  );
}

export default AllWorks;