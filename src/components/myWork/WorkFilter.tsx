import { FC } from 'react';
import css from './workFilter.module.css'
import { NavLink } from 'react-router-dom';

interface WorkFilterProps {
  path: string,
  nameLink: string
}

  type ActiveType = {
    isActive: boolean
  }

const setActive = ({isActive}: ActiveType): string => isActive ? css.active : ''

const WorkFilter: FC<WorkFilterProps> = ({path, nameLink}) => {
  return (
    <NavLink to={path} className={(props) => `${css.workLink} ${setActive(props)}`}>{nameLink}</NavLink>
  );
}

export default WorkFilter;