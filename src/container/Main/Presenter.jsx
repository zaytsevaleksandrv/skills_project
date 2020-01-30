import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  color: green;
  padding: 30px;
  font-size: 22px;
`;

const ButtonTomato = styled(Button)`
  color: tomato;
`;

const Value = styled.span`
  color: red;
  padding: 30px;
  font-size: 22px;
`;

const Presenter = props => {
  const { value, onIncrement, onDecrement } = props;

  return (
    <div>
      <Value>{value}</Value>
      <Button onClick={() => onIncrement()}>+</Button>
      <ButtonTomato onClick={() => onDecrement()}>-</ButtonTomato>
    </div>
  );
};

Presenter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Presenter;
