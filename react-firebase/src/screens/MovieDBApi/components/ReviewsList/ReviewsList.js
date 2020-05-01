import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paginator from "../../../../Components/Pagination/Paginator";
import '../../../../Styles/TheMovieDBAPi/SeasonDescr.scss';
import Grid from "@material-ui/core/Grid";
import Title from "../Title/Title";
import '../../../../Styles/TheMovieDBAPi/ReviewContent.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function ReviewsList(props) {
    const classes = useStyles();
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(2);
    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;

    let totalData;
    if (props.seasons) {
        totalData = Object.entries(props.reviews).length;
    }

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className={classes.root}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {props.reviews ? Object.entries(props.reviews)
                                .slice(indexOfFirstTodo, indexOfLastTodo)
                                .map(([key,review]) => (
                                    <Grid key={review.id} item xs={12} md={6}>
                                        <Title title={review.author} variant={'h5'} color={'red'} />
                                        <div  className='review-content'>
                                            <Title title={review.content} variant={'body1'} />
                                        </div>
                                    </Grid>
                                    // </div>
                                ))
                            :
                            <Title title={'No reviews'} variant={'body1'} />

                        }
                    </Grid>

                </div>
                <Paginator
                    count={totalData/todoPerPage}
                    page={currentPage}
                    changed={handleChange}
                />
        </div>

    )
}

