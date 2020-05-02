import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {ValidationSchema} from "./ValidationSchema";
import {searchAction} from "../../actions/searchAction";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
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
            <form className={classes.root} onSubmit={formik.handleSubmit}>
                    <TextField id="filled-basic"
                               label="Enter movie title"
                               name="title"
                               type="text"
                               placeholder="Search movie by title"
                               inputProps={{ 'aria-label': 'Search movie by title' }}
                               onChange={formik.handleChange}
                               value={formik.values.title}
                               fullWidth
                    />
                    <strong className='ErrorMessage'>
                        {formik.errors.title ? <div>{formik.errors.title}</div> : null}
                    </strong>
            </form>
        </React.Fragment>
    );
};