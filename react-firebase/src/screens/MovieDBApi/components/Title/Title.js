import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Title(props) {
    return (
        <Typography  style={{ color: props.color ? props.color : '',
            paddingLeft: props.paddingLeft ? props.paddingLeft : '',
            marginTop: props.marginTop ? props.marginTop : '',
            fontWeight: props.fontWeight ? props.fontWeight : ''
        }}
            variant={props.variant}
                     align={props.align}
        >
            {props.title} {props.date ? props.date : null}
        </Typography>
    )
}