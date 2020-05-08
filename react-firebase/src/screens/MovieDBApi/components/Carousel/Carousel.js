import React, {useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
import './Carousel.scss';
import {useDispatch} from "react-redux";
import {clearDetail} from "../../actions/clearDetail";
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import {TitleDate} from "../TitleDate/TitleDate";

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
            // when window width is >= 630px
            900: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            // when window width is >= 1500px
            1500: {
                slidesPerView: 6,
                spaceBetween: 10,

            },
            // when window width is >= 1800px
            1800: {
                slidesPerView: 7,
                spaceBetween: 10
            },
            // when window width is >= 2100px
            2100: {
                slidesPerView: 10,
                spaceBetween: 10
            },
            // when window width is >= 2300px
            2300: {
                slidesPerView: 11,
                spaceBetween: 10
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerGroup: 2,
    }

    if (!props.data) return null;

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
                                <Typography className='title' align='left'>
                                    {(title.name && title.name.length > 10) ? `${title.name.slice(0, 20)+'...'}` : title.name}
                                    {(title.original_title && title.original_title.length > 10) ? `${title.original_title.slice(0, 20)+'...'}` : title.original_title}
                                    <br/>
                                    {title.release_date ? TitleDate(title.release_date) +' ' : TitleDate(title.first_air_date) + ' '}
                                    <GradeIcon fontSize='small'/>{title.vote_average}/10
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
                                <Typography className='vote-average'>
                                    <GradeIcon /> {title.vote_average}/10
                                </Typography>
                            </Link>
                        </div>
                ))}
            </Swiper>
        </div>
    )
}
