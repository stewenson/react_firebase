import React from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import DetailMovie from "./movies/popularMovies/DetailMovie";
import {Route, Switch} from "react-router-dom";
import DetailSeries from "./movies/popularSeries/DetailSeries";
import DetailFamily from "./movies/family/DetailFamily";
import DetailDocument from "./movies/documentary/DetailDocument";

export default function MovieDbApi() {

    return (
        <div>
            <Header/>
                <Switch>
                    <Route exact path='/tmdbapi/' component={Main} />
                    <Route path="/tmdbapi/popularMovie/detail/:original_title/:id" component={DetailMovie} />
                    <Route path="/tmdbapi/popularSeries/detail/:original_name/:id" component={DetailSeries} />
                    <Route path="/tmdbapi/popularFamily/detail/:original_name/:id" component={DetailFamily} />
                    <Route path="/tmdbapi/popularDocument/detail/:original_name/:id" component={DetailDocument} />
                </Switch>
        </div>
    )
}

// API key
    // 3005d94c9609dfff31bb87e2643367b4