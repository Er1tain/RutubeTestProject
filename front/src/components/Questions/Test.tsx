import {createElement, useEffect, useState} from "react";
import ReadJson from "../../LogicApp/Questions/ReadJsonWithQuestion";
import {Label, SendDataButton, TestFrame} from "../../styles/Questions/Test";
import Image from "./Image";

export default function Test() {
    const [questions_answers, setQuestAns] = useState(createElement('div'));

    //Parse JSON and set state of questions and answers
    useEffect(() => ReadJson(setQuestAns),[]);

    return (
        <TestFrame>
            <Label>Пожалуйста, ответьте на дополнительные вопросы.</Label>
            <Image/>
            {questions_answers}
            <SendDataButton>Отправить ответы</SendDataButton>
        </TestFrame>
    )
}