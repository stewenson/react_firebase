import React from "react";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    chip: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function ListGenres(props) {
    const classes = useStyles();
    return (
        <div className={classes.chip}>
            {props.genres ?
                Object.entries(props.genres).map(([key, genre]) => (
                    <Chip key={genre.id} size="medium" label={genre.name} />
                    )
                )
                : null
            }
        </div>
    )
}