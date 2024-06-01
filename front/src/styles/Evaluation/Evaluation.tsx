import styled from "styled-components";

export const ChoiceButton = styled.button`
    background-color: #020B14;
    color: white;
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    margin: 0 auto;
    width: 40px;
    height: 40px;

    /* Blue */
    border: 1px solid #1F73F9;
    border-radius: 20px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    /*font*/
    font-size: 14px;
    font-family: "Roboto Regular";

    &:hover {
        background-color: #1F73F9;
    }
`

export const EvaluationContent =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    width: 1053px;
    max-width: 1053px;
    height: 469px;


    /* Inside auto layout */
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;

    position: relative;
    bottom: 50px;`

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0px;

    width: 1053px;
    height: 224px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;`

export const FrameImage = styled.div`
    width: 455.36px;
    height: 200px;
    background-image: url("../../images/evaluation_image.svg");
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    pointer-events: none`

export const Selection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 530px;
    height: 68px;


    /* Inside auto layout */
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;`

export const Question = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;
    gap: 28px;

    /*width: 550px;
    max-width: 550px;*/
    height: 245px;


    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    position: relative;
    bottom: 50px;`

export const Title = styled.h1`
    
    
    width: 530px;
    height: 35px;

    /* h1 */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    /* identical to box height, or 117% */
    text-align: center;

    /* White */
    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;`

export const Paragraph = styled.p`
    width: 530px;
    height: 66px;

    /* paragraph */
    font-family: 'Roboto Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    /* or 129% */
    text-align: center;

    /* White */
    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;`

export const ParagraphEvaluation = styled.p`
    width: 530px;
    height: 66px;

    /* paragraph */
    font-family: 'Roboto Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    /* or 129% */
    text-align: center;

    /* White */
    color: #BFC9D4;
;


    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    
    
    //Child props
    font-size: 14px;
    font-family: 'Roboto Regular';
    width: max-content;
    height: max-content;
    color: "#BFC9D4";`

export const Label = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    width: 530px;
    height: 20px;


    /* Inside auto layout */
    order: 1;
    align-self: stretch;
    flex-grow: 0;`

export const ListButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 530px;
    height: 40px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;`