import { SET_AUDIO } from './types';

export const setAudio = (audio) => {
  return {
    type: SET_AUDIO,
    payload: audio,
  };
};
