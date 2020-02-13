import React from "react";
import Button from '@material-ui/core/Button';

const ButtonComponents = (props) => {
    return (
        <Button
            style={props.style}
            onClick={props.clicked}
            color={props.color}
            variant={props.variant}
        >
            {props.text}
        </Button>
    );
};
export default ButtonComponents;