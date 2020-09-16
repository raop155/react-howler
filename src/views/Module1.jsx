import React, { useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAudio } from '../redux';

import Child1 from '../components/module1/Child1';
import Child2 from '../components/module1/Child2';

const Module1 = (props) => {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    dispatch(setAudio(['click.mp3']));
  }, [dispatch]);

  return (
    <>
      <h2>Module1</h2>
      <Link to={`${url}/child1`}>Child1</Link>
      <Link to={`${url}/child2`}>Child2</Link>
      <Switch>
        <Route path={`${path}/child1`} exact>
          <Child1 />
        </Route>
        <Route path={`${path}/child2`} exact>
          <Child2 />
        </Route>
      </Switch>
    </>
  );
};

export default Module1;
