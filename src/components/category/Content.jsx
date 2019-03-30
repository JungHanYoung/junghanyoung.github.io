import React from 'react'
import PropTypes from 'prop-types'

// import PostCard from '../common/PostCard'
import PostCard from '../post-card'
import Pagination from '../common/Pagination';

const Content = ({ posts = [], title }) => {
    return (
        <div className="content typeset">
            <article className="article  article--page  typeset">
                <h2>{title}</h2>
            </article>
            <ul className="list  list--posts">
                {posts.map(post =>
                    <PostCard
                        key={post.id}
                        {...post}
                    />)}
            </ul>
            <Pagination />
        </div>
    )
}

Content.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        category: PropTypes.string,
        date: PropTypes.string,
        excerpt: PropTypes.string,
        link: PropTypes.string.isRequired
    })).isRequired,
    title: PropTypes.string
}

export default Content