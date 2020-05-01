import React from 'react';
import { useFormik } from 'formik';
import InputBase from "@material-ui/core/InputBase";
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {ValidationSchema} from "./ValidationSchema";
import Button from '@material-ui/core/Button';
import {searchAction} from "../../actions/searchAction";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        borderRadius: '25px',
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SearchForm () {
    const dispatch = useDispatch();
    const classes = useStyles();

    const SearchMovie = values => {
        try {
            dispatch(searchAction(values.title, '1'))
            values.title = ' ';
        } catch (e) {
            alert(e.message);
        }
    };

    const formik = useFormik({
        initialValues: {
            title: ''
        },
        validationSchema: ValidationSchema,
        onSubmit: SearchMovie
    });
    return (
        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
                <Paper elevation={3} onSubmit={formik.handleSubmit} className={classes.root}>
                    <InputBase
                        style={{ borderRadius: '25px'}}
                        className={classes.input}
                        name="title"
                        type="text"
                        placeholder="Search movie by title"
                        inputProps={{ 'aria-label': 'Search movie by title' }}
                        onChange={formik.handleChange}
                        value={formik.values.title}

                    />
                    <Button className='rmdb-search-button'>
                        Search
                    </Button>
                    <strong className='ErrorMessage'>
                        {formik.errors.title ? <div>{formik.errors.title}</div> : null}
                    </strong>
                </Paper>
            </form>
        </React.Fragment>
    );
};