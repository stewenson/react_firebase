import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetailSeriesAction} from "../../actions/getDetailSeriesAction";
import Container from "@material-ui/core/Container";
import '../../../../Styles/TheMovieDBAPi/Background.scss';
import Grid from "@material-ui/core/Grid";
import {MovieTitle} from "../../../../Styles/TheMovieDBAPi/MovieTitle";
import Title from "../../components/Title/Title";
import MovieImage from "../../components/MovieImage/MovieImage";
import SeasonList from "../../components/SeasonList/SeasonList";
import {getCreditsSeasonAction} from "../../actions/getCreditsSeasonAction";
import Trailers from "../Trailers";
import Actors from "../../components/Actors/Actors";
import ListGenres from "../../components/Genres/ListGenres";
import ProductionCompanies from "../../components/ProductionCompanies/ProductionCompanies";
import ProductionCountries from "../../components/ProductionCountries/ProductionCountries";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import {getVideoAction} from "../../actions/getVideoAction";
import {getReviewsAction} from "../../actions/getReviewsAction";


export default function DetailSeries() {
    const params = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.movieDbAPI);

    useEffect(() => {
        dispatch(getDetailSeriesAction(params.id))
        dispatch(getCreditsSeasonAction(params.id))
        dispatch(getVideoAction(params.id, 'tv'))
        dispatch(getReviewsAction(params.id, 'tv'))
    },[dispatch, params.id])

    // console.log(data.detail)
    // convert date and get only year
    const convertDate = (date) => {
        let fullDate = new Date(date);
        return fullDate.getFullYear() // 2019
    };
    const imageUrl = `http://image.tmdb.org/t/p/original/` + data.detail.backdrop_path;

    return (
        <React.Fragment>
            {/* Bckgroung image*/}
            <div className="rmdb-movieinfo"
                 style={{
                     background: data.detail.backdrop_path
                         ? `url(${imageUrl})`
                         : null
                 }}
            >
                {/*Main container*/}
                <Container>
                    <div className="rmdb-description-container">
                        <Grid container spacing={3} className="rmdb-movieinfo-content">
                            {/*Movie image*/}
                            <Grid item xs={12} sm={4} className="rmdb-movieinfo-thumb">
                                {data.detail.poster_path ?
                                    <MovieImage image={data.detail.poster_path} />
                                    :
                                    null
                                }
                                {/*Trailers button container*/}
                                <Container>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <Trailers videos={data} />
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Grid>
                            {/*Movie info Title, Overview*/}
                            <Grid item xs={12} sm={8} className="rmdb-movieinfo-text">
                                <MovieTitle>
                                    {data.detail.title} {convertDate(data.detail.release_date)}
                                </MovieTitle>
                                <Title title={'“' + data.detail.tagline + '„'} variant={'h5'} align={'center'}/>
                                <Title title={'Overview'} variant={'h5'} color={'orange'}/>
                                <Title title={data.detail.overview} variant={'h6'} />
                                {/*Metadata containers*/}
                                <Container>
                                    <div>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6} sm={3}>
                                                <Title title={'Runtime'} variant={'h5'} color={'orange'}/>
                                                <p className="rmdb-imdb-rating-number">{data.detail.runtime} min</p>
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <Title title={'Imdb Rating'} variant={'h5'} color={'orange'}/>
                                                <meter
                                                    className="rmdb-imdb-rating"
                                                    width='50'
                                                    min="0"
                                                    max="100"
                                                    optimum="100"
                                                    low="40"
                                                    high="70"
                                                    value={data.detail.vote_average ? data.detail.vote_average * 10 : ' '}
                                                />
                                                <p className="rmdb-imdb-rating-number">{data.detail.vote_average}</p>
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <Title title={'Budget'} variant={'h5'} color={'orange'}/>
                                                <p className="rmdb-imdb-rating-number">$ {data.detail.budget}</p>
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <Title title={'Revenue'} variant={'h5'} color={'orange'}/>
                                                <p className="rmdb-imdb-rating-number">{data.detail.revenue}</p>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Container>
                                {/*Genres container*/}
                                <Container>
                                    <Title title={'Genres'} variant={'h5'} color={'orange'}/>
                                    <ListGenres genres={data.detail.genres}/>
                                </Container>
                                {/*Companies Container*/}
                                <Container>
                                    <Title title={'Production Companies'} variant={'h5'} color={'orange'}/>
                                    <ProductionCompanies companies={data.detail.production_companies}/>
                                </Container>
                                {/*Countries container*/}
                                <Container>
                                    <Title title={'Production Countries'} variant={'h5'} color={'orange'}/>
                                    <ProductionCountries countries={data.detail.production_countries}/>
                                </Container>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container maxWidth='lg'>
                {/*Actors container*/}
                <Container maxWidth='lg'>
                    <Title title={'Casts'} variant={'h4'} color={'orange'}/>
                    <Actors actors={data.credits.cast}/>
                </Container>
                {/*Crew Containers*/}
                <Container maxWidth='lg'>
                    <Title title={'Crew'} variant={'h4'} color={'orange'}/>
                    <Actors actors={data.credits.crew}/>
                </Container>
                {/*Series Containers */}
                <Container maxWidth='lg'>
                    <Title title={'Seasons'} variant={'h4'} color={'orange'} />
                    <SeasonList seasons={data.detail.seasons} />
                </Container>
                {/*Reviews Container*/}
                <Container maxWidth='lg'>
                    <Title title={'Reviews'} variant={'h4'} color={'orange'}/>
                    <ReviewsList reviews={data.reviews.results}/>
                </Container>
            </Container>
        </React.Fragment>
    )
}
