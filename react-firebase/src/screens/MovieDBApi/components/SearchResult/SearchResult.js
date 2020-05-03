import React, {useState} from "react";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {CarouselImage} from "../../../../Styles/TheMovieDBAPi/CarouselImg";
import {useDispatch} from "react-redux";
import {searchAction} from "../../actions/searchAction";
import Paginator from "../../../../Components/Pagination/Paginator";
import Title from "../Title/Title";

export default function SearchResult(props) {
    const dispatch = useDispatch();

    console.log(props.data.results)
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(20);
    const totalData = props.data.total_results;

    const handleChange = (event, value) => {
        setCurrentPage(value);
        dispatch(searchAction(props.title, value))
        // window.scrollTo(0, 0);
    };

    return (
        <Container maxWidth='xl'>
            <div>
                <Grid container spacing={3}>
                    {props.data.results ?
                        props.data.results.map(movie => (
                            <Grid key={movie.id} item xs={12} md={2} sm={4}>
                                {movie.poster_path ?
                                    <CarouselImage src={`http://image.tmdb.org/t/p/w220_and_h330_face/` + movie.poster_path}/>
                                    :
                                    <Title title={movie.original_title}
                                           variant={'h6'}
                                           paddingLeft={'25%'}
                                           marginTop={'50%'}
                                           fontWeight={'900'}
                                    />
                                }
                            </Grid>
                        ))
                        :
                        null
                    }
                </Grid>
                <Paginator
                    count={totalData/todoPerPage}
                    page={currentPage}
                    changed={handleChange}
                />
            </div>
        </Container>
    )
}