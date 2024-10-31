import { useState } from "react";
import styled from "styled-components";

export const RollDice = ({ diceNumber,randomNumberGen  ,isRolling}) => {
  
  return (
    <DiceContainer>
      <div
        className={`dice ${isRolling ? "rolling" : ""}`}
        onClick={() => randomNumberGen(1, 7)}
      >
        <img src={`./Images/dice_${diceNumber}.png`} />
      </div>
      <p>Click on Dice To Roll</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  .dice {
    cursor: pointer;
    transition: 0.3s ease;
  }
  .rolling {
    opacity: 0.5;
    transform: rotate(360deg);
  }
  p {
    font-size: 24px;
    font-weight: 500;
    margin-top: 15px;
  }
`;
