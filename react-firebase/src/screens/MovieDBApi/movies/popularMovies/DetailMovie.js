import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getDetailMovieAction} from "../../actions/getDetailMovieAction";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import {getCreditsAction} from "../../actions/getCreditsAction";
import Title from "../../../../Components/ForTheMDB/Title/Title";
import MovieImage from "../../../../Components/ForTheMDB/MovieImage/MovieImage";
import Actors from "../../../../Components/ForTheMDB/Actors/Actors";
import {MovieTitle} from '../../../../Styles/TheMovieDBAPi/MovieTitle';
import {getVideoAction} from "../../actions/getVideoAction";
import {getTokenAction} from "../../actions/getTokenAction";
import '../../../../Styles/TheMovieDBAPi/Background.scss';
import Trailers from "../Trailers";

export default function DetailMovie() {
    const params = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.movieDbAPI);

    useEffect(() => {
        try {
            dispatch(getDetailMovieAction(params.id))
            dispatch(getCreditsAction(params.id))
            dispatch(getVideoAction(params.id))
            dispatch(getTokenAction())
        } catch (e) {
          alert(e.message);
        }

    },[dispatch, params.id])

    // convert date and get only year
    const convertDate = (date) => {
        let fullDate = new Date(date);
        return fullDate.getFullYear() // 2019
    };

    const imageUrl = `http://image.tmdb.org/t/p/original/` + data.detail.backdrop_path;

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
                                   {data.detail.title} {convertDate(data.detail.release_date)}
                                   {/*<Title title={data.detail.title} variant={'h4'} date={convertDate(data.detail.release_date)} align={'left'} />*/}
                               </MovieTitle>
                               {/*Movie Description tagline*/}
                               <Title title={'“' + data.detail.tagline + '„'} variant={'h5'} align={'center'}/>
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
                                           <Grid item xs={6} sm={3}>
                                               <Title title={'Runtime'} variant={'h5'} color={'orange'}/>
                                               <p className="rmdb-imdb-rating-number">{data.detail.runtime} min</p>
                                           </Grid>
                                           <Grid item xs={6} sm={3}>
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
                           </Grid>
                       </Grid>
                    </div>
                </Container>
            </div>
            <Container maxWidth='lg'>
                {/* Actors Title list of Actors */}
                <Title title={'Actors'} variant={'h4'} align={'center'} color={'black'}/>
                <Actors actors={data.credits.cast}/>
            </Container>
            <Container maxWidth='lg'>
                {/* Actors Title list of Actors */}
                <Title title={'Crew'} variant={'h4'} align={'center'} color={'black'}/>
                <Actors actors={data.credits.crew}/>
            </Container>
        </React.Fragment>
    )
}