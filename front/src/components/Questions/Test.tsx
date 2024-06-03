import {createElement, useEffect, useRef, useState} from "react";
import ReadJson from "../../LogicApp/Questions/ReadJsonWithQuestion";
import {Label, SendDataButton, TestFrame} from "../../styles/Questions/Test";
import Image from "./Image";
import saveAnswerLocalStorage from "../../LogicApp/Questions/Test/saveAnswerLocalStorage";
import {useNavigate} from "react-router-dom";
import sendData from "../../LogicApp/Questions/Test/sendData";

export default function Test() {
    const [questions_answers, setQuestAns] = useState(createElement('div'));

    //Parse JSON and set state of questions and answers
    useEffect(() => ReadJson(setQuestAns),[]);

    const navigate = useNavigate();

    return (
        <TestFrame onClick={event => {saveAnswerLocalStorage(event);}}>
            <Label>Пожалуйста, ответьте на дополнительные вопросы.</Label>
            <Image/>
            {questions_answers}
            <SendDataButton onClick={()=>sendData(navigate) }>Отправить ответы</SendDataButton>
        </TestFrame>
    )
}