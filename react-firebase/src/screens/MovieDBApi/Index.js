import React from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import DetailMovie from "./movies/DetailMovie/DetailMovie";
import {Route, Switch} from "react-router-dom";
import Footer from "./layout/Footer";
import SearchMovie from "./movies/SearchMovie/SearchMovie";

export default function Index() {

    return (
        <div>
            <Header/>
                <Switch>
                    <Route exact path='/tmdbapi/' component={Main} />
                    <Route path="/tmdbapi/:path/detail/:category/:original_title/:id" component={DetailMovie} />
                    <Route path="/tmdbapi/searchMovies" component={SearchMovie} />
                </Switch>
            <Footer />
        </div>
    )
}
