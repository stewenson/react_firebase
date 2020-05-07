import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {ValidationSchema} from "./ValidationSchema";
import {searchMovie} from "../../../actions/searchMovie";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import '../Styles/FormStyles.scss';

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
            dispatch(searchMovie(values.title, '1'))
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
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                {/*<Title title={'Search for movies, tv shows'} variant={'h5'} color={'black'} align={'center'}/>*/}
                <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
                   <div>
                       <TextField
                           autoFocus
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           label="Search for movies, tv shows"
                           name="title"
                           type="text"
                           placeholder="Search for movies, tv shows"
                           inputProps={{ 'aria-label': 'Search for movies, tv shows' }}
                           onChange={formik.handleChange}
                           value={formik.values.title}
                       />
                       <strong className='ErrorMessage'>
                           {formik.errors.title ? <div>{formik.errors.title}</div> : null}
                       </strong>
                       <Button
                           type="submit"

                           variant="contained"
                           color="primary"
                           className={classes.submit}
                       >
                           Search
                       </Button>
                   </div>
                </form>
            </div>
        </Container>
    );
};
