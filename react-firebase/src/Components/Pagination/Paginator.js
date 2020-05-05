import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: '20px',
            marginBottom: '20px',
        },
    },
}));

export default function Paginator(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination
                count={Math.ceil(props.count)}
                page={props.page}
                onChange={props.changed}
                color="secondary"
            />
        </div>
    );
}