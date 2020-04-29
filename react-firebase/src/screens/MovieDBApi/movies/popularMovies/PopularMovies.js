import React from 'react';
import '../../../../Styles/TheMovieDBAPi/MovieList.scss';
import 'react-multi-carousel/lib/styles.css';
import MovieCarousel from "../../../../Components/ForTheMDB/MovieCarousel/MovieCarousel";
import Title from "../../../../Components/ForTheMDB/Title/Title";

export default function PopularMovies(props) {
    const data = props.movies.movies.results

    return (
        <React.Fragment>
            <Title style={{ paddingLeft: '3%'}} className='Category' title={'Popular Movies'} variant={'h5'} align={'left'}/>
            <MovieCarousel data={data} path={'popularMovie'} />
        </React.Fragment>

    );
}
