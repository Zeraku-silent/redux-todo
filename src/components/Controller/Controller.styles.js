import styled from "styled-components";

//Инпут-обертка

const InputWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
`;

//Кнопка

const StyledButton = styled.button`
  text-align: center;
  height: 60px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  color: black;
  background-color: green;
  background-clip: padding-box;
  border: 2px solid white;
  border-radius: 100px;
  position: relative;
  left: 42%;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export { StyledButton, InputWrapper };
