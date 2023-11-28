import styled from "styled-components";

export const TaskText = styled.p`
  color: ${(props) => (props.checked ? "lightgreen" : "tomato")};
`;
