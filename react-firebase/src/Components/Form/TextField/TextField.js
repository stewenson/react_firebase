import React from "react";
import TextField from "@material-ui/core/TextField";

const TextFields = (props) => {
    return (
        <TextField
            fullWidth
            error={props.error}
            helperText={props.helperText}
            id={props.id}
            name={props.name}
            type={props.type}
            label={props.label}
            onChange={props.changed}
            value={props.value}
        />
    );
};

export default TextFields;