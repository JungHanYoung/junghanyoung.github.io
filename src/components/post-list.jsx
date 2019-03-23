import React from 'react'
import PropTypes from 'prop-types'

import PostCard from './post-card'

const PostList = ({ posts }) => {
    return (
        <div className="content">
            <article className="article article--page  typeset">
                <h1>All Posts</h1>
            </article>
            <section className="section  typeset">
                <ul className="list  list--posts">
                    {posts.map(({ node }) =>
                        <PostCard
                            title={node.frontmatter.title}
                            date={node.frontmatter.date}
                            category={node.frontmatter.category}
                            excerpt={node.excerpt}
                            slug={node.fields.slug}
                        />)
                    }
                </ul>
            </section>
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.array
}

export default PostList