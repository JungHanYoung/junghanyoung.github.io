import React from 'react'
import { connect } from 'react-redux'

const Temp = ({ click, text, posts }) => {
    return (
        <>
            {posts.map(post => <div>{post.node.id}</div>)}
            <button onClick={click}>{text}</button>
        </>
    )
}

const mapStateToProps = state => ({
    posts: state.posts,
    text: state.text
})

const mapDispatchToProps = dispatch => ({
    click: () => dispatch({ type: 'TEST' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Temp)