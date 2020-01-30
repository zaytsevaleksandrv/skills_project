import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";

const thunk = store => next => action =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);

function logger({ getState }) {
  return next => action => {
    // eslint-disable-next-line no-console
    console.log("Будет отправлен", action);
    // Вызовите следующий метод диспетчеризации в цепочке middleware.
    const returnValue = next(action);
    // eslint-disable-next-line no-console
    console.log("Состояние после отправки", getState());
    // Скорее всего, это будет само действие, если только
    // middleware далее в цепи изменило его.
    return returnValue;
  };
}

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
