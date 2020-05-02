import React, {useEffect} from 'react';
import '../../../Styles/TheMovieDBAPi/MovieList.scss';
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";
import Title from "../components/Title/Title";
import {getFamilyMovAction} from "../actions/getFamilyMovAction";
import {useDispatch, useSelector} from "react-redux";
import {clearDetailAction} from "../actions/clearDetailAction";

export default function Family() {
    const dispatch = useDispatch();
    const family = useSelector(state => state.movieDbAPI);
    const data = family.family.results

    useEffect(() => {
        try {
            dispatch(getFamilyMovAction())
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
            <Title paddingLeft={'3%'} className='Category' title={'Popular Family Movies'} variant={'h5'} align={'left'}/>
            <MovieCarousel data={data} path={'popularFamily'} category={'movie'} />
        </React.Fragment>
    );
}
