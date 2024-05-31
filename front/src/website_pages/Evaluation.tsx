import Header from "../components/Header";
import Divider from "../components/Divider";
import React from "react";
import '../styles/Evaluation.css';
import '../styles/choice_button.css';

export default class Evaluation extends React.Component {

    Buttons() {
        let variants = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        return <div className={"List_button"}>
            {variants.map(variant => {
                return <button className={"Choice_button"}>{variant}</button>
            })}
        </div>
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
                        <div className={"Labels"}></div>
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