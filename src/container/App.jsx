import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: green;
  padding: 30px;
`;

const ButtonTomato = styled(Button)`
  color: tomato;
`;

const ButtonMale = styled(ButtonTomato)`
  background-color: #fff;
`;

function App() {
  const allCollection = "all";

  return (
    <div>
      <span>{allCollection}</span>
      <Button>{allCollection}</Button>
      <ButtonTomato>Text</ButtonTomato>
      <ButtonMale>Text</ButtonMale>
    </div>
  );
}

export default App;
