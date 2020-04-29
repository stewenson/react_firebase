import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Progress from "../../Progress/Progress";
import GridList from "@material-ui/core/GridList";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '95%',
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    rootGridList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));

export default function SeasonActors(props) {
    const classes = useStyles();

    return (
        <GridList className={classes.root}>
            {props.actors ? Object.entries(props.actors).map(([key, actor]) => (
                    <GridListTile key={actor.id} className='Title'>
                        {actor.profile_path ?
                            <img src={`http://image.tmdb.org/t/p/w154/`+ actor.profile_path} alt={actor.name}/>
                            :
                            null
                        }
                        <GridListTileBar title={actor.name} />
                    </GridListTile>
                ))
                :
                <Progress/>
            }
        </GridList>
    )
}