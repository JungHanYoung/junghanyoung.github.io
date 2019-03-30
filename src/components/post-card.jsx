import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


const PostCard = ({ title, category = "general", date = new Date().toUTCString(), excerpt, link }) => {
    return (
        <li className="item  item--post">
            <article className="article  article--post">
                <Link to={link}>
                    <h2>{title}</h2>
                </Link>
                <small className="small  post-meta">
                    <span className="label  label--category">
                        {category ?
                            <Link to={`/category/${category}`}>{category}</Link>
                            :
                            <Link to={`/category`}>general</Link>
                        }
                    </span>
                    &nbsp; &nbsp;
                        <span className="time">{date}</span>
                </small>
                <p>{excerpt}</p>
            </article>
        </li>
    )
}

PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    link: PropTypes.string.isRequired
}

export default PostCard