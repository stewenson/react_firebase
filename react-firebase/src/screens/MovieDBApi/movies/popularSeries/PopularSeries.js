import React from 'react';
import '../../../../Styles/TheMovieDBAPi/MovieList.scss';
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import Title from "../../components/Title/Title";

export default function PopularSeries(props) {
    const data = props.series.series.results

    return (
        <React.Fragment>
            <Title paddingLeft={'3%'} className='Category' title={'Popular Series'} variant={'h5'} align={'left'}/>
            <MovieCarousel data={data} title={"Popular Series"} path={'popularSeries'} />
        </React.Fragment>
    );
}
