import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/common/Layout'
import PostList from '../components/common/PostList'
import { PaginationContext, LocationContext } from '../context';
// import PostList from '../components/post-list'

// index.html
const MainTemplate = ({ data, pageContext, location }) => {


    const allPosts = data.allMarkdownRemark.edges.map(edge => ({
        id: edge.node.id,
        title: edge.node.frontmatter.title,
        category: edge.node.frontmatter.category,
        date: edge.node.frontmatter.date,
        excerpt: edge.node.excerpt,
        link: edge.node.fields.slug
    }))

    const {
        numPages,
        currentPage
    } = pageContext

    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/` : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`
    const paginationInfo = {
        isFirst,
        isLast,
        prevPage,
        nextPage,
        currentPage,
        numPages
    }

    return (
        <LocationContext.Provider value={location}>
            <PaginationContext.Provider value={paginationInfo}>
                <Layout
                    isHome
                    allPosts={allPosts}
                >
                    <PostList
                        posts={allPosts}
                        title="All Posts"
                    />
                </Layout>
            </PaginationContext.Provider>
        </LocationContext.Provider>
    )
}

export const query = graphql`
    query allPostQuery(
        $limit: Int!
        $skip: Int!
    ) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit,
            skip: $skip    
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 140)
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