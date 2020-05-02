import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
                /*  Redux Actions */
import {getDetailMovieAction} from "../../actions/getDetailMovieAction";
import {getCreditsAction} from "../../actions/getCreditsAction";
import {getVideoAction} from "../../actions/getVideoAction";
import {getTokenAction} from "../../actions/getTokenAction";
                /* Material-ui */
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
                /* Comoponents */
import Title from "../../components/Title/Title";
import MovieImage from "../../components/MovieImage/MovieImage";
import Actors from "../../components/Actors/Actors";
import {getReviewsAction} from "../../actions/getReviewsAction";
import {clearDetailAction} from "../../actions/clearDetailAction";
import {getCreditsSeasonAction} from "../../actions/getCreditsSeasonAction";
import Trailers from "../../components/Trailers/Trailers";
import ProductionCompanies from "../../components/ProductionCompanies/ProductionCompanies";
import ProductionCountries from "../../components/ProductionCountries/ProductionCountries";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import Progress from "../../../../Components/Progress/Progress";
import Networks from "../../components/Networks/Networks";
import SeasonList from "../../components/SeasonList/SeasonList";
import {TitleDate} from "../../components/TitleDate/TitleDate";
import {MovieInfo} from "../../components/MovieInfo/MovieInfo";
                        /* Styles */
import '../../../../Styles/TheMovieDBAPi/Background.scss';
                        /* Styled Components*/
import {MovieTitle} from '../../../../Styles/TheMovieDBAPi/MovieTitle';
import {ContainerLine, LineHorizontal, LineHorizontalBlack} from "../../../../Styles/TheMovieDBAPi/Line";

export default function DetailMovie() {
    const params = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.movieDbAPI);
    const imageUrl = `http://image.tmdb.org/t/p/original/` + data.detail.backdrop_path;

    useEffect(() => {
        try {
            dispatch(getDetailMovieAction(params.id, params.category))
            params.category === 'movie' ?
                dispatch(getCreditsAction(params.id))
                :
                dispatch(getCreditsSeasonAction(params.id))
            dispatch(getVideoAction(params.id, params.category))
            dispatch(getReviewsAction(params.id, params.category))
            dispatch(getTokenAction())
        } catch (e) {
          alert(e.message);
        }

    },[dispatch, params.id, params.category])

    // Unmounting
    useEffect(() => {
        return () => {
            dispatch(clearDetailAction())
        }
    },[dispatch])

    return (
        <React.Fragment>
            {data.detail ?
                <div>

                     {/*  Bckgroung image  */}
                    <div className="rmdb-movieinfo"
                         style={{
                             background: data.detail.backdrop_path
                                 ? `url(${imageUrl})`
                                 : <Progress />
                         }}>

                        {/*   Main container   */}
                        <Container>
                            <div className="rmdb-description-container">
                                <Grid container spacing={3} className="rmdb-movieinfo-content">
                                    {/*Movie image*/}
                                    <Grid item xs={12} sm={4} className="rmdb-movieinfo-thumb">
                                        {data.detail.poster_path ?
                                            <MovieImage image={data.detail.poster_path}/>
                                            :
                                            null
                                        }
                                    </Grid>

                                    {/*   Movie info Title, Overview   */}
                                    <Grid item xs={12} sm={8} className="rmdb-movieinfo-text">

                                        {/*  TitleDate component to get only year   */}
                                        <MovieTitle>
                                            {data.detail.title ? data.detail.title : data.detail.name}  {data.detail.release_date ? TitleDate(data.detail.release_date) : '' }
                                             { data.detail.first_air_date ? `${TitleDate(data.detail.first_air_date)} -` : ''}  { data.detail.last_air_date ? TitleDate(data.detail.last_air_date) : ''}
                                        </MovieTitle>
                                        <Title title={` “ ${data.detail.tagline ? data.detail.tagline : ''} „`} variant={'h5'} />
                                        <LineHorizontal />

                                        {/*   Movie info   */}
                                        <MovieInfo runtime={data.detail.runtime}
                                                   episodeRuntime={data.detail.episode_runtime}
                                                   voteAverage={data.detail.vote_average}
                                                   genres={data.detail.genres}
                                                   numOfSeasons={data.detail.number_of_seasons}
                                                   numberOfEpisodes={data.detail.number_of_episodes}
                                        />

                                        {/*   Overview    */}
                                        <Title title={'Overview'} variant={'h5'} color={'orange'} marginTop={'3%'}/>
                                        <Title title={data.detail.overview} variant={'h6'} />

                                        {/*   Trailers button container   */}
                                        <Container>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} sm={6}>
                                                    <Trailers videos={data} />
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container maxWidth='lg' className='rmdb-detail-container'>

                        {data.credits.cast ?
                            <>
                                {/*   Actors list   */}
                                <Title title={'Casts'} variant={'h5'} marginTop={'10px'} color={'black'}/>
                                <LineHorizontalBlack />
                                <Actors actors={data.credits.cast}/>

                                {/*   Crews list   */}
                                <Title title={'Crews'} variant={'h5'} marginTop={'10px'} color={'black'}/>
                                <LineHorizontalBlack />
                                <Actors actors={data.credits.crew}/>
                                <ContainerLine />
                            </>
                            :
                            ''
                        }

                        {/*   Detail   */}
                        <Title title={'Details'} variant={'h5'} marginTop={'3%'} color={'black'}/>
                        <LineHorizontalBlack />
                        <Grid container spacing={1}>
                            <Grid item md={12}>
                                <p className="rmdb-imdb-rating-number">
                                    <strong>Language: </strong>
                                    {data.detail.original_language}
                                </p>
                            </Grid>
                            <Grid item md={12}>
                                <p className="rmdb-imdb-rating-number">
                                    <strong>Released Date: </strong>
                                    {data.detail.release_date ? data.detail.release_date : data.detail.first_air_date}
                                </p>
                            </Grid>

                            {data.detail.production_countries ?
                                <Grid item md={12} >
                                    <p className="rmdb-imdb-rating-number">
                                        <strong>Filming Location: </strong>
                                    </p>
                                    <ProductionCountries countries={data.detail.production_countries}/>
                                </Grid>
                                :
                                ''
                            }
                            {data.detail.networks ?
                                <Grid item md={12} >
                                    <p className="rmdb-imdb-rating-number">
                                        <strong>Networks: </strong>
                                    </p>
                                    <Networks networks={data.detail.networks}/>
                                </Grid>
                                :
                                ''
                            }
                            <Grid item md={12} >
                                <p className="rmdb-imdb-rating-number">
                                    <strong>Filming Companies: </strong>
                                </p>
                                <ProductionCompanies companies={data.detail.production_companies}/>
                            </Grid>
                        </Grid>
                        <ContainerLine />

                        {data.detail.budget || data.detail.reneveue ?
                            <>
                                {/*   Box Office   */}
                                <Title title={'Box Office'} variant={'h5'} marginTop={'3%'} color={'black'}/>
                                <LineHorizontalBlack />
                                <Grid container spacing={1}>
                                    <Grid item md={12}>
                                        <p className="rmdb-imdb-rating-number">
                                            <strong>Budget: </strong>
                                            $ {data.detail.budget} (estimated)
                                        </p>
                                    </Grid>
                                    <Grid item md={12}>
                                        <p className="rmdb-imdb-rating-number">
                                            <strong>Revenue: </strong>
                                            $ {data.detail.revenue}
                                        </p>
                                    </Grid>
                                </Grid>
                                <ContainerLine />
                            </>
                            :
                            ''
                        }


                        {/*   Reviews List  */}
                        <Title title={'Reviews'} variant={'h5'} marginTop={'3%'} color={'black'}/>
                        <LineHorizontalBlack />
                        <ReviewsList reviews={data.reviews.results}/>
                        <ContainerLine />

                    {/*    Seasons list    */}
                        {data.detail.seasons ?
                            <>
                                <Title title={'Seasons'} variant={'h5'} marginTop={'3%'} color={'black'}/>
                                <LineHorizontalBlack />
                                <SeasonList seasons={data.detail.seasons} />
                                <ContainerLine />
                                </>
                            :
                            ''
                        }

                    </Container>
                </div>
            :
                <Progress />
            }
        </React.Fragment>
    )
}