import styled from "styled-components";
import { NumberSelector } from "./NumberSelector";
import { TotalScore } from "./TotalScore";
import { RollDice } from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Buttons";
import { Rules } from "./Rules";

export const Game = () => {
    const [totalScore, setTotalScore] = useState(0);
    const [isSelected, setIsSelected] = useState();
    const [diceNumber, setDiceNumber] = useState(1);
    const [isRolling, setIsRolling] = useState(false);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const randomNumberGen = (min, max) => {
        if(!isSelected){
            setError("Please Select A Number Before Rolling The Dice");
            return ;
        }
        

        setIsRolling(true);
        setTimeout(() => {
          const rolledNumber = (Math.floor(Math.random() * (max - min) + min));
          setDiceNumber(rolledNumber)
          setIsRolling(false);
          if(rolledNumber === isSelected){
            setTotalScore((prev) => prev + rolledNumber)
        }
        else{
            setTotalScore((prev) => prev - 2)
        }
        setIsSelected(undefined);
        }, 300);
      };

  return (
    <MainComponent>
      <div className="topSection">
        <TotalScore totalScore={totalScore}/>
        <NumberSelector error={error} isSelected={isSelected} setIsSelected={setIsSelected} setError={setError}/>
      </div>
      <RollDice diceNumber={diceNumber} randomNumberGen={randomNumberGen} isRolling={isRolling}/>
      <div className="buttons">
        <OutlineButton onClick={() => setTotalScore(0)}>Reset Scores</OutlineButton>
        <Button onClick={() => setShowRules(p => !p)}>{showRules ? "Hide" : "Show"} Rules</Button>
        <div>
        {showRules && <Rules />}
      </div>
      </div>
      
    </MainComponent>
  );
};

const MainComponent = styled.div`
  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: end;
    margin-top: 64px;
  }
  .buttons{
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;
