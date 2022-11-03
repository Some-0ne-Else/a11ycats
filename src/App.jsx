import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import SkipLink from './components/SkipLink';

import './App.css';

function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <Main />
    </>
  );
}

export default App;
