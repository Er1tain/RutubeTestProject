import {
    Answers,
    ButtonAnswers,
    PairQuestionAnswers,
    Question,
    TextAnswers,
    TextButtonAnswers
} from "../../styles/Questions/Test";
import getArrayData from "./GetJSONData";
import setColorActivButton from "./Test/setColorActivButton";

export default function ReadJson(setQuestAns:  React.Dispatch<React.SetStateAction<any>>) {

    let json_data = getArrayData();
    let questions: React.JSX.Element[] = [];
    /* questions = [<div>1. XXXXXXXX<div>, <div>2. XXXXXXXXXX</div>]*/

    let answers: React.JSX.Element[] = [];
    /*answers = [<div><button><button>....<div>, <div><button><button>....<div>]*/

    for (let i = 0; i < json_data.length; i++) {
        questions.push(<Question>{i+1}. {json_data[i]["question"]}</Question>);

        let Buttons: React.ReactElement[] = [];
        json_data[i]["answers"].forEach((answers)=>{

            //value: (text in button:number of question
            Buttons.push(i != 0 ? <ButtonAnswers value={`${answers}:${i+1}`}>{answers}</ButtonAnswers> :
                <TextButtonAnswers value={`${answers}:${i+1}`}>{answers}</TextButtonAnswers>);
        })
        let answer = i != 0 ? <Answers onClick={event=>setColorActivButton(event)}>{Buttons}</Answers> : <TextAnswers onClick={event=>setColorActivButton(event)}>{Buttons}</TextAnswers>
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