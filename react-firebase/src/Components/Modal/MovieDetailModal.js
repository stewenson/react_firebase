import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import { getDetailData } from "../../Redux/Actions/MovieActions/FetchDetailMovie";
import { clearDetailData } from '../../Redux/Actions/MovieActions/ClearDetailMovieData';
import DetailMovie from '../Pages/Movies/DetailMovie';
import Progress from "../Progress/Progress";

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function MovieDetailModal(props) {
    const content= useSelector(state => state);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        dispatch(getDetailData(props.id));
            setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(clearDetailData())
    };

    let data;
    if (content.detailMovie.detailData){
        const result = content.detailMovie.detailData;
        data = (
            <DetailMovie
            title={result.Title}
            img={result.Poster}
            rated={result.Rated}
            runtime={result.Runtime}
            year={result.Year}
            released={result.Released}
            boxoffice={result.BoxOffice}
            plot={result.Plot}
            language={result.Language}
            genre={result.Genre}
            director={result.Director}
            writer={result.Writer}
            actors={result.Actors}
            awards={result.Awards}
            imdblink={result.imdbID}
            production={result.Production}
        />);
    } else {
        data = (<Progress />);
    }

    return (
        <div>
            <Button size="small"
                    variant="outlined"
                    color="primary"
                    onClick={handleOpen}
            >
                Detail
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 0.1,}}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {data}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
