import React, { useState, useEffect } from 'react';
// import ReactHowler from 'react-howler';
import { useHowl, Play } from 'rehowl';

const SoundManager = ({ sources }) => {
  const [srcs] = useState(sources);
  const [index, setIndex] = useState(0);
  const { howl, state, error } = useHowl({ src: srcs[index] });

  useEffect(() => {
    console.log('index now:', index, 'srcs.length:', srcs.length);
    console.log('----------------------------');
  }, [index, srcs]);

  const handleEnd = () => {
    console.log('** handleEnd **');
    if (index + 1 === srcs.length) {
    } else {
      setIndex(index + 1);
    }
  };

  const handlePlayError = (error) => {
    console.log('handlePlayError', error);
  };

  const handlePlay = () => {
    console.log('handlePlay');
  };

  return (
    <>
      <h2>Sound Manager</h2>
      <p>State: {state}</p>
      {error && (
        <div>
          id: {error.id} - message: {error.message}
        </div>
      )}
      <Play howl={howl} onEnd={handleEnd} onPlay={handlePlay} onPlayError={handlePlayError} />
      {/* <Play howl={howl} onEnd={handleEnd} /> */}
    </>
  );
};

export default SoundManager;
