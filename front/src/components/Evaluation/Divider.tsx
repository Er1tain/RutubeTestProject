import Line from "./Line";
import styled from "styled-components";

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 9px 0px;
    gap: 10px;

    width: 1053px;
    max-width: 1053px;
    height: 20px;
    position: relative;
    bottom: 50px;`

export default function Divider() {
    return (
        <Container>
                <Line/>
        </Container>
    );
}