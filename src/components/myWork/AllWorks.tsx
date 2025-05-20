import { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { listWork, allProjects } from '../../data/listWork';
import WorkFilter from './WorkFilter';

import css from './allWorks.module.css'
import SelectedWork from '../../pages/SelectedWork';

const AllWorks: FC = () => {

  const location = useLocation()
  const selectedWork = listWork.find(elem => elem.path.includes(location.pathname))?.projects
  console.log(selectedWork)

  return (
    <div className={css.allWorks}>
      <nav className={css.navigateWork}>
        {listWork.map(link => {
          return (
            <WorkFilter path={link.path} nameLink={link.language} key={link.path}/>
          )
        })}
      </nav>
      <Routes>
        <Route index element={<SelectedWork data={allProjects}/>}/>
        <Route path='/js' element={<SelectedWork data={selectedWork}/>}/>
        <Route path='/react' element={<SelectedWork data={selectedWork}/>}/>
      </Routes>
    </div>
  );
}

export default AllWorks;