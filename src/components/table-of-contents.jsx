import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';

const TableContents = ({ title = "Hello World", previous, next, headings }) => {
    // console.log(previous)
    // console.log(next)

    return (
        <aside className="aside typeset aside--right">
            <section className="section section--description">
                <h3>{title}</h3>
                <ul className="list">
                    {headings.map(head => {
                        const replaceHead =
                            head.value.trim()
                                .replace('(', '')
                                .replace(')', '')
                                .replace('.', '')
                                .replace(',', '')
                                .split(' ').join('-')
                        return <li style={{ paddingLeft: `${15 * (head.depth - 1)}px`, fontSize: '1rem' }}
                            key={`heading__${replaceHead}`}><a href={`#${replaceHead.toLowerCase()}`}>&rsaquo;&nbsp;{head.value}</a></li>
                    })}
                </ul>
                <nav className="nav  nav--paginator">
                    {previous ?
                        <Link
                            className="pagination  pagination--previous"
                            to={previous.node.fields.slug}>{previous.node.frontmatter.title}</Link>
                        : <span className="pagination  pagination--previous"></span>}
                    {next ?
                        <Link
                            className="pagination  pagination--next"
                            to={next.node.fields.slug}>{next.node.frontmatter.title}</Link>
                        : <span className="pagination  pagination--next"></span>}
                </nav>
            </section>
            {/* <section className="">
                {previous && previous.node.fields.slug}{' '}{next && next.node.fields.slug}
            </section> */}
        </aside>
    )
}

TableContents.propTypes = {
    title: PropTypes.string,
    previous: PropTypes.shape({

    }),
    next: PropTypes.shape({})
}

export default TableContents