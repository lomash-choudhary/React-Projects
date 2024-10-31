import styled from "styled-components";
export const Button = styled.button`
  min-width: 220px;
  background-color: #000000;
  color: #ffffff;
  padding: 10px 18px;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.4s background-color ease-in;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    border: 1px solid black;
    color: black;
    transition: 0.3s background-color ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid black;
  
    &:hover {
    cursor: pointer;
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`