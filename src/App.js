import React from 'react';

import Root from './Router';
import CardSchemeState from './context/cardSchemeState'

function App() {
  return (
    <CardSchemeState>
        <Root />
    </CardSchemeState>
  );
}

export default App;
