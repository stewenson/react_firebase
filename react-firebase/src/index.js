import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import app from "../src/config/base";
import { createStore, applyMiddleware  } from 'redux';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { AuthProvider } from "./Components/Auth/Auth/Auth";
import {HashRouter as Router} from "react-router-dom";
import rootReducer from './Redux/Reducers/rootReducer';
import '../src/Styles/RootStyle/RootStyle.scss';


const store = createStore(rootReducer, applyMiddleware(thunk));


const apps = (
    <Provider store={store}>
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </Provider>

);

app.auth().onAuthStateChanged(user => {
    if (user) {
        ReactDOM.render(apps, document.getElementById('root'));
    }
    ReactDOM.render(apps, document.getElementById('root'));
});
