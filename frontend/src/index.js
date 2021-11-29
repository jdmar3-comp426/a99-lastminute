import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavigationBar, App, Users, Account, Game } from './components'

ReactDOM.render(
  <Router>
    <NavigationBar />

    <Routes>
      <Route path="/" element = {<App />} />
      <Route path="/users" element = {<Users />} />
      <Route path="/account" element = {<Account />} />
      <Route path="/game" element = {<Game />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);