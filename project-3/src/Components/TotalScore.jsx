import styled from "styled-components";

export const TotalScore = ({ totalScore }) => {
  return (
    <>
      <ScoreContainer>
        <h1>{totalScore}</h1>
        <p>Total Score</p>
      </ScoreContainer>
    </>
  );
};

const ScoreContainer = styled.div`
  text-align: center;
  max-width: 200px;
  h1,
  p {
    font-weight: 500;
  }
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
  }
`;
