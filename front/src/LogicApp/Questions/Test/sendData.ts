import {NavigateFunction} from "react-router-dom";

export default function sendData(navigate: NavigateFunction) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key != null && localStorage.getItem(key) === null) return
    }

    let data_from_localStorage = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key == "evaluation") data_from_localStorage.push({evaluation: localStorage.getItem("evaluation")});
        else data_from_localStorage.push({
            question: localStorage.key(i),
            response: localStorage.getItem(key != null ?key: "undefined")
        })
    }
    console.log(data_from_localStorage);

    navigate("/feedback")
    setTimeout(()=>localStorage.special = "marker", 1500)

}