import Logo from "./Logo";
import styled from "styled-components";

const HeaderStylized = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 0px;
    gap: 10px;

    width: 1053px;
    max-width: 1053px;
    height: 96px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;`

export default function Header() {
    return (
        <HeaderStylized>
            <Logo/>
        </HeaderStylized>
    );
}