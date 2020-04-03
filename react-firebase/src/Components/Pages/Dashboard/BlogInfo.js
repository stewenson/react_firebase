import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export default function TodoInfo(props) {

    return (
        <React.Fragment>
            <Typography component="h1" variant="h4" color="primary" gutterBottom>
                <div>
                    <Link to="/blog" >
                        Blog info
                    </Link>
                </div>
            </Typography>
            <Typography component="p" variant="h5">
                All Posts: {props.allPosts}
            </Typography>
            <Typography component="p" variant="h5">
                {props.userName} Posts : {props.userPosts}
            </Typography>
        </React.Fragment>
    );
}