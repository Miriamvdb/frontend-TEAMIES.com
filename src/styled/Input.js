import styled from "styled-components";

export const Input = styled.input`
  width: 50%;
  height: 1.5rem;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 25px;
  color: #00bfff;

  ::placeholder {
    color: #59d6ff;
  }
`;

export const InputXs = styled.input`
  width: 10rem;
  height: 1.5rem;
  text-align: center;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem 0rem;
  border: none;
  border-radius: 25px;
  color: #00bfff;
  gap: 2.5rem;

  ::placeholder {
    color: #59d6ff;
  }
`;

export const Select = styled.select`
  width: 12rem;
  height: 3rem;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 25px;
  color: #00bfff;
  font-weight: bold;
`;
