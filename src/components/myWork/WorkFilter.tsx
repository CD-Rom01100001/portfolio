import { FC } from 'react';
import css from './workFilter.module.css'
import { NavLink } from 'react-router-dom';

interface WorkFilterProps {
  path: string,
  nameLink: string
}

const WorkFilter: FC<WorkFilterProps> = ({path, nameLink}) => {

  return (
    <NavLink to={path} className={css.workLink}>{nameLink}</NavLink>
  );
}

export default WorkFilter;