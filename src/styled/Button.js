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

export const PartiButtonOpenP = styled.button`
  background: white;
  margin: 1.25rem 1.25rem 0 0;
  color: #00bfff;
  width: 4rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid #00bfff;
  padding: 0.5rem 0 0 1rem;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    border: 2px solid white;
    color: white;
    background-image: linear-gradient(165deg, #00bfff, #5fffbc);
  }
`;

export const PartiButtonOpenA = styled.button`
  background: white;
  margin: 1.25rem 1.25rem 0 0;
  color: #00bfff;
  width: 4rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid #00bfff;
  padding: 0.5rem 0 0 1rem;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    border: 2px solid white;
    color: white;
    background-image: linear-gradient(165deg, #ff6347, #ffd500);
  }
`;

export const PartiButtonPresent = styled.button`
  background-image: linear-gradient(165deg, #00bfff, #5fffbc);
  margin: 1.25rem 1.25rem 0 0;
  color: white;
  width: 4rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid white;
  transition: all 0.2s ease-in;
  padding: 0.5rem 0 0 1rem;
  border-radius: 25px;
  cursor: pointer;
`;

export const PartiButtonAbsent = styled.button`
  background-image: linear-gradient(165deg, #ff6347, #ffd500);
  margin: 1.25rem 1.25rem 0 0;
  color: white;
  width: 4rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid white;
  transition: all 0.2s ease-in;
  padding: 0.5rem 0 0 1rem;
  border-radius: 25px;
  cursor: pointer;
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

export const OpenDetailsButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  transition: all 0.2s ease-in;
`;

export const AccUserButton = styled.button`
  background: white;
  color: #00bfff;
  font-size: 1.5rem;
  height: 2rem;
  width: 4rem;
  margin: 0 1rem 2rem 0rem;
  padding: 0.25em 1em;
  border: 2px solid #00bfff;
  border-radius: 25px;

  &:hover {
    border: 2px solid white;
    color: white;
    background-image: linear-gradient(165deg, #00bfff, #5fffbc);
  }
`;

export const DelUserButton = styled.button`
  background: white;
  color: #00bfff;
  font-size: 1.5rem;
  height: 2rem;
  width: 4rem;
  margin: 0 1rem 2rem 0rem;
  padding: 0.25em 1em;
  border: 2px solid #00bfff;
  border-radius: 25px;

  &:hover {
    border: 2px solid white;
    color: white;
    background-image: linear-gradient(165deg, #ff6347, #ffd500);
  }
`;
