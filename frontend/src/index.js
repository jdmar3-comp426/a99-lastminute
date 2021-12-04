import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavigationBar, App, Users } from './components/index'
import AccountManagement from './components/AccountManagement/AccountManagement'

ReactDOM.render(
    <BrowserRouter>
        {/* <NavigationBar /> */}
        <Routes>
            <Route path="/" element = {<App />} />
            <Route path="/users" element = {<Users />} />
            <Route path="/accountmanagement" element = {<AccountManagement />} /> {/* Remove this */}
        </Routes>
    </BrowserRouter>, document.getElementById('root')
);