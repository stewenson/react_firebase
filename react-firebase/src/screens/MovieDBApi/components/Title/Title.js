import React from "react";
import Typography from "@material-ui/core/Typography";
import StarIcon from '@material-ui/icons/Star';

export default function Title(props) {
    return (
        <Typography  style={{ color: props.color ? props.color : '',
            paddingLeft: props.paddingLeft ? props.paddingLeft : '',
            marginTop: props.marginTop ? props.marginTop : '',
            paddingTop: props.paddingTop ? props.paddingTop : '',
            fontWeight: props.fontWeight ? props.fontWeight : '',
        }} variant={props.variant} align={props.align} gutterBottom
        >
            {props.voteverage ? <StarIcon/> : ''}
            {props.title ? props.title : props.voteverage}
            {props.date ? props.date : null}
        </Typography>
    )
}