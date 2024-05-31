import Header from "../components/Header";
import Divider from "../components/Divider";
import React from "react";
import '../styles/Evaluation.css'

export default class Evaluation extends React.Component {


    Content(){
        return <div id={"Evaluation_Content"}>
            <div id={"Evaluation_Content_Frame"}>
                <div id={"Evaluation_Content_Frame_img"}></div>
            </div>
            <div id={"Question"}>
                <div className={"center-text-content"}>
                    <h1>Уважаемый клиент!</h1>
                    <p>
                        Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».
                    </p>
                </div>
            </div>
        </div>
    }

    render() {
        return<>
            <Header/>
            <Divider/>
            <this.Content/>
        </>
    }
}