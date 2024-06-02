import Header from "../components/Evaluation/Header";
import Divider from "../components/Evaluation/Divider";
import styled from "styled-components";

const FrameImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0px;

    width: 1053px;
    height: 256px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;`

export default function Feedback() {
    return (
        <div>
            <Header/>
            <Divider/>
            <FrameImage>

            </FrameImage>
        </div>
    );
}