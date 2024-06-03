import Header from "../components/Evaluation/Header";
import Divider from "../components/Evaluation/Divider";
import styled from "styled-components";
import Image from "../components/Dejavu/image";
import TextContent from "../components/Dejavu/TextContent";
import {useEffect} from "react";

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    width: 1053px;
    max-width: 1053px;
    height: 433px;`

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

export default function Dejavu() {

    return (
        <div>
            <Header/>
            <Divider/>
            <Center>
                <FrameImage>
                    <Image/>
                </FrameImage>
                <TextContent/>
            </Center>
        </div>
    );
}