import { createStore } from 'redux';
import audioReducer from './audio/reducer';

const store = createStore(audioReducer);

export default store;
