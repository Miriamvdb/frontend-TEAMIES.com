import styled from "styled-components";

export const ButtonForm = styled.button`
  background: ${(props) => (props.primary ? "#00bfff" : "white")};
  color: ${(props) => (props.primary ? "white" : "#00bfff")};
  font-size: 0.9rem;
  height: 2rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #00bfff;
  border-radius: 25px;

  &:hover {
    border: 2px solid #59d6ff;
  }
`;

export const LogoutButton = styled.button`
  margin-right: 8.5rem;
  cursor: pointer;
  background: none;
  color: #00bfff;
  border: none;
  transition: all 0.2s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #59d6ff;
  }
`;

export const PartiButtonOpen = styled.button`
  background: none;
  margin: 1.25rem 1.25rem 0 0;
  color: white;
  width: 6rem;
  height: 2rem;
  font-size: 0.9rem;
  font-weight: bold;
  border: 2px solid white;
  transition: all 0.2s ease-in;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 10px #59d6ff;
    box-shadow: 0 0 10px #59d6ff;
  }
`;

export const PartiButtonPresent = styled.button`
  background-image: linear-gradient(165deg, #00bfff, #5fffbc);
  margin: 1.25rem 1.25rem 0 0;
  color: white;
  width: 6rem;
  height: 2rem;
  font-size: 0.9rem;
  font-weight: bold;
  border: 2px solid white;
  transition: all 0.2s ease-in;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 10px #5fffbc;
    box-shadow: 0 0 10px #5fffbc;
  }
`;

export const PartiButtonAbsent = styled.button`
  background-image: linear-gradient(165deg, #ff6347, #ffd500);
  margin: 1.25rem 1.25rem 0 0;
  color: white;
  width: 6rem;
  height: 2rem;
  font-size: 0.9rem;
  font-weight: bold;
  border: 2px solid white;
  transition: all 0.2s ease-in;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 10px #ff6347;
    box-shadow: 0 0 10px #ff6347;
  }
`;

export const ButtonModal = styled.button`
  cursor: pointer;
  background: none;
  color: #00bfff;
  border: none;
  transition: all 0.2s ease-in;
  font-size: 1.75rem;

  &:hover {
    color: #59d6ff;
  }
`;
