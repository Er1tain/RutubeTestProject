import React, {useEffect} from "react";
import Header from "../components/Evaluation/Header";
import Divider from "../components/Evaluation/Divider";
import {useNavigate} from "react-router-dom";
import CheckLocalStorage from "../LogicApp/Questions/CheckLocalStorage";

export default function Questions(){
    const navigate = useNavigate();
    useEffect(() => {
        CheckLocalStorage(navigate);

    }, []);

    return (
            <div>
                <Header/>
                <Divider/>
            </div>
        );

}