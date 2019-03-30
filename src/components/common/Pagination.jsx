import React from 'react'

import { PaginationContext } from '../../context'
import { Link } from 'gatsby';

const Pagination = () => {

    const {
        isFirst,
        isLast,
        prevPage,
        nextPage,
        currentPage,
        numPages
    } = React.useContext(PaginationContext)

    return (
        <nav className="nav  nav--paginator">
            {isFirst ?
                <span className="pagination  pagination--previous">Previous</span>
                : <Link to={prevPage} className="pagination  pagination--previous">Previous</Link>
            }
            <span className="pagination  pagination--counter">{`Page: ${currentPage} of ${numPages}`}</span>
            {isLast ?
                <span className="pagination  pagination--next">Next</span>
                : <Link to={nextPage} className="pagination  pagination--next">Next</Link>
            }
        </nav>
    )
}

export default Pagination