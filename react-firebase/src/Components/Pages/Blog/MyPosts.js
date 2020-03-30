import React, {useContext, useEffect} from "react";
import {Link} from 'react-router-dom';
import {FetchUserPosts} from '../../../Redux/Actions/BlogActions/FetchUserPosts';
import {UpdateLike} from "../../../Redux/Actions/BlogActions/UpdateLike";
import {useSelector, useDispatch} from "react-redux";
import {AuthContext} from "../../Auth/Auth/Auth";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Button from '@material-ui/core/Button';

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

const defaultProps = {
    color: 'secondary',
    children: <ThumbUpIcon />,
};

export default function MyPosts({match}) {
    const classes = useStyles();
    const content = useSelector(state => state);
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchUserPosts(currentUser.uid));
    },[content.updateLike.data]);

    const convertDate = (seconds) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        let myDate = new Date( seconds * 1);

        return (myDate.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    };

    const handleLikeChange= (post) => {
        dispatch(UpdateLike([post.id, post.like]));
    };

    const data = content.userBlogPosts.data;

    return (
        <Grid container spacing={4}>
            <div className={classes.root}>
                <CssBaseline />
                {Object.entries(data)
                    .map(([key, post]) => (
                        <Grid key={post.id} item xs={12} className={classes.main} style={{ marginLeft: '10px'}}>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography ariant="subtitle1" color="textSecondary" gutterBottom>
                                {convertDate(post.created)} <strong>by</strong> {post.author}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.content.slice(0, 250)}
                            </Typography>
                            <Link to={{pathname: `/blog/detailPost/${post.id}`, query: "/blog/detailPost"}}>Continue reading...</Link>
                            <div className={classes.badge}>
                                <Badge
                                    onClick={() => handleLikeChange(post)}
                                    badgeContent={post.like}
                                    {...defaultProps}
                                />
                                <Button variant="outlined" color="primary">
                                    Edit
                                </Button>
                                <Button variant="outlined" color="secondary">
                                    Delete
                                </Button>
                            </div>
                        </Grid>
                    ))}
            </div>
        </Grid>
    )
}