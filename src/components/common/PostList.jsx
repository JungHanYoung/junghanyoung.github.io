import React from 'react'
import PropTypes from 'prop-types'
import PostCard from '../post-card';
import Pagination from './Pagination';

const propTypes = {
    children: PropTypes.node,
    posts: PropTypes.arrayOf(
        PropTypes.shape({})
    ),
    title: PropTypes.string
}


const PostList = ({ posts = [], title = "POST LIST" }) => {
    return (
        <div
            className="content typeset"
        >
            <article className="article  article--page  typeset">
                <h2>{title}</h2>
            </article>
            <ul className="list  list--posts">
                {posts.map(post =>
                    <PostCard
                        key={post.id}
                        {...post}
                    />
                )}
            </ul>
            <Pagination />
        </div>
    )
}

PostList.propTypes = propTypes

export default PostList