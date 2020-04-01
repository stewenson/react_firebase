import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddTodoForm from "../Todo/Form/AddTodoForm";


export default function Chart() {


    return (
        <React.Fragment>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                <AddTodoForm />
            </Typography>

        </React.Fragment>
    );
}