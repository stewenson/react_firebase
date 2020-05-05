import React from "react";
import '../../../../Styles/TheMovieDBAPi/SearchBar.scss';
import SearchForm from "./Form/SearchForm";
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";
import SearchResult from "../../components/SearchResult/SearchResult";

export default function SearchMovie() {
    const detail = useSelector(state => state.movieDbAPI);

    return (
        <div>
            <Container maxWidth='md'>
                <SearchForm />
            </Container>
            <Container maxWidth='md'>
                <SearchResult data={detail.searchResult} title={detail.title}/>
            </Container>
        </div>
    )
}