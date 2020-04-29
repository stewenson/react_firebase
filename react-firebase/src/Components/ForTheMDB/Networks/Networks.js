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

export default function Networks(props) {
    const classes = useStyles();
    return (
        <div className={classes.chip}>
            {props.networks ?
                Object.entries(props.networks).map(([key, networks]) => (
                    networks.logo_path ?
                            <img style={{ width: '10%'}} key={networks.id} src={`http://image.tmdb.org/t/p/w92/`+ networks.logo_path} alt={networks.name}/>
                            :
                            <Chip key={networks.id} size="medium" color="primary" label={networks.name} />
                    )
                )
                : null
            }
        </div>
    )
}