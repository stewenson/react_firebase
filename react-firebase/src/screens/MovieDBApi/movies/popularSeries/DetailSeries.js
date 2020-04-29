import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetailSeriesAction} from "../../actions/getDetailSeriesAction";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {MovieTitle} from "../../../../Styles/TheMovieDBAPi/MovieTitle";
import Title from "../../../../Components/ForTheMDB/Title/Title";
import Chip from "@material-ui/core/Chip";
import ProductionCompanies from "../../../../Components/ForTheMDB/ProductionCompanies/ProductionCompanies";
import Networks from "../../../../Components/ForTheMDB/Networks/Networks";
import MovieImage from "../../../../Components/ForTheMDB/MovieImage/MovieImage";
import SeasonList from "../../../../Components/ForTheMDB/SeasonList/SeasonList";
import {getCreditsSeasonAction} from "../../actions/getCreditsSeasonAction";
import SeasonActors from "../../../../Components/ForTheMDB/SeasonActors/SeasonActors";

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

export default function DetailSeries() {
    const classes = useStyles();
    const params = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.movieDbAPI);

    useEffect(() => {
        dispatch(getDetailSeriesAction(params.id))
        dispatch(getCreditsSeasonAction(params.id))
    },[dispatch, params.id])

    // console.log(data.detail)
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
                            <Title title={data.detail.name} variant={'h4'} date={convertDate(data.detail.first_air_date)} align={'center'} />
                        </MovieTitle>
                        <div className={classes.chip}>
                            <Chip size="medium" color="primary" label={data.detail.original_language} />
                            <Chip size="medium" color="primary" label={'episode ' + data.detail.episode_run_time + ' min'} />
                            <Chip size="medium" color="primary" label={data.detail.number_of_episodes + ' Episodes'} />
                            <Chip size="medium" color="primary" label={data.detail.number_of_seasons + ' Seasons'} />
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
                        list of networks
                        */}
                        <Title title={'Networks'} variant={'h5'} />
                        <Networks networks={data.detail.networks} />

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
                        <SeasonActors actors={data.credits.cast}/>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        {/*
                        Seasons
                        List of seasons
                    */}
                        <Title title={'Seasons'} variant={'h5'} />
                        <SeasonList seasons={data.detail.seasons} />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}
