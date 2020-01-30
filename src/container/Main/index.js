// eslint-disable-next-line no-unused-vars
import React from "react";
import { connect } from "react-redux";

import { incrementAction, decrementAction } from "../../redux/actions";

import Presenter from "./Presenter";

const mapStateToProps = state => ({
  state,
  value: state.counter
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  onIncrement: () => dispatch(incrementAction()),
  onDecrement: () => dispatch(decrementAction())
});

const Main = connect(mapStateToProps, mapDispatchToProps)(Presenter);

export default Main;
