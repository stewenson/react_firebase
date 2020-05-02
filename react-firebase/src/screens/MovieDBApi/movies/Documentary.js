import React, {useEffect} from 'react';
import '../../../Styles/TheMovieDBAPi/MovieList.scss';
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";
import Title from "../components/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {getDocumMovieAction} from "../actions/getDocumMovieAcrion";
import {clearDetailAction} from "../actions/clearDetailAction";

export default function Documentary() {
    const dispatch = useDispatch();
    const document = useSelector(state => state.movieDbAPI);
    const data = document.document.results

    useEffect(() => {
        try {
            dispatch(getDocumMovieAction())
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
            <Title paddingLeft={'3%'} className='Category' title={'Popular Documentary'} variant={'h5'} align={'left'}/>
            <MovieCarousel data={data} path={'popularDocument'} category={'movie'} />
        </React.Fragment>
    );
}
