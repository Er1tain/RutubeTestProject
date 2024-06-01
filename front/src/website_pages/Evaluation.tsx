import Header from "../components/Evaluation/Header";
import Divider from "../components/Evaluation/Divider";
import React from "react";
import {
    ChoiceButton,
    EvaluationContent,
    Frame,
    FrameImage, Label, ListButtons,
    Paragraph, ParagraphEvaluation,
    Question,
    Selection,
    Title
} from "../styles/Evaluation";
import SelectEvaluation from "../LogicApp/Evaluation";
import Redirect from "../LogicApp/Redirect";


export default class Evaluation extends React.Component {

    Buttons() {
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

    Content({children}: any) {

        return <EvaluationContent>
            <Frame>
                <FrameImage></FrameImage>
            </Frame>
            <Question>
                <div className={"center-text-content"}>

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
                </div>
            </Question>
        </EvaluationContent>
    }

    render() {
        return <div>
            <Header/>
            <Divider/>
            <this.Content>
                <this.Buttons/>
            </this.Content>
        </div>
    }
}