import Header from "../components/Evaluation/Header";
import Divider from "../components/Evaluation/Divider";
import React from "react";
import '../styles/Evaluation.css';
import '../styles/choice_button.css';
import SelectEvaluation from "../LogicApp/Evaluation";
import Redirect from "../LogicApp/Redirect";


export default class Evaluation extends React.Component {

    Buttons() {
        let variants = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (
            <Redirect url="/questions">
                <div className={"List_button"} onClick={(e)=>SelectEvaluation(e)}>
                    {variants.map(variant => {
                        return (
                                <button className={"Choice_button"} value={variant}>{variant}</button>
                        );
                    })}
                </div>
            </Redirect>
        );
    }

    Content({children}: any) {

        return <div id={"Evaluation_Content"}>
            <div id={"Evaluation_Content_Frame"}>
                <div id={"Evaluation_Content_Frame_img"}></div>
            </div>
            <div id={"Question"}>
                <div className={"center-text-content"}>
                    <h1>Уважаемый клиент!</h1>
                    <p>
                        Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению,
                        используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».
                    </p>
                    <div className={"Selection"}>
                        {children}
                        <div className={"Labels"}>
                            <p style={{fontSize: 14, fontFamily: 'Roboto Regular', width: "max-content", color: "#BFC9D4"}}>Хуже некуда</p>
                            <p style={{fontSize: 14, fontFamily: 'Roboto Regular', width: "max-content", color: "#BFC9D4"}}>Отлично</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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