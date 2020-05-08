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
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 6,
                spaceBetween: 10
            },

            // slidesPerView: 6,
            // spaceBetween: 5,
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
                                <img src={`http://image.tmdb.org/t/p/${ props.path === 'popularDocument' ? 'w154' : 'w300'}/${props.path === 'popularDocument' ? title.poster_path : title.backdrop_path}`} alt=""/>
                                <Typography className='title' variant="subtitle1" style={{ color: 'white'}}>
                                    {title.name ? title.name : title.original_title}
                                </Typography>
                            </Link>
                        </div>
                        :
                        null
                ))}
            </Swiper>
        </div>
    )
}
