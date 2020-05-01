import React, {useEffect} from "react";
import PopularMovies from "../movies/popularMovies/PopularMovies";
import PopularSeries from "../movies/popularSeries/PopularSeries";
import Documentary from "../movies/documentary/Documentary";
import {useDispatch, useSelector} from "react-redux";
import {getPopMovAction} from "../actions/getPopMovAction";
import {getPopSeriesAction} from '../actions/getPopSeriesAction';
import Family from "../movies/family/Family";
import {getFamilyMovAction} from "../actions/getFamilyMovAction";
import {getDocumMovieAction} from "../actions/getDocumMovieAcrion";
import {getTokenAction} from "../actions/getTokenAction";
import axios from 'axios';
import {Container} from "@material-ui/core";

export default function Main() {
    const popMovies = useSelector(state => state.movieDbAPI);
    const popSeries = useSelector(state => state.movieDbAPI);
    const family = useSelector(state => state.movieDbAPI);
    const document = useSelector(state => state.movieDbAPI);
    const token = useSelector(state => state)
    const dispatch = useDispatch();

    axios.defaults.headers.common['Authorization'] = token.movieDbAPI.token.guest_session_id;

    useEffect(() => {
        try {
            dispatch(getPopMovAction())
            dispatch(getPopSeriesAction())
            dispatch(getFamilyMovAction())
            dispatch(getDocumMovieAction())
            dispatch(getTokenAction())
        } catch (e) {
            alert(e.message);
        }

    }, [dispatch])

    return (
        <Container maxWidth='xl'>
            <PopularMovies movies={popMovies}/>
            <PopularSeries series={popSeries}/>
            <Family family={family}/>
            <Documentary document={document}/>
        </Container>
    )
}