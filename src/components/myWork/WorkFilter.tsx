import { FC } from 'react';
import css from './workFilter.module.css'
import { NavLink } from 'react-router-dom';

interface WorkFilterProps {
  path: string,
  nameLink: string
}

const WorkFilter: FC<WorkFilterProps> = ({path, nameLink}) => {

  return (
    <li className={css.workFilter}>
      <NavLink to={path} className={css.workLink}>{nameLink}</NavLink>
    </li>
  );
}

export default WorkFilter;