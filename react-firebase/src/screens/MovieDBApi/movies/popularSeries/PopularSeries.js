import React from 'react';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import '../../../../Styles/TheMovieDBAPi/MovieList.scss';
import Progress from "../../../../Components/Progress/Progress";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function PopularSeries(props) {
    const data = props.series.series.results

    const options = {
        loop: true,
        margin: 10,
        nav: true,
        autoWidth: true,
        dotsContainer: false,
        dots: false,
        navSpeed: 1500
    };

    return (
        <React.Fragment>
            <Typography className='Category' style={{ paddingLeft: '3%'}} variant="h5" align='left' >
                Popular Series
            </Typography>
            <OwlCarousel className="owl-theme" {...options} >
                {data ? data.map((title) => (
                    <div key={title.id} className='Title'>
                        <Link to={{pathname: `/tmdbapi/popularSeries/detail/${title.original_name}/${title.id}`, query: "/tmdbapi/popularSeries/detail"}}>
                            <img src={`http://image.tmdb.org/t/p/w154/`+ title.poster_path} alt={title.original_name}/>
                        </Link>
                    </div>
                    ))
                    :
                    <Progress/>
                }
            </OwlCarousel>
        </React.Fragment>
    );
}
