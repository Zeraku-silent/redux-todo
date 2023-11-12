import styled from "styled-components";

export const TaskText = styled.div`
  color: ${(props) => (props.checked ? "green" : "magenta")};
  padding-left: 20px;
  border: double green 2px;
  border-width: 5px;
  width: 300px;
  background-color: lightgrey;
  text-align: center;
  margin: 4px;
  border-radius: 20px;
  display: inline-block;
`;
