import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, NavigateFunction, Route, Routes, useNavigate} from "react-router-dom";
import Evaluation from "./website_pages/Evaluation";
import Questions from "./website_pages/Questions";
import Feedback from "./website_pages/Feedback";
import Dejavu from "./website_pages/Dejavu";
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Pages() {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path={"*"} element={<Evaluation/>}></Route>
                    <Route path={"/questions"} element={<Questions/>}></Route>
                    <Route path={"/feedback"} element={<Feedback/>}></Route>
                    <Route path={"/dejavu"} element={<Dejavu/>}></Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

root.render(<Pages/>);


