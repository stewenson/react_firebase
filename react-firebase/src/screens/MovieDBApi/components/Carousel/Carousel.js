import React, {useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
import './Carousel.scss';
import {useDispatch} from "react-redux";
import {clearDetail} from "../../actions/clearDetail";
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';

export const Carousel = (props) => {

    const dispatch = useDispatch();
    const [loading, setLoading]=useState(false);

    useEffect(() => {
        return  () => {
            dispatch(clearDetail());
            setLoading(true);
        }
    },[loading, dispatch]);

    if (loading) return null;

    const params = {
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 5,
                spaceBetween: 10
            },  // when window width is >= 900px
            900: {
                slidesPerView: 7,
                spaceBetween: 10
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }

    if (!props.data) return null;
    // console.log(props.data)

    return(
        <div className='netflix-slider'>
            <Typography variant="h5" style={{ color: 'white'}}>
                {props.title}
            </Typography>
            <Swiper {...params}>
                {props.data.map((title) => (
                    title.poster_path ?
                        <div key={title.id}>
                            <Link to={{pathname: `/tmdbapi/${props.path}/detail/${props.category}/${title.original_title}/${title.id}`, query: `/tmdbapi/${props.path}/detail`}}>
                                <img src={`http://image.tmdb.org/t/p/${ props.path === 'popularDocument' ? 'w300_and_h300_bestv2' : 'w300'}/${props.path === 'popularDocument' ? title.poster_path : title.backdrop_path}`} alt=""/>
                                <Typography className='title'>
                                    {(title.name && title.name.length > 10) ? `${title.name.slice(0, 20)+'...'}` : title.name}
                                    {(title.original_title && title.original_title.length > 10) ? `${title.original_title.slice(0, 20)+'...'}` : title.original_title}
                                </Typography>
                            </Link>
                        </div>
                        :
                        <div key={title.id}>
                            <Link to={{pathname: `/tmdbapi/${props.path}/detail/${props.category}/${title.original_title}/${title.id}`, query: `/tmdbapi/${props.path}/detail`}}>
                                <img src="https://www.randschemicals.com/wp-content/themes/randschemical/images/di.png" alt=""/>
                                <Typography className='title'>
                                    {(title.name && title.name.length > 10) ? `${title.name.slice(0, 20)+'...'}` : title.name}
                                    {(title.original_title && title.original_title.length > 10) ? `${title.original_title.slice(0, 20)+'...'}` : title.original_title}
                                </Typography>
                            </Link>
                        </div>
                ))}
            </Swiper>
        </div>
    )
}
