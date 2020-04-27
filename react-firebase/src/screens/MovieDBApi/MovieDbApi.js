import React from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import DetailMovie from "./detailMovie/DetailMovie";
import {Route, Switch} from "react-router-dom";

export default function MovieDbApi() {

    return (
        <div>
            <Header/>
                <Switch>
                    <Route exact path='/tmdbapi/' component={Main} />
                    <Route path="/tmdbapi/detailMovie/:original_title/:id" component={DetailMovie} />
                </Switch>
        </div>
    )
}

// API key
// 3005d94c9609dfff31bb87e2643367b4