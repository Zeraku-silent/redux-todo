import styled from "styled-components";

export const TaskText = styled.div`
  color: ${(props) => (props.checked ? "lightgreen" : "tomato")};
`;
