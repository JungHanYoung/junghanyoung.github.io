import React from 'react'
import { connect } from 'react-redux'

import PostCard from '../components/post-card'
import { reVisiblePostsSelector } from './selectors/post';

const PostList = ({ posts }) => {
    return (
        <div className="content">
            <article className="article article--page  typeset">
                <h1>All Posts</h1>
            </article>
            <section className="section  typeset">
                <ul className="list  list--posts">
                    {posts.map(({ id, frontmatter, excerpt, fields }) =>
                        <PostCard
                            key={id}
                            title={frontmatter.title}
                            date={frontmatter.date}
                            category={frontmatter.category}
                            excerpt={excerpt}
                            slug={fields.slug}
                        />)
                    }
                </ul>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.pageInfo.data.allMarkdownRemark.edges)
    return {
        posts: reVisiblePostsSelector(state)
    }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)