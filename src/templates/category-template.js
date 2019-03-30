import React from 'react'

import { PaginationContext, LocationContext } from '../context'

import Layout from '../components/category/Layout'
import Content from '../components/category/Content'
import { graphql } from 'gatsby';
import SEO from '../components/seo';


const CategoryTemplate = ({ pageContext, data, location }) => {

    const postsInCategory = data.allMarkdownRemark.edges.map(edge => ({
        id: edge.node.id,
        title: edge.node.frontmatter.title,
        category: edge.node.frontmatter.category,
        date: edge.node.frontmatter.date,
        excerpt: edge.node.excerpt,
        link: edge.node.fields.slug
    }))
    const { category, categories, numPages, currentPage } = pageContext

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = category ?
        currentPage - 1 === 1 ? `/category/${category}` : `/category/${category}/${currentPage - 1}`
        : currentPage - 1 === 1 ? `/category` : `/category/${currentPage - 1}`
    const nextPage = category ?
        `/category/${category}/${currentPage + 1}`
        : `/category/${currentPage + 1}`
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
                    categories={categories}
                >
                    <SEO title={`Devlog | Category${category ? ` - ${category}` : ''}`} />
                    <Content
                        posts={postsInCategory}
                        title={category || 'general'}
                    />
                </Layout>
            </PaginationContext.Provider>
        </LocationContext.Provider>
    )
}

export const query = graphql`
    query getPostsByCategory(
        $category: String
        $limit: Int!
        $skip: Int!
    ) {
        allMarkdownRemark(
            filter: { frontmatter: { category: {eq: $category}}}
            sort: { fields: [frontmatter___date], order: DESC}
            limit: $limit,
            skip: $skip
        ) {
            edges { 
                node{
                    id
                    frontmatter {
                        title
                        date
                    }
                    excerpt
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default CategoryTemplate