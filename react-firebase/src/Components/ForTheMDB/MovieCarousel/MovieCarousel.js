import React from "react";
import Carousel from "react-multi-carousel";
import {Link} from "react-router-dom";
import Progress from "../../Progress/Progress";

export default function MovieCarousel(props) {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 20
        },
        desktop: {
            breakpoint: { max: 3000, min: 1741 },
            items: 11
        },
        tablet: {
            breakpoint: { max: 1054, min: 1045 },
            items: 6
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        },
        respons1: {
            breakpoint: { max: 681, min: 506 },
            items: 3
        },
        respons2: {
            breakpoint: { max: 868, min: 682 },
            items: 4
        },
        respons3: {
            breakpoint: { max: 1045, min: 872 },
            items: 5
        },
        respons4: {
            breakpoint: { max: 1214, min: 1054 },
            items: 7
        },
        respons5: {
            breakpoint: { max: 1396, min: 1215 },
            items: 8
        },
        respons6: {
            breakpoint: { max: 1564, min: 1397 },
            items: 9
        }
    };
    return (
        <React.Fragment>
            <div style={{ paddingLeft: '3%', paddingRight: '3%'}}>
                <Carousel responsive={responsive}
                          swipeable={true}
                          draggable={false}
                          infinite={true}
                          keyBoardControl={true}
                >
                    {props.data ? props.data.map((title) => (
                        <div key={title.id} className='Title'>
                            <Link to={{pathname: `/tmdbapi/${props.path}/detail/${title.original_title}/${title.id}`, query: `/tmdbapi/${props.path}/detail`}}>
                                {title.poster_path ?
                                    <img src={`http://image.tmdb.org/t/p/w154/`+ title.poster_path} alt={title.original_title}/>
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
            </div>
        </React.Fragment>

    )
}