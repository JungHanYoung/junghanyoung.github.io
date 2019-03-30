import { createSelector } from 'reselect'

const visiblePostsSelector = state => {
    // console.log(state.pageInfo.data.allMarkdownRemark.edges)
    return state.pageInfo.data.allMarkdownRemark.edges
}

export const reVisiblePostsSelector = createSelector(
    visiblePostsSelector,
    (edges) => edges.map(edge => edge.node)
)

export const getAllPosts = createSelector(
    edges => {
        // console.log(edges)
        edges.map(edge => edge.node)
    }
)