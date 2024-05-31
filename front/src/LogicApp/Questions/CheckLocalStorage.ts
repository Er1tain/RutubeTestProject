import {NavigateFunction} from "react-router-dom";

export default function CheckLocalStorage(navigate: NavigateFunction) {
    if (localStorage.getItem("evaluation") == null) {
        navigate("*");
    }

}