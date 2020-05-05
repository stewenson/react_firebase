import React from "react";
import 'react-multi-carousel/lib/styles.css';
import '../../../../Styles/TheMovieDBAPi/MovieCarousel.scss';
import Carousel from "react-multi-carousel";
import {Link} from "react-router-dom";
import Progress from "../../../../Components/Progress/Progress";
import {CarouselImage} from "../../../../Styles/TheMovieDBAPi/CarouselImg";

export const Recommendatios = (props) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
            slidesToSlide: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1741 },
            items: 7,
            slidesToSlide: 7
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

    return (
        <div className='rmdb-moviecarousel'>
            <Carousel responsive={responsive}
                      itemClass={props.category}
                      transitionDuration={0}
                      swipeable
                      draggable={true}
                      infinite={true}
                      keyBoardControl={true}
                      focusOnSelect={true}
                      additionalTransfrom={0}
            >
                {props.data ? props.data.map((title) => (
                    title.poster_path ?
                        <div key={title.id} className='Title'>
                            <Link to={{pathname: `/tmdbapi/${props.path}/detail/${props.category}/${title.original_title}/${title.id}`, query: `/tmdbapi/${props.path}/detail`}}>
                                <div>
                                    <CarouselImage src={`http://image.tmdb.org/t/p/w154/${title.poster_path}`}/>
                                </div>
                            </Link>
                        </div>
                        :
                        null
                    ))
                    :
                    <Progress/>
                }
            </Carousel>
        </div>
    )
}