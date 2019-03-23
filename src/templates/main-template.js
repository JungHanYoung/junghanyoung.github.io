import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostList from '../components/post-list'

const MainTemplate = ({ data }) => {

    const posts = data.allMarkdownRemark.edges
    return (
        <Layout>
            <PostList posts={posts} />
        </Layout>
    )
}

export const query = graphql`
    query allPostQuery {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 70)
                    frontmatter {
                        title
                        date(formatString: "YYYY년 MM월 DD일")
                        category
                        # thumbnail {
                        #     childImageSharp {
                        #         fixed(width: 265, height: 150) {
                        #             ...GatsbyImageSharpFixed
                        #         }
                        #     }
                        # }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default MainTemplate