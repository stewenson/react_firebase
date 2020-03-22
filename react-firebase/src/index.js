import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware  } from 'redux';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { AuthProvider } from "./Components/Auth/Auth/Auth";
import {HashRouter as Router} from "react-router-dom";
import rootReducer from './Redux/Reducers/rootReducer';
import '../src/Styles/RootStyle/RootStyle.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root'));
