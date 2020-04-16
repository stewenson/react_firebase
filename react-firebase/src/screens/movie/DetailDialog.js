import React from 'react';
import { getDetailData } from "./actions/getDetailAction";
import { clearDetailData } from './actions/clearAction';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {useDispatch ,useSelector} from "react-redux";
import DetailMovie from './DetailMovie';
import '../../Styles/MovieStyle/DialogDetailStyle.scss';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function DetailDialog(props) {
    const classes = useStyles();
    const content= useSelector(state => state);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        dispatch(getDetailData(props.id));
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(clearDetailData());
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const data = content.detailMovie.detailData;

    return (
        <div className="DialogDetail">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Detail
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{maxWidth: '100%'}}
            >
                <DialogContent>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4} lg={5}>
                                <Paper>
                                    <img src={data.Poster}
                                         alt=""
                                         style={{ width: "100%"}}
                                    />
                                </Paper>
                                <div className={classes.root}>
                                    <Chip size="medium" color="primary" label={data.Rated} />
                                    <Chip size="medium" color="primary" label={data.Runtime} />
                                    <Chip size="medium" color="primary" label={data.Genre} />
                                    <Chip size="medium" color="primary" label={data.Year} />
                                    <Chip size="medium" color="primary" label={data.Released} />
                                    <Chip size="medium" color="primary" label={data.BoxOffice} />
                                    <Chip size="medium" color="primary" label={data.Language} />
                                    <a href={`https://www.imdb.com/title/${data.imdbID}/`}>
                                        <Chip size="medium" color="secondary" label="Imdb Link" />
                                    </a>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={8} lg={7}>

                                <Paper>
                                    <DetailMovie data={data}/>
                                </Paper>
                                <Typography variant="h5" align="center" color="secondary">
                                    Description
                                </Typography>
                                <Paper className={classes.paper}>
                                    {data.Plot}
                                </Paper>
                                <Typography variant="h5" align="center" color="secondary">
                                    Rating
                                </Typography>
                                <div className={classes.root}>
                                {data.Ratings ?
                                    Object.entries(data.Ratings).map(([key, rating]) => (
                                        <Chip key={key} size="medium" color="primary" label={rating.Source +":  "+ rating.Value} />
                                        )
                                    )
                                : null
                                }
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
