import {useEffect} from "react";
import ReadJson from "../../LogicApp/Questions/ReadJsonWithQuestion";

export default function Test() {

    useEffect(() => {
        ReadJson();
    }, []);

    return (
        <div id={"Test"}>
            <h1 id={"Label_test"}>Пожалуйста, ответьте на дополнительные вопросы.</h1>

        </div>
    )
}