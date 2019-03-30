import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostArticle from '../components/post-article'
import TableOfContents from '../components/table-of-contents'


const PostTemplate = ({ data, pageContext }) => {
    const postInfo = data.markdownRemark
    const { html, frontmatter, headings, id } = postInfo
    const { title } = frontmatter

    const { previous, next } = pageContext

    return (
        <Layout>
            <PostArticle
                html={html}
                id={id}
                title={title}
            />
            <TableOfContents
                title={title}
                previous={previous}
                next={next}
                headings={headings}
            />
        </Layout>
    )
}

export const query = graphql`
    query getMarkdownPost($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } } ) {
            id
            frontmatter {
                title
            }
            html
            headings {
                value
                depth
            }
        }
    }
`

export default PostTemplate