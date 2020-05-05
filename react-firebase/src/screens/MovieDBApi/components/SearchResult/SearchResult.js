import React, {useState} from "react";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {CarouselImage} from "../../../../Styles/TheMovieDBAPi/CarouselImg";
import {useDispatch} from "react-redux";
import {searchAction} from "../../actions/searchAction";
import Paginator from "../../../../Components/Pagination/Paginator";
import Title from "../Title/Title";
import {Link} from "react-router-dom";

export default function SearchResult(props) {
    const dispatch = useDispatch();
    const path = 'searchDetail';

    console.log(props.data.results)
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(20);
    const totalData = props.data.total_results;

    const handleChange = (event, value) => {
        setCurrentPage(value);
        dispatch(searchAction(props.title, value))
        window.scrollTo(0, 0);
    };

    return (
        <Container maxWidth='lg'>
                <Grid container spacing={1}>
                    {props.data.results ?
                        props.data.results.map(movie => (
                            <Grid style={{ width: '50%', height: '50%'}} key={movie.id} item  xs={4} sm={3} md={2}>
                                <Link to={{pathname: `/tmdbapi/${path}/detail/${movie.media_type}/${movie.original_name ? movie.original_name : movie.original_title}/${movie.id}`, query: `/tmdbapi/${path}/detail`}}>
                                    {movie.poster_path ?
                                        <div>
                                            <CarouselImage src={`http://image.tmdb.org/t/p/w92${movie.poster_path ? movie.poster_path : movie.profile_path}`}/>
                                        </div>
                                        :
                                        <div className='WithoutImage'>
                                            <Title title={movie.original_title}
                                                   variant={'h6'}
                                                   paddingLeft={'25%'}
                                                   marginTop={'50%'}
                                                   fontWeight={'900'}
                                            />
                                        </div>
                                    }
                                </Link>
                            </Grid>
                        ))
                        :
                        null
                    }
                </Grid>

            <Grid container spacing={1}>
                {props.data.results ?
                    <Paginator
                        count={totalData/todoPerPage}
                        page={currentPage}
                        changed={handleChange}
                    />
                    :
                    ''
                }
            </Grid>

        </Container>
    )
}