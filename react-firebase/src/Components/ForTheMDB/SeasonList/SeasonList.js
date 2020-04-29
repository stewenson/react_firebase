import React, {useState} from "react";
import Progress from "../../Progress/Progress";
import {makeStyles} from "@material-ui/core/styles";
import Paginator from "../../Pagination/Paginator";
import '../../../Styles/TheMovieDBAPi/SeasonDescr.scss';
import Grid from "@material-ui/core/Grid";
import Title from "../Title/Title";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function SeasonList(props) {
    const classes = useStyles();
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

    return (
        <div className={classes.root}>
            {props.seasons ? Object.entries(props.seasons)
                    .slice(indexOfFirstTodo, indexOfLastTodo)
                    .map(([key,season]) => (
                        <Container key={season.id} className="Container" maxWidth="lg">
                            <div className={classes.root}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={2}>
                                        {season.poster_path ?
                                        <img style={{ width: '100%', height: 'auto'}} src={`http://image.tmdb.org/t/p/w154/` + season.poster_path} alt={season.name}/>
                                        :
                                        null}
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <Title title={season.name} variant={'h6'} />
                                        <Title title={season.overview} variant={'subtitle1'} />
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                ))
                :
                <Progress/>
            }
            <Paginator
                count={totalData/todoPerPage}
                page={currentPage}
                changed={handleChange}
            />
        </div>
    )
}
