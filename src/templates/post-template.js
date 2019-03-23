import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostArticle from '../components/post-article'
import TableOfContents from '../components/table-of-contents'


const PostTemplate = ({ data }) => {
    const postInfo = data.markdownRemark
    const { html, frontmatter } = postInfo
    const { title } = frontmatter
    return (
        <Layout>
            <PostArticle html={html} />
            <TableOfContents title={title} />
        </Layout>
    )
}

export const query = graphql`
    query getMarkdownPost($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } } ) {
            frontmatter {
                title
            }
            html
        }
    }
`

export default PostTemplate