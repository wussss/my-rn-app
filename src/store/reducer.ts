import {combineReducers} from 'redux';

const initialState = {
  times: 0,
};
const my = (
  prevState = initialState,
  action: {type: string; payload?: any},
) => {
  const {type, payload} = action;
  switch (type) {
    case 'BATCH_TIMES':
      return {...prevState, times: payload};
    default:
      return prevState;
  }
};
const rootReducer = combineReducers({
  my,
});
export default rootReducer;
