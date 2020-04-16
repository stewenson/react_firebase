import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

export default function LatestPost(props) {
    const data = props.data;

    //Convert ms to date
    const convertDate = (seconds) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        let myDate = new Date( seconds * 1);
        return (myDate.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    };

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom className={props.classes}>
                Latest Post
            </Typography>
            {Object.entries(data)
                .slice(0,3)
                .map(([key, post]) => (
                    <Grid key={post.id}  item xs={12} style={{ marginLeft: '10px'}}>
                        <Typography component="h6" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography ariant="subtitle1" color="textSecondary" >
                            {convertDate(post.created)} <strong>by</strong> {post.author}
                        </Typography>
                        <Link to={{pathname: `/blog/detailPost/${post.id}`, query: "/blog/detailPost"}}>Read</Link>
                    </Grid>
                ))}
        </React.Fragment>
    )
}