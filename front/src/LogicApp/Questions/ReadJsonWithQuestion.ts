import json_data from "../../components/Questions/questions_answers.json";
import React, {createElement, ReactNode} from "react";

export default function ReadJson(setQuestAns:  React.Dispatch<React.SetStateAction<any>>) {
    let questions: ReactNode[] = [];
    let question_answers: ReactNode[] = [];

    for (let i = 0; i < json_data.length; i++) {
        //let Content_question = createElement('p', {children: `${i+1} ${json_data[i]["question"]}`});
        let question = createElement('p', {className: "question",children: `${i+1}. ${json_data[i]["question"]}`});
        questions.push(question);

        let Buttons: ReactNode[] = [];
        json_data[i]["answers"].forEach((answers)=>{
            Buttons.push(React.createElement('button', {children:String(answers), className:"select_button"}));
        })
        let answer = React.createElement('div', i === 0 ? {id: "answer_first"}: {className: "answer"}, Buttons)
        question_answers.push(answer);
    }

    let pair_quest_ans: ReactNode[] = [];
    for (let i = 0; i < json_data.length; i++) {
        pair_quest_ans.push(createElement('div', {className:"question_and_answer", children:[questions[i], question_answers[i]]}));
    }

    setQuestAns(pair_quest_ans);
}