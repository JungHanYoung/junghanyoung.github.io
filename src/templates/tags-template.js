import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// component
import Layout from '../components/common/Layout'
import PostList from '../components/common/PostList'

import { PaginationContext, LocationContext } from '../context';
import SEO from '../components/seo';


const propTypes = {
    data: PropTypes.shape({}),
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({})
};


const TagTemplate = ({ data, pageContext, location }) => {

    const postsInTag = data.allMarkdownRemark.edges.map(edge => ({
        id: edge.node.id,
        title: edge.node.frontmatter.title,
        category: edge.node.frontmatter.category,
        date: edge.node.frontmatter.date,
        excerpt: edge.node.excerpt,
        link: edge.node.fields.slug
    }))
    const {
        tag,
        numPages,
        currentPage
    } = pageContext

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/tags/${tag}` : `/tags/${tag}/${currentPage - 1}`
    const nextPage = `/tags/${tag}/${currentPage + 1}`

    const paginationInfo = {
        isFirst,
        isLast,
        prevPage,
        nextPage,
        currentPage,
        numPages
    }

    console.log('numPages', numPages)

    return (
        <LocationContext.Provider value={location}>
            <PaginationContext.Provider value={paginationInfo}>
                <Layout>
                    <SEO title={`Devlog | Tag - ${tag}`} />
                    <PostList
                        title={`Tag - ${tag}`}
                        posts={postsInTag}
                    />
                </Layout>
            </PaginationContext.Provider>
        </LocationContext.Provider>
    );
};

export const query = graphql`
query(
    $tag: String
    $limit: Int
    $skip: Int
) {
    allMarkdownRemark(
        limit: $limit
        skip: $skip
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
        edges {
            node {
                id
                fields {
                    slug
                }
                frontmatter {
                    title
                    date
                }
                excerpt
            }
        }
    }
}
`


TagTemplate.propTypes = propTypes;


export default TagTemplate;
