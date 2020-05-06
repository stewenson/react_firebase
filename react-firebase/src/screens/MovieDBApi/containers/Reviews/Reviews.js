import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paginator from "../../../../Components/Pagination/Paginator";
import '../../../../Styles/TheMovieDBAPi/SeasonDescr.scss';
import Grid from "@material-ui/core/Grid";
import Title from "../../../MovieDBApi/components/Title/Title";
import '../../../../Styles/TheMovieDBAPi/ReviewContent.scss';
import {ContainerLine, LineHorizontalBlack} from "../../../../Styles/TheMovieDBAPi/Line";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export const  Reviews = (props) => {
    const classes = useStyles();

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(1);
    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;

    let totalData;
    if (props.reviews) {
        totalData = Object.entries(props.reviews).length;
        if (totalData === 0) return null;
    }

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    if (!props.reviews) return null;

    return (
        <React.Fragment>
            <Title title={'Reviews'} variant={'h5'} marginTop={'3%'} color={'black'}/>
            <LineHorizontalBlack />
            <div className={classes.root}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {props.reviews ? Object.entries(props.reviews)
                                .slice(indexOfFirstTodo, indexOfLastTodo)
                                .map(([key,review]) => (
                                    review.author ?
                                    <Grid key={review.id} item xs={12} md={12}>
                                        <Title title={review.author} variant={'h5'} color={'red'} />
                                        <div  className='review-content'>
                                            <Title title={review.content} variant={'body1'} />
                                        </div>
                                    </Grid>
                                        :
                                        <Title title={'No reviews'} variant={'body1'}  color={'black'}/>
                                    // </div>
                                ))
                            :
                            null
                        }
                    </Grid>

                </div>
                <Paginator
                    count={totalData/todoPerPage}
                    page={currentPage}
                    changed={handleChange}
                />
            </div>
            <ContainerLine/>
        </React.Fragment>

    )
}

