import { connect } from 'react-redux'

import Search from '../components/common/Search'
import { getAllPosts } from './selectors/post';

const mapStateToProps = state => ({
    posts: getAllPosts(state)
})

const mapDispatchToProps = dispatch => ({
    searchPostsByKeyword: (keyword) => dispatch({ type: 'SEARCH_POST_REQUEST', keyword })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)