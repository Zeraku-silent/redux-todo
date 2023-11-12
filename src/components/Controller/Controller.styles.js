import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  width: 15%;
  text-align: center;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5;
  color: #212529;
  background-color: Gainsboro;
  background-clip: padding-box;
  border: 5px solid green;
  border-radius: 100px;
  position: relative;
  left: 42%;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

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
