import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SoundManager from './components/SoundManager';

function App() {
  const sources = [
    '../sounds/test.mp3',
    '../sounds/click.mp3',
    '../sounds/test.mp3',
    '../sounds/click.mp3',
  ];

  return (
    <>
      <h1>React rehowl</h1>

      <Router>
        <Switch>
          <Route path='/' exact>
            <SoundManager sources={sources} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
