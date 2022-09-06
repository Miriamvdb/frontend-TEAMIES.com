import styled from "styled-components";

export const ButtonForm = styled.button`
  background: ${(props) => (props.primary ? "#00bfff" : "white")};
  color: ${(props) => (props.primary ? "white" : "#00bfff")};
  font-size: 1rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #00bfff;
  border-radius: 3px;

  &:hover {
    border: 2px solid #59d6ff;
  }
`;
