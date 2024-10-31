import { useState } from "react";
import styled from "styled-components";

export const NumberSelector = ({error, setError, isSelected, setIsSelected}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  
  const selectValue = (value) => {
    setIsSelected(value);
    setError("");
  }
  return (
    <NumberSelectorContainer>
      <p className="errorTag">{error}</p>
      <div>
        {arrayNumber.map((value, index) => (
          <Box
            selected={value === isSelected}
            onClick={() => selectValue(value)}
            key={index}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>
        Select Number
      </p>
    </NumberSelectorContainer>
  );
};

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (!props.selected ? "black" : "white")};
  transition: 0.3s background-color ease-in;
`;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: end;
    .errorTag{
      color: red;
    }
  div{
    display: flex;
    gap:24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
  }
`