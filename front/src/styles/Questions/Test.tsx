import styled from "styled-components";

export const TestFrame = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 16px 0px 24px;
        gap: 28px;
        isolation: isolate;
        
        width: 1053px;
        max-width: 1053px;
        height: 806px;
    
        /* Inside auto layout */
        flex: none;
        order: 2;
        align-self: stretch;
        flex-grow: 0;`

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
    /* div */
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 1053px;
    height: 68px;
    
    /* Inside auto layout */
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    z-index: 2;`

export const Question = styled.div`
    /* div */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;
    width: 346px;
    height: 20px;
    
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;`

export const Answers = styled.div`
    /* Rating */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 1053px;
    height: 40px;
    
    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;`

export const ButtonAnswers = styled.button`
    /* RatingButton */
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 40px;
    height: 40px;

    /* Blue */
    border: 1px solid #1F73F9;
    border-radius: 20px;

    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;`

export const SendDataButton = styled.button`
    /* Button */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;

    width: 222px;
    height: 44px;

    background: #00A1E7;
    border-radius: 22px;

    /* Inside auto layout */
    flex: none;
    order: 8;
    flex-grow: 0;
    z-index: 8;`