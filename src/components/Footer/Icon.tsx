import { FC } from 'react';
import css from './Icon.module.css'

interface IconProps {
  name: string,
  icon: React.FC<React.SVGProps<SVGSVGElement>>,
  src: string
}

const Icon: FC<IconProps> = ({name, icon: IconCompontnt, src}) => {

  return (
    <div className={css.icon}>
      <a href={src} title={name} target='_blank' rel='noreferrer'>
        <IconCompontnt />
        <IconCompontnt />
      </a>
    </div>
  );
}

export default Icon;