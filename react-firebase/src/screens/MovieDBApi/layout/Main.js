import React from "react";
import PopularMovies from "../movies/PopularMovies";
import PopularSeries from "../movies/PopularSeries";
import Documentary from "../movies/Documentary";
import Family from "../movies/Family";
import {Container} from "@material-ui/core";

export default function Main() {
    return (
        <Container maxWidth='xl'>
            <PopularMovies/>
            <PopularSeries/>
            <Family/>
            <Documentary/>
        </Container>
    )
}