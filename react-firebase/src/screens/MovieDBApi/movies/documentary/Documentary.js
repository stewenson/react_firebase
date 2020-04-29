import React from 'react';
import '../../../../Styles/TheMovieDBAPi/MovieList.scss';
import MovieCarousel from "../../../../Components/ForTheMDB/MovieCarousel/MovieCarousel";
import Title from "../../../../Components/ForTheMDB/Title/Title";

export default function Documentary(props) {
    const data = props.document.document.results

    return (
        <React.Fragment>
            <Title style={{ paddingLeft: '3%'}} className='Category' title={'Popular Documentary'} variant={'h5'} align={'left'}/>
            <MovieCarousel data={data} path={'popularDocument'} />
        </React.Fragment>
    );
}
