import styled from "styled-components";

export const TestFrame = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px 0px 24px;
        gap: 27px;
       
        
        width: 1053px;
        max-width: 1053px;
    
        /* Inside auto layout */
        flex: none;
        order: 2;
        align-self: stretch;
        flex-grow: 0;
        height: max-content;
        
        position: relative;
        bottom: 50px;
`

export const Label = styled.h1`
    @font-face {
        font-family: 'Roboto Regular';
        src: url(../../fonts/Roboto-Regular.ttf);
    }
    
    /* Пожалуйста, ответьте на дополнительные вопросы. */
    width: 1053px;
    height: 22px;
    /* paragraph */
    font-family: 'Roboto Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    /* identical to box height, or 129% */
    /* Gray */
    color: #BFC9D4;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    z-index: 0;`

export const PairQuestionAnswers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Question = styled.div`

    @font-face {
        font-family: 'Roboto Regular';
        src: url('../../fonts/Roboto-Regular.ttf');
    }
    font-size: 12px;
    font-family: "Roboto Regular";
    color: white;
`

//exception: 1st question
export const TextAnswers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Answers = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`

//exception: 1st question
export const TextButtonAnswers = styled.button`
    /* RatingButton */
    @font-face {
        font-family: 'Roboto Regular';
        src: url(../../fonts/Roboto-Regular.ttf);
    }
    box-sizing: border-box;
    font-family: "Roboto Regular";
    font-size: 12px;
    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 16px;

    width: 200px;
    height: 40px;

    /* Blue */
    background: #020B14;
    color: white;
    border: 1px solid #1F73F9;
    border-radius: 20px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    &:hover {
        background: #1F73F9
    }
`

export const ButtonAnswers = styled.button`
    /* RatingButton */
    @font-face {
        font-family: 'Roboto Regular';
        src: url(../../fonts/Roboto-Regular.ttf);
    }
    font-size: 14px;
    font-family: "Roboto Regular";
    box-sizing: border-box;
    
    width: 40px;
    height: 40px;

    /* Blue */
    background: #020B14;
    color: white;
    border: 1px solid #1F73F9;
    border-radius: 20px;
    
    &:hover {
        background: #1F73F9
    }
`

export const SendDataButton = styled.button`
    /* Button */
    @font-face {
        font-family: 'Roboto Medium';
        src: url('../../fonts/Roboto-Medium.ttf');
    }
    color: white;
    font-size: 14px;
    font-family: "Roboto Medium";
    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;

    width: 222px;
    height: 44px;

    background: #00A1E7;
    border: 1px solid #00A1E7;
    border-radius: 22px;

    /* Inside auto layout */
   `


