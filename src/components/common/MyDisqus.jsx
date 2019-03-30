import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { StaticQuery, graphql } from 'gatsby';


const MyDisqus = ({ id, title }) => {
    return (
        <StaticQuery
            query={
                graphql`
                    query {
                        site {
                            siteMetadata {
                                disqus {
                                    disqusShortname
                                }
                            }
                        }
                    }
                `
            }
            render={data => {
                const shortname = data.site.siteMetadata.disqus.disqusShortname
                const config = {
                    identifier: id,
                    title
                }
                return <DiscussionEmbed
                    shortname={shortname}
                    config={config}
                >{data}</DiscussionEmbed>
            }}
        />
    )
}

export default MyDisqus