import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
/* Material-ui */
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
/*  Redux Actions */
import {getDetailMovie} from "../../actions/getDetailMovie";
import {getCredits} from "../../actions/getCredits";
import {getVideo} from "../../actions/getVideo";
import {getTokenAction} from "../../actions/getTokenAction";
import {getReviews} from "../../actions/getReviews";
import {clearDetail} from "../../actions/clearDetail";
import {getCreditsSeason} from "../../actions/getCreditsSeason";
import {getRecommendation} from "../../actions/getRecommendation";
/* Comoponents */
import Title from "../../components/Title/Title";
import MovieImage from "../../components/MovieImage/MovieImage";
import Trailers from "../../components/Trailers/Trailers";
import {TitleDate} from "../../components/TitleDate/TitleDate";
/* Containers */
import {Reviews} from "../../containers/Reviews/Reviews";
import Seasons from "../../containers/Seasons/Seasons";
import {MovieInfo} from "../../containers/MovieInfo/MovieInfo";
import {Recommendatios} from "../../containers/Recommendation/Recommendation";
import {Credits} from "../../containers/Credits/Credits";
import {BoxOffice} from "../../containers/BoxOffice/BoxOffice";
import {Detail} from "../../containers/Detail/Detail";
                        /* Styles */
import '../../Styles/Background.scss';
                        /* Styled Components*/
import {MovieTitle} from '../../Styles/MovieTitle';
import {LineHorizontal} from "../../Styles/Line";
import {LastEpisode} from "../../containers/LastEpisode/LastEpisode";

export default function DetailMovie() {
    const params = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.movieDbAPI);
    const [loading, setLoading] = useState(true);
    const imageUrl = `http://image.tmdb.org/t/p/original/` + data.detail.backdrop_path;


    useEffect(() => {
        const loadData = () => {
            dispatch(getDetailMovie(params.id, params.category))
            params.category === 'movie' ?
                dispatch(getCredits(params.id))
                :
                dispatch(getCreditsSeason(params.id))
            dispatch(getVideo(params.id, params.category))
            dispatch(getReviews(params.id, params.category))
            dispatch(getRecommendation(params.id, params.category))
            dispatch(getTokenAction())
            setLoading(false);
        };
        loadData();
    }, [dispatch, params.id, params.category, loading])

    // Unmounting
    useEffect(() => {
        return () => {
            setLoading(true)
            dispatch(clearDetail())
        }
    }, [dispatch, loading])

    if (loading) return null;

    return (
        <React.Fragment>
            <div>
                {/*  Bckgroung image  */}
                <div className="rmdb-movieinfo"
                     style={{
                         background: data.detail.backdrop_path
                             ? `url(${imageUrl})`
                             : null
                     }}>

                    {/*   Main container   */}
                    <Container>
                        <div className="rmdb-description-container">
                            <Grid container spacing={3} className="rmdb-movieinfo-content">
                                {/*Movie image*/}
                                <Grid item xs={12} sm={4} className="rmdb-movieinfo-thumb">
                                    {data.detail.poster_path ?
                                        <MovieImage autofocud image={data.detail.poster_path}/>
                                        :
                                        null
                                    }
                                </Grid>

                                {/*   Movie info Title, Overview   */}
                                <Grid item xs={12} sm={8} className="rmdb-movieinfo-text">

                                    {/*  TitleDate component to get only year   */}
                                    <MovieTitle>
                                        {data.detail.title ? data.detail.title : data.detail.name} {data.detail.release_date ? TitleDate(data.detail.release_date) : ''}
                                        {data.detail.first_air_date ? `${TitleDate(data.detail.first_air_date)} -` : ''} {data.detail.last_air_date ? TitleDate(data.detail.last_air_date) : ''}
                                    </MovieTitle>
                                    <Title title={`${data.detail.tagline ? '“' + data.detail.tagline + '„' : ''} `}
                                           variant={'h6'}/>
                                    <LineHorizontal/>

                                    {/*   Movie info   */}
                                    <MovieInfo runtime={data.detail.runtime}
                                               episodeRuntime={data.detail.episode_runtime}
                                               voteAverage={data.detail.vote_average}
                                               genres={data.detail.genres}
                                               numOfSeasons={data.detail.number_of_seasons}
                                               numberOfEpisodes={data.detail.number_of_episodes}
                                    />

                                    {/*   Overview    */}
                                    <Title title={'Overview'} variant={'h6'} color={'orange'} marginTop={'3%'}/>
                                    <Title title={data.detail.overview} variant={'body1'}/>

                                    {/*   Trailers button container   */}
                                    <Container>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <Trailers videos={data}/>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                {/* Detail */}
                <Container maxWidth='md' className='rmdb-detail-container'>
                    {/*List Of actors*/}
                    <Credits title={'Casts'} casts={data.credits.cast}/>

                    {/* List of crews*/}
                    <Credits title={'Crews'} casts={data.credits.crew}/>

                    {/*   Detail  Container */}
                    <Detail langueage={data.detail.original_language}
                            languageSeries={data.detail.languages}
                            releaseDate={data.detail.release_date}
                            firstAirDate={data.detail.first_air_date}
                            countries={data.detail.production_countries}
                            companies={data.detail.production_companies}
                            networks={data.detail.networks}
                    />

                    {/* Box Office Container*/}
                    <BoxOffice budget={data.detail.budget}
                               revenue={data.detail.revenue}
                    />

                    {/* Last Episode*/}
                    {data.detail.last_episode_to_air ?
                        <LastEpisode
                            airDate={data.detail.last_episode_to_air.air_date}
                            seasonNumber={data.detail.last_episode_to_air.season_number}
                            episodeNumber={data.detail.last_episode_to_air.episode_number}
                            name={data.detail.last_episode_to_air.name}
                            overview={data.detail.last_episode_to_air.overview}
                            img={data.detail.last_episode_to_air.still_path}
                        />
                        :
                        null
                    }


                    {/* Recommendaton container*/}
                    <Recommendatios data={data.recommendations.results} category={params.category}/>

                    {/* Reviews Container*/}
                    <Reviews reviews={data.reviews.results}/>

                    {/*    Seasons list    */}
                    <Seasons seasons={data.detail.seasons}/>

                </Container>
            </div>
        </React.Fragment>
    )
}