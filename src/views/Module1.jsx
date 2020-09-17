import React, { useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import { useDispatch } from 'react-redux';
import { setAudio } from '../redux';

import Child1 from '../components/module1/Child1';
import Child2 from '../components/module1/Child2';

const Module1 = (props) => {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();

  console.log(props);

  // console.log('path', path);
  // console.log('url', url);
  // console.log('params', params);

  console.log(`${url}/child1`);
  console.log(`${path}/child1`);

  useEffect(() => {
    dispatch(setAudio(['click.mp3']));
  }, [dispatch]);

  return (
    <>
      <div id='Module1'>
        <h2>Module1</h2>
        <Link to={`${url}/child1`}>Child1</Link>
        <Link to={`${url}/child2`}>Child2</Link>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className='switch-wrapper'
        >
          <Route path={`${path}/child1`}>
            <Child1 />
          </Route>
        </AnimatedSwitch>
      </div>
    </>
  );
};

export default Module1;
