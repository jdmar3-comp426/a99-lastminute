import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./components/App/App"

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App />} />
            <Route path="*" element = {<p>404 Not Found</p>} />
        </Routes>
    </BrowserRouter>, document.getElementById('root')
);