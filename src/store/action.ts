const BATCH_TIMES = 'BATCH_TIMES';

export const asyncBatch = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: BATCH_TIMES, payload: Math.random() * 100});
    }, 0);
  };
};
