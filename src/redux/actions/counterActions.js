export const incrementAction = () => dispatch => {
  dispatch({ type: "INCREMENT" });
};

export const decrementAction = () => dispatch => {
  dispatch({ type: "DECREMENT" });
};
