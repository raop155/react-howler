import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHowl, Play } from 'rehowl';

const AudioManager = () => {
  const audio = useSelector((state) => state.audio);

  // const [srcs] = useState(sources);
  const [index, setIndex] = useState(0);
  const { howl, state, error } = useHowl({ src: `../sounds/${audio[index]}` });

  useEffect(() => {
    setIndex(0);
  }, [audio]);

  useEffect(() => {
    // console.log('index now:', index, 'srcs.length:', srcs.length);
    // console.log('state', state);
    console.log('error', error);
    // console.log('----------------------------');
    if (error !== null) nextAudio();
  }, [error]);

  const nextAudio = () => {
    console.log('nextAudio');
    if (index + 1 === audio.length) {
    } else {
      setIndex(index + 1);
    }
  };

  const handleEnd = () => {
    console.log('** handleEnd **');
    nextAudio();
    // console.log('redux audio', `../sounds/${audio[index]}`);
  };

  const handlePlayError = (error) => {
    console.log('handlePlayError', error);
  };

  const handlePlay = () => {
    console.log('handlePlay');
    // console.log('redux audio', `../sounds/${audio[index]}`);
  };

  return (
    <>
      <Play howl={howl} onEnd={handleEnd} onPlay={handlePlay} />
    </>
  );
};

export default AudioManager;
