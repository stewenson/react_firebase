import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {SearchImage} from "../../../Styles/CarouselImg";
import {useDispatch} from "react-redux";
import {searchMovie} from "../../../actions/searchMovie";
import Paginator from "../../../../../Components/Pagination/Paginator";
import {Link} from "react-router-dom";
import Title from "../../../components/Title/Title";
import '../Styles/SearchMovie.scss';
import {clearError} from "../../../actions/ClearError";

export default function SearchResult(props) {
    const dispatch = useDispatch();
    const path = 'searchDetail';

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(20);
    const totalData = props.data.total_results;

    const handleChange = (event, value) => {
        setCurrentPage(value);
        dispatch(searchMovie(props.title, value))
        dispatch(clearError())
        window.scrollTo(0, 0);
    };

    if (!props.data.results) return null;
    if (props.data.results.length === 0) return <Title title={'No movies available for this name'} align={'center'} variant={'h3'} color={'red'} marginTop={'3%'}/>;

    return (
        <React.Fragment>
            {props.data.results.map(movie => (
                movie.poster_path ?
                    <Grid container spacing={2}  key={movie.id} style={{ boxShadow: '10px 5px 20px #adb5bd', marginBottom: '10px'}}>
                        <Grid  item xs={5} sm={2}>
                            <Link to={{pathname: `/tmdbapi/${path}/detail/${movie.media_type}/${movie.original_name ? movie.original_name : movie.original_title}/${movie.id}`, query: `/tmdbapi/${path}/detail`}}>
                                <SearchImage src={`http://image.tmdb.org/t/p/w94_and_h141_bestv2${movie.poster_path ? movie.poster_path : movie.profile_path}`}/>
                            </Link>
                        </Grid>
                        <Grid item xs={7} sm={10}>
                            <Title title={movie.original_title ? movie.original_title : movie.original_name} color={'black'} variant={'h5'} paddingTop={'16px'}/>
                            <Title title={movie.overview.slice(0, 250)} color={'black'} variant={'body2'} />
                            <Link to={{pathname: `/tmdbapi/${path}/detail/${movie.media_type}/${movie.original_name ? movie.original_name : movie.original_title}/${movie.id}`, query: `/tmdbapi/${path}/detail`}}>
                                <Title title={'...Read More'} color={'black'} variant={'body2'} align={'right'} paddingTop={'16px'}/>
                            </Link>
                        </Grid>
                    </Grid>
                    :
                    null
                ))
            }
            <Grid container spacing={1}>
                {props.data.results ?
                    <Paginator
                        count={totalData/todoPerPage}
                        page={currentPage}
                        changed={handleChange}
                    />
                    :
                    null
                }
            </Grid>
        </React.Fragment>
    )
}