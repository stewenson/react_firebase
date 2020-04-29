// import React from "react";
// import Carousel from "react-multi-carousel";
//
// export default function Trailers(props) {
//
//     const responsive = {
//         superLargeDesktop: {
//             // the naming can be any, depends on you.
//             breakpoint: { max: 4000, min: 3000 },
//             items: 1
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1741 },
//             items: 1
//         },
//         tablet: {
//             breakpoint: { max: 1054, min: 1045 },
//             items: 1
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//         },
//         respons1: {
//             breakpoint: { max: 681, min: 506 },
//             items: 1
//         },
//         respons2: {
//             breakpoint: { max: 868, min: 682 },
//             items: 1
//         },
//         respons3: {
//             breakpoint: { max: 1045, min: 872 },
//             items: 1
//         },
//         respons4: {
//             breakpoint: { max: 1214, min: 1054 },
//             items: 1
//         },
//         respons5: {
//             breakpoint: { max: 1396, min: 1215 },
//             items: 1
//         },
//         respons6: {
//             breakpoint: { max: 1564, min: 1397 },
//             items: 1
//         }
//     };
//
//     return (
//         <React.Fragment>
//             <div>
//                 <Carousel responsive={responsive}
//                           swipeable={true}
//                           draggable={false}
//                           infinite={true}
//                           keyBoardControl={true}
//                 >
//                     {props.videos.video.results ?
//                         Object.entries(props.videos.video.results).map(([key, video]) => (
//                             <iframe
//                                 title="myFrame"
//                                 key={video.id}
//                                 src={`http://www.youtube.com/embed/${video.key}`}
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             />
//                             )
//                         )
//                         : ''
//                     }
//                 </Carousel>
//             </div>
//         </React.Fragment>
//
//     )
// }

import React, {useState} from "react";
import Progress from "../../Progress/Progress";
import {makeStyles} from "@material-ui/core/styles";
import Paginator from "../../Pagination/Paginator";
import '../../../Styles/TheMovieDBAPi/SeasonDescr.scss';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Trailers(props) {
    const classes = useStyles();
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(1);
    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
    let totalData;
    if (props.videos.video.results) {
        totalData = Object.keys(props.videos.video.results).length;
    }

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className={classes.root}>
            {props.videos.video.results ?
                Object.entries(props.videos.video.results)
                    .slice(indexOfFirstTodo, indexOfLastTodo)
                    .map(([key,video]) => (
                        <Container key={video.id} className="Container" maxWidth="lg">
                            <div className={classes.root}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={2}>
                                            <iframe
                                                title="myFrame"
                                                key={video.id}
                                                src={`http://www.youtube.com/embed/${video.key}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                />
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    ))
                :
                <Progress/>
            }
            <Paginator
                count={totalData/todoPerPage}
                page={currentPage}
                changed={handleChange}
            />
        </div>
    )
}
