import '../styles/Evaluation/Image.css';
import styled from "styled-components";

const Frame = styled.div`
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

export default function EvaluationImage() {
    return (
        <Frame>
            <div id={"evaluation_image"}></div>
        </Frame>
    );
}