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

export default function ProductionCountries(props) {
    const classes = useStyles();

    return (
        <div className={classes.chip}>
            {props.countries ?
                Object.entries(props.countries).map(([key, countries]) => (
                    <Chip key={key} size="medium" color="primary" label={countries.iso_3166_1+ "-" + countries.name} />
                ))
                : null
            }
        </div>
    )
}