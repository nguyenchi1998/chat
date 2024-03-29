import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../_reducers'
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
