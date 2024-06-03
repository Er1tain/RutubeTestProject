import Header from "../components/Evaluation/Header";
import Divider from "../components/Evaluation/Divider";
import React, {useEffect} from "react";
import {
    CenterTextContent,
    ChoiceButton,
    EvaluationContent,
    Frame,
    FrameImage, Label, ListButtons,
    Paragraph, ParagraphEvaluation,
    Question,
    Selection,
    Title
} from "../styles/Evaluation/Evaluation";
import SelectEvaluation from "../LogicApp/Evaluation";
import Redirect from "../LogicApp/Redirect";
import EvaluationImage from "../images/evaluation_image";
import {useNavigate} from "react-router-dom";

export default function Evaluation() {
    const navigate = useNavigate();

    //if test was finished in past then redirect in /dejavu
    useEffect(() => {
        if (localStorage.length == 8) navigate("/dejavu");
    }, []);

    const Content = ({children}: any)=>{
        return <EvaluationContent>
            <EvaluationImage/>
            <Question>
                <CenterTextContent>
                    <Title>Уважаемый клиент!</Title>
                    <Paragraph>
                        Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению,
                        используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».
                    </Paragraph>
                    <Selection>
                        {children}
                        <Label>
                            <ParagraphEvaluation>Хуже некуда</ParagraphEvaluation>
                            <ParagraphEvaluation>Отлично</ParagraphEvaluation>
                        </Label>
                    </Selection>
                </CenterTextContent>
            </Question>
        </EvaluationContent>
    }

    const Buttons = ()=> {
        let variants = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (
            <Redirect url="/questions">
                <ListButtons onClick={(e)=>SelectEvaluation(e)}>
                    {variants.map(variant => {
                        return (
                            <ChoiceButton value={variant}>{variant}</ChoiceButton>
                        );
                    })}
                </ListButtons>
            </Redirect>
        );
    }
    return (
        <div>
            <Header/>
            <Divider/>
            <Content>
                <Buttons/>
            </Content>
        </div>
    );
}