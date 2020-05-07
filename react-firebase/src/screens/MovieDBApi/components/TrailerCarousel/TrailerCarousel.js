import React from "react";
import Carousel from "react-multi-carousel";
import '../../Styles/IFrame.scss';
/* Components */
import Title from "../Title/Title";

export default function TrailerCarousel(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 0 },
            items: 1
        },
    };

    if (props.videos.results.length === 0) return <Title title={'No trailers'} align={'center'} variant={'h5'} color={'orange'} marginTop={'3%'}/>;

    return (
        <React.Fragment>
            <div>
                <Carousel responsive={responsive}
                          swipeable={true}
                          draggable={false}
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
                                    allow="autoplay; encrypted-media"
                                />
                            </div>
                        ))
                        :
                        null
                    }
                </Carousel>
            </div>
        </React.Fragment>

    )
}