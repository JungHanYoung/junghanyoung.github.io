import React from 'react'
import { string } from 'prop-types'

import MyDisqus from './common/MyDisqus'

const PostArticle = ({ html, id, title }) => {
    return (
        <article className="article article--page content typeset">
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
            <MyDisqus
                id={id}
                title={title}
            />
        </article>
    )
}

PostArticle.propTypes = {
    html: string.isRequired
}

export default PostArticle