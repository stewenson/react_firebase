import React, {useEffect, useState} from "react";
import {Container} from "@material-ui/core";
import '../Styles/MainContainer.scss';
import Title from "../components/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {getPopuparMovie} from "../actions/getPopuparMovie";
import {clearDetail} from "../actions/clearDetail";
import {MovieCarousel} from "../components/MovieCarousel/MovieCarousel";
import {getPopuparSeries} from "../actions/getPopuparSeries";
import {getFamilyMovie} from "../actions/getFamilyMovie";
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
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const loadData = () => {
            dispatch(getPopuparMovie())
            dispatch(getPopuparSeries())
            dispatch(getFamilyMovie())
            dispatch(getDocumMovieAction())
            setLoading(false);
        };
        loadData();
    }, [loading, dispatch])

    // Unmounting
    useEffect(() => {
        return () => {
            setLoading(true)
            dispatch(clearDetail())
        }
    },[dispatch, loading])

    if (loading) return null;

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