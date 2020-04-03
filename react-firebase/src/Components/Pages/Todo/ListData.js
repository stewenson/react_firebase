import React, {useContext, useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from "@material-ui/core/ListItemText";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {CompleteTodo} from "../../../Redux/Actions/TodoActions/CompleteTodo";
import {useDispatch} from "react-redux";
import {AuthContext} from "../../Auth/Auth/Auth";
import {DeleteTodo} from "../../../Redux/Actions/TodoActions/DeleteTodo";
import '../../../Styles/TodoStyle/ListTodoStyle.scss';
import Paginator from "../../Pagination/Paginator";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ListData(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);
    const [all, setAll] = useState(true);
    const [complete, setComplete] = useState('');
    const [uncomplete, setUncomplete] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(10);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    const isComplete = ([key, data]) => {
        dispatch(CompleteTodo([key, data, currentUser.uid]))
    };

    const deleteTodo = (id) => {
        dispatch(DeleteTodo(id))
    };

    const convertDate = (seconds) => {
        let myDate = new Date( seconds *1000);
        return myDate.toLocaleString();
    };

    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;

    let fetchData;
    if (props.data && all) {
        fetchData = (
            Object.entries(props.data)
                .slice(indexOfFirstTodo, indexOfLastTodo)
                .map(([key, data]) => (
                    <ListItem button key={data.id} >
                        <ListItemIcon onClick={() => isComplete([data.id, data.todo])}>
                            <StarIcon style={{ color: data.complete ? 'gold' : 'grey'}}/>
                        </ListItemIcon>
                        <ListItemText primary={convertDate(data.created.seconds)}/>
                        <ListItemText primary={data.todo}/>
                        <ListItemIcon onClick={() => deleteTodo(data.id)}>
                            <DeleteIcon style={{ color: "red"}}/>
                        </ListItemIcon>
                    </ListItem>
                ))
        )
    } else if (props.data && complete) {
        fetchData = (
            Object.entries(props.data)
                .filter(([key, value]) => value.complete === true )
                .slice(indexOfFirstTodo, indexOfLastTodo)
                .map(([key, data]) => (
                    <ListItem button key={data.id} >
                        <ListItemIcon onClick={() => isComplete([data.id, data.todo])}>
                            <StarIcon style={{ color: data.complete ? 'gold' : 'grey'}}/>
                        </ListItemIcon>
                        <ListItemText primary={convertDate(data.created.seconds)}/>
                        <ListItemText primary={data.todo}/>
                        <ListItemIcon onClick={() => deleteTodo(data.id)}>
                            <DeleteIcon style={{ color: "red"}}/>
                        </ListItemIcon>
                    </ListItem>
                ))
        )
    } else if (props.data && uncomplete) {
        fetchData = (
            Object.entries(props.data)
                .filter(([key, value]) => value.complete === false )
                .slice(indexOfFirstTodo, indexOfLastTodo)
                .map(([key, data]) => (
                    <ListItem button key={data.id} >
                        <ListItemIcon onClick={() => isComplete([data.id, data.todo])}>
                            <StarIcon style={{ color: data.complete ? 'gold' : 'grey'}}/>
                        </ListItemIcon>
                        <ListItemText primary={convertDate(data.created.seconds)}/>
                        <ListItemText primary={data.todo}/>
                        <ListItemIcon onClick={() => deleteTodo(data.id)}>
                            <DeleteIcon style={{ color: "red"}}/>
                        </ListItemIcon>
                    </ListItem>
                ))
        )
    } else if (!props.data) {
        fetchData = (
            <h5>Not data</h5>
        )
    }
    
    return (
        <React.Fragment>
        <div className="ListTodo">
            <div className={classes.root}>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button onClick={() => [
                        setComplete(false),
                        setAll(false),
                        setUncomplete(true)
                    ]}>
                        Uncomplete
                    </Button>
                    <Button onClick={() => [
                        setComplete(true),
                        setAll(false),
                        setUncomplete(false)
                    ]}>
                        Complete
                    </Button>
                </ButtonGroup>
            </div>
            <List component="nav" aria-label="contacts">
                {fetchData}
            </List>
        </div>
            <div>
                <Paginator
                    count={parseInt((fetchData.length/todoPerPage)+1)}
                    page={currentPage}
                    changed={handleChange}
                />
            </div>
        </React.Fragment>
    )

}