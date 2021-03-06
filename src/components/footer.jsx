import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    const author = data.site.siteMetadata.author
    return (
        <footer className="footer">
            <div className="container">
                <div className="copyright typeset">
                    <small className="small">© {new Date().getFullYear()}, Built with</small>
                </div>
                <nav className="nav  nav--footer">
                    <ul className="list list-nav">
                        <li className="item  item--nav">
                            {author}
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer