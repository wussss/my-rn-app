import {applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

let middleWares = [thunk];
let enhancer = applyMiddleware(...middleWares);

function configureStore(initialState = {}): Store<RootState> {
  return createStore(rootReducer, initialState as RootState, enhancer);
}
export const store = configureStore();
export default store;

export interface RootState {
  my: MyInitState;
}
export type Dispatch = typeof store.dispatch;
export interface MyInitState {
  times: number;
}
