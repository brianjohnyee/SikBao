import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import App from "./App";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Profile, Settings, Favorites, Main, Modal } from "./Components/Layouts/Index";
// Browser router required inorder to use links on main page
render(
    <BrowserRouter>
        <App />
        </BrowserRouter>
    , document.getElementById("root"));

registerServiceWorker();
