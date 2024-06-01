import {createElement, useEffect, useState} from "react";
import ReadJson from "../../LogicApp/Questions/ReadJsonWithQuestion";


export default function Test() {
    const [questions_answers, setQuestAns] = useState(createElement('div'));

    //Parse JSON and set state of questions and answers
    useEffect(() => ReadJson(setQuestAns),[]);

    return (
        <div id={"Test"}>
            <h1 id={"Label_test"}>Пожалуйста, ответьте на дополнительные вопросы.</h1>
            {questions_answers}
        </div>
    )
}