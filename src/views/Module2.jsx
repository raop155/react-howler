import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAudio } from '../redux';

const Module2 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAudio(['error.mp3']));
  }, [dispatch]);

  return <div>Module2</div>;
};

export default Module2;
