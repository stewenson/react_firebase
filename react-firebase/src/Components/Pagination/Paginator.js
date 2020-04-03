// import React from 'react';
// import '../../Styles/PaginationStyle/PaginationStyle.scss';
// export default function Paginator ({ todoPerPage, totalTodo, paginate}, props)  {
//     const pageNumber = [];
//
//     for (let i = 1; i <= Math.ceil(totalTodo / todoPerPage); i++) {
//         pageNumber.push(i);
//     }
//
//     return (
//         <nav className="NavPagination">
//             <ul className="pagination">
//                 {pageNumber.map(number => (
//                     <li key={number} className="page-item">
//                         <a onClick={() => paginate(number)}
//                            className="page-link">
//                             {number}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// };
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Paginator(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination
                count={props.count}
                page={props.page}
                onChange={props.changed}
                color="secondary"
            />
        </div>
    );
}