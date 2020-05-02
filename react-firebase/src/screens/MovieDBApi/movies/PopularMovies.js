import React, {useEffect} from 'react';
import '../../../Styles/TheMovieDBAPi/MovieList.scss';
import 'react-multi-carousel/lib/styles.css';
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";
import Title from "../components/Title/Title";
import {getPopMovAction} from "../actions/getPopMovAction";
// import {clearDetailAction} from "../../actions/clearDetailAction";
import {useDispatch, useSelector} from "react-redux";
import {clearDetailAction} from "../actions/clearDetailAction";

export default function PopularMovies() {
    const dispatch = useDispatch();
    const popMovies = useSelector(state => state.movieDbAPI);
    const data = popMovies.movies.results;

    useEffect(() => {
        try {
            dispatch(getPopMovAction())
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
            <Title paddingLeft={'3%'} className='Category' title={'Popular Movies'} variant={'h5'} align={'left'}/>
            <MovieCarousel data={data} path={'popularMovie'} category={'movie'} />
        </React.Fragment>

    );
}
