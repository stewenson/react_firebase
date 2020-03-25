import React from "react";
import { useSelector } from "react-redux";
import SearchForm from './Form/SearchForm';
import MovieList from "./MovieList";
import "../../../Styles/MovieStyle/MovieStyle.scss";

export default function Movie() {
    const content = useSelector(state => state);

    return (
        <div className="Movie">
            <div className="TextField">
                <SearchForm />
            </div>
            <div className="MovieList">
                <MovieList
                    data ={content.movie.data}
                />
            </div>
        </div>
    );
}