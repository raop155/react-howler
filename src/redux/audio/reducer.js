import { SET_AUDIO } from './types';

const initialState = {
  audio: ['Hello'],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUDIO:
      return { ...state, audio: action.payload };
    default:
      return state;
  }
};

export default reducer;
