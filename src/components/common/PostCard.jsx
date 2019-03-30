import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';

const PostCard = ({ content }) => {
    return (
        <li className="item  item--post">
            <Link to={content.node.fields.slug}>
                <article className="article  article--post  typeset">
                    <h3>{content.node.frontmatter.title}</h3>
                    <small className="small post-mata">{content.node.frontmatter.date}</small>
                    <p>
                        {content.node.excerpt}
                    </p>
                </article>
            </Link>
        </li>
    )
}

PostCard.propTypes = {
    content: PropTypes.shape({
        node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }).isRequired,
            fields: PropTypes.shape({
                slug: PropTypes.string.isRequired
            }).isRequired,
            excerpt: PropTypes.string.isRequired
        })
    })
}

export default PostCard