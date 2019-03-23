import React from 'react'
import { string } from 'prop-types'

const PostArticle = ({ html }) => {
    return (
        <article className="article article--page content typeset">
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </article>
    )
}

PostArticle.propTypes = {
    html: string.isRequired
}

export default PostArticle