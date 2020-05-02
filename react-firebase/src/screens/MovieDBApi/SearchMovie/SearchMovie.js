import React from "react";
import '../../../Styles/TheMovieDBAPi/SearchBar.scss';
import SearchForm from "./Form/SearchForm";
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";
import SearchResult from "../components/SearchResult/SearchResult";
import Grid from "@material-ui/core/Grid";


export default function SearchMovie() {
    const detail = useSelector(state => state.movieDbAPI);

    return (
        <div>
            <Container maxWidth='md' className='rmdb-main-container'>
                <Grid container justify='center' spacing={3} className='rmdb-search-form'>
                    <SearchForm />
                </Grid>
            </Container>
            <Grid container justify='center' spacing={3}>
                <Grid item>
                    <SearchResult data={detail.searchResult} title={detail.title}/>
                </Grid>
            </Grid>
        </div>

    )
}