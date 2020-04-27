import React, {useEffect} from "react";
import PopularMovies from "../popularMovies/PopularMovies";
import PopularSeries from "../popularSeries/PopularSeries";
import Documentary from "../documentary/Documentary";
import {useDispatch, useSelector} from "react-redux";
import {getPopMovAction} from "../actions/getPopMovAction";
import {getPopSeriesAction} from '../actions/getPopSeriesAction';
import FamilyMovies from "../family/FamilyMovies";
import {getFamilyMovAction} from "../actions/getFamilyMovAction";
import {getDocumMovieAction} from "../actions/getDocumMovieAcrion";

export default function Main() {
    const popMovies = useSelector(state => state.movieDbAPI);
    const popSeries = useSelector(state => state.movieDbAPI);
    const family = useSelector(state => state.movieDbAPI);
    const document = useSelector(state => state.movieDbAPI);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopMovAction())
        dispatch(getPopSeriesAction())
        dispatch(getFamilyMovAction())
        dispatch(getDocumMovieAction())
    }, [dispatch])

    return (
        <div>
            <PopularMovies movies={popMovies}/>
            <PopularSeries series={popSeries}/>
            <FamilyMovies family={family}/>
            <Documentary document={document}/>
        </div>
    )
}