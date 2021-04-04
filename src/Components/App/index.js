import React from 'react';
import Home from '../../views/Home';
import { TranslatorProvider } from '../TranslatorProvider';

function App({}) {

  return(
    <TranslatorProvider defaultLang={"english"}>
      <Home />
    </TranslatorProvider>
  )
}

export default App;
