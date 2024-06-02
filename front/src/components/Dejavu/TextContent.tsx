import styled from "styled-components";
import {NavLink, useNavigate} from "react-router-dom";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 28px;

    width: 550px;
    max-width: 550px;
    height: 177px;
    
    flex: none;
    order: 1;
    flex-grow: 0;
    position: relative;
    bottom: 50px;
    align-self: center;
`

const Title = styled.h1`
    /* Спасибо за обратную связь! */

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

const Paragraph = styled.p`
    /* Это поможет нам улучшить сервис */

    width: 530px;
    height: 22px;

    /* paragraph */
    font-family: 'Roboto Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    /* identical to box height, or 129% */
    text-align: center;

    /* White */
    color: #FFFFFF;
    
    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    position: relative;
    bottom: 40px;
`

const ButtonReturn = styled.button`
    font-family: "Roboto Medium";
    font-size: 14px;
    color: white;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;

    width: 222px;
    height: 44px;

    background: #00A1E7;
    border: #00A1E7;
    border-radius: 22px;

`
const Link = styled.a`
    flex: none;
    order: 2;
    flex-grow: 0;
    text-decoration: none;
    position: relative;
    bottom: 50px;
    `

export default function TextContent() {

    const navigate = useNavigate();

    return (
        <Content>
            <Title>Вы уже прошли этот опрос</Title>
            <Paragraph>Спасибо, что делитесь мнением и помогаете нам быть лучше</Paragraph>
            <Link href={"https://rutube.ru"}>
                <ButtonReturn>Перейти на RUTUBE</ButtonReturn>
            </Link>
        </Content>
    );
}