import {createElement, useEffect, useState} from "react";
import ReadJson from "../../LogicApp/Questions/ReadJsonWithQuestion";
import {Label, TestFrame} from "../../styles/Questions/Test";

export default function Test() {
    const [questions_answers, setQuestAns] = useState(createElement('div'));

    //Parse JSON and set state of questions and answers
    useEffect(() => ReadJson(setQuestAns),[]);

    return (
        <TestFrame>
            <Label>Пожалуйста, ответьте на дополнительные вопросы.</Label>
            {questions_answers}
        </TestFrame>
    )
}