import React from "react";
import 'react-multi-carousel/lib/styles.css';
import '../../Styles/MovieCarousel.scss';
import Carousel from "react-multi-carousel";
import {Link} from "react-router-dom";
import Progress from "../../../../Components/Progress/Progress";
import {CarouselImage} from "../../Styles/CarouselImg";
import Title from "../../components/Title/Title";
import {ContainerLine, LineHorizontalBlack} from "../../Styles/Line";

export const Recommendatios = (props) => {

    const scrotToTop = () => {
        setTimeout(function () {
            window.scrollTo(0, 0)
        }, 1500)
    }

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
        }
    }
    if (props.data) {
        if (props.data.length === 0) return null;
    }
    if (!props.data) return null;

    return (
        <React.Fragment>
            <Title title={props.title} variant={'h5'} marginTop={'3%'} color={props.color ? props.color : 'black'}/>
            <LineHorizontalBlack/>
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
                                    <Link onClick={scrotToTop} to={{pathname: `/tmdbapi/${props.path}/detail/${props.category ? props.category : title.media_type}/${title.original_title}/${title.id}`, query: `/tmdbapi/${props.path}/detail`}}>
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
            <ContainerLine/>
        </React.Fragment>

    )
}