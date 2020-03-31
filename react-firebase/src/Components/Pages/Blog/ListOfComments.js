import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {FetchAllComments} from "../../../Redux/Actions/BlogActions/FetchAllComments";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paginator from "../../Pagination/Paginator";
import CommentForm from "./Form/CommentForm";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    badge: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));
export default function ListOfComments(props) {
    const classes = useStyles();
    const params = useParams();
    const content = useSelector(state => state);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(5);
    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const comments = content.fetchAllComments.data;

    useEffect(() => {
            dispatch(FetchAllComments(params));
    },[comments]);

    const convertDate = (seconds) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        let myDate = new Date( seconds * 1);

        return (myDate.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    };

    const data = content.fetchAllComments.data;
    const totalData = Object.keys(data).length;

    return (
        <div>
            <CommentForm postId={props.postId} />
            <div className={classes.root}>
                <CssBaseline />
                {Object.entries(comments)
                    .slice(indexOfFirstTodo, indexOfLastTodo)
                    .map(([key, comment]) => (
                        <Grid key={comment.id} >
                            <Typography variant="h6" color="primary" gutterBottom>
                                {convertDate(comment.created)} <strong>by</strong> {comment.userName}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" style={{marginLeft: '15px'}} gutterBottom>
                                {comment.comment}
                            </Typography>
                        </Grid>
                    ))}<Paginator
                todoPerPage={todoPerPage}
                totalTodo={totalData}
                paginate={paginate}
                href={"#/blog/allPosts"}
            />
            </div>
        </div>
    );
}
