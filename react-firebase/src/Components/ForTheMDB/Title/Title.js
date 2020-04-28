import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Title(props) {
    return (
        <Typography  variant={props.variant} align={props.align} gutterBottom>
            {props.title} {props.date ? props.date : null}
        </Typography>
    )
}