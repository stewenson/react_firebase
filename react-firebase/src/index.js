import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import base from "../src/config/base";
import {createStore,  applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import {AuthProvider} from "./screens/Auth/Auth/Auth";
import {HashRouter as Router} from "react-router-dom";
import rootReducer from './Redux/rootReducer/rootReducer';
import '../src/Styles/RootStyle/RootStyle.scss';

// const store = createStore(rootReducer,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );
const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <AuthProvider>
        <Provider store={store}>
                <Router>
                    <App />
                </Router>
        </Provider>
    </AuthProvider>


);
// ReactDOM.render(app, document.getElementById('root'));
base.auth().onAuthStateChanged(() => {
        ReactDOM.render(app, document.getElementById('root'));
});
