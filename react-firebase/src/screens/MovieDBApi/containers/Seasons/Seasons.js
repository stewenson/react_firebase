import React, {useState} from "react";
import Progress from "../../../../Components/Progress/Progress";
import Paginator from "../../../../Components/Pagination/Paginator";
import '../../../../Styles/TheMovieDBAPi/SeasonDescr.scss';
import Grid from "@material-ui/core/Grid";
import Title from "../../components/Title/Title";
import {SearchImage} from "../../../../Styles/TheMovieDBAPi/CarouselImg";
import {LineHorizontalBlack} from "../../../../Styles/TheMovieDBAPi/Line";

export default function Seasons(props) {
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(1);
    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;

    let totalData;
    if (props.seasons) {
        totalData = Object.keys(props.seasons).length;
    }

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    if (!props.seasons) return null;

    return (
        <React.Fragment>
            <Title title={'Seasons'} variant={'h5'} marginTop={'3%'} color={'black'}/>
            <LineHorizontalBlack />
            {props.seasons ? Object.entries(props.seasons)
                    .slice(indexOfFirstTodo, indexOfLastTodo)
                    .map(([key,season]) => (
                        season.poster_path ?
                            <Grid container spacing={2}  key={season.id} style={{ boxShadow: '10px 5px 20px #adb5bd', marginBottom: '10px'}}>
                                <Grid  item xs={5} sm={2}>
                                    <SearchImage src={`http://image.tmdb.org/t/p/w94_and_h141_bestv2${season.poster_path}`}/>
                                </Grid>
                                <Grid item xs={7} sm={10}>
                                    <Title title={season.name} variant={'h6'} />
                                    <Title title={season.overview} variant={'body2'} />
                                </Grid>
                            </Grid>
                            :
                            null
                    ))
                :
                <Progress/>
            }
            <Paginator
                count={totalData/todoPerPage}
                page={currentPage}
                changed={handleChange}
            />
        </React.Fragment>
    )
}