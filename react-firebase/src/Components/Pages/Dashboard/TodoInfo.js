import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export default function TodoInfo(props) {

    return (
        <React.Fragment>
            <Typography component="h1" variant="h4" color="primary" gutterBottom>
                <div>
                    <Link to="/todo" >
                        Todo list
                    </Link>
                </div>
            </Typography>
            <Typography component="p" variant="h5">
                All todo: {props.allTodo}
            </Typography>
            <Typography component="p" variant="h5">
                Complete: {props.complete}
            </Typography>
            <Typography component="p" variant="h5">
                Unomplete: {props.uncomplete}
            </Typography>
        </React.Fragment>
    );
}