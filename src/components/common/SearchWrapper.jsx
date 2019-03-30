import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Search from './Search'

const SearchWrapper = () => {
    return (
        <StaticQuery
            query={graphql`
                query getAllPosts {
                    allMarkdownRemark {
                        edges {
                            node {
                                id
                                frontmatter {
                                    title
                                    category
                                }
                                excerpt(pruneLength: 70)
                                fields {
                                    slug
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                return <Search posts={data.allMarkdownRemark.edges} />
            }}
        />
    )
}

export default SearchWrapper