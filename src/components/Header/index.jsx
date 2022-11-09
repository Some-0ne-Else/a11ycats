import React from 'react';
import './styles.css';

import { navData } from '../../mocks/index';

export default function Header() {
  return (
    <header role="banner">
      <nav role="navigation" className="header__nav" aria-label="Основная">
        <ul className="header__list">
          {navData.map(({ title, url }) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <li key={title}><a className="header__link" href={url}>{title}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
