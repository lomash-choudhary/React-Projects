import styled from "styled-components"

export const Rules = () => {
    return <>
    <RulesDiv>
        <h1>
        How to play dice game
        </h1>
        <p>
        Select any number
        </p>
        <p>
        Click on dice image
        </p>
        <p>
        after click on  dice  if selected number is equal to dice number you will get same point as dice 
        </p>
        <p>
        if you get wrong guess then  2 point will be dedcuted 
        </p>
    </RulesDiv>
    </>
}

const RulesDiv = styled.div`
background-color: #FBF1F1;
max-width: 794px;
padding: 20px 20px;

    h1{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 24px;
    }
    p{
        margin-bottom: 4px;
        font-size: 16px;
        font-weight: 500;
    }
`