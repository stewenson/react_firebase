import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import Carousel from "react-multi-carousel";
/* Actions */
import {clearDetail} from "../../actions/clearDetail";
/* Css */
import 'react-multi-carousel/lib/styles.css';
import '../../../../Styles/TheMovieDBAPi/MovieCarousel.scss';
import {CarouselImage} from "../../../../Styles/TheMovieDBAPi/CarouselImg";
/* Components */
import Title from "../../components/Title/Title";

export const MovieCarousel = (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading]=useState(false);

    useEffect(() => {
        return  () => {
            dispatch(clearDetail());
            setLoading(true);
        }
    },[loading, dispatch]);

    if (loading) return null;

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 20,
            slidesToSlide: 20
        },
        desktop: {
            breakpoint: { max: 3000, min: 1741 },
            items: 10,
            slidesToSlide: 9
        },
        tablet: {
            breakpoint: { max: 1054, min: 1045 },
            items: 6,
            slidesToSlide: 6
        },
        mobile: {
            breakpoint: { max: 681, min: 0 },
            items: 3,
            slidesToSlide: 3,
        },
        respons2: {
            breakpoint: { max: 868, min: 682 },
            items: 4,
            slidesToSlide: 4
        },
        respons3: {
            breakpoint: { max: 1045, min: 872 },
            items: 5,
            slidesToSlide: 5
        },
        respons4: {
            breakpoint: { max: 1214, min: 1054 },
            items: 7,
            slidesToSlide: 7
        },
        respons5: {
            breakpoint: { max: 1396, min: 1215 },
            items: 8,
            slidesToSlide: 8,
        },
        respons6: {
            breakpoint: { max: 1564, min: 1397 },
            items: 9,
            slidesToSlide: 9
        }
    }
    if (!props.data) return null;

    return (
        <div className='rmdb-moviecarousel'>
            <Title paddingLeft={'3%'} className='Category' title={props.title} variant={'h5'} align={'left'} color={'white'} marginTop={props.marginTop}/>
                <Carousel responsive={responsive}
                          itemClass={props.category}
                          transitionDuration={0}
                          swipeable
                          draggable={true}
                          infinite={true}
                          keyBoardControl={true}
                          focusOnSelect={true}
                          focusO
                >
                    {props.data.map((title) => (
                        title.poster_path ?
                        <div key={title.id} className='item'>
                            <Link to={{pathname: `/tmdbapi/${props.path}/detail/${props.category}/${title.original_title}/${title.id}`, query: `/tmdbapi/${props.path}/detail`}}>
                                <div>
                                    <CarouselImage src={`http://image.tmdb.org/t/p/w154/${title.poster_path}`}/>
                                </div>
                            </Link>
                        </div>
                            :
                            null
                        ))}
                </Carousel>
        </div>
    )
}
