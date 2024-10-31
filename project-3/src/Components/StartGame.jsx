import { Button } from "../Styled/Buttons";
import styled from "styled-components";
export const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="imageDiv">
        <img src="/Images/dices 1.png" />
      </div>
      <div className="contentDiv">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 1182px;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  .imageDiv {
    width: 649px;
    height: 522px;
  }
  .contentDiv {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .contentDiv {
    h1 {
      font-size: 96px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
`;

