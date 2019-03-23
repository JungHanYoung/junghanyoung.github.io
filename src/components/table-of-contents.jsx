import React from 'react'
import PropTypes from 'prop-types'

const TableContents = ({ title = "Hello World" }) => {
    return (
        <aside className="aside typeset aside--right">
            <section className="section section--description">
                <h3>{title}</h3>
            </section>
        </aside>
    )
}

TableContents.propTypes = {
    title: PropTypes.string
}

export default TableContents