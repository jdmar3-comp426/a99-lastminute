import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavigationBar, App, Users, Account } from './components'

ReactDOM.render(
  <Router>
    <NavigationBar />

    <Routes>
      <Route path="/" element = {<App />} />
      <Route path="/users" element = {<Users />} />
      <Route path="/account" element = {<Account />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);