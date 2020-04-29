import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetailMovieAction} from "../../actions/getDetailMovieAction";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import '../../../../Styles/TheMovieDBAPi/DetailMovie.scss';
import Chip from "@material-ui/core/Chip";
import {getCreditsAction} from "../../actions/getCreditsAction";
import Title from "../../../../Components/ForTheMDB/Title/Title";
import MovieImage from "../../../../Components/ForTheMDB/MovieImage/MovieImage";
import Actors from "../../../../Components/ForTheMDB/Actors/Actors";
import ProductionCompanies from "../../../../Components/ForTheMDB/ProductionCompanies/ProductionCompanies";
import ProductionCountries from "../../../../Components/ForTheMDB/ProductionCountries/ProductionCountries";
import {MovieTitle} from '../../../../Styles/TheMovieDBAPi/MovieTitle';
import ListGenres from "../../../../Components/ForTheMDB/Genres/ListGenres";
import {getVideoAction} from "../../actions/getVideoAction";
import Trailers from "../../../../Components/ForTheMDB/Trailers/Trailers";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    chip: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function DetailMovie() {
    const classes = useStyles();
    const params = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.movieDbAPI);

    useEffect(() => {
        try {
            dispatch(getDetailMovieAction(params.id))
            dispatch(getCreditsAction(params.id))
            dispatch(getVideoAction(params.id))
        } catch (e) {
          alert(e.message);
        }

    },[dispatch, params.id])

    // convert date and get only year
    const convertDate = (date) => {
        let fullDate = new Date(date);
        return fullDate.getFullYear() // 2019
    };

    return (
        <Container className="Container" maxWidth="lg">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        {/*Movie title with styled components*/}
                        <MovieTitle>
                            <Title title={data.detail.title} variant={'h4'} date={convertDate(data.detail.release_date)} align={'center'} />
                        </MovieTitle>
                        <Title title={data.detail.tagline} variant={'h6'} align={'center'} />
                        <div className={classes.chip}>
                            <Chip size="medium" color="primary" label={data.detail.original_language} />
                            <Chip size="medium" color="primary" label={data.detail.runtime + ' min'} />
                            <a href={`https://www.imdb.com/title/${data.detail.imdb_id}/`}>
                                <Chip size="medium" color="secondary" label="Imdb Link" />
                            </a>
                        </div>

                        {/*Movie Description*/}
                        <Title title={data.detail.overview} variant={'subtitle1'} />

                        {/*
                        Production companies title
                        list of companies
                        */}
                        <Title title={'Production Companies'} variant={'h5'} />
                        <ProductionCompanies companies={data.detail.production_companies}/>

                        {/*
                        Production countries title
                        list of production countries
                        */}
                        <Title title={'Production Countries'} variant={'h5'} />
                        <ProductionCountries countries={data.detail.production_countries}/>

                        {/* Genres Title
                        List of genres
                        */}
                        <Title title={'Genres'} variant={'h5'} />
                        <ListGenres genres={data.detail.genres} />

                        {/*    Trailer*/}
                        <Trailers videos={data} />
                    </Grid>

                    {/*Image*/}
                    <Grid item xs={12} sm={6}>
                        <MovieImage image={data.detail.poster_path} />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        {/*
                        Actors Title
                        list of Actors
                        */}
                        <Title title={'Actors'} variant={'h5'} />
                        <Actors actors={data.credits.cast}/>
                    </Grid>
                </Grid>
            </div>
        </Container>

    )
}