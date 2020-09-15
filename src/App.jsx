import React from 'react';
import SoundManager from './components/SoundManager';

function App() {
  const sources = [
    '../sounds/test.mp3',
    '../sounds/click.mp3',
    '../sounds/test.mp3',
    '../sounds/click.mp3',
  ];

  return (
    <div className='App'>
      <h1>React rehowl</h1>
      <SoundManager sources={sources} />
    </div>
  );
}

export default App;
