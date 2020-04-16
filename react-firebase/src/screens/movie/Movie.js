import React from 'react';
import {useSelector} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import SearchForm from './Form/SearchForm';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DetailDialog from './DetailDialog';
import MovieList from "./MovieList";
import {Link} from "react-router-dom";
import { Alert, AlertTitle } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '150%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Movie() {
    const content = useSelector(state => state);
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Movie App
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Enter a movie name in the input and press Enter
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            <Link to='/'>Back to Home</Link>
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={1} justify="center">
                                <Grid item>
                                    <SearchForm />
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {(content.movie.data.Search) ?
                            content.movie.data.Search
                                .map((card) => (
                                    <Grid item key={card.imdbID} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={card.Poster}
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {card.Title}
                                                </Typography>
                                                <Typography>
                                                    {card.Year}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <DetailDialog
                                                    id={card.imdbID}
                                                />
                                                <div>
                                                    <a href={`https://www.imdb.com/title/${card.imdbID}`}>IMDB link</a>
                                                </div>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))
                            :
                            null
                        }
                        {(content.movie.data.Error) ?
                            <div className={classes.root}>
                                <Alert severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Movie does not exist
                                </Alert>
                            </div>
                            :
                            null
                        }
                    </Grid>
                    <MovieList/>
                </Container>
            </main>
        </React.Fragment>
    );
}