import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetailSeriesAction} from "../../actions/getDetailSeriesAction";
import Container from "@material-ui/core/Container";
import '../../../../Styles/TheMovieDBAPi/Background.scss';
import Grid from "@material-ui/core/Grid";
import {MovieTitle} from "../../../../Styles/TheMovieDBAPi/MovieTitle";
import Title from "../../../../Components/ForTheMDB/Title/Title";
import MovieImage from "../../../../Components/ForTheMDB/MovieImage/MovieImage";
import SeasonList from "../../../../Components/ForTheMDB/SeasonList/SeasonList";
import {getCreditsSeasonAction} from "../../actions/getCreditsSeasonAction";
import SeasonActors from "../../../../Components/ForTheMDB/SeasonActors/SeasonActors";
import Trailers from "../Trailers";
import Actors from "../../../../Components/ForTheMDB/Actors/Actors";


export default function DetailSeries() {
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
    const imageUrl = `http://image.tmdb.org/t/p/original/` + data.detail.backdrop_path;

    console.log(data.detail)

    return (
        <React.Fragment>
            <div className="rmdb-movieinfo"
                 style={{
                     background: data.detail.backdrop_path
                         ? `url(${imageUrl})`
                         : null
                 }}
            >
                <Container>
                    <div className="rmdb-description-container">
                        <Grid container spacing={3} className="rmdb-movieinfo-content">
                            <Grid item xs={12} sm={4} className="rmdb-movieinfo-thumb">
                                {data.detail.poster_path ?
                                    <MovieImage image={data.detail.poster_path} />
                                    :
                                    null
                                }
                            </Grid>
                            <Grid item xs={12} sm={8} className="rmdb-movieinfo-text">
                                <MovieTitle>
                                    {data.detail.name} {convertDate(data.detail.last_air_date)}
                                </MovieTitle>
                                {/*Movie Description overview*/}
                                <Title title={'Overview'} variant={'h5'} color={'orange'}/>
                                <Title title={data.detail.overview} variant={'h6'} />
                                <Container>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <Link className='rmdb-imdb-link' to='/'>
                                                Watch on IMDB
                                            </Link>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Trailers videos={data} />
                                        </Grid>
                                    </Grid>
                                </Container>
                                <Container>
                                    <div>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6} sm={4}>
                                                <Title title={'Runtime'} variant={'h5'} color={'orange'}/>
                                                <p className="rmdb-imdb-rating-number">{data.detail.episode_run_time} min</p>
                                            </Grid>
                                            <Grid item xs={6} sm={4}>
                                                <Title title={'Imdb Rating'} variant={'h5'} color={'orange'}/>
                                                <meter
                                                    className="rmdb-imdb-rating"
                                                    min="0"
                                                    max="100"
                                                    optimum="100"
                                                    low="40"
                                                    high="70"
                                                    value={data.detail.vote_average ? data.detail.vote_average * 10 : ' '}
                                                />
                                                <p className="rmdb-imdb-rating-number">{data.detail.vote_average}</p>
                                            </Grid>
                                            <Grid item xs={6} sm={4}>
                                                <Title title={'Number of Seasons'} variant={'h5'} color={'orange'}/>
                                                <p className="rmdb-imdb-rating-number">{data.detail.seasons ? Object.entries(data.detail.seasons).length : null} seasons</p>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Container>
                            </Grid>
                        {/*    */}
                            <Container>
                                <div className="rmdb-description-container">
                                    <div className="rmdb-movieinfo-text">
                                        <Grid container spacing={3}>
                                            <Grid item xs={3} sm={2}>
                                                <Title title={'Last Episode'} variant={'h5'} color={'orange'}/>
                                            </Grid>
                                            <Grid item xs={3} sm={2}>
                                                <p className="rmdb-imdb-rating-number">{data.detail.last_episode_to_air ? data.detail.last_episode_to_air.air_date : 'none'}</p>
                                            </Grid>
                                            <Grid item xs={3} sm={2}>
                                                <p className="rmdb-imdb-rating-number">Season - {data.detail.last_episode_to_air ? data.detail.last_episode_to_air.season_number : 'none'}</p>
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <p className="rmdb-imdb-rating-number">Episode - {data.detail.last_episode_to_air ? data.detail.last_episode_to_air.episode_number : 'none'}</p>
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <p className="rmdb-imdb-rating-number">Name -{data.detail.last_episode_to_air ? data.detail.last_episode_to_air.name: 'none'}</p>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Container>
                        {/**/}
                            {/*    */}
                            <Container>
                                <div className="rmdb-description-container">
                                    <div className="rmdb-movieinfo-text">
                                        <Grid container spacing={3}>
                                            <Grid item xs={3} sm={2}>
                                                <Title title={'Next Episode'} variant={'h5'} color={'orange'}/>
                                            </Grid>
                                            <Grid item xs={3} sm={2}>
                                                <p className="rmdb-imdb-rating-number">{data.detail.next_episode_to_air ? data.detail.next_episode_to_air.air_date : 'none'}</p>
                                            </Grid>
                                            <Grid item xs={3} sm={2}>
                                                <p className="rmdb-imdb-rating-number">Season - {data.detail.next_episode_to_air ? data.detail.next_episode_to_air.season_number : 'none'}</p>
                                            </Grid>
                                            <Grid item xs={6} sm={2}>
                                                <p className="rmdb-imdb-rating-number">Episode - {data.detail.next_episode_to_air ? data.detail.next_episode_to_air.episode_number : 'none'}</p>
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <p className="rmdb-imdb-rating-number">Name - {data.detail.next_episode_to_air ? data.detail.next_episode_to_air.name: 'none'}</p>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Container>
                            {/**/}
                        </Grid>
                    </div>
                </Container>

            </div>
            <Container maxWidth='lg'>
                {/* Actors Title list of Actors */}
                <Title title={'Actors'} variant={'h4'} align={'center'} color={'black'}/>
                <SeasonActors actors={data.credits.cast}/>
            </Container>
            <Container maxWidth='lg'>
                {/* Actors Title list of Actors */}
                <Title title={'Crew'} variant={'h4'} align={'center'} color={'black'}/>
                <Actors actors={data.credits.crew}/>
            </Container>
            <Container maxWidth='lg'>
                <Title title={'Seasons'} variant={'h4'} align={'center'} color={'black'} />
                <SeasonList seasons={data.detail.seasons} />
            </Container>
        </React.Fragment>
    )
}