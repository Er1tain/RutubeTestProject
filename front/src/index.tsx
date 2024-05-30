import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Evaluation from "./website_pages/Evaluation";
import Questions from "./website_pages/Questions";
import Feedback from "./website_pages/Feedback";
import Dejavu from "./website_pages/Dejavu";
import './index.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
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


