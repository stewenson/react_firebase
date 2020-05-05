import React, {useEffect, useState} from "react";
import 'react-multi-carousel/lib/styles.css';
import '../../../../Styles/TheMovieDBAPi/MovieCarousel.scss';
import Carousel from "react-multi-carousel";
import {Link} from "react-router-dom";
import Progress from "../../../../Components/Progress/Progress";
import {CarouselImage} from "../../../../Styles/TheMovieDBAPi/CarouselImg";
import Title from "../../components/Title/Title";
import {useDispatch} from "react-redux";
import {clearDetail} from "../../actions/clearDetail";

export const MovieCarousel = (props) => {
    const dispatch = useDispatch();
    const [load, isLoad]=useState(true);

    useEffect(() => {
        return async ()=> {
            await isLoad(false);
            await dispatch(clearDetail());
        }
    },[load, dispatch]);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 20,
            slidesToSlide: 20
        },
        desktop: {
            breakpoint: { max: 3000, min: 1741 },
            items: 11,
            slidesToSlide: 10
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
            {load && props.data ?
                <Carousel responsive={responsive}
                          ssr
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
                            <div key={title.id} className='Title'>
                                <Link to={{pathname: `/tmdbapi/${props.path}/detail/${props.category}/${title.original_title}/${title.id}`, query: `/tmdbapi/${props.path}/detail`}}>
                                    {title.poster_path ?
                                        <div>
                                            <CarouselImage
                                                style={{ width: "100%", height: "100%" }}
                                                src={`http://image.tmdb.org/t/p/w154/${title.poster_path}`}/>
                                        </div>
                                        :
                                        null
                                    }
                                </Link>
                            </div>
                        ))
                        :
                        <Progress/>
                    }
                </Carousel>
                :
                isLoad(false)
            }

        </div>
    )
}
