import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Title(props) {
    return (
        <Typography  style={props.color ? {color: `${props.color}`} : {}}
            variant={props.variant}
                     align={props.align}
                     gutterBottom
        >
            {props.title} {props.date ? props.date : null}
        </Typography>
    )
}