import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAudio } from '../redux';

const Module1 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAudio(['error.mp3', 'test.mp3', 'click.mp3', 'click.mp3']));
  }, [dispatch]);

  return <div>Module1</div>;
};

export default Module1;
