import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {FetchDetailPost} from "../../../../Redux/Actions/BlogActions/FetchDetailPost";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import {UpdateLike} from "../../../../Redux/Actions/BlogActions/UpdateLike";
import {makeStyles} from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Comments from "../Comments/Comments";
import {FetchAllComments} from "../../../../Redux/Actions/BlogActions/FetchAllComments";


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
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const defaultProps = {
    color: 'secondary',
    children: <ThumbUpIcon />,
};

export default function DetailPost() {
    const classes = useStyles();
    const params = useParams();
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchDetailPost(params));
        dispatch(FetchAllComments(params));
    }, [content.blog.likePerPost.length, content.blog.addComment, params, dispatch]);

    const convertDate = (seconds) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        let myDate = new Date( seconds * 1);

        return (myDate.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    };

    const handleLikeChanges = (data) => {
        dispatch(UpdateLike([data.id, data.like]));
    };

    let data = content.blog.detailPost;
    let commentsData = content.blog.fetchAllComments;
    let msg = content.blog.msg;

    return (
        <Grid container spacing={4}>
            <div className={classes.root}>
                <CssBaseline />
                <Grid key={data.id} item xs={12} className={classes.main} style={{ marginLeft: '20px'}}>
                    <Typography component="h2" variant="h5" gutterBottom>
                        {data.title}
                    </Typography>
                    <Typography ariant="subtitle1" color="textSecondary" gutterBottom>
                        {convertDate(data.created)} <strong>by</strong> {data.author}
                    </Typography>
                    <Typography variant="subtitle1" paragraph gutterBottom>
                        {data.content}
                    </Typography>
                    <div className={classes.badge} >
                        <Badge
                            onClick={() => handleLikeChanges(data)}
                            badgeContent={data.like}
                            {...defaultProps}
                        />
                    </div>
                    <Comments msg={msg} data={commentsData} postId={data.id} />
                </Grid>
            </div>
        </Grid>
    )
}