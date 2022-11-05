import React from 'react';
import Catalog from '../Catalog';
import Select from '../Select';
import Iframe from '../Iframe';
import About from '../About';
import './styles.css';

export default function Main() {
  return (
    <main className="main" tabIndex="-1" id="main">
      <h1 className="main__heading" id="main-title">Товары для котов</h1>
      <div className="main__select-wrapper">
        <Select />
      </div>
      <Catalog />
      <Iframe />
      <About />
    </main>
  );
}
