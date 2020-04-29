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

export default function Main() {
    const popMovies = useSelector(state => state.movieDbAPI);
    const popSeries = useSelector(state => state.movieDbAPI);
    const family = useSelector(state => state.movieDbAPI);
    const document = useSelector(state => state.movieDbAPI);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(getPopMovAction())
            dispatch(getPopSeriesAction())
            dispatch(getFamilyMovAction())
            dispatch(getDocumMovieAction())
        } catch (e) {
            alert(e.message);
        }

    }, [dispatch])

    return (
        <div>
            <PopularMovies movies={popMovies}/>
            <PopularSeries series={popSeries}/>
            <Family family={family}/>
            <Documentary document={document}/>
        </div>
    )
}