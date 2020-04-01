import React from 'react';
import '../../Styles/PaginationStyle/PaginationStyle.scss';

export default function Paginator ({ todoPerPage, totalTodo, paginate}, props)  {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalTodo / todoPerPage); i++) {
        pageNumber.push(i);
    }

    return (
             <nav className="NavPagination">
                 <ul className="pagination">
                     {pageNumber.map(number => (
                         <li key={number} className="page-item">
                             <a onClick={() => paginate(number)}
                                href={props.href}
                                className="page-link">
                                 {number}
                             </a>
                         </li>
                     ))}
                 </ul>
             </nav>
    )
};
