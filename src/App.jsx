import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import AudioManager from './components/AudioManager';
import Module1 from './views/Module1';
import Module2 from './views/Module2';
import Module3 from './views/Module3';

function App() {
  // const sources = [
  //   '../sounds/test.mp3',
  //   '../sounds/click.mp3',
  //   '../sounds/test.mp3',
  //   '../sounds/click.mp3',
  // ];

  return (
    <>
      <h1>React - Rehowl</h1>
      <AudioManager />
      <Router>
        <Link to='/module1'>Module1</Link>
        <Link to='/module2'>Module2</Link>
        <Link to='/module3'>Module3</Link>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className='switch-wrapper'
        >
          <Route path='/' exact></Route>
          <Route path='/module1'>
            <Module1 />
          </Route>
          <Route path='/module2'>
            <Module2 />
          </Route>
          <Route path='/module3'>
            <Module3 />
          </Route>
        </AnimatedSwitch>
      </Router>
    </>
  );
}

export default App;
