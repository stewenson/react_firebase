import React, {useEffect} from 'react';
import '../../../Styles/TheMovieDBAPi/MovieList.scss';
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";
import Title from "../components/Title/Title";
import {getPopSeriesAction} from "../actions/getPopSeriesAction";
import {useDispatch, useSelector} from "react-redux";
import {clearDetailAction} from "../actions/clearDetailAction";

export default function PopularSeries() {
    const dispatch = useDispatch();
    const popSeries = useSelector(state => state.movieDbAPI);
    const data = popSeries.series.results

    useEffect(() => {
        try {
            dispatch(getPopSeriesAction())
        } catch (e) {
            alert(e.message);
        }

    }, [dispatch])

    // Unmounting
    useEffect(() => {
        return () => {
            dispatch(clearDetailAction())
        }
    },[dispatch])

    return (
        <React.Fragment>
            <Title paddingLeft={'3%'} className='Category' title={'Popular Series'} variant={'h5'} align={'left'}/>
            <MovieCarousel data={data} title={"Popular Series"} path={'popularSeries'} category={'tv'} />
        </React.Fragment>
    );
}
