import React from 'react';

const Pagination = ({ todoPerPage, totalTodo, paginate}) => {
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
                           href="!#/todo"
                           className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Pagination;