import * as React from 'react';
import { FC } from 'react';
import { contactMethods } from '../../data/contactMethods';


import Icon from './Icon'

import css from './Footer.module.css'

const Footer: FC = () => {

  const year = new Date().getFullYear( )

  return (
    <div className={css.footer}>
      <div className={css.contactsMethodsBlock}>
        {contactMethods.map((icon, i) => {
          return (
            <Icon name={icon.name} icon={icon.icon} src={icon.src} key={i}/>
          )
        })}
      </div>
      <div className={css.copyrightBlock}>
        <p>Roman Chernyshkov <span>&copy;{year}</span></p>
      </div>
    </div>
  );
}

export default Footer;