import React from 'react';
import '../../../../Styles/TheMovieDBAPi/MovieList.scss';
import MovieCarousel from "../../../../Components/ForTheMDB/MovieCarousel/MovieCarousel";
import Title from "../../../../Components/ForTheMDB/Title/Title";

export default function Family(props) {
    const data = props.family.family.results

    return (
        <React.Fragment>
            <Title style={{ paddingLeft: '3%'}} className='Category' title={'Popular Family Movies'} variant={'h5'} align={'left'}/>
            <MovieCarousel data={data} path={'popularFamily'} />
        </React.Fragment>
    );
}
