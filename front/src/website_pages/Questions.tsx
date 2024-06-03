import React, {useEffect} from "react";
import Header from "../components/Evaluation/Header";
import Divider from "../components/Evaluation/Divider";
import {useNavigate} from "react-router-dom";
import CheckLocalStorage from "../LogicApp/Questions/CheckLocalStorage";
import Test from "../components/Questions/Test";

export default function Questions(){
    const navigate = useNavigate();

    //if test was finished in past then redirect in /dejavu
    useEffect(() => {
        if (localStorage.length == 8) navigate("/dejavu");
        else if (localStorage.length == 0) navigate("/");
    }, []);

    useEffect(() => {
        CheckLocalStorage(navigate);

    }, []);

    return (
            <div>
                <Header/>
                <Divider/>
                <Test/>
            </div>
        );

}