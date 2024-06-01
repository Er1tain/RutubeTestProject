import {Answers, ButtonAnswers, PairQuestionAnswers, Question} from "../../styles/Questions/Test";
import getArrayData from "./GetJSONData";

export default function Readjson(setQuestAns:  React.Dispatch<React.SetStateAction<any>>) {
    let json_data = getArrayData();
    let questions: React.JSX.Element[] = [];
    /* questions = [<div>1. XXXXXXXX<div>, <div>2. XXXXXXXXXX</div>]*/

    let answers: React.JSX.Element[] = [];
    /*answers = [<div><button><button>....<div>, <div><button><button>....<div>]*/

    for (let i = 0; i < json_data.length; i++) {
        questions.push(<Question>{i+1}. {json_data[i]["question"]}</Question>);

        let Buttons: React.ReactElement[] = [];
        json_data[i]["answers"].forEach((answers)=>{
            Buttons.push(<ButtonAnswers>{answers}</ButtonAnswers>);
        })
        let answer = <Answers>{Buttons}</Answers>
        answers.push(answer);
    }

    let pair_quest_and: React.JSX.Element[] = [];
    for (let i = 0; i < json_data.length; i++) {
        pair_quest_and.push(
            <PairQuestionAnswers>
                {questions[i]}
                {answers[i]}
            </PairQuestionAnswers>)

    }
    setQuestAns(pair_quest_and);
}