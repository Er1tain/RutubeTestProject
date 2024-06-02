import {NavigateFunction} from "react-router-dom";

export default function sendData(navigate: NavigateFunction) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key != null && localStorage.getItem(key) === null) return
    }
    navigate("/feedback")
}