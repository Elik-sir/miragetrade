import { ASYNC_START, ASYNC_END } from './constants';
//Проверка экшена на ассинхронность
const promiseMiddleware = (store) => (next) => (action) => {
  //Если action.payload ассинхронная функция, то начинается ассинхронный запрос
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    const currentView = store.getState().viewChangeCounter;
    const skipTracking = action.skipTracking;

    action.payload.then(
      (res) => {
        const currentState = store.getState();
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return;
        }
        action.payload = res;
        store.dispatch({
          type: ASYNC_END,
          promise: action.payload,
          subtype: action.type,
        });
        store.dispatch(action);
      },
      (error) => {
        const currentState = store.getState();
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return;
        }
        action.error = true;
        action.payload = '';
        if (!action.skipTracking) {
          store.dispatch({
            type: ASYNC_END,
            promise: action.payload,
            subtype: action.type,
          });
        }
        store.dispatch(action);
      },
    );

    return;
  }

  next(action);
};

const isPromise = (v) => v && typeof v.then === 'function';

export { promiseMiddleware };
