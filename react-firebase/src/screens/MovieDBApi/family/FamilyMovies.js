import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import '../../../Styles/TheMovieDBAPi/MovieList.scss';
import Progress from "../../../Components/Progress/Progress";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
    gridList: {
        width: '95%',
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}));

export default function FamilyMovies(props) {
    const classes = useStyles();
    const data = props.family.family.results

    return (
        <React.Fragment>
            <Typography style={{ paddingLeft: '3%'}} variant="h5" align='left' >
                Family Movies
            </Typography>
            <div className={classes.root}>
                <GridList className={classes.gridList}>
                    {data ? data.map((title) => (
                            <GridListTile key={title.id} className='Title' >
                                <Link to={{pathname: `/tmdbapi/detail/${title.original_title}/${title.id}`, query: "/tmdbapi/detail/"}}>
                                    <img src={`http://image.tmdb.org/t/p/w154/`+ title.poster_path} alt={title.original_title}/>
                                </Link>
                            </GridListTile>
                        ))
                        :
                        <Progress/>
                    }
                </GridList>
            </div>
        </React.Fragment>
    );
}
