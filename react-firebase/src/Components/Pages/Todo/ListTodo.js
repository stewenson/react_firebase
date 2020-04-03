import React from "react";
import ListData from "./ListData";
import '../../../Styles/TodoStyle/ListTodoStyle.scss';
import Typography from "@material-ui/core/Typography";
import FlashMessage from "react-flash-message";

export default function ListTodo(props) {

    return (
        <React.Fragment>
            <Typography component="h1" variant="h5">
                <FlashMessage duration={5000}>
                    <strong>{props.msg}</strong>
                </FlashMessage>
            </Typography>
            <Typography variant="h5">
                <ListData
                    data={props.data}
                />
            </Typography>
        </React.Fragment>

    )
};