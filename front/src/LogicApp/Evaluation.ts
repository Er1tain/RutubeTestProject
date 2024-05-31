import {useNavigate} from "react-router-dom";

export default function SelectEvaluation(event: React.MouseEvent) {
    if (event.target instanceof HTMLButtonElement) {
        let button_value: Number = Number(event.target.value);

        //Save answer in localstorage
        localStorage.setItem("evaluation", String(button_value));
    }
}