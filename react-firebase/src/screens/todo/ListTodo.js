import React, {useContext, useState} from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import {CompleteTodoAction} from "./actions/completeTodoAction";
import {useDispatch} from "react-redux";
import {AuthContext} from "../Auth/Auth/Auth";
import {deleteTodoAction} from "./actions/deleteTodoAction";
import Paginator from "../../Components/Pagination/Paginator";
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from "@material-ui/core/Typography";
import AboutTodo from "./AboutTodo";

export default function ListTodo(props) {
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);
    // Buttons
    const [complete, setComplete] = useState('');
    const [uncomplete, setUncomplete] = useState(true);
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(10);
    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    // Conver ms to date
    const convertDate = (seconds) => {
        let myDate = new Date( seconds *1000);
        return myDate.toLocaleString();
    };


    let fetchData;
    if (complete){
        fetchData = props.getComplete;
    } else if (uncomplete) {
        fetchData = props.getAll;
    }

    return (
        <React.Fragment>
            <Typography align="center" variant="h5">
            <Button
                style={{marginLeft: '10px', marginTop: '10px'}}
                variant="outlined"
                color="secondary"
                onClick={() => [
                    setComplete(false),
                    setUncomplete(true)
                ]}>
                Uncomplete
            </Button>
            <Button
                style={{marginLeft: '10px', marginTop: '10px'}}
                variant="outlined"
                color="primary"
                onClick={() => [
                    setComplete(true),
                    setUncomplete(false)
                ]}>
                Complete
            </Button>
                <AboutTodo />
                <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Todo</TableCell>
                            <TableCell>Complete</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(fetchData)
                        .slice(indexOfFirstTodo, indexOfLastTodo)
                        .map(([key, data]) => (
                        <TableRow key={data.id}>
                            <TableCell>{convertDate(data.created.seconds)}</TableCell>
                            <TableCell>{data.todo}</TableCell>
                            <TableCell>
                                <ListItemIcon onClick={() => dispatch(CompleteTodoAction([data.id, data.todo, currentUser.uid]))}>
                                    <StarIcon style={{ color: data.complete ? 'gold' : 'grey'}}/>
                                </ListItemIcon>
                            </TableCell>
                            <TableCell>
                                <ListItemIcon onClick={() => dispatch(deleteTodoAction(data.id))}>
                                    <DeleteIcon style={{ color: "red"}}/>
                                </ListItemIcon>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Paginator
                count={fetchData.length/todoPerPage}
                page={currentPage}
                changed={handleChange}
            />
            </Typography>
        </React.Fragment>
    )
}
