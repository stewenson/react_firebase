import React, {useEffect, useState} from "react";
import {Container} from "@material-ui/core";
import '../../../Styles/TheMovieDBAPi/MainContainer.scss';
import Title from "../components/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {getPopMovAction} from "../actions/getPopMovAction";
import {clearDetail} from "../actions/clearDetail";
import {MovieCarousel} from "../components/MovieCarousel/MovieCarousel";
import {getPopSeriesAction} from "../actions/getPopSeriesAction";
import {getFamilyMovAction} from "../actions/getFamilyMovAction";
import {getDocumMovieAction} from "../actions/getDocumMovie";

export default function Main() {
    const dispatch = useDispatch();
    const popMovies = useSelector(state => state.movieDbAPI);
    const popSeries = useSelector(state => state.movieDbAPI);
    const family = useSelector(state => state.movieDbAPI);
    const document = useSelector(state => state.movieDbAPI);

    const dataMoives = popMovies.movies.results;
    const dataSeries = popSeries.series.results
    const dataFamily = family.family.results
    const dataDocument = document.document.results
    const [load, isLoad] = useState(true);

    useEffect( () => {
        if (load)
            try  {
                dispatch(getPopMovAction())
                dispatch(getPopSeriesAction())
                dispatch(getFamilyMovAction())
                dispatch(getDocumMovieAction())
            } catch (e) {
                alert(e.message);
            }
    }, [load, dispatch])

    // Unmounting
    useEffect(() => {
        return () => {
            isLoad(false)
            dispatch(clearDetail())
        }
    },[dispatch, load])

    if (!load) return null;

    return (
        <Container maxWidth='xl' className='rmdb-main-container' >
            <Title title={'Find Your movies'} variant={'h3'} color={'white'} align={'center'}/>
            <MovieCarousel data={dataMoives} path={'popularMovie'} title={'Popular Movies'} marginTop={'3%'} category={'movie'} />
            <MovieCarousel data={dataSeries} path={'popularSeries'} title={'Popular Tv Series'} marginTop={'3%'} category={'tv'} />
            <MovieCarousel data={dataFamily} path={'popularMovie'} title={'Popular Family Movies'} marginTop={'3%'} category={'movie'} />
            <MovieCarousel data={dataDocument} path={'popularMovie'} title={'Popular Documentary Movies'} marginTop={'3%'} category={'movie'} />
        </Container>
    )
}