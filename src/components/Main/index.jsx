import React from 'react';
import Catalog from '../Catalog';
import Select from '../Select';
import './styles.css';

export default function Main() {
  return (
    <main className="main" tabIndex="-1" id="main">
      <h1 className="main__heading" id="main-title">Товары для котов</h1>
      <div className="main__select-wrapper">
        <Select />
      </div>
      <Catalog />
      {/* <iframe
        title="Introducing A11ycasts! -- A11ycasts #01 YouTube video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HtTyRajRuyY"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      /> */}
    </main>
  );
}
