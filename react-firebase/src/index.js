import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthProvider} from "./Components/Auth/Auth/Auth";
import {HashRouter as Router} from "react-router-dom";

const app = (
    <AuthProvider>
        <Router>
            <App />
        </Router>
    </AuthProvider>
);

ReactDOM.render(app, document.getElementById('root'));
