import React from 'react'
import { Provider } from 'react-redux'
import { StaticQuery, graphql } from 'gatsby';
import { createStore } from 'redux';

function rootReducer(state, action) {
    switch (action.type) {
        default:
            return state
    }
}

const StoreContainer = ({ children, pageContext, data, location, ...otherProps }) => {
    console.log(data)
    return (
        <StaticQuery
            query={graphql`
                query {
                    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                        edges {
                            node {
                                id
                                frontmatter {
                                    title
                                    category
                                    date
                                }
                                excerpt(pruneLength: 70)
                            }
                        }
                    }
                }
            `}
            render={data => {
                const state = {
                    allPosts: data.allMarkdownRemark.edges,
                    pageInfo: {
                        pageContext,
                        data,
                        location
                    }
                }
                const store = createStore(rootReducer, state);
                return (
                    <Provider store={store}>
                        {children}
                    </Provider>
                )
            }}
        />
    )
}

export default StoreContainer