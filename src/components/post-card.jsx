import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


const PostCard = ({ title, category = "general", date = new Date().toUTCString(), excerpt, slug }) => {
    return (
        <li className="item  item--post">
            <Link to={slug}>
                <article className="article  article--post">
                    <h2>{title}</h2>
                    <small className="small  post-meta">
                        <span class="label  label--category">
                            <a href="/categories/#general">{category}</a>
                        </span>
                        &nbsp; &nbsp;
                        <span className="time">{date}</span>
                    </small>
                    <p>{excerpt}</p>
                </article>
            </Link>
        </li>
    )
}

PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    slug: PropTypes.string.isRequired
}

export default PostCard