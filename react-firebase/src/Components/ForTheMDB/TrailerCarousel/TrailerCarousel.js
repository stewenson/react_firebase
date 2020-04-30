import React from "react";
import Carousel from "react-multi-carousel";
import Progress from "../../Progress/Progress";
import '../../../Styles/TheMovieDBAPi/IFrame.scss';

export default function TrailerCarousel(props) {
    console.log(props.videos.results)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 0 },
            items: 1
        },
    };

    return (
        <React.Fragment>
            <div>
                <Carousel responsive={responsive}
                          swipeable={true}
                          draggable={false}
                          infinite={true}
                          keyBoardControl={true}
                >
                    {props.videos.results ? Object.entries(props.videos.results)
                        .map(([key,video]) => (
                            <div key={video.id} className='iframe-container'>
                                <iframe
                                    title="myFrame"
                                    id="application_area"
                                    key={video.id}
                                    src={`http://www.youtube.com/embed/${video.key}`}
                                    frameBorder="0"
                                    allowFullScreen
                                />
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